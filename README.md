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

### Option 1: Docker (Recommended)

The project uses the official Hugo Docker image for consistent development environments:

```bash
# Start development server
make dev
# OR
docker compose up

# Stop server
make stop
# OR
docker compose down
```

Visit `http://localhost:1313` to see your site with live reload enabled.

**Note**: The custom `Dockerfile` in this repo is archived. We use the official `klakegg/hugo:ext-alpine` image via `docker-compose.yml` to avoid architecture compatibility issues.

### Option 2: Local Hugo Installation

If you prefer to install Hugo directly:

```bash
# MacOS
brew install hugo

# Windows (Chocolatey)
choco install hugo-extended

# Linux
sudo apt install hugo
```

Run the server:

```bash
hugo server -D
```

## Deployment

This repository is configured for **Netlify** with automatic deployments.

1.  Push to GitHub.
2.  Connect repository in Netlify Dashboard.
3.  Netlify will detect `netlify.toml` and build the site automatically.

**Local Testing**: Use `make dev` to test the Docker environment locally before deploying.

## Features implemented

- **Masonry Gallery**: Custom CSS columns layout.
- **Lead Capture**: Netlify Forms integration (`contact-form.html`).
- **Google Reviews**: Reusable footer component.
