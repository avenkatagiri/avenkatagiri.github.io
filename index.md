---
layout: default
title: Home
---

<div class="hero glass" style="margin-bottom: 3rem; text-align: center;">
  <img src="/assets/img/profile.jpg" alt="Avinash Venkatagiri" class="profile-pic" style="width: 140px; height: 140px; border-radius: 50%; object-fit: cover; margin-bottom: 1rem; border: 4px solid var(--color-primary-light);" onerror="this.src='https://via.placeholder.com/140?text=photo';" />
  <h1 class="accent" style="margin: 0.5rem 0; font-size: 2.5rem; color: #ffffff;">Hey, I'm Avinash.</h1>
  <div style="font-size: 1.1rem; max-width: 800px; margin: 0 auto 2rem auto; line-height: 1.6; text-align: left;">
    <p style="margin-bottom: 1rem;">I’m Avinash Venkatagiri, an AWS Architect specializing in the frontier of autonomous systems. My work centers on building sophisticated multi-agent architectures that transform complex cloud data into actionable intelligence. From designing game changing productivity tools to pioneering multi-agent debate systems like Adversa and Spectrum — I thrive on creating software that feels alive, interactive, and premium.</p>
    <p>A frequent speaker across the cloud ecosystem, I’ve shared strategies at events like Snowflake Data For Breakfast, MongoDB Local, and Databricks Data Intelligence Day. I bridge the technical gap between modern data stacks (Snowflake, MongoDB Atlas, AWS Bedrock) and the next generation of conversational AI. My mission is to architect scalable, elegant solutions that solve real-world problems through agentic reasoning. Currently, I am dedicated to evolving cloud advisory platforms and multi-agent systems that redefine how we interact with technology.</p>
  </div>
  
  <div class="social-links" style="display: flex; gap: 1rem; justify-content: center;">
    <a href="https://www.linkedin.com/in/avinashvenkatagiri/" target="_blank" aria-label="LinkedIn" class="btn" style="background: var(--color-surface); color: var(--color-text); border: 1px solid var(--color-muted);">LinkedIn</a>
    <a href="https://github.com/avenkatagiri" target="_blank" aria-label="GitHub" class="btn" style="background: var(--color-surface); color: var(--color-text); border: 1px solid var(--color-muted);">GitHub</a>
    <a href="mailto:avinash.venkatagiri@outlook.com" target="_blank" aria-label="Email" class="btn" style="background: var(--color-surface); color: var(--color-text); border: 1px solid var(--color-muted);">Email</a>
  </div>
</div>

<h2 style="margin-bottom: 1.5rem; text-align: center;">Featured Projects</h2>
<section class="grid">
  {% assign featured_projects = site.data.projects | where: "featured", true %}
  {% for project in featured_projects %}
  <article class="glass">
    <h3 style="margin-top:0;">{{ project.title }}</h3>
    {% if project.complexity %}<span style="font-size: 0.8rem; padding: 0.2rem 0.5rem; background: var(--color-primary); color: white; border-radius: 4px; margin-bottom: 0.5rem; display: inline-block;">{{ project.complexity }}</span>{% endif %}
    <p>{{ project.description }}</p>
    {% if project.image %}<img src="{{ project.image | relative_url }}" alt="{{ project.title }} thumbnail" style="max-width: 500px; width: 100%; border-radius:12px; margin: 1.5rem auto; display: block; object-fit: contain;" onerror="this.style.display='none'"/>{% endif %}
    
    <div style="margin-top: 1.5rem; display: flex; gap: 0.8rem;">
      {% if project.demo_url %}<a href="{{ project.demo_url }}" class="btn" target="_blank">Demo</a>{% endif %}
      {% if project.repo_url %}<a href="{{ project.repo_url }}" class="btn" style="background: var(--color-surface); color: var(--color-text); border: 1px solid var(--color-muted);" target="_blank">Code</a>{% endif %}
    </div>
  </article>
  {% endfor %}
</section>

<h2 style="margin-top: 4rem; margin-bottom: 1.5rem; text-align: center;">Key Awards & Certs</h2>
<div style="display: flex; gap: 1.5rem; justify-content: center; flex-wrap: wrap; margin-bottom: 4rem;">
{% assign featured_awards = site.data.awards | where: "featured", true %}
{% for award in featured_awards %}
  <a href="{{ award.link }}" target="_blank" style="text-decoration: none; text-align: center; display: flex; flex-direction: column; align-items: center; padding: 1.5rem; border-radius: 12px; transition: transform 0.2s ease, box-shadow 0.2s ease;" class="glass hoverable-glass">
    {% if award.image %}
    <div style="background: white; border-radius: 50%; width: 100px; height: 100px; display: flex; align-items: center; justify-content: center; padding: 0.5rem; margin-bottom: 1rem; box-shadow: 0 4px 12px rgba(0,0,0,0.1);">
      <img src="{{ award.image }}" alt="{{ award.title }}" style="max-width: 100%; max-height: 100%; object-fit: contain;">
    </div>
    {% endif %}
    <h4 style="margin: 0; color: var(--color-text); font-size: 0.95rem; max-width: 180px;">{{ award.title }}</h4>
  </a>
{% endfor %}
</div>
