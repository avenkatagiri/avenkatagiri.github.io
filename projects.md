---
layout: default
title: Projects
---

<style>
.projects-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  margin-top: 2rem;
}

.project-card {
  border: 1px solid #39ff14;
  border-radius: 6px;
  padding: 1.5rem;
  background: rgba(57, 255, 20, 0.03);
  transition: border-color 0.2s ease, background 0.2s ease;
}

.project-card:hover {
  border-color: #7fff00;
  background: rgba(57, 255, 20, 0.07);
}

.project-card h2 {
  margin-top: 0;
  color: #39ff14;
  border-bottom: 1px solid #333;
  padding-bottom: 0.5rem;
}

.project-thumbnail {
  width: 100%;
  height: 220px;
  border: 1px dashed #555;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #666;
  font-style: italic;
  margin-bottom: 1rem;
  background: rgba(0, 0, 0, 0.3);
  font-size: 0.9rem;
}

/* Uncomment and replace src when adding real images:
.project-thumbnail img {
  width: 100%;
  height: 220px;
  object-fit: cover;
  border-radius: 4px;
  margin-bottom: 1rem;
}
*/

.tech-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
  margin: 1rem 0;
}

.tech-tag {
  background: rgba(57, 255, 20, 0.12);
  color: #39ff14;
  padding: 0.2rem 0.6rem;
  border-radius: 3px;
  font-size: 0.75rem;
  font-family: monospace;
  border: 1px solid rgba(57, 255, 20, 0.25);
}

.project-card p {
  color: #b5e853;
  line-height: 1.6;
}

.project-card ul {
  color: #b5e853;
}

.highlight-list {
  list-style: none;
  padding-left: 0;
}

.highlight-list li::before {
  content: "> ";
  color: #39ff14;
  font-weight: bold;
}

.classified-banner {
  border: 1px solid #ff6600;
  background: rgba(255, 102, 0, 0.05);
  color: #ff6600;
  padding: 0.4rem 0.8rem;
  border-radius: 3px;
  font-size: 0.75rem;
  font-family: monospace;
  display: inline-block;
  margin-bottom: 1rem;
}

.complexity-meter {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin: 0.8rem 0;
  font-family: monospace;
  font-size: 0.85rem;
  color: #b5e853;
}

