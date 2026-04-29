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

<h2 style="margin-top: 4rem; margin-bottom: 1.5rem; text-align: center;">Journey</h2>
<div class="timeline-section">
  {% for item in site.data.timeline %}
  <div class="timeline-item">
    <div class="timeline-marker"></div>
    <div class="timeline-content glass hoverable-glass">
      <span class="timeline-year">{{ item.year }}</span>
      <h3 class="timeline-title">{{ item.title }}</h3>
      {% if item.company != "" %}
      <div class="timeline-company">{{ item.company }}</div>
      {% endif %}
      <p class="timeline-desc">{{ item.description }}</p>
      {% if item.logo != "" %}
      <img src="{{ item.logo }}" alt="{{ item.company }} Logo" class="timeline-logo" onerror="this.style.display='none'">
      {% endif %}
    </div>
  </div>
  {% endfor %}
</div>
