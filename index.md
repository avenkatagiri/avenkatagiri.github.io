---
layout: default
title: Home
---

<style>
.profile-section {
  display: flex;
  gap: 2rem;
  align-items: flex-start;
  margin-bottom: 2rem;
}

.profile-pic {
  width: 160px;
  height: 160px;
  border-radius: 50%;
  border: 2px solid #39ff14;
  flex-shrink: 0;
  object-fit: cover;
}

.profile-pic-placeholder {
  width: 160px;
  height: 160px;
  border-radius: 50%;
  border: 2px dashed #555;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #666;
  font-style: italic;
  font-size: 0.8rem;
  background: rgba(0, 0, 0, 0.3);
}

.profile-bio {
  flex: 1;
}

.profile-bio h1 {
  margin-top: 0;
}

.profile-bio p {
  color: #b5e853;
  line-height: 1.7;
}

.social-links {
  display: flex;
  gap: 0.8rem;
  margin-top: 1.2rem;
  flex-wrap: wrap;
}

.social-links a {
  color: #39ff14;
  text-decoration: none;
  border: 1px solid #39ff14;
  padding: 0.3rem 0.8rem;
  border-radius: 3px;
  font-size: 0.85rem;
  font-family: monospace;
  transition: background 0.2s ease;
}

.social-links a:hover {
  background: rgba(57, 255, 20, 0.15);
}

@media (max-width: 600px) {
  .profile-section {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
  .social-links {
    justify-content: center;
  }
}
</style>

<div class="profile-section">

  <!-- Replace placeholder with: <img class="profile-pic" src="assets/img/profile.jpg" alt="Avi Venkatagiri"> -->
  <div class="profile-pic-placeholder">[ photo ]</div>

  <div class="profile-bio">

  <h1>Hey, I'm Avi</h1>

  <p>
    <!-- Update this bio with your own details -->
    I build AI-powered multi-agent systems, full-stack applications, and developer tools. Currently focused on agentic architectures, cloud advisory platforms, and conversational AI.
  </p>

  <div class="social-links">
    <a href="https://www.linkedin.com/in/avinashvenkatagiri/" target="_blank">linkedin</a>
    <a href="https://github.com/avenkatagiri" target="_blank">github</a>
    <a href="mailto:avinash.venkatagiri@outlook.com" target="_blank">email</a>
  </div>

  </div>
</div>

---

**[View my projects &rarr;](projects)**
