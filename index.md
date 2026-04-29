---
layout: default
title: Home
---

<div class="hero glass" style="margin-bottom: 3rem; text-align: center;">
  <img src="/assets/img/profile.jpg" alt="Avinash Venkatagiri" class="profile-pic" style="width: 140px; height: 140px; border-radius: 50%; object-fit: cover; margin-bottom: 1rem; border: 4px solid var(--color-primary-light);" onerror="this.src='https://via.placeholder.com/140?text=photo';" />
  <h1 class="accent" style="margin: 0.5rem 0; font-size: 2.5rem; color: #ffffff;">Hey, I'm Avinash.</h1>
  <div style="font-size: 1.1rem; max-width: 800px; margin: 0 auto 2rem auto; line-height: 1.6; text-align: left;">
    <p style="margin-bottom: 1rem;">I’m Avinash Venkatagiri, an AWS Architect whose career spans the intersection of heavy engineering, predictive analytics, and the frontier of autonomous AI. My journey began in Mechanical Engineering, evolving into building condition-monitoring and predictive engines for industrial giants like Caterpillar and GE Digital. After driving pre-sales architecture for IIoT startups, I transitioned to Amazon Web Services (AWS), where I now focus on integrating modern data stacks (Snowflake, MongoDB Atlas, AWS Bedrock) and pioneering sophisticated multi-agent architectures.</p>
    <p>I thrive on creating software that bridges complex cloud data with actionable intelligence—from designing game-changing productivity tools to engineering multi-agent debate systems like Adversa and Spectrum. Beyond architecture, I actively share my strategies across the cloud ecosystem; whether through my technical writing on industrial integrations (Cognite, MachineMetrics) and customer engagement (MoEngage, Amazon Connect), or speaking at premier industry events like Snowflake Data For Breakfast and Databricks Data Intelligence Day. My mission remains constant: to architect elegant, scalable solutions that solve real-world problems through agentic reasoning.</p>
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
  {% assign marker_category = item.categories | first %}
  {% assign marker_class = marker_category | replace: " ", "-" | replace: "&", "and" | downcase %}
  <div class="timeline-item">
    <div class="timeline-marker marker-{{ marker_class }}"></div>
    <div class="timeline-content glass hoverable-glass">
      <span class="timeline-year">{{ item.from }} &mdash; {{ item.to }}</span>
      
      <div class="timeline-categories">
        {% for category in item.categories %}
        {% assign cat_class = category | replace: " ", "-" | replace: "&", "and" | downcase %}
        <span class="timeline-category tag-{{ cat_class }}">{{ category }}</span>
        {% endfor %}
      </div>

      <h3 class="timeline-title">{{ item.title }}</h3>
      
      {% if item.company != "" and item.company != nil %}
      <div class="timeline-company-container" style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.5rem;">
        <div class="timeline-company" style="margin-bottom: 0;">{{ item.company }}</div>
        {% if item.logo != "" and item.logo != nil %}
        <img src="{{ item.logo }}" alt="{{ item.company }} Logo" class="timeline-logo" style="margin-top: 0; height: 24px; padding: 0.2rem;" onerror="this.style.display='none'">
        {% endif %}
      </div>
      {% endif %}
      
      <p class="timeline-desc">{{ item.description }}</p>
      
      {% if item.links %}
      <div class="timeline-links">
        {% for link in item.links %}
        <a href="{{ link.url }}" class="timeline-link-pill">
          {% if link.type == 'blog' %}📝{% elsif link.type == 'speaking' %}🎤{% elsif link.type == 'project' %}💻{% else %}🔗{% endif %}
          {{ link.title }}
        </a>
        {% endfor %}
      </div>
      {% endif %}
    </div>
  </div>
  {% endfor %}
</div>
