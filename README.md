# The Relentless Cinder - Artist Portfolio

A luxury sales funnel and portfolio website for conceptual photography built with the **LAPS Framework** (Leads, Appointments, Presentations, Sales). Features quiz-based lead capture, personalized viewing rooms, and visual content management.

**Artist:** The Relentless Cinder  
**Collection:** Sisyphean Pyre (Urban Inferno Series)

## Architecture

- **Static Site Generator**: [Hugo](https://gohugo.io/)
- **Sales Funnel**: LAPS Framework (quiz → email capture → viewing rooms → purchase)
- **CMS**: Decap CMS for visual content editing
- **Email Capture**: Netlify Forms
- **Hosting**: Netlify (Automatic builds from GitHub)

## Features

### 🎯 LAPS Sales Funnel

**The Lead (Quiz Landing Page)**

- Psychological archetype quiz: "What do you see in the shadows?"
- CSS-animated hero cinemagraph (fire pulse effect)
- Email capture modal with Netlify Forms integration
- Personalized redirect based on quiz selection

**The Appointment (Viewing Rooms)**

- Three exclusive collections: The Conflict, The Void, The Path
- Personalized welcome experience
- Museum-style artwork presentation

**The Presentation (CEDAR Framework)**

- Curator notes for each piece: Context, Evaluation, Design, Result
- Jungian archetype analysis
- Technical methodology explanations

**The Sale (Dual-Tier Pricing)**

- **Gold Tier**: High-touch consultation flow for 1/1 NFTs
- **Bronze Tier**: Low-touch instant checkout for prints

### 📝 Content Management

**Decap CMS Admin Interface** at `/admin`:

- Visual editor for viewing rooms
- Update CEDAR curator notes without touching code
- Manage pricing, descriptions, and artwork details
- SEO metadata editing

### 🎨 Design

- Dark mode aesthetic (#0a0a0a background)
- Fire pulse CSS animations
- Responsive grid layouts
- Accessibility features (ARIA labels, keyboard navigation, reduced motion support)

## Directory Structure

```
├── content/
│   ├── about.md              # Artist profile (The Relentless Cinder)
│   └── viewing/              # LAPS viewing rooms
│       ├── conflict.md       # The Conflict (Fire/Warrior)
│       ├── void.md           # The Void (Blur/Ghost)
│       └── path.md           # The Path (Light/Wanderer)
├── layouts/
│   ├── index.html            # Quiz landing page
│   ├── _default/
│   │   └── viewing-room.html # Viewing room template
│   └── shortcodes/
│       └── cedar-note.html   # CEDAR curator notes
├── static/
│   ├── admin/                # Decap CMS
│   ├── css/
│   │   ├── quiz.css          # Quiz interface styles
│   │   └── viewing-room.css  # Museum presentation styles
│   ├── js/
│   │   └── quiz.js           # Quiz interactions & email capture
│   └── img/                  # Images & hero cinemagraphs
└── docker-compose.yml        # Docker dev environment
```

## Local Development

### Quick Start (Docker)

```bash
# Start Hugo development server
make dev
# OR
docker compose up

# Visit http://localhost:1313
```

### Access CMS Admin Panel

```bash
# Terminal 1: Hugo server (already running)
docker compose up

# Terminal 2: CMS backend (for local editing)
npx decap-server

# Visit http://localhost:1313/admin
```

### Manual Hugo Installation

```bash
# MacOS
brew install hugo

# Windows
choco install hugo-extended

# Run locally
hugo server -D
```

## Content Editing

**Via CMS (Recommended):**

1. Visit http://localhost:1313/admin
2. Edit viewing rooms, about page, or settings
3. Changes auto-commit to Git

**Via Markdown (Advanced):**

1. Edit files in `content/` directory
2. Use CEDAR framework format:
   - **Context:** Location and time details
   - **Evaluation:** Jungian archetype analysis
   - **Design:** Technical methodology
   - **Result:** Emotional impact

## Deployment

### Netlify Setup

1. Connect GitHub repository to Netlify
2. Netlify auto-detects `netlify.toml` configuration
3. Enable Netlify Identity for CMS authentication
4. Set up Git Gateway in Netlify dashboard

### Manual Build

```bash
hugo --minify
# Output in `public/` directory
```

## Next Steps

- [ ] Copy hero images to `static/img/` (see walkthrough.md)
- [ ] Define pricing ($XX,XXX placeholders)
- [ ] Record welcome videos for viewing rooms (optional)
- [ ] Set up Calendly for Gold tier consultations
- [ ] Configure Payhip for Bronze tier purchases
- [ ] Enable Netlify Identity for CMS access

## Documentation

- **CMS Guide**: See `/artifacts/cms_guide.md` for admin panel usage
- **LAPS Wireframes**: See `/artifacts/laps_wireframe.md` for design specs
- **Implementation Plan**: See `/artifacts/implementation_plan.md`
- **After Effects Tutorial**: See `/artifacts/ae_cinemagraph_tutorial.md`

---

**Built with:** Hugo + Decap CMS + Netlify + Docker  
**Framework:** LAPS (Leads, Appointments, Presentations, Sales)
