# Architecture Comparison: Vanilla HTML vs. Hugo

This document evaluates the trade-offs between your current **Vanilla HTML/JS** setup and the proposed **Hugo Static Site Generator** migration.

## Summary Recommendation

For a growing photography business that wants to add **Forms**, **Reviews**, and potentially **More Content** (Blog/Workshops), **Hugo is the superior choice**. The initial setup cost is higher, but it saves hours of repetitive work later.

---

## 1. Maintenance & Scalability

### Vanilla HTML (Current)

- **How it works**: Every page (`index.html`, `about.html`, `work.html`) is a standalone file.
- **The Problem**: If you want to change the **Navigation Menu** or **Footer** (e.g., add the "Review" button), you must manually edit **EVERY** `.html` file.
- **Scaling**: Adding 50 new photo pages would require creating 50 HTML files or writing complex JavaScript to fetch JSON (which we started doing).
- **Verdict**: Good for 1-3 page prototypes. Painful for active sites.

### Hugo (Proposed)

- **How it works**: You define **Layouts** (templates) and **Content** (Markdown/JSON).
- **The Solution**: You define the `header.html` and `footer.html` **ONCE** in a `partials` folder. Hugo automatically injects them into every page during the build.
- **Scaling**: You just drop a new image into a folder or add a line to `metadata.json`, and Hugo automatically generates the gallery pages.
- **Verdict**: Designed for growth.

---

## 2. Feature Implementation

### Lead Capture & Review Component

| Feature                  | Vanilla HTML Approach                                                                                            | Hugo Approach                                                                                                   |
| :----------------------- | :--------------------------------------------------------------------------------------------------------------- | :-------------------------------------------------------------------------------------------------------------- |
| **Google Review Button** | You must copy-paste the `<a href...>` HTML code into the footer of `index.html`, `about.html`, `work.html`, etc. | Create a **Shortcode** `{{< google-review >}}` or Partial. Add it once to `footer.html`. It updates everywhere. |
| **Contact Form**         | Copy-paste form HTML into every page you want it on.                                                             | Create a `contact-form.html` partial. Include it anywhere with `{{ partial "contact-form.html" . }}`.           |
| **Netlify Integration**  | Works, but requires manual attribute checking per file.                                                          | Works perfectly. Hugo builds the HTML with the required `data-netlify="true"` attributes automatically.         |

---

## 3. Developer Experience & Workflow

### Vanilla HTML

- **Pros**:
  - Zero dependencies (no software to install).
  - Instant "View Source" understanding.
- **Cons**:
  - **DRY Principle Violation**: "Don't Repeat Yourself" is impossible to follow.
  - **Inconsistency Risk**: Risk of one page having an old menu.

### Hugo

- **Pros**:
  - **Data-Driven**: Keep your product data in `data/products.json` and let Hugo build the Store HTML for you.
  - **Live Reload**: `hugo server` gives you instant feedback as you edit.
- **Cons**:
  - **Learning Curve**: Need to learn Go Templating (`{{ range .Site.Data.work }}`).
  - **Build Step**: Needs to run a command to generate HTML (Netlify handles this automatically).

## Conclusion

**Migrate to Hugo.**
The "Vanilla" site we built was already reinventing the wheel by using JavaScript to fetch JSON data—essentially building a poor-man's static site generator in the browser. Moving to Hugo moves that logic to the **Build Step**, resulting in:

1.  **Faster Load Times** (Pre-built HTML vs JS-rendered DOM).
2.  **Better SEO** (Search engines see full content immediately).
3.  **Easier Updates** (Edit 1 file vs 10).
