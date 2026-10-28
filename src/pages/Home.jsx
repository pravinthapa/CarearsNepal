import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PartnerLogos from '../components/PartnerLogos';
import FAQAccordion from '../components/FAQAccordion';
import TestimonialModal from '../components/TestimonialModal';

const TESTIMONIALS_DATA = [
  {
    id: 1,
    name: "Saujan Shrestha",
    role: "AI growth marketer",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80",
    quote: "Before The AI Institute, my Digital Marketing knowledge was basically just hitting \"Boost\" and figuring things out by trial and error. I could run ads but had no real confidence reading the numbers or thinking about marketing from a growth angle. What's changed is how I look at marketing now, beyond clicks and likes, into content marketing, Product-Led Growth, SEO, AEO, GEO, the AARRR framework, and Meta Ads analysis. Working on real projects with The AI Institute and Remote Job Nepal made these concepts click instead of staying theoretical. I'd recommend it to anyone who wants to actually practice growth marketing, not just watch lessons. For me the biggest shift has been learning to analyze, test, mess up, and improve based on real results.",
    highlights: {
      beforeAfter: "Transitioned from basic Facebook boosting to full data-driven growth marketing.",
      skills: "Product-Led Growth, Meta Ads analysis, AARRR framework, AI copy generation."
    }
  },
  {
    id: 2,
    name: "Purnima Sitaula",
    role: "AI growth marketer",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80",
    quote: "I had some background in lead generation, cold email support, and research, but growth marketing as a whole wasn't something I understood well. Running ads, building funnels, or using AI and automation tools for marketing wasn't something I was confident about. So far I've learned to build a full marketing workflow using AI and automation, working with Meta Ads, Google Ads, LinkedIn Ads, Make, Google Sheets, and Gemini, and connecting them to automate parts of the process. I'd recommend it to anyone who wants practical growth marketing with AI, since the focus is on actually using the tools and building things instead of just sitting through theory.",
    highlights: {
      beforeAfter: "Automated end-to-end lead pipelines using AI agents and webhooks.",
      skills: "Make, Gemini API, Meta Ads, LinkedIn Ads, Automated Funnels."
    }
  },
  {
    id: 3,
    name: "Sangita Thapa",
    role: "AI growth marketer",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&auto=format&fit=crop&q=80",
    quote: "My background is Public Health and I'm currently doing an MA in English, so the only AI experience I had was basic LLM use. I couldn't run a campaign on Meta, Google, or LinkedIn, and frameworks like Growth Loops or First Principles meant nothing to me. Since then I've built ad campaigns from scratch across all three platforms and actually launched the Meta one live, designed the creatives, wrote the copy using prompt engineering, set the targeting, and analyzed the results myself. I'd recommend this to anyone dedicated and ready to learn. Coming from a non-technical background, this goes way past theory into real hands-on work with AI tools and growth frameworks.",
    highlights: {
      beforeAfter: "Non-tech background to launching live paid campaigns with positive ROI.",
      skills: "Prompt Engineering, Paid Social Strategy, Growth Loops, Copywriting."
    }
  }
];

const HOMEPAGE_FAQS = [
  {
    question: "What is The AI Institute?",
    answer: "The AI Institute is a professional training institute specializing in cohort-based education and AI-native skill preparation. The institute provides structured educational paths and skill-building frameworks to help students navigate modern career options."
  },
  {
    question: "Is The AI Institute part of Remote Job Nepal?",
    answer: "Yes, The AI Institute is built and managed by Remote Job Nepal. Through this direct partnership, enrolled students gain exclusive access to Remote Job Nepal's established talent network and dedicated job placement pipelines designed to support hiring opportunities immediately upon graduation."
  },
  {
    question: "What programs does The AI Institute offer?",
    answer: "The AI Institute offers specialized, cohort-based training courses focusing on modern professional skills and AI-first workflows. Our main educational tracks include AI Agentic Automation (8-week schedule), AI-First Growth Marketing (12-week schedule), and Software Development with AI (12-week schedule)."
  },
  {
    question: "Is The AI Institute legit? Has anyone been hired?",
    answer: "Yes, The AI Institute is a verified career training institute with proven student outcomes, including multiple students from the first cohort successfully securing internship placements before course completion. The institution validates its educational pathways by leveraging its parent network to connect students with hiring panels early in their training cycles."
  },
  {
    question: "Who teaches at The AI Institute?",
    answer: "Classes at The AI Institute are taught by working industry professionals and technical specialists who are actively employed at international companies. These global practitioners teach students directly, sharing real-world insights, operational workflows, and applied case studies from the global tech industry."
  },
  {
    question: "Where are classes held?",
    answer: "The AI Institute courses are delivered through physical classes in Kathmandu as the priority, alongside a hybrid learning option for students outside the valley. This format combines interactive, local classroom instruction with accessible digital infrastructure for broader student participation."
  },
  {
    question: "How much does The AI Institute cost?",
    answer: "Tuition fees at The AI Institute depend directly on the specific technical track you select: standard enrollment is NPR 35,000 for both the Software Development with AI and AI-First Growth Marketing courses, while the AI Agentic Automation track is priced at NPR 25,000. To review current session availability, payment milestones, or early-bird promotions for upcoming cohorts, please check the respective pricing modules hosted on our main course landing pages."
  }
];

