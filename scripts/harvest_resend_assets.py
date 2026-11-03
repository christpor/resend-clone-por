#!/usr/bin/env python3
"""
harvest_resend_assets.py
Harvests authentic production assets, fonts, SVGs, and metadata from https://resend.com
"""

import os
import sys
import re
import urllib.request

ROOT = "/home/christ/resend-clone-por"
PUBLIC = os.path.join(ROOT, "public")
STATIC = os.path.join(PUBLIC, "static")
FONTS = os.path.join(PUBLIC, "fonts")
SVGS = os.path.join(STATIC, "svgs")
FAVICONS = os.path.join(STATIC, "favicons")

HEADERS = {
    "User-Agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
}

ASSETS_TO_DOWNLOAD = [
    ("https://resend.com/static/cube-fallback.jpg", os.path.join(STATIC, "cube-fallback.jpg")),
    ("https://resend.com/static/landing-page/bg-hero-1.jpg", os.path.join(STATIC, "landing-page", "bg-hero-1.jpg")),
    ("https://resend.com/static/landing-page/3d-broadcast-fallback.jpg", os.path.join(STATIC, "landing-page", "3d-broadcast-fallback.jpg")),
    ("https://resend.com/static/landing-page/3d-control-fallback.jpg", os.path.join(STATIC, "landing-page", "3d-control-fallback.jpg")),
    ("https://resend.com/static/landing-page/3d-react-fallback.jpg", os.path.join(STATIC, "landing-page", "3d-react-fallback.jpg")),
    ("https://resend.com/static/cover.jpg", os.path.join(STATIC, "cover.jpg")),
    ("https://resend.com/static/favicons/favicon-marketing.ico", os.path.join(FAVICONS, "favicon-marketing.ico")),
    ("https://resend.com/static/favicons/favicon-marketing@180x180.png", os.path.join(FAVICONS, "favicon-marketing@180x180.png")),
    ("https://resend.com/_next/static/immutable/media/domaine_regular.p.2joc-huu8rdu_.woff2", os.path.join(FONTS, "domaine_regular.woff2")),
    ("https://resend.com/_next/static/immutable/media/domaine_medium.p.180pom31p-fh2.woff2", os.path.join(FONTS, "domaine_medium.woff2")),
    ("https://resend.com/_next/static/immutable/media/domaine_bold.p.3n2td7ookua-p.woff2", os.path.join(FONTS, "domaine_bold.woff2")),
    ("https://resend.com/_next/static/immutable/media/commit_mono_regular.p.17ccpk27lq6an.woff2", os.path.join(FONTS, "commit_mono_regular.woff2")),
    ("https://resend.com/_next/static/immutable/media/commit_mono_italic.p.24go0wiyheis0.woff2", os.path.join(FONTS, "commit_mono_italic.woff2")),
]

def check_harvested():
    for _, dest in ASSETS_TO_DOWNLOAD:
        if not os.path.isfile(dest) or os.path.getsize(dest) == 0:
            print(f"[FAIL] Missing or empty: {dest}")
            return False
    # Check logo and brand partner SVGs
    for name in ["resend-logo.svg", "warner-bros.svg", "max.svg", "raycast.svg", "mistral.svg", "supabase.svg"]:
        svg_path = os.path.join(SVGS, name)
        if not os.path.isfile(svg_path) or os.path.getsize(svg_path) == 0:
            print(f"[FAIL] Missing SVG: {svg_path}")
            return False
    print("[OK] All essential assets, fonts, and SVGs are present and valid.")
    return True

def download_file(url, dest):
    os.makedirs(os.path.dirname(dest), exist_ok=True)
    if os.path.exists(dest) and os.path.getsize(dest) > 0:
        return
    try:
        req = urllib.request.Request(url, headers=HEADERS)
        with urllib.request.urlopen(req) as resp:
            data = resp.read()
            with open(dest, "wb") as f:
                f.write(data)
        print(f"Downloaded {url} -> {dest} ({len(data)} bytes)")
    except Exception as e:
        print(f"Error downloading {url}: {e}")

def extract_svgs():
    os.makedirs(SVGS, exist_ok=True)
    req = urllib.request.Request("https://resend.com", headers=HEADERS)
    with urllib.request.urlopen(req) as resp:
        html = resp.read().decode("utf-8", errors="ignore")

    svgs = re.findall(r"(<svg[^>]*>.*?</svg>)", html, re.DOTALL)
    
    # Mapping aria labels to file names
    brand_map = {
        "Warner Bros.": "warner-bros.svg",
        "Max": "max.svg",
        "Raycast": "raycast.svg",
        "Mistral AI": "mistral.svg",
        "Replit": "replit.svg",
        "Anghami": "anghami.svg",
        "Gumroad": "gumroad.svg",
        "Decathlon": "decathlon.svg",
        "Supabase": "supabase.svg",
        "Leap": "leap.svg",
        "Payload": "payload.svg",
        "Paper": "paper.svg",
    }

    found_resend = False
    for s in svgs:
        aria = re.search(r'aria-label=[\"\']([^\"\']+)[\"\']', s)
        if aria:
            label = aria.group(1)
            if label == "Resend" and not found_resend:
                with open(os.path.join(SVGS, "resend-logo.svg"), "w") as f:
                    f.write(s)
                found_resend = True
                print("Saved resend-logo.svg")
            elif label in brand_map:
                fname = brand_map[label]
                with open(os.path.join(SVGS, fname), "w") as f:
                    f.write(s)
                print(f"Saved {fname} ({label})")

def main():
    if "--check" in sys.argv:
        if check_harvested():
            sys.exit(0)
        else:
            sys.exit(1)

    print("Harvesting Resend assets...")
    for url, dest in ASSETS_TO_DOWNLOAD:
        download_file(url, dest)
    extract_svgs()
    print("Harvesting complete.")

if __name__ == "__main__":
    main()