.complexity-bar {
  display: inline-block;
  height: 8px;
  background: linear-gradient(90deg, #39ff14, #ff6600);
  border-radius: 4px;
}

.section-divider {
  border: none;
  border-top: 1px solid #333;
  margin: 3rem 0;
}

.project-links a {
  color: #39ff14;
  text-decoration: none;
  border: 1px solid #39ff14;
  padding: 0.3rem 0.8rem;
  border-radius: 3px;
  font-size: 0.85rem;
  font-family: monospace;
  transition: background 0.2s ease;
  margin-right: 0.5rem;
}

.project-links a:hover {
  background: rgba(57, 255, 20, 0.15);
}
</style>

# Projects

A selection of things I've built — multi-agent systems, full-stack applications, and AI-powered tools.

<div class="projects-grid">

<!-- ============================================ -->
<!-- PRISM -->
<!-- ============================================ -->
<div class="project-card">

<h2>Spectrum</h2>

<div class="project-thumbnail">
  <!-- Replace with: <img src="assets/img/spectrum-thumb.png" alt="Spectrum screenshot"> -->
  [ screenshot placeholder ]
</div>

<div class="classified-banner">// select details redacted</div>

<p>
Multi-agent cloud advisory system that refracts workload requirements through platform-specialist AI agents. Agents research, debate, and produce comprehensive competitive analysis reports across major cloud and data platforms.
</p>

<ul class="highlight-list">
  <li><strong>6+ specialized agent roles</strong> — Intake, Research, Debate, PDM, Report Generation, and a runtime Onboarding Agent for adding new platforms without code changes</li>
  <li><strong>Graph-based orchestration</strong> — Structured pipeline (Intake &rarr; Research &rarr; Debate &rarr; Report) with dynamic cycles; debate rounds loop until convergence criteria are met</li>
  <li><strong>Live multi-agent debate</strong> — Platform advocates argue across 8 scoring dimensions with user-steered injection points between rounds</li>
  <li><strong>Custom MCP server</strong> — Real-time pricing aggregation across multiple cloud providers via a unified FastMCP Lambda behind an API gateway with OAuth2 auth</li>
  <li><strong>Exportable deliverables</strong> — Auto-generated Word/PDF reports with comparison tables, architecture diagrams, recommendation matrices, and draft outreach emails</li>
  <li><strong>Conversational intake</strong> — "Speccy" mode uses LLM extraction over SSE streaming to build workload profiles from natural language</li>
</ul>

<div class="complexity-meter">
  Complexity: <span class="complexity-bar" style="width: 180px;"></span> multi-agent graph + MCP + debate cycles
</div>

<div class="tech-tags">
  <span class="tech-tag">Python</span>
  <span class="tech-tag">Strands Agents SDK</span>
  <span class="tech-tag">Graph Orchestration</span>
  <span class="tech-tag">Amazon Bedrock</span>
  <span class="tech-tag">MCP (stdio + HTTP)</span>
  <span class="tech-tag">FastMCP</span>
  <span class="tech-tag">FastAPI</span>
  <span class="tech-tag">SSE Streaming</span>
  <span class="tech-tag">Lambda</span>
  <span class="tech-tag">Cognito OAuth2</span>
  <span class="tech-tag">python-docx</span>
  <span class="tech-tag">reportlab</span>
</div>

</div>

<!-- ============================================ -->
<!-- VIVAHNYAY -->
<!-- ============================================ -->
<div class="project-card">

<h2>Adversa</h2>

<div class="project-thumbnail">
  <!-- Replace with: <img src="assets/img/adversa-thumb.png" alt="Adversa screenshot"> -->
  [ screenshot placeholder ]
</div>

<div class="classified-banner">// select details redacted</div>

<p>
Multi-agent legal debate system that models adversarial proceedings. Six specialized AI agents — researcher, advocates for each party, mediator, strategy advisor, and settlement analyst — argue both sides of a case through structured rounds with rebuttal exchanges.
</p>

<ul class="highlight-list">
  <li><strong>6-agent adversarial debate</strong> — Petitioner and Respondent advocates present arguments, with a Mediator and Strategy Advisor shaping the discourse across up to 5 rebuttal exchanges per round</li>
  <li><strong>Step-by-step user control</strong> — Pause after each advocate's argument, inject guidance, then watch the opposing side respond with targeted rebuttals</li>
  <li><strong>RAG-powered legal knowledge</strong> — Statutory texts indexed in ChromaDB for retrieval-augmented generation, with optional real-time case law search integration</li>
  <li><strong>Settlement analysis engine</strong> — Financial modeling for maintenance and lump-sum calculations based on judicial guidelines</li>
  <li><strong>Full case management</strong> — Multi-case support with party details, hearing timelines, history tracking, and JWT-authenticated user sessions</li>
</ul>

<div class="complexity-meter">
  Complexity: <span class="complexity-bar" style="width: 160px;"></span> multi-agent debate + RAG + legal reasoning
</div>

<div class="tech-tags">
  <span class="tech-tag">Python</span>
  <span class="tech-tag">Strands Agents SDK</span>
  <span class="tech-tag">Amazon Bedrock</span>
  <span class="tech-tag">ChromaDB</span>
  <span class="tech-tag">RAG</span>
  <span class="tech-tag">FastAPI</span>
  <span class="tech-tag">SQLite</span>
  <span class="tech-tag">JWT Auth</span>
  <span class="tech-tag">PBKDF2-SHA256</span>
</div>

</div>

<!-- ============================================ -->
<!-- AWS MARKETPLACE LISTING AUTOMATION AGENT -->
<!-- ============================================ -->
<div class="project-card">

<h2>AWS Marketplace Listing Automation Agent</h2>

<div class="project-thumbnail">
  <!-- Replace with: <img src="assets/img/aws-marketplace-thumb.png" alt="AWS Marketplace Agent screenshot"> -->
  [ screenshot placeholder ]
</div>

<p>
AI-powered portal that guides AWS Partners through end-to-end AWS Marketplace seller onboarding — from registration to SaaS product listing creation. Conversational AI agents assist at each step of the process.
</p>

<ul class="highlight-list">
  <li><strong>Multi-agent pipeline</strong> — Specialized agents for seller registration, SaaS product creation, deployment, buyer experience, metering, and public visibility</li>
  <li><strong>Amazon Bedrock AgentCore Runtime</strong> — Agents deployed on managed infrastructure with ARM64 builds via CodeBuild</li>
  <li><strong>Production-grade auth</strong> — Next.js frontend on ECS Fargate behind ALB with Cognito authentication</li>
  <li><strong>Zero Docker required</strong> — Fully cloud-native deployment pipeline using AWS CodeBuild for both backend (ARM64) and frontend (AMD64)</li>
</ul>

<div class="tech-tags">
  <span class="tech-tag">Python</span>
  <span class="tech-tag">Next.js</span>
  <span class="tech-tag">Amazon Bedrock</span>
  <span class="tech-tag">AgentCore Runtime</span>
  <span class="tech-tag">ECS Fargate</span>
  <span class="tech-tag">ALB</span>
  <span class="tech-tag">Cognito</span>
  <span class="tech-tag">CodeBuild</span>
</div>

<div class="project-links">
  <a href="https://github.com/aws-samples/sample-aws-marketplace-product-listing" target="_blank">github</a>
</div>

</div>

<!-- ============================================ -->
<!-- CONVERSATION TUTOR -->
<!-- ============================================ -->
<div class="project-card">

<h2>Conversation Tutor</h2>

<div class="project-thumbnail">
  <!-- Replace with: <img src="assets/img/convtutor-thumb.png" alt="Conversation Tutor screenshot"> -->
  [ screenshot placeholder ]
</div>

<p>
AI-powered practice tool for rehearsing real-world conversations. Choose from 14 role targets across dating, office, interview, social, and networking categories — or create your own. Each session provides real-time EQ analysis and actionable feedback.
</p>

<ul class="highlight-list">
  <li><strong>Live EQ analysis</strong> — Side panel tracks conversation quality (Great &rarr; Hostile) with a radar chart scoring empathy, assertiveness, active listening, clarity, and emotional regulation</li>
  <li><strong>Tunable AI personas</strong> — Five personality sliders (Warmth, Patience, Directness, Difficulty, Talkativeness) shape how the AI responds</li>
  <li><strong>Branching conversations</strong> — Rewind to any message and explore alternative paths; branches are preserved and switchable</li>
  <li><strong>Voice mode</strong> — Speak your messages via browser speech recognition; AI responds with Amazon Polly character voices</li>
  <li><strong>Progress tracking</strong> — EQ trend line charts across sessions with per-dimension toggle filters and category filtering</li>
  <li><strong>Real-world grounding</strong> — Paste LinkedIn profiles, dating bios, or meeting agendas to ground the AI in specific context</li>
</ul>

<div class="tech-tags">
  <span class="tech-tag">React</span>
  <span class="tech-tag">Express</span>
  <span class="tech-tag">Amazon Bedrock</span>
  <span class="tech-tag">Claude</span>
  <span class="tech-tag">Amazon Polly</span>
  <span class="tech-tag">Web Speech API</span>
  <span class="tech-tag">PostgreSQL / SQLite</span>
  <span class="tech-tag">Vitest</span>
</div>

</div>

<!-- ============================================ -->
<!-- FINANCE APP -->
<!-- ============================================ -->
<div class="project-card">

<h2>Finance App</h2>

<div class="project-thumbnail">
  <!-- Replace with: <img src="assets/img/finance-app-thumb.png" alt="Finance App screenshot"> -->
  [ screenshot placeholder ]
</div>

<p>
Self-hosted financial management system for ingesting bank statements (CSV/Excel/PDF), AI-powered transaction categorization, and visualizing financial health through a high-fidelity dashboard and net worth tracker.
</p>

<ul class="highlight-list">
  <li><strong>Smart categorization</strong> — Uses Google Gemini or built-in heuristics to automatically categorize transactions</li>
  <li><strong>Investment portfolio</strong> — Track stocks, mutual funds, and gold with inline-editable fields; auto-calculates current value and P&L</li>
  <li><strong>Net worth tracking</strong> — Assets vs liabilities visualization with auto-generated history charts and goal-setting</li>
  <li><strong>Multi-bank parsers</strong> — Robust parsers for HDFC, SBI, HSBC, and more (savings, credit cards, fixed deposits)</li>
  <li><strong>Glassmorphic UI</strong> — Modern responsive design built with React and vanilla CSS</li>
</ul>

<div class="tech-tags">
  <span class="tech-tag">React</span>
  <span class="tech-tag">TypeScript</span>
  <span class="tech-tag">Node.js</span>
  <span class="tech-tag">MongoDB</span>
  <span class="tech-tag">Google Gemini</span>
  <span class="tech-tag">Mongoose</span>
</div>

</div>

</div>
