---
layout: default
title: Awards & Certifications
---

<h1 style="text-align: center; margin-bottom: 0.5rem;">Awards & Certifications</h1>
<p style="text-align: center; color: var(--color-muted); max-width: 600px; margin: 0 auto 3rem auto;">
  A timeline of professional milestones and recognitions.
</p>

<div class="grid">
{% for award in site.data.awards %}
  <article class="glass">
    {% if award.image %}
    <div style="margin-bottom: 1rem; background: #fff; display: inline-block; padding: 0.5rem; border-radius: 8px;">
      <img src="{{ award.image }}" alt="{{ award.title }}" style="max-height: 80px; object-fit: contain;">
    </div>
    {% endif %}
    <h3 style="margin-top:0;">{{ award.title }}</h3>
    <p style="color: var(--color-primary-light); font-weight: 600; font-size: 0.9rem; margin-bottom: 0.5rem;">
      {{ award.issuer }} • {{ award.date }}
    </p>
    <p>{{ award.description }}</p>
    {% if award.link %}
      <a href="{{ award.link }}" target="_blank" class="btn" style="margin-top: 1rem;">View Details</a>
    {% endif %}
  </article>
{% endfor %}
</div>
