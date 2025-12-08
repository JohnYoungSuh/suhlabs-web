# Implementation Plan - Suhlabs Photos (Hugo Migration)

## Goal Description

Migrate the existing Vanilla HTML/JS website to **Hugo** (Static Site Generator). This enables easier content management, better scalability, and seamless deployment to **Netlify** via GitHub.
We will also implement:

1.  **Lead Capture Modal**: A contact form using Netlify Forms.
2.  **Google Reviews Component**: A reusable shortcode for the footer.

## User Review Required

> [!IMPORTANT] > **Deployment Workflow**:
>
> 1.  **Source**: You push this Hugo project to **GitHub**.
> 2.  **Build**: Connect the repo to **Netlify**. Netlify detects `netlify.toml` and runs `hugo`.
> 3.  **Publish**: Netlify serves the purely static output.
>     _This answers your question: Yes, this is the standard, recommended workflow._

## Proposed Changes

### Directory Structure (Hugo Standard)

#### [NEW] [Directory Tree]

```
/project-root
  config.toml         # Hugo configuration
  netlify.toml        # Netlify build settings
  /content/
    /work/            # _index.md + content files
    /news/            # Markdown posts
  /data/              # JSON data (store/work metadata moved here)
    products.json
    work.json
  /layouts/           # HTML Templates
    index.html        # Landing page
    _default/         # Base templates (single.html, list.html)
    partials/         # Reusable components (header, footer, form)
    shortcodes/       # Review button
  /static/            # Assets (css, img - moved from assets/)
    /css/
    /js/
    /img/
```

### Components

#### [NEW] [layouts/partials/contact-form.html]

- HTML Form with `data-netlify="true"`.
- Fields: Name, Email, Phone, Message.
- Styled with existing `style.css` variables.

#### [NEW] [layouts/shortcodes/google-review.html]

- Reusable snippet for "Leave a Review" button.
- Displays 5 stars and links to Google Business Profile.

### Migration Steps

1.  **Move Assets**: `assets/` -> `static/`.
2.  **Convert Content**: `metadata.json` -> `data/work.json`.
3.  **Create Layouts**: Split `index.html` into `baseof.html`, `index.html`, and partials.

## Verification Plan

1.  **Local Build**: Run `hugo server` (if available) or verify file structure.
2.  **Netlify Check**: Inspect `netlify.toml` for correct build command (`hugo`).
3.  **Form Test**: Verify `data-netlify="true"` attribute exists in the output.
