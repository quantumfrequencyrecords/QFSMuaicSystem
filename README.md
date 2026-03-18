# QFSMuaicSystem
style and lyric prompts
# Suno Hub

Static GitHub Pages PWA for organizing music reference prompts and band consistency prompts.

## Files
- `index.html` — main app
- `sw.js` — offline support
- `app.webmanifest` — installable PWA config
- `icon.svg` — app icon
- `manifest.json` — file list for data loading
- `artist_*.json` — artist reference files

## Deploy
1. Create a public GitHub repo named `suno-hub`
2. Upload all files to the repo root
3. Enable GitHub Pages from the main branch and root folder
4. Open the Pages URL in Safari
5. Tap Share → Add to Home Screen

## Update flow
- Add or edit `artist_*.json`
- Update `manifest.json`
- Commit changes
- Open the app and tap refresh to clear stale cache
