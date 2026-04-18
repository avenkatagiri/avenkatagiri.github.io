---
layout: default
title: Speaking
---

<h1 style="text-align: center; margin-bottom: 0.5rem;">Speaking</h1>
<p style="text-align: center; color: var(--color-muted); max-width: 600px; margin: 0 auto 3rem auto;">
  Public talks, webinars, and conference presentations.
</p>

<div class="grid">
{% for talk in site.data.speaking %}
  <article class="glass">
    <h3 style="margin-top:0; color: var(--color-primary);">{{ talk.topic }}</h3>
    <p style="font-weight: 600; font-size: 0.9rem; margin-bottom: 0.5rem;">
      {{ talk.event }} • {{ talk.date }}
    </p>
    {% if talk.description %}
      <p>{{ talk.description }}</p>
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
