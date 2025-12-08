# Suhlabs Photos

A minimal, content-driven photography portfolio website built with **Hugo**.
Designed for "Visual Silence" - strictly Black & White, high contrast, and performance-focused.

## Architecture

- **Static Site Generator**: [Hugo](https://gohugo.io/)
- **Hosting**: Netlify (Automatic builds from GitHub)
- **CMS (Optional)**: Can be connected to Decap CMS content management.
- **E-Commerce**: Payhip integration.

## Directory Structure

- `content/`: Markdown content and page bundles.
- `data/`: JSON data sources (Gallery metadata, Store products).
- `layouts/`: HTML templates (Go Templating).
- `static/`: Raw assets (CSS, Images, JS).

## Local Development

1.  Install Hugo:

    ```bash
    # MacOS
    brew install hugo

    # Windows (Chocolatey)
    choco install hugo-extended
    ```

2.  Run the server:

    ```bash
    hugo server -D
    ```

3.  Visit `http://localhost:1313`.

## Deployment

This repository is configured for **Netlify**.

1.  Push to GitHub.
2.  Connect repository in Netlify Dashboard.
3.  Netlify will detect `netlify.toml` and build the site.

## Features implemented

- **Masonry Gallery**: Custom CSS columns layout.
- **Lead Capture**: Netlify Forms integration (`contact-form.html`).
- **Google Reviews**: Reusable footer component.
