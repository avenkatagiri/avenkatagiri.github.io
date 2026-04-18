---
layout: default
title: Blog
---

<h1 style="text-align: center; margin-bottom: 0.5rem;">Engineering Blog</h1>
<p style="text-align: center; color: var(--color-muted); max-width: 600px; margin: 0 auto 3rem auto;">
  Thoughts, tutorials, and insights on multi-agent systems and software architecture.
</p>

<div style="display: flex; flex-direction: column; gap: 1.5rem;">
{% for post in site.posts %}
  <article class="glass">
    {% assign target_url = post.external_url | default: post.url %}
    <h3 style="margin-top:0; margin-bottom: 0.3rem;">
      <a href="{{ target_url }}" style="color: var(--color-text); text-decoration: none;" {% if post.external_url %}target="_blank"{% endif %}>
        {{ post.title }}
        {% if post.external_url %}
        <span style="font-size: 0.65rem; padding: 0.1rem 0.4rem; border: 1px solid var(--color-primary); color: var(--color-primary); border-radius: 4px; vertical-align: middle; margin-left: 0.5rem; font-weight: normal; text-transform: uppercase;">External URL</span>
        {% endif %}
      </a>
    </h3>
    <p style="color: var(--color-primary-light); font-size: 0.85rem; margin-bottom: 0.8rem;">
      {{ post.date | date: "%B %d, %Y" }}
      {% if post.publisher %}
      <span style="font-size: 0.75rem; padding: 0.1rem 0.6rem; background: var(--color-surface); color: var(--color-text); border-radius: 20px; border: 1px solid var(--color-muted); margin-left: 0.8rem; font-weight: 500;"> Publisher: {{ post.publisher }}</span>
      {% endif %}
    </p>
    {% if post.image %}
    <img src="{{ post.image | relative_url }}" alt="{{ post.title }}" style="width:100%; height:auto; max-height: 280px; border-radius:12px; margin-bottom: 1rem; object-fit: contain; background: var(--color-surface);" onerror="this.style.display='none'"/>
    {% endif %}
    <p>{{ post.excerpt | strip_html | truncatewords: 30 }}</p>
    <a href="{{ target_url }}" class="btn" style="margin-top: 0.5rem; font-size: 0.85rem; padding: 0.4rem 0.8rem;" {% if post.external_url %}target="_blank"{% endif %}>Read More</a>
  </article>
{% endfor %}
</div>
