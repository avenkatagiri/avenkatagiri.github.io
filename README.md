# avenkatagiri.github.io
My personal AI engineering portfolio website.

This website is a static site built on Jekyll, using a completely custom UI featuring glass-morphism, dark/light mode toggle, Anime.js micro-animations, and a highly scalable YAML/Markdown data architecture.

---

## 🛠 Content Management Guide

You do not need to touch the HTML or CSS files to update the layout blocks on this site. The portfolio is entirely decoupled into simple YAML and Markdown files.

### 1. Projects (`_data/projects.yml`)
To add a new project card, update the `_data/projects.yml` file. 

```yaml
- title: "Secret AI Engine"
  secret: true # Will render the red 'classified' banner
  description: "Short description."
  image: "/assets/img/project-screenshot.png"
  complexity: "RAG + Agents" # The text to show
  complexity_score: 95 # Fill width of the gradient bar
  repo_url: "https://github.com/example"
  demo_url: "https://example.com"
  highlights:
    - "First feature"
    - "Second feature"
  tags:
    - Python
    - FastAPI
```

### 2. Awards & Certs (`_data/awards.yml`)
Add your certifications to the `/awards-certs` page by editing `_data/awards.yml`. The UI will automatically style the image badge.

```yaml
- title: "AWS Certified Solutions Architect"
  issuer: "Amazon Web Services"
  date: "2024"
  description: "Proof of knowledge in AWS systems."
  image: "/assets/img/aws-badge.png" # Shows a clean badge above title
  link: "https://credly.com/your-badge-link"
```

### 3. Speaking & Webinars (`_data/speaking.yml`)
Add talks, conferences, or webinars via `_data/speaking.yml`.

```yaml
- event: "AI Engineering Summit 2026"
  topic: "Orchestrating Multi-Agent Debate Graphs"
  date: "April 2026"
  image: "/assets/img/summit-photo.jpg" # Acts as a wide top banner
  recording_url: "https://youtube.com/example"
  slides_url: "https://example.com/slides"
```

### 4. Blog Posts (`_posts/`)
To write internal blogs or link to external articles (Medium, LinkedIn), create a file in the `_posts/` folder using the exact date-prefix format:
**Example**: `_posts/2026-05-12-my-article.md`

#### Internal Blog Post
```markdown
---
layout: default
title: "Why Multi-Agent Systems Outperform Single LLMs"
date: 2026-05-12
---

Write your full markdown blog content right here! 
Supports python code blocks and inline formatting.
```

#### External Blog Post
If you want the blog card to point out into the internet (e.g. Medium) instead of rendering internally, just supply the `external_url` tag. The layout automatically stamps it with an `EXTERNAL URL` banner.

```markdown
---
layout: default
title: "The Architecture of Multi-Agent Systems"
date: 2026-04-17
external_url: "https://medium.com/@avenkatagiri/multi-agent-system"
---
Any text you type here will elegantly serve as the small excerpt for the article card on the /blog page.
```
