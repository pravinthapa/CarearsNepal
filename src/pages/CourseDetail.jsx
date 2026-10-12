import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import FAQAccordion from '../components/FAQAccordion';

const COURSE_CONTENT = {
  'ai-software-developer': {
    slug: 'ai-software-developer',
    title: 'AI Software Developer',
    headline: 'Become an AI Software Developer Companies Actually Want to Hire',
    sub: "A 12-week, AI-native development program built for the global remote market. You'll ship real production code with Claude, Cursor, and modern tooling — the way teams actually build in 2026.",
    price: 'NPR 35,000',
    originalPrice: 'NPR 45,000',
    duration: '12 weeks',
    hours: '120 hours',
    instructorName: 'Suparth Ghimire',
    instructorRole: 'Senior Software Engineer',
    instructorBio: 'Senior Software Engineer building scalable backend systems, AI agents, and web applications for global tech companies.',
    instructorImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop&q=80',
    stages: [
      { week: 'Weeks 1–2', num: '01', title: 'JS/TS, Next.js, Git, Cursor, Tailwind, Vercel', name: 'Stage 01 · Foundation', desc: 'Comfortable with code → Comfortable with shipping', topics: ['Modern JS/TS', 'Next.js 16', 'Git + branching', 'Cursor mastery', 'Tailwind v4', 'Deploy to Vercel'], deliverable: 'Build and deploy a styled, responsive site using Next.js and push it live via Vercel.' },
      { week: 'Weeks 3–5', num: '02', title: 'Postgres, Drizzle, Auth flows, Server actions, REST/tRPC, Testing', name: 'Stage 02 · Build', desc: 'Pages and components → Databases, auth, APIs', topics: ['Postgres + Drizzle', 'Auth flows', 'Server actions', 'REST + tRPC', 'Background jobs', 'Testing'], deliverable: 'Build a full-stack app with working login, a real database, and tested API endpoints.' },
      { week: 'Weeks 6–8', num: '03', title: 'Claude API, Tool use, RAG, Vector search, Streaming UI, Eval harness', name: 'Stage 03 · AI-Native', desc: 'Building forms → Building agents that act', topics: ['Claude API', 'Tool use', 'RAG + embeddings', 'Vector search', 'Streaming UI', 'Eval harness'], deliverable: 'Integrate Claude into a real app — with tool use, RAG pipelines, and streaming responses.' },
      { week: 'Weeks 9–10', num: '04', title: 'GitHub Actions, Monitoring, Error tracking, Caching, Edge runtimes, Security', name: 'Stage 04 · Production', desc: 'Localhost → Observability, CI/CD, on-call', topics: ['GitHub Actions', 'Monitoring', 'Error tracking', 'Caching', 'Edge runtimes', 'Security basics'], deliverable: 'Set up CI/CD, catch errors in production, and secure and scale an app for real users.' },
      { week: 'Weeks 11–12', num: '05', title: 'Capstone, Public launch, Portfolio review, Loom intro, Interview drills, Outreach', name: 'Stage 05 · Launch', desc: 'Capstone shipped → Hiring conversations begin', topics: ['Capstone build', 'Public launch', 'Portfolio review', 'Loom intro', 'Interview drills', 'Outreach'], deliverable: 'Launch a real product publicly, present your work on camera, and walk into interviews ready.' }
    ],
    projects: [
      { tag: 'Project · Week 04', title: 'Claude API + function calling + Postgres', desc: 'Build an AI agent that reads a knowledge base and resolves support tickets autonomously.', stack: ['Next.js', 'Claude API', 'Postgres'] },
      { tag: 'Project · Week 07', title: 'WebSockets + Postgres CRDTs + AI suggestions', desc: 'Build a realtime collab tool with live presence and inline AI assistance.', stack: ['TypeScript', 'WebSockets', 'Postgres'] },
      { tag: 'Capstone · Week 11', title: 'Full-stack SaaS + Stripe + Auth + AI + Deploy', desc: 'Take an idea from zero to a live, paying-user-ready SaaS product.', stack: ['Stripe', 'Auth', 'AI', 'Domain'] }
    ],
    faqs: [
      { question: 'Who is this program for?', answer: 'Anyone with basic programming exposure who wants to develop at a global standard — students about to graduate, junior devs looking to level up, career-switchers from related fields.' },
      { question: 'Is this really the first AI-native development program in Nepal?', answer: 'Yes. Most Nepali courses still teach pre-AI workflows. This is the first cohort built around Claude, Cursor, and modern production development as the default environment.' },
      { question: "What's the time commitment?", answer: 'Live sessions are Mon–Fri, 7am–9am NPT. Plan another 8–12 hours per week for project work and code review.' },
      { question: 'I don\'t have a Global IME dollar card. Will I still get the $10?', answer: 'We\'ll guide you through opening one in week one. Once your card is active, we credit $10 USD directly to it.' }
    ]
  },
  'ai-growth-marketer': {
    slug: 'ai-growth-marketer',
    title: 'AI Growth Marketer',
    headline: 'Become an AI Growth Marketer Companies Actually Want to Hire',
    sub: "A 12-week, AI-native growth marketing program. Learn Product-Led Growth, Meta Ads, AEO, and AI content loops from practitioners currently working for US/EU remote startups.",
    price: 'NPR 35,000',
    originalPrice: 'NPR 45,000',
    duration: '12 weeks',
    hours: '120 hours',
    instructorName: 'Rohan Gurung',
    instructorRole: 'Head of Growth',
    instructorBio: 'Scaled multiple D2C brands and SaaS startups from zero to $250k+ monthly revenue using AI content engines.',
    instructorImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&auto=format&fit=crop&q=80',
    stages: [
      { week: 'Weeks 1–2', num: '01', title: 'AARRR Funnel, PLG Principles & AI Research Loops', name: 'Stage 01 · Foundations', desc: 'Manual boosting → Data-driven growth strategy', topics: ['AARRR Funnel', 'CAC/LTV Math', 'Perplexity Research', 'Notion AI', 'GA4 Setup'], deliverable: 'Develop a complete growth audit & conversion funnel map for a live business.' },
      { week: 'Weeks 3–5', num: '02', title: 'Meta Ads Manager, Advantage+ & Creative Prompt Engineering', name: 'Stage 02 · Paid Acquisition', desc: 'Random ad spend → Scalable paid campaigns', topics: ['Meta Ads', 'Midjourney Creatives', 'Ad Copy Prompting', 'ROAS Optimization'], deliverable: 'Launch a live Meta Ad campaign on an actual budget and analyze conversion metrics.' },
      { week: 'Weeks 6–8', num: '03', title: 'Search Engine & AI Engine Optimization (SEO/AEO/GEO)', name: 'Stage 03 · AI Search Ranking', desc: 'Google ranking → Ranking on ChatGPT & Perplexity', topics: ['Perplexity Ranking', 'SearchGPT SEO', 'SurferSEO', 'Schema Markup'], deliverable: 'Optimize a client web property to rank on AI answer engines like ChatGPT.' },
      { week: 'Weeks 9–10', num: '04', title: 'Automated Outreach & Lead Generation Workflows', name: 'Stage 04 · Lead Gen Automation', desc: 'Manual DMs → Automated B2B lead engines', topics: ['Clay.com', 'Apollo.io', 'Make.com', 'Cold Email AI'], deliverable: 'Build an automated lead enrichment workflow sending 500+ personalized emails weekly.' },
      { week: 'Weeks 11–12', num: '05', title: 'Growth Analytics, Dashboarding & Client Reporting', name: 'Stage 05 · Portfolio Launch', desc: 'Campaign manager → Fractional Growth Lead', topics: ['Looker Studio', 'A/B Testing', 'Growth Dashboards', 'Client Pitch'], deliverable: 'Present your live growth results & portfolio in front of global hiring managers.' }
    ],
    projects: [
      { tag: 'Project · Week 04', title: 'Live Meta Ad Campaign Execution', desc: 'Design ad creative with AI, write copy using prompt engineering, set targeting, and track live ROAS.', stack: ['Meta Ads', 'Midjourney', 'GA4'] },
      { tag: 'Project · Week 08', title: 'AI Answer Engine (AEO) Optimization', desc: 'Optimize brand knowledge bases to appear as primary cited answers in Perplexity and SearchGPT.', stack: ['Perplexity', 'SurferSEO', 'AEO'] },
      { tag: 'Capstone · Week 11', title: 'Automated Lead Gen & Pipeline Engine', desc: 'Scrape target leads, enrich data using Gemini API, and launch automated outreach via Make.com.', stack: ['Clay', 'Make.com', 'Apollo'] }
    ],
    faqs: [
      { question: 'Will I run real ad campaigns during the course?', answer: 'Yes! Students work on actual live ad budgets to test ad creatives, audience targeting, and funnel conversion.' },
      { question: 'Do I need prior marketing experience?', answer: 'Basic familiarity with social media or digital tools is helpful, but the course teaches growth frameworks from first principles.' }
    ]
  },
  'ai-agentic-automation': {
    slug: 'ai-agentic-automation',
    title: 'AI Agents & Automation',
    headline: 'Become an AI Agents & Automation Specialist',
    sub: "An 8-week, hands-on automation program. Build autonomous AI agents using Make.com, N8N, OpenAI Assistants API, and CrewAI for global businesses.",
    price: 'NPR 25,000',
    originalPrice: 'NPR 35,000',
    duration: '8 weeks',
    hours: '48 hours',
    instructorName: 'Aayush Adhikari',
    instructorRole: 'AI Automation Specialist',
    instructorBio: 'Built over 150+ custom AI agents and enterprise automation workflows for global agency clients.',
    instructorImage: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&auto=format&fit=crop&q=80',
    stages: [
      { week: 'Weeks 1–2', num: '01', title: 'Make.com, Webhooks & REST API Integration', name: 'Stage 01 · No-Code Workflows', desc: 'Manual tasks → Automated webhook scenarios', topics: ['Make.com', 'Webhooks', 'REST APIs', 'JSON Payloads', 'Airtable'], deliverable: 'Build a multi-app automated data router syncing Gmail, Sheets, and Slack.' },
      { week: 'Weeks 3–4', num: '02', title: 'OpenAI Assistants API, Claude API & System Prompts', name: 'Stage 02 · Custom AI Agents', desc: 'Basic ChatGPT → Custom API Agents', topics: ['OpenAI Assistants API', 'Claude API', 'Function Calling', 'System Prompts'], deliverable: 'Build an autonomous customer support bot that resolves tickets based on internal documentation.' },
      { week: 'Weeks 5–6', num: '03', title: 'Self-Hosted N8N & Enterprise Automation', name: 'Stage 03 · Enterprise N8N', desc: 'Cloud Zapier → Self-hosted N8N pipelines', topics: ['N8N Workflows', 'Docker', 'PostgreSQL', 'Telegram API'], deliverable: 'Deploy a self-hosted N8N automated invoice and receipt extraction agent.' },
      { week: 'Weeks 7–8', num: '04', title: 'Multi-Agent Orchestration & Client Handoff', name: 'Stage 04 · Multi-Agent Systems', desc: 'Single agent → Multi-agent autonomous team', topics: ['CrewAI', 'LangChain', 'Python Scripts', 'Agency Service Packaging'], deliverable: 'Build an autonomous multi-agent content agency workflow that researches, writes, and schedules posts.' }
    ],
    projects: [
      { tag: 'Project · Week 03', title: 'Support Ticket Auto-Responder Agent', desc: 'Build an AI assistant that reads incoming emails, queries Pinecone vector docs, and drafts replies.', stack: ['Make.com', 'OpenAI API', 'Pinecone'] },
      { tag: 'Project · Week 05', title: 'Self-Hosted Invoice Processing N8N Agent', desc: 'Extract data from PDF invoices using vision LLMs and write structured financial rows to Postgres.', stack: ['N8N', 'Docker', 'Postgres'] },
      { tag: 'Capstone · Week 08', title: 'Autonomous Content Agency Multi-Agent Pipeline', desc: 'Orchestrate research, drafting, reviewing, and publishing agents using CrewAI and Python.', stack: ['CrewAI', 'Python', 'LangGraph'] }
    ],
    faqs: [
      { question: 'Is coding required for the AI Agents & Automation track?', answer: 'No heavy coding background required! The course starts with no-code tools like Make.com and builds up to low-code Python scripts.' },
      { question: 'What tools are included?', answer: 'We cover Make.com, Zapier, N8N, OpenAI API, Claude API, and CrewAI.' }
    ]
  }
};

