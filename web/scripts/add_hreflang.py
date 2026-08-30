#!/usr/bin/env python3
"""Inject alternates.languages (hreflang) into English country-variant pages.

Root = en-GB (site default, x-default), au = en-AU, ca = en-CA, us = en-US.
Only pages whose relative path exists in 2+ variants get hreflang; the
non-English locales use translated slugs and are left alone.
"""
import re
from pathlib import Path

APP = Path(__file__).resolve().parent.parent / "src" / "app"
VARIANTS = {"": "en-GB", "au": "en-AU", "ca": "en-CA", "us": "en-US"}
SECTIONS = ["guides", "tools"]

def rel_pages(country: str):
    base = APP / country if country else APP
    pages = {}
    # index pages: /, /au/ ... and /guides/, /au/guides/ ...
    if (base / "page.tsx").exists():
        pages[""] = base / "page.tsx"
    for sec in SECTIONS:
        d = base / sec
        if not d.is_dir():
            continue
        if (d / "page.tsx").exists():
            pages[sec] = d / "page.tsx"
        for sub in sorted(d.iterdir()):
            if sub.is_dir() and (sub / "page.tsx").exists():
                pages[f"{sec}/{sub.name}"] = sub / "page.tsx"
    return pages

all_pages = {c: rel_pages(c) for c in VARIANTS}

changed, skipped = [], []
for country, hl in VARIANTS.items():
    for rel, path in all_pages[country].items():
        siblings = {c: h for c, h in VARIANTS.items() if rel in all_pages[c]}
        if len(siblings) < 2:
            continue
        langs = {}
        for c, h in sorted(siblings.items(), key=lambda kv: kv[1]):
            prefix = f"/{c}" if c else ""
            url = f"{prefix}/{rel}/" if rel else (f"{prefix}/" if c else "/")
            langs[h] = url
        # x-default -> root (en-GB) variant when it exists, else us/au/ca
        for pref in ("", "us", "au", "ca"):
            if pref in siblings:
                p = f"/{pref}" if pref else ""
                langs["x-default"] = f"{p}/{rel}/" if rel else (f"{p}/" if pref else "/")
                break
        lang_src = ", ".join(f"'{k}': '{v}'" for k, v in langs.items())

        src = path.read_text()
        pat = re.compile(
            r"alternates:\s*\{\s*canonical:\s*'([^']+)'(?:,\s*languages:\s*\{[^}]*\}\s*)?\}"
        )
        m = pat.search(src)
        if not m:
            skipped.append(f"NO-MATCH {path}")
            continue
        new = f"alternates: {{ canonical: '{m.group(1)}', languages: {{ {lang_src} }} }}"
        path.write_text(src[:m.start()] + new + src[m.end():])
        changed.append(str(path.relative_to(APP)))

print(f"changed {len(changed)} pages")
for s in skipped:
    print("SKIPPED:", s)
