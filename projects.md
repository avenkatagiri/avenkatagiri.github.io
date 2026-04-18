---
layout: default
title: Projects
---

<h1 style="text-align: center; margin-bottom: 0.5rem;">Projects</h1>
<p style="text-align: center; color: var(--color-muted); max-width: 600px; margin: 0 auto 3rem auto;">
  A selection of things I've built — multi-agent systems, full-stack applications, and AI-powered tools.
</p>

<div class="projects-grid" style="display: flex; flex-direction: column; gap: 3rem;">

{% for project in site.data.projects %}
<article class="glass" style="padding: 2rem;">
  
  <h2 style="margin-top: 0; color: var(--color-text); font-size: 2rem; margin-bottom: 0.5rem; display: flex; align-items: center; gap: 1rem;">
    {{ project.title }}
    {% if project.secret %}
      <span class="classified-banner" style="margin: 0;">// select details redacted</span>
    {% endif %}
  </h2>
  
  {% if project.image %}
  <div class="project-thumbnail" style="margin-bottom: 1.5rem;">
    <img src="{{ project.image }}" alt="{{ project.title }} screenshot" style="width: 100%; border-radius: 8px; object-fit: cover;" onerror="this.style.display='none'">
  </div>
  {% else %}
  <div class="project-thumbnail" style="width: 100%; height: 220px; border: 1px dashed var(--color-muted); border-radius: 8px; display: flex; align-items: center; justify-content: center; color: var(--color-muted); font-style: italic; margin-bottom: 1.5rem; background: rgba(0, 0, 0, 0.1);">
    [ screenshot placeholder ]
  </div>
  {% endif %}

  <p style="font-size: 1.1rem; line-height: 1.6;">{{ project.description }}</p>

  {% if project.highlights %}
  <ul class="highlight-list" style="margin-top: 1.5rem;">
    {% for highlight in project.highlights %}
    <li><span>{{ highlight | markdownify }}</span></li>
    {% endfor %}
  </ul>
  {% endif %}

  {% if project.complexity %}
  <div class="complexity-meter" style="margin-top: 1.5rem;">
    Complexity: <span class="complexity-bar" style="width: {{ project.complexity_score | default: 50 | append: 'px' }};"></span> {{ project.complexity }}
  </div>
  {% endif %}

  {% if project.tags %}
  <div class="tech-tags">
    {% for tag in project.tags %}
      <span class="tech-tag">{{ tag }}</span>
    {% endfor %}
  </div>
  {% endif %}

  <div class="project-links" style="margin-top: 1.5rem; display: flex; gap: 1rem;">
    {% if project.demo_url %}
      <a href="{{ project.demo_url }}" class="btn" target="_blank">Demo</a>
    {% endif %}
    {% if project.repo_url %}
      <a href="{{ project.repo_url }}" class="btn" style="background: var(--color-surface); color: var(--color-text); border: 1px solid var(--color-muted);" target="_blank">Code</a>
    {% endif %}
  </div>

</article>
{% endfor %}

</div>