export default function CourseDetail({ onOpenInquiry }) {
  const { courseId } = useParams();
  const course = COURSE_CONTENT[courseId] || COURSE_CONTENT['ai-software-developer'];

  return (
    <div className="ase-page">
      
      {/* Top Notification Banner */}
      <div className="top-banner">
        <span className="pulse"></span>
        <span><strong>First-in-Nepal cohort</strong> <span className="hide-sm">— {course.title} track</span></span>
        <span className="sep">·</span>
        <span>Starts July 17, 2026</span>
        <span className="sep hide-sm">·</span>
        <span className="hide-sm"><Link to={`/enroll?course=${course.slug}`}>25 seats →</Link></span>
      </div>

      {/* Hero Section */}
      <section className="hero">
        <div className="wrap">
          <div className="hero-grid">
            <div>
              <div className="chip">
                <span className="flag">🇳🇵</span>
                <span>First in Nepal</span>
                <span className="pill">Cohort 02</span>
              </div>
              <h1>{course.headline}</h1>
              <p className="sub">{course.sub}</p>
              
              <div className="ctas">
                <button type="button" className="btn btn-accent btn-lg" onClick={() => onOpenInquiry(course.title)}>
                  Send Inquiry <span className="btn-arrow">→</span>
                </button>
                <Link to={`/enroll?course=${course.slug}`} className="btn btn-ghost btn-lg">
                  Enroll Now
                </Link>
              </div>

              <div className="price-strip">
                <div className="item">
                  <div className="k">Early bird fee</div>
                  <div className="v">{course.price} <span className="strike">{course.originalPrice}</span></div>
                </div>
                <div className="item">
                  <div className="k">Starts</div>
                  <div className="v">July 17, 2026</div>
                </div>
                <div className="item">
                  <div className="k">Seats</div>
                  <div className="v">25 only <span className="save">· filling fast</span></div>
                </div>
              </div>
            </div>

            {/* IDE Workspace Frame Mockup */}
            <div style={{ position: 'relative' }}>
              <div className="workspace">
                <div className="frame">
                  <div className="titlebar">
                    <div className="dot d1"></div>
                    <div className="dot d2"></div>
                    <div className="dot d3"></div>
                    <div className="file"><span style={{ opacity: 0.6 }}>app/</span><span>page.tsx</span></div>
                    <div className="branch"><span>⎇</span> main · 0 changes</div>
                  </div>
                  <div className="ide">
                    <div className="sidebar">
                      <div className="group">Workspace</div>
                      <div className="file-row tsx"><span className="ic"></span>layout.tsx</div>
                      <div className="file-row tsx active"><span className="ic"></span>page.tsx</div>
                      <div className="file-row py"><span className="ic"></span>api/agent.py</div>
                      <div className="file-row md"><span className="ic"></span>README.md</div>
                      <div className="group" style={{ marginTop: '8px' }}>Generated</div>
                      <div className="file-row tsx"><span className="ic"></span>auth/route.ts</div>
                    </div>
                    <div className="editor">
                      <div className="line"><span className="ln">1</span><span><span className="tk-key">import</span> <span className="tk-var">{'{ Hero, Pricing }'}</span> <span className="tk-key">from</span> <span className="tk-str">"@/components"</span>;</span></div>
                      <div className="line"><span className="ln">2</span><span><span className="tk-key">import</span> <span className="tk-var">claude</span> <span className="tk-key">from</span> <span className="tk-str">"@anthropic-ai/sdk"</span>;</span></div>
                      <div className="line"><span className="ln">3</span><span> </span></div>
                      <div className="line"><span className="ln">4</span><span className="tk-com">// Generated by you + Claude</span></div>
                      <div className="line"><span className="ln">5</span><span><span className="tk-key">export default</span> <span className="tk-key">async function</span> <span className="tk-fn">Page</span>() {'{'}</span></div>
                      <div className="line"><span className="ln">6</span><span><span className="tk-key">const</span> <span className="tk-var">user</span> = <span className="tk-key">await</span> <span className="tk-fn">getUser</span>();</span></div>
                      <div className="line"><span className="ln">7</span><span><span className="tk-key">return</span> {'{'}</span></div>
                      <div className="line"><span className="ln">8</span><span><span className="typed"></span><span className="caret"></span></span></div>
                      <div className="line"><span className="ln">9</span><span>  {'}'};</span></div>
                      <div className="line"><span className="ln">10</span><span>{'}'}</span></div>
                    </div>
                  </div>
                  <div className="terminal"></div>
                </div>

                <div className="hero-floats">
                  <div className="hero-float deploy">
                    <div className="icon-wrap">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                        <path d="M20 6 9 17l-5-5"></path>
                      </svg>
                    </div>
                    <div>
                      <div className="label">Shipped to prod</div>
                      <div className="sub">38s · Vercel · 0 errors</div>
                    </div>
                  </div>

                  <div className="hero-float pr">
                    <div className="icon-wrap" style={{ background: '#fff3e0', color: '#c78731' }}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                        <circle cx="6" cy="6" r="3"></circle>
                        <circle cx="6" cy="18" r="3"></circle>
                        <circle cx="18" cy="18" r="3"></circle>
                      </svg>
                    </div>
                    <div>
                      <div className="label">PR #142 approved</div>
                      <div className="sub">Reviewed by Claude</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Endorsed Logo Strip */}
          <div className="endorsed">
            <p>Recognised at &amp; partnered with</p>
            <div className="logos">
              <span className="font-headline font-bold text-zinc-600 tracking-wider">Softwarica</span>
              <span className="font-headline font-bold text-zinc-600 tracking-wider">King's College</span>
              <span className="font-headline font-bold text-zinc-600 tracking-wider">Texas Int.</span>
              <span className="font-headline font-bold text-zinc-600 tracking-wider">PMC</span>
              <span className="font-headline font-bold text-zinc-600 tracking-wider">Rotaract</span>
              <span className="font-headline font-bold text-zinc-600 tracking-wider">AIESEC</span>
            </div>
          </div>
        </div>
      </section>

      {/* Marquee Positioning Bar */}
      <section className="positioning">
        <div className="marquee-wrap">
          <div className="marquee">
            <span className="item"><span className="star">✦</span>First in Nepal</span>
            <span className="item"><span className="star">✦</span>AI-Native Workflows</span>
            <span className="item"><span className="star">✦</span>Remote Job Ready</span>
            <span className="item"><span className="star">✦</span>Global Hiring Standards</span>
            <span className="item"><span className="star">✦</span>Production-Grade Mindset</span>
            <span className="item"><span className="star">✦</span>First in Nepal</span>
            <span className="item"><span className="star">✦</span>AI-Native Workflows</span>
          </div>
        </div>
      </section>

      {/* Section 1: Why this is different */}
      <section className="section" id="why">
        <div className="wrap">
          <div className="section-head split">
            <div>
              <span className="eyebrow"><span className="dot"></span>Why this is different</span>
              <h2 className="h-section" style={{ marginTop: '16px' }}>
                Not another tutorial course.<br />
                <span className="muted">A production development apprenticeship.</span>
              </h2>
            </div>
            <div className="right">
              <p className="lead">
                Most courses teach you to <em>finish lessons</em>. This one teaches you to <strong>ship like a real team</strong> — with AI tools, code review, deployment pipelines, and async remote habits.
              </p>
            </div>
          </div>

          <div className="diff-grid">
            <div className="diff-card">
              <div className="num"><span>01</span><span style={{ color: 'var(--crimson-peak)' }}>Not a tutorial course</span></div>
              <h3>You ship to production, not localhost</h3>
              <p>Every module ends in a deploy. Real domains. Real users. Real Git history a recruiter can open.</p>
            </div>

            <div className="diff-card">
              <div className="num"><span>02</span><span style={{ color: 'var(--crimson-peak)' }}>Not theory-heavy</span></div>
              <h3>AI is your pair, not a topic</h3>
              <p>From day one, you build alongside Claude and Cursor — the way every modern developer works. No "AI module" tacked on. It's in everything.</p>
            </div>

            <div className="diff-card">
              <div className="num"><span>03</span><span style={{ color: 'var(--crimson-peak)' }}>Not local-only</span></div>
              <h3>Built to the global hiring bar</h3>
              <p>Your portfolio, code style, communication, async habits — all calibrated against what foreign teams expect. Designed to make you hireable beyond Nepal.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Dark Philosophy */}
      <section className="section dark">
        <div className="wrap">
          <div className="philosophy-grid">
            <div>
              <span className="eyebrow on-dark"><span className="dot"></span>AI-Native development</span>
              <h2 className="h-section" style={{ marginTop: '16px' }}>
                How modern practitioners <span style={{ color: 'var(--crimson-peak)', fontStyle: 'italic', fontWeight: 500 }}>actually</span> build.
              </h2>
              <p className="lead" style={{ marginTop: '20px' }}>
                The old way: learn syntax, do exercises, build a tutorial app, hope someone hires you. The new way: build with AI from day one, ship to production every week, develop the taste that separates professionals from typists.
              </p>

              <div style={{ marginTop: '28px' }}>
                <div className="compare">
                  <div className="col bad">
                    <div className="h">Old way</div>
                    <div className="li"><span className="x">×</span>Watch 40 hours of video</div>
                    <div className="li"><span className="x">×</span>Build TodoMVC on localhost</div>
                    <div className="li"><span className="x">×</span>Solo, in isolation</div>
                  </div>
                  <div className="col good">
                    <div className="h">This program</div>
                    <div className="li"><span className="c">✓</span>Pair with Claude every session</div>
                    <div className="li"><span className="c">✓</span>Ship real apps to real users</div>
                    <div className="li"><span className="c">✓</span>Async + code review like a real team</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="stack">
              <div className="belief">
                <div className="ic">1</div>
                <div>
                  <h4>AI is your environment, not a tool.</h4>
                  <p>We don't teach "prompting" as a unit. Claude, Cursor, and Copilot are open in every session.</p>
                </div>
              </div>
              <div className="belief">
                <div className="ic">2</div>
                <div>
                  <h4>Read code more than you write it.</h4>
                  <p>Real development is reading PRs, diffs, agent output, and production logs critically.</p>
                </div>
              </div>
              <div className="belief">
                <div className="ic">3</div>
                <div>
                  <h4>Taste is the new bottleneck.</h4>
                  <p>Anyone can generate 1,000 lines now. The differentiator is what you choose to keep, refactor, or throw away.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Roadmap */}
      <section className="section" id="roadmap" style={{ background: '#FBFBFA' }}>
        <div className="wrap">
          <div className="section-head split">
            <div>
              <span className="eyebrow"><span className="dot"></span>The Roadmap</span>
              <h2 className="h-section" style={{ marginTop: '16px' }}>
                {course.duration}. 5 stages.<br />
                <span className="muted">Production deploys.</span>
              </h2>
            </div>
            <div className="right">
              <p className="lead">Each stage ends in a deploy. By completion you will have shipped live products recruiters can open.</p>
            </div>
          </div>

          <div className="roadmap">
            <div className="stages">
              {course.stages.map((st, i) => (
                <div key={i} className={`stage ${i === 0 ? 'active' : ''}`}>
                  <div className="rail">
                    <div className="marker"><span className="week">{st.week}</span><span>{st.num}</span></div>
                    <div className="line"></div>
                  </div>
                  <div className="card">
                    <div className="head"><span className="name">{st.name}</span></div>
                    <h3 className="title">{st.title}</h3>
                    <div className="transform"><span>{st.desc}</span></div>
                    <div className="topics">
                      {st.topics.map((t) => <span key={t} className="topic">{t}</span>)}
                    </div>
                    <div className="deliverable">
                      <span style={{ color: '#1f8a5b' }}>▲</span>
                      <span><strong>Able to:</strong> {st.deliverable}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Real Projects */}
      <section className="section" id="projects" style={{ background: 'white' }}>
        <div className="wrap">
          <div className="section-head split">
            <div>
              <span className="eyebrow"><span className="dot"></span>Real projects</span>
              <h2 className="h-section" style={{ marginTop: '16px' }}>
                Build a portfolio recruiters<br />
                <span className="muted">can actually open and use.</span>
              </h2>
            </div>
            <div className="right">
              <p className="lead">Signature builds. Live URLs. Public GitHub. Real users. Send live links, not screenshots.</p>
            </div>
          </div>

          <div className="projects-grid">
            {course.projects.map((p, i) => (
              <div key={i} className="proj">
                <div className="preview">
                  <div className="stack">
                    <div className="pill">Live Build</div>
                    <div style={{ color: '#cfe8ff' }}>&gt; {p.title}</div>
                    <div style={{ color: 'rgba(255,255,255,0.5)', marginTop: '6px' }}>Status: Deployed 0 errors</div>
                  </div>
                </div>
                <div className="body">
                  <div className="tag">{p.tag}</div>
                  <h4>{p.title}</h4>
                  <p>{p.desc}</p>
                  <div className="stack-list">
                    {p.stack.map((s) => <span key={s}>{s}</span>)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5: Instructor Spotlight */}
      <section className="mentor-section" id="mentor">
        <div className="wrap">
          <div className="mentor-grid">
            <div className="mentor-card">
              <div className="mentor-card-inner">
                <div className="mentor-cmd-bar">
                  <span className="mc-dot" style={{ background: '#FF5F57' }}></span>
                  <span className="mc-dot" style={{ background: '#FEBC2E' }}></span>
                  <span className="mc-dot" style={{ background: '#28C840' }}></span>
                  <span className="mc-title">instructor.profile</span>
                </div>
                <div className="mentor-portrait">
                  <div className="mentor-monogram">
                    <img alt={course.instructorName} src={course.instructorImage} className="mentor-portrait-img" />
                  </div>
                  <div className="mentor-status">
                    <span className="led-pulse" style={{ width: '8px', height: '8px', borderRadius: '999px', background: '#6BE49F', display: 'inline-block' }}></span>
                    Kathmandu → Global Remote
                  </div>
                </div>
                <div className="mentor-rows">
                  <div className="m-row"><span className="m-k">NAME</span><span className="m-v">{course.instructorName}</span></div>
                  <div className="m-row"><span className="m-k">ROLE</span><span className="m-v">{course.instructorRole}</span></div>
                  <div className="m-row"><span className="m-k">BASED</span><span className="m-v">Kathmandu, Nepal · Working with global teams</span></div>
                </div>
              </div>
            </div>

            <div className="mentor-copy">
              <div className="eyebrow on-dark"><span className="dot"></span>Lead instructor spotlight</div>
              <h2>Taught by a Nepal-based <span className="grad-text">{course.instructorRole}</span> Building Products for <span style={{ color: 'var(--crimson-peak)', fontStyle: 'italic', fontWeight: 600 }}>Global Companies.</span></h2>
              <p>{course.instructorBio}</p>
              <p>The objective isn't just learning syntax. It's becoming a developer capable of contributing to real products, real teams, and real business outcomes.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6: Dollar Card AI Credit */}
      <section className="section dark" id="tools">
        <div className="wrap">
          <div className="ime">
            <div>
              <span className="eyebrow on-dark"><span className="dot"></span>Global IME · $10 AI Credit</span>
              <h2 className="h-section" style={{ marginTop: '16px' }}>
                Students don't just <em style={{ color: 'var(--crimson-peak)', fontWeight: 500, fontStyle: 'italic' }}>hear about</em> AI tools. They actually use them.
              </h2>
              <p className="lead" style={{ marginTop: '20px' }}>
                When you join, we credit <strong style={{ color: 'white' }}>$10 USD</strong> to your Global IME dollar card — enough to spin up real Claude, OpenAI, and Cursor accounts and ship from day one.
              </p>
            </div>

            <div className="ime-card-stage">
              <div className="ime-card">
                <div className="ime-card-top">
                  <div className="ime-bank"><span className="ime-bank-mark">U</span><span className="ime-bank-name">Dollar Card</span></div>
                </div>
                <div className="ime-card-num"><span>4242</span><span>8881</span><span>••••</span><span>2026</span></div>
                <div className="ime-card-bottom">
                  <div>
                    <div className="ime-card-label">Cardholder</div>
                    <div className="ime-card-val">COHORT 02 · STUDENT</div>
                  </div>
                  <div>
                    <div className="ime-card-label">Currency</div>
                    <div className="ime-card-val">USD · GLOBAL</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 7: FAQs */}
      <section className="section tight" id="faq">
        <div className="wrap-narrow">
          <div style={{ textAlign: 'center', marginBottom: '32px' }}>
            <span className="eyebrow" style={{ justifyContent: 'center' }}><span className="dot"></span>Frequently asked</span>
            <h2 className="h-section" style={{ marginTop: '12px' }}>Questions, answered.</h2>
          </div>

          <FAQAccordion items={course.faqs} />
        </div>
      </section>

      {/* Section 8: Final CTA */}
      <section className="section tight" id="apply">
        <div className="wrap">
          <div className="final-cta">
            <div className="inner">
              <span className="eyebrow on-dark" style={{ justifyContent: 'center' }}><span className="dot"></span>Cohort 02 · 25 seats</span>
              <h2>The next 25 AI specialists<br />Nepal sends to the world.</h2>
              <p>Be one of them. Early-bird pricing ends when seats are full.</p>
              <div className="row">
                <Link to={`/enroll?course=${course.slug}`} className="btn btn-accent btn-lg">
                  Claim my seat · {course.price} <span className="btn-arrow">→</span>
                </Link>
                <button type="button" className="btn btn-ghost btn-lg" style={{ background: 'rgba(255,255,255,0.06)', color: 'white', borderColor: 'rgba(255,255,255,0.18)' }} onClick={() => onOpenInquiry(course.title)}>
                  Send Inquiry <span className="btn-arrow">→</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile Sticky CTA */}
      <div className="sticky-cta">
        <div className="info">
          <div className="price">{course.price} · <span style={{ fontSize: '11px', opacity: 0.6, fontWeight: 400 }}>early bird</span></div>
          <div className="sub">25 seats · Starts July 17</div>
        </div>
        <Link to={`/enroll?course=${course.slug}`} className="btn btn-accent btn-sm">Apply →</Link>
      </div>

    </div>
  );
}
