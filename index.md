---
layout: default
title: Home
---

<div class="hero glass" style="margin-bottom: 3rem; text-align: center;">
  <img src="/assets/img/profile.jpg" alt="Avi Venkatagiri" class="profile-pic" style="width: 140px; height: 140px; border-radius: 50%; object-fit: cover; margin-bottom: 1rem; border: 4px solid var(--color-primary-light);" onerror="this.src='https://via.placeholder.com/140?text=photo';" />
  <h1 class="accent" style="margin: 0.5rem 0; font-size: 2.5rem;">Hey, I'm Avi.</h1>
  <p style="font-size: 1.1rem; max-width: 600px; margin: 0 auto 2rem auto;">I build AI-powered multi-agent systems, full-stack applications, and developer tools. Currently focused on agentic architectures, cloud advisory platforms, and conversational AI.</p>
  
  <div class="social-links" style="display: flex; gap: 1rem; justify-content: center;">
    <a href="https://www.linkedin.com/in/avinashvenkatagiri/" target="_blank" aria-label="LinkedIn" class="btn">LinkedIn</a>
    <a href="https://github.com/avenkatagiri" target="_blank" aria-label="GitHub" class="btn" style="background: var(--color-surface); color: var(--color-text); border: 1px solid var(--color-muted);">GitHub</a>
    <a href="mailto:avinash.venkatagiri@outlook.com" target="_blank" aria-label="Email" class="btn" style="background: var(--color-surface); color: var(--color-text); border: 1px solid var(--color-muted);">Email</a>
  </div>
</div>

<h2 style="margin-bottom: 1.5rem; text-align: center;">Featured Projects</h2>
<section class="grid">
  {% for project in site.data.projects %}
  <article class="glass">
    <h3 style="margin-top:0;">{{ project.title }}</h3>
    {% if project.complexity %}<span style="font-size: 0.8rem; padding: 0.2rem 0.5rem; background: var(--color-primary); color: white; border-radius: 4px; margin-bottom: 0.5rem; display: inline-block;">{{ project.complexity }}</span>{% endif %}
    <p>{{ project.description }}</p>
    {% if project.image %}<img src="{{ project.image }}" alt="{{ project.title }} thumbnail" style="width:100%; border-radius:12px; margin-top: 0.5rem; object-fit: cover; aspect-ratio: 16/9;" onerror="this.style.display='none'"/>{% endif %}
    
    <div style="margin-top: 1.5rem; display: flex; gap: 0.8rem;">
      {% if project.demo_url %}<a href="{{ project.demo_url }}" class="btn" target="_blank">Demo</a>{% endif %}
      {% if project.repo_url %}<a href="{{ project.repo_url }}" class="btn" style="background: var(--color-surface); color: var(--color-text); border: 1px solid var(--color-muted);" target="_blank">Code</a>{% endif %}
    </div>
  </article>
  {% endfor %}
</section>
