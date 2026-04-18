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
    <h3 style="margin-top:0; margin-bottom: 0.3rem;">
      <a href="{{ post.url }}" style="color: var(--color-text); text-decoration: none;">{{ post.title }}</a>
    </h3>
    <p style="color: var(--color-primary-light); font-size: 0.85rem; margin-bottom: 0.8rem;">{{ post.date | date: "%B %d, %Y" }}</p>
    <p>{{ post.excerpt | strip_html | truncatewords: 30 }}</p>
    <a href="{{ post.url }}" class="btn" style="margin-top: 0.5rem; font-size: 0.85rem; padding: 0.4rem 0.8rem;">Read More</a>
  </article>
{% endfor %}
</div>
