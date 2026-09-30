#!/usr/bin/env python3
"""Mirror public main and its verified APK; never execute repository content."""
import argparse
import hashlib
import io
import json
import os
from pathlib import Path
import re
import tempfile
import urllib.request
import zipfile

REPO = "zyfeleven/smartKitchen-website"
ORIGIN = "https://8.217.241.184"
ROOT_FILES = {"index.html", "privacy.html", "support.html", "styles.css", "legal.css", "script.js", "release.json"}
ASSET_NAME = re.compile(r"mise-v\d+\.\d+\.\d+-build\d+-[a-z0-9-]+\.apk")


def fetch(url, limit):
    request = urllib.request.Request(url, headers={"User-Agent": "Mise-Public-Site-Mirror/1"})
    with urllib.request.urlopen(request, timeout=90) as response:
        data = response.read(limit + 1)
    if len(data) > limit:
        raise ValueError("Download exceeds size limit")
    return data


def public_files(archive_bytes):
    files = {}
    with zipfile.ZipFile(io.BytesIO(archive_bytes)) as archive:
        total = 0
        for entry in archive.infolist():
            parts = entry.filename.split("/", 1)
            if len(parts) != 2:
                continue
            relative = parts[1]
            allowed = relative in ROOT_FILES or re.fullmatch(r"assets/[a-zA-Z0-9_-]+\.(png|svg|webp|jpg)", relative)
            if not allowed:
                continue
            if relative in files or entry.file_size > 10_000_000:
                raise ValueError("Invalid public asset")
            if (entry.external_attr >> 16) & 0o170000 == 0o120000:
                raise ValueError("Symlinks are not public assets")
            total += entry.file_size
            if total > 30_000_000:
                raise ValueError("Public site exceeds size limit")
            files[relative] = archive.read(entry)
    if not ROOT_FILES.issubset(files) or not any(p.startswith("assets/") for p in files):
        raise ValueError("Incomplete public site")
    return files


def validate_release(data):
    version, build = data["version"], data["build"]
    if not isinstance(version, str) or not re.fullmatch(r"\d+\.\d+\.\d+", version):
        raise ValueError("Invalid version")
    if type(build) is not int or build < 1:
        raise ValueError("Invalid build")
    tag = f"android-v{version}-build{build}"
    prefix = f"https://github.com/{REPO}/releases/download/{tag}/"
    url = data["apkUrl"]
    if not isinstance(url, str) or not url.startswith(prefix):
        raise ValueError("APK is outside the approved repository release")
    filename = url[len(prefix):]
    if not ASSET_NAME.fullmatch(filename) or not filename.startswith(f"mise-v{version}-build{build}-"):
        raise ValueError("Invalid APK filename")
    if data["releaseUrl"] != f"https://github.com/{REPO}/releases/tag/{tag}":
        raise ValueError("Invalid release URL")
    if type(data["sizeBytes"]) is not int or not 0 < data["sizeBytes"] < 150_000_000:
        raise ValueError("Invalid APK size")
    if not re.fullmatch(r"[0-9a-f]{64}", data["sha256"]):
        raise ValueError("Invalid APK digest")
    if not all(isinstance(data["releaseNotes"][lang], str) for lang in ("zh", "en")):
        raise ValueError("Missing release notes")
    return filename


def verify_apk(data, release):
    if len(data) != release["sizeBytes"] or hashlib.sha256(data).hexdigest() != release["sha256"]:
        raise ValueError("APK size or SHA-256 mismatch; current website remains unchanged")


def publish(root, commit, files, download=fetch):
    if not re.fullmatch(r"[0-9a-f]{40}", commit):
        raise ValueError("Invalid source commit")
    release = json.loads(files["release.json"])
    filename = validate_release(release)
    root.mkdir(parents=True, exist_ok=True)
    downloads = root / "downloads"
    downloads.mkdir(exist_ok=True)
    apk_path = downloads / filename
    apk = apk_path.read_bytes() if apk_path.exists() else download(release["apkUrl"], 150_000_000)
    verify_apk(apk, release)
    html = files["index.html"].decode("utf-8")
    if html.count(release["apkUrl"]) != 2:
        raise ValueError("Expected exactly two matching static download links")
    mirror_url = f"{ORIGIN}/mise-site/downloads/{filename}"
    html = html.replace(release["apkUrl"], mirror_url)
    html = html.replace("https://zyfeleven.github.io/smartKitchen-website/", f"{ORIGIN}/mise-site/")
    release["apkUrl"] = mirror_url
    files = dict(files)
    files["index.html"] = html.encode("utf-8")
    files["release.json"] = (json.dumps(release, ensure_ascii=False, indent=2) + "\n").encode("utf-8")
    # Stage all public files before switching the served directory. Old releases and APKs remain available.
    with tempfile.TemporaryDirectory(prefix=".stage-", dir=root) as temporary:
        stage = Path(temporary) / "site"
        stage.mkdir()
        stage.chmod(0o755)
        for relative, data in files.items():
            target = stage / relative
            target.parent.mkdir(parents=True, exist_ok=True)
            target.write_bytes(data)
            target.chmod(0o644)
        (stage / "source-commit.txt").write_text(commit + "\n", encoding="ascii")
        if not apk_path.exists():
            staged_apk = Path(temporary) / filename
            staged_apk.write_bytes(apk)
            staged_apk.chmod(0o644)
            os.replace(staged_apk, apk_path)
        releases = root / "releases"
        releases.mkdir(exist_ok=True)
        # Keep the previous /site rendering recoverable during the public-path migration.
        destination = releases / f"{commit}-mise-site"
        if not destination.exists():
            os.replace(stage, destination)
        pending = root / ".current-next"
        if pending.is_symlink():
            pending.unlink()
        pending.symlink_to(destination, target_is_directory=True)
        os.replace(pending, root / "current")
    print(json.dumps({"commit": commit, "build": release["build"], "sha256": release["sha256"], "apkUrl": mirror_url}))


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--root", type=Path, default=Path("/var/www/mise-site"))
    args = parser.parse_args()
    info = json.loads(fetch(f"https://api.github.com/repos/{REPO}/commits/main", 2_000_000))
    commit = info["sha"]
    if not re.fullmatch(r"[0-9a-f]{40}", commit):
        raise ValueError("Invalid source commit")
    current = args.root / "current/source-commit.txt"
    manifest = args.root / "current/release.json"
    has_current_path = manifest.exists() and json.loads(manifest.read_text())["apkUrl"].startswith(f"{ORIGIN}/mise-site/downloads/")
    if current.exists() and current.read_text().strip() == commit and has_current_path:
        print("Public mirror is current")
        return
    archive = fetch(f"https://codeload.github.com/{REPO}/zip/{commit}", 40_000_000)
    publish(args.root, commit, public_files(archive))


if __name__ == "__main__":
    main()
