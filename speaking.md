---
layout: default
title: Speaking Engagements
---

<h1 style="text-align: center; margin-bottom: 0.5rem;">Speaking Engagements</h1>
<p style="text-align: center; color: var(--color-muted); max-width: 600px; margin: 0 auto 3rem auto;">
  Public talks, webinars, and conference presentations.
</p>

<div class="grid">
{% for talk in site.data.speaking %}
  <article class="glass">
    {% if talk.images %}
    <div style="margin-bottom: 1.5rem; display: flex; gap: 1rem; flex-wrap: wrap;">
      {% for img in talk.images %}
      <img src="{{ img }}" alt="{{ talk.topic }}" style="flex: 1; min-width: 250px; height: 200px; object-fit: cover; border-radius: 8px;">
      {% endfor %}
    </div>
    {% elsif talk.image %}
    <div style="margin-bottom: 1.5rem;">
      <img src="{{ talk.image }}" alt="{{ talk.topic }}" style="width: 100%; height: 200px; object-fit: cover; border-radius: 8px;">
    </div>
    {% endif %}
    <h3 style="margin-top:0; color: var(--color-primary);">{{ talk.topic }}</h3>
    <p style="font-weight: 600; font-size: 0.9rem; margin-bottom: 0.5rem;">
      {{ talk.event }} • {{ talk.date }}
    </p>
    {% if talk.description %}
      <div style="font-size: 0.95rem;">{{ talk.description | markdownify }}</div>
    {% endif %}
    
    <div style="margin-top: 1.5rem; display: flex; gap: 0.8rem;">
      {% if talk.recording_url %}
        <a href="{{ talk.recording_url }}" target="_blank" class="btn">Watch Recording</a>
      {% endif %}
      {% if talk.slides_url %}
        <a href="{{ talk.slides_url }}" target="_blank" class="btn" style="background: var(--color-surface); color: var(--color-text); border: 1px solid var(--color-muted);">Slides</a>
      {% endif %}
    </div>
  </article>
{% endfor %}
</div>
