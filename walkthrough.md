# Suhlabs Photos - Walkthrough

## Overview

The **Suhlabs Photos** website has been successfully built as a lightweight, static site optimized for performance (Raspberry Pi compatible). It features a strict **Black & White** aesthetic, **Masonry Gallery**, and **Payhip Store** integration.

## Architecture

- **Tech Stack**: Vanilla HTML5, CSS3, JavaScript (ES6). No frameworks.
- **Data Layer**: JSON files in `/content` drive the Gallery (`work`) and Store (`store`).
- **Styling**: `assets/css/style.css` uses CSS Variables for B&W theme and CSS Columns for the masonry layout.

## Pages Created

### 1. Landing Page (`index.html`)

- Minimal Hero section with "VISUAL SILENCE" tagline.
- Clean navigation.

### 2. Work Gallery (`work.html`)

- Loads metadata from `content/work/metadata.json`.
- Displays images in a responsive Masonry grid (1 column mobile, 3 columns desktop).
- _Verify_: Check that titles like "Urban Solitude" appear on hover.

### 3. Store (`store.html`)

- Loads products from `content/store/products.json`.
- Each product card links directly to a **Payhip** checkout page.
- _Verify_: "Buy" buttons should open Payhip links.

### 4. About (`about.html`)

- Static profile page with contact info.

### 5. News (`news.html`)

- Placeholder structure for blog posts.
- Includes a sample `hello-world.md` in `content/news`.

### 6. Workshops (`workshops.html`)

- **Hidden** page as requested. Contains a simple "Coming Soon" message.

## Next Steps

1.  **Replace Placeholders**: Replace the SVG images in `assets/img/` with your real photography.
2.  **Update JSON**: Edit `content/work/metadata.json` to match your real photo filenames.
3.  **Configure Payhip**: Update `payhip_url` in `content/store/products.json` with your real product links.
