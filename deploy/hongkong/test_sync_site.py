import copy
import hashlib
import io
import json
from pathlib import Path
import unittest
import zipfile

import sync_site as mirror


class MirrorTests(unittest.TestCase):
    def setUp(self):
        self.release = json.loads((Path(__file__).parents[2] / "release.json").read_text(encoding="utf-8"))

    def test_current_manifest_is_allowed(self):
        self.assertTrue(mirror.validate_release(self.release).endswith(".apk"))

    def test_rejects_foreign_host_traversal_and_mismatched_version(self):
        for url in ["https://example.com/private.apk", self.release["apkUrl"] + "?token=secret",
                    self.release["apkUrl"].replace("mise-v", "../mise-v"),
                    self.release["apkUrl"].replace("mise-v", "mise-v999")]:
            with self.subTest(url=url), self.assertRaises(ValueError):
                mirror.validate_release(dict(self.release, apkUrl=url))

    def test_rejects_wrong_size_or_digest(self):
        release = dict(self.release, sizeBytes=3, sha256=hashlib.sha256(b"apk").hexdigest())
        mirror.verify_apk(b"apk", release)
        for content in [b"bad", b"apk-extra"]:
            with self.assertRaises(ValueError):
                mirror.verify_apk(content, release)

    def test_archive_exports_only_public_allowlist(self):
        buffer = io.BytesIO()
        with zipfile.ZipFile(buffer, "w") as archive:
            for name in mirror.ROOT_FILES:
                archive.writestr("repo/" + name, "test")
            archive.writestr("repo/assets/mise-mark.svg", "svg")
            for name in [".env", "private/invites.xlsx", "deploy/hongkong/sync_site.py", "assets/../../secret.png", "assets/unsafe.js"]:
                archive.writestr("repo/" + name, "not public")
        files = mirror.public_files(buffer.getvalue())
        self.assertEqual(set(files), mirror.ROOT_FILES | {"assets/mise-mark.svg"})

    def test_archive_rejects_missing_required_files(self):
        buffer = io.BytesIO()
        with zipfile.ZipFile(buffer, "w") as archive:
            archive.writestr("repo/index.html", "partial")
        with self.assertRaises(ValueError):
            mirror.public_files(buffer.getvalue())

    def test_archive_rejects_symlink(self):
        buffer = io.BytesIO()
        with zipfile.ZipFile(buffer, "w") as archive:
            entry = zipfile.ZipInfo("repo/index.html")
            entry.external_attr = 0o120777 << 16
            archive.writestr(entry, "/etc/passwd")
        with self.assertRaises(ValueError):
            mirror.public_files(buffer.getvalue())


if __name__ == "__main__":
    unittest.main()