export default function Home({ onOpenInquiry }) {
  const [activeTestimonialIndex, setActiveTestimonialIndex] = useState(0);
  const [activeTestimonialModal, setActiveTestimonialModal] = useState(null);

  const currentTestimonial = TESTIMONIALS_DATA[activeTestimonialIndex];

  return (
    <main className="main">
      
      {/* HERO SECTION */}
      <section className="hero">
        <h1 className="headline">
          Become the <span className="hl-blue italic pr-4">AI-native</span><br />
          <span className="hl-gold italic pr-3">talent</span> that companies<br />
          actually want to hire.
        </h1>
        <p className="subline">
          Your instructors aren't academics. They're{' '}
          <span className="em">Nepalis currently working remotely for global companies</span>, training you to do the same.
        </p>
      </section>

      {/* 3 PROGRAM CARDS SECTION */}
      <section className="cards">
        
        {/* Card 1: AI Software Developer */}
        <Link className="card developer" to="/ai-software-developer">
          <div className="glyph code">&lt;/&gt;</div>
          <div className="tag">
            <span>Cohort 02</span>
          </div>
          <h2 className="title">AI Software Developer</h2>
          <p className="desc">
            Become a full-stack developer companies are hiring right now in the age of AI.
          </p>
          <div className="meta">
            <span className="k">3 months</span>
            <span className="sep">·</span>
            <span className="k">120 hours</span>
            <span className="sep">·</span>
            <span className="k">25 seats</span>
          </div>
          <span className="card-cta">
            Explore program <span className="arrow">→</span>
          </span>
        </Link>

        {/* Card 2: AI Growth Marketer */}
        <Link className="card marketer" to="/ai-growth-marketer">
          <div className="glyph bars">
            <svg viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="3" y="22" width="5" height="11" rx="1.2" fill="currentColor" opacity="0.45"></rect>
              <rect x="11" y="16" width="5" height="17" rx="1.2" fill="currentColor" opacity="0.65"></rect>
              <rect x="19" y="10" width="5" height="23" rx="1.2" fill="currentColor" opacity="0.82"></rect>
              <rect x="27" y="3" width="5" height="30" rx="1.2" fill="currentColor"></rect>
            </svg>
          </div>
          <div className="tag">
            <span>Cohort 02</span>
          </div>
          <h2 className="title">AI Growth Marketer</h2>
          <p className="desc">
            Become a growth marketer companies are hiring right now in the age of AI.
          </p>
          <div className="meta">
            <span className="k">3 months</span>
            <span className="sep">·</span>
            <span className="k">120 hours</span>
            <span className="sep">·</span>
            <span className="k">25 seats</span>
          </div>
          <span className="card-cta">
            Explore program <span className="arrow">→</span>
          </span>
        </Link>

        {/* Card 3: AI Agents & Automation */}
        <Link className="card product" to="/ai-agentic-automation">
          <div className="glyph agents">
            <svg viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="18" cy="18" r="6" fill="currentColor"></circle>
              <circle cx="7" cy="8" r="3.5" stroke="currentColor" strokeWidth="2" opacity="0.55"></circle>
              <circle cx="29" cy="8" r="3.5" stroke="currentColor" strokeWidth="2" opacity="0.7"></circle>
              <circle cx="7" cy="28" r="3.5" stroke="currentColor" strokeWidth="2" opacity="0.7"></circle>
              <circle cx="29" cy="28" r="3.5" stroke="currentColor" strokeWidth="2" opacity="0.85"></circle>
              <path d="M15 15L9.5 10.5M21 15L26.5 10.5M15 21L9.5 25.5M21 21L26.5 25.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" opacity="0.6"></path>
            </svg>
          </div>
          <div className="tag">
            <span>Cohort 02</span>
          </div>
          <h2 className="title">AI Agents &amp; Automation</h2>
          <p className="desc">
            Become an expert in building intelligent AI agents that automate workflows for global businesses.
          </p>
          <div className="meta">
            <span className="k">8 weeks</span>
            <span className="sep">·</span>
            <span className="k">48 hours</span>
            <span className="sep">·</span>
            <span className="k">25 seats</span>
          </div>
          <span className="card-cta">
            Explore program <span className="arrow">→</span>
          </span>
        </Link>

      </section>

      {/* HIRING PARTNERS SECTION */}
      <section className="partners" aria-labelledby="partners-heading">
        <div className="wrap partners-inner">
          <div className="partners-head">
            <p id="partners-heading" className="partners-label">Hiring Partners</p>
            <p className="partners-sub">Where graduates go on to interview.</p>
          </div>

          <PartnerLogos />

          <div className="rjn-card">
            <h3 className="rjn-card-title">We are not just a course platform.</h3>
            <p className="rjn-card-copy">
              We are an initiative of <strong>Remote Job Nepal</strong>. We are a career ecosystem with local and international opportunities.
            </p>
            <a href="https://remotejobnepal.com" target="_blank" rel="noopener noreferrer" className="rjn-card-link">
              Learn more here.
            </a>
          </div>
        </div>
      </section>

      {/* COHORT 1 BENTO GRID SECTION */}
      <section className="cohort" aria-labelledby="cohort-heading">
        <div className="wrap cohort-inner">
          <div className="cohort-head">
            <p className="cohort-label">
              <span className="cohort-dot" aria-hidden="true"></span>Cohort 1
            </p>
            <h2 id="cohort-heading" className="cohort-title">In the room. Online. Both real.</h2>
            <p className="cohort-desc">
              Some of us are in Kathmandu. Some are on a call. Same instructors. Same standard. Same deploys.
            </p>
            <p className="cohort-meta">
              7am–9am · Mon–Fri · Physical + Virtual · Taught by instructors working inside a US-based company
            </p>
          </div>

          <div className="cohort-grid">
            <div className="cohort-tile cohort-tile--wide cohort-tile--photo">
              <img
                alt="Physical · Kathmandu class session"
                className="cohort-tile-img"
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&auto=format&fit=crop&q=75"
              />
              <span className="cohort-tile-label">Physical · Kathmandu</span>
            </div>

            <div className="cohort-tile cohort-tile--side cohort-tile--photo">
              <img
                alt="Physical class session"
                className="cohort-tile-img"
                src="https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&auto=format&fit=crop&q=75"
              />
              <span className="cohort-tile-label">Physical</span>
            </div>

            <div className="cohort-tile cohort-tile--side cohort-tile--photo">
              <img
                alt="Virtual class session"
                className="cohort-tile-img"
                src="https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?w=800&auto=format&fit=crop&q=75"
              />
              <span className="cohort-tile-label">Virtual</span>
            </div>

            <div className="cohort-tile cohort-tile--sm cohort-tile--photo">
              <img
                alt="Virtual class session"
                className="cohort-tile-img"
                src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=600&auto=format&fit=crop&q=75"
              />
              <span className="cohort-tile-label">Virtual</span>
            </div>

            <div className="cohort-tile cohort-tile--sm cohort-tile--photo">
              <img
                alt="Physical class session"
                className="cohort-tile-img"
                src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&auto=format&fit=crop&q=75"
              />
              <span className="cohort-tile-label">Physical</span>
            </div>

            <div className="cohort-tile cohort-tile--sm cohort-tile--photo">
              <img
                alt="Virtual class session"
                className="cohort-tile-img"
                src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=600&auto=format&fit=crop&q=75"
              />
              <span className="cohort-tile-label">Virtual</span>
            </div>

            <div className="cohort-tile cohort-tile--sm cohort-tile--photo">
              <img
                alt="Physical class session"
                className="cohort-tile-img"
                src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=600&auto=format&fit=crop&q=75"
              />
              <span className="cohort-tile-label">Physical</span>
            </div>
          </div>
        </div>
      </section>

      {/* VALUE PROPOSITION SECTION */}
      <section className="value-section section border-top" id="value">
        <div className="wrap">
          <div className="section-head center">
            <div className="eyebrow">
              <span className="dot"></span>Remote-job ready
            </div>
            <h2>Built for global hiring,<br />from Kathmandu.</h2>
            <p className="value-lead">
              You train in Nepal. You are measured against the bar a hiring manager in Berlin, SF, or Singapore applies before they say yes.
            </p>
          </div>

          <div className="vprop-grid">
            <div className="vprop-card">
              <div className="vprop-ic">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
              </div>
              <h4>Taught by practitioners</h4>
              <p>Nepalis currently holding remote roles at US and European companies. You learn what works inside a live job, not last year's syllabus.</p>
            </div>

            <div className="vprop-card">
              <div className="vprop-ic">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M10 13a5 5 0 0 0 7.07 0l1.41-1.41a5 5 0 0 0-7.07-7.07L10 5.76"></path>
                  <path d="M14 11a5 5 0 0 0-7.07 0L5.52 12.41a5 5 0 0 0 7.07 7.07L14 18.24"></path>
                </svg>
              </div>
              <h4>Proof, not certificates</h4>
              <p>Shipped, deployed, documented. Hiring managers in Berlin, SF, and Singapore do not read certificates from Nepal, they open your links.</p>
            </div>

            <div className="vprop-card">
              <div className="vprop-ic">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="3"></circle>
                  <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09a1.65 1.65 0 0 0-1-1.51 1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33h.01a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51h.01a1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
                </svg>
              </div>
              <h4>AI-native by default</h4>
              <p>You work the way 2026 teams already work. The gap between AI-fluent and AI-curious is the first thing a global team screens for now.</p>
            </div>

            <div className="vprop-card">
              <div className="vprop-ic">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                </svg>
              </div>
              <h4>Interview-ready</h4>
              <p>Mock loops, take-home reviews, defending your choices live. Our hiring network gets you in the room. This is what wins it.</p>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS CAROUSEL SECTION */}
      <section className="testimonials-section" id="stories">
        <div className="wrap">
          <div className="section-head center">
            <div className="eyebrow"><span className="dot"></span>Stories</div>
            <h2>People. Progress. Proof.</h2>
          </div>

          <div className="t-carousel" aria-roledescription="carousel" aria-label="Student testimonials">
            <div className="t-card">
              <div className="t-track-wrap">
                <div className="t-track">
                  <div className="t-slide">
                    <span className="t-quote-mark" aria-hidden="true">“</span>
                    <p className="quote clamped">
                      {currentTestimonial.quote}
                    </p>
                    <button 
                      type="button" 
                      className="t-readmore"
                      onClick={() => setActiveTestimonialModal(currentTestimonial)}
                    >
                      Read more
                    </button>
                    <div className="t-person">
                      <div className="t-avatar">
                        <img alt={currentTestimonial.name} src={currentTestimonial.avatar} />
                      </div>
                      <div className="t-person-meta">
                        <p className="author">{currentTestimonial.name}</p>
                        <p className="t-sub">{currentTestimonial.role}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Slider Controls */}
              <div className="t-arrows">
                <button
                  type="button"
                  className="t-arrow"
                  aria-label="Previous testimonial"
                  onClick={() => setActiveTestimonialIndex((prev) => (prev - 1 + TESTIMONIALS_DATA.length) % TESTIMONIALS_DATA.length)}
                >
                  ←
                </button>
                <button
                  type="button"
                  className="t-arrow"
                  aria-label="Next testimonial"
                  onClick={() => setActiveTestimonialIndex((prev) => (prev + 1) % TESTIMONIALS_DATA.length)}
                >
                  →
                </button>
              </div>

              <div className="t-dots">
                {TESTIMONIALS_DATA.map((_, idx) => (
                  <button
                    key={idx}
                    type="button"
                    className={`t-dot ${activeTestimonialIndex === idx ? 'active' : ''}`}
                    onClick={() => setActiveTestimonialIndex(idx)}
                  />
                ))}
              </div>
            </div>
          </div>

          <p className="t-seemore">
            <Link to="/testimonials">See all testimonials →</Link>
          </p>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="faq-section section" id="faq">
        <div className="container-narrow">
          <div className="section-head">
            <div className="eyebrow"><span className="dot"></span>Questions, answered</div>
            <h2>Before you ask about pricing.</h2>
          </div>

          <FAQAccordion items={HOMEPAGE_FAQS} />
        </div>
      </section>

      {/* Modal Popup */}
      <TestimonialModal
        isOpen={!!activeTestimonialModal}
        onClose={() => setActiveTestimonialModal(null)}
        testimonial={activeTestimonialModal}
      />

    </main>
  );
}
