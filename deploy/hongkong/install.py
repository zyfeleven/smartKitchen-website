#!/usr/bin/env python3
"""One-time reviewed installation on the existing Mise Ubuntu host (run as root)."""
from datetime import datetime, timezone
import os
from pathlib import Path
import shutil
import subprocess


def run(*args):
    subprocess.run(args, check=True)


def main():
    if os.geteuid() != 0:
        raise SystemExit("Run the reviewed installer as root")
    source = Path(__file__).resolve().parent
    config = Path("/etc/nginx/sites-enabled/default").resolve(strict=True)
    original = config.read_text()
    marker = "location = /mise {"
    include = "include /etc/nginx/snippets/mise-site.conf;"
    if original.count(marker) != 1 or "server_name 8.217.241.184" not in original:
        raise SystemExit("Unexpected Nginx configuration; inspect before continuing")
    backup = Path("/root/mise-site-backups") / datetime.now(timezone.utc).strftime("%Y%m%dT%H%M%SZ")
    backup.mkdir(parents=True, exist_ok=False)
    shutil.copy2(config, backup / "nginx-default")
    current = Path("/var/www/mise-site/current")
    if current.is_symlink():
        (backup / "previous-current.txt").write_text(str(current.resolve()) + "\n")
    library = Path("/usr/local/lib/mise-site")
    library.mkdir(parents=True, exist_ok=True)
    target = library / "sync_site.py"
    if target.exists():
        shutil.copy2(target, backup / "sync_site.py")
    shutil.copy2(source / "sync_site.py", target)
    target.chmod(0o644)
    root = Path("/var/www/mise-site")
    root.mkdir(exist_ok=True)
    root.chmod(0o755)
    shutil.chown(root, user="www-data", group="www-data")
    for name in ("mise-site-sync.service", "mise-site-sync.timer"):
        dest = Path("/etc/systemd/system") / name
        if dest.exists():
            shutil.copy2(dest, backup / name)
        shutil.copy2(source / name, dest)
        dest.chmod(0o644)
    run("systemctl", "daemon-reload")
    # A failed first sync must not expose a partial website.
    run("systemctl", "start", "mise-site-sync.service")
    snippet = Path("/etc/nginx/snippets/mise-site.conf")
    if snippet.exists():
        shutil.copy2(snippet, backup / "mise-site.conf")
    shutil.copy2(source / "nginx-site.conf", snippet)
    snippet.chmod(0o644)
    updated = original if include in original else original.replace(marker, include + "\n    " + marker)
    config.write_text(updated)
    try:
        run("nginx", "-t")
        run("systemctl", "reload", "nginx")
    except subprocess.CalledProcessError:
        config.write_text(original)
        if (backup / "mise-site.conf").exists():
            shutil.copy2(backup / "mise-site.conf", snippet)
        raise
    run("systemctl", "enable", "--now", "mise-site-sync.timer")
    print("Mirror installed at https://8.217.241.184/mise-site/; backup:", backup)


if __name__ == "__main__":
    main()
