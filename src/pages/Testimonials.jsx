import React, { useState } from 'react';
import { Quote, Sparkles, Filter, Award, ArrowRight } from 'lucide-react';
import TestimonialModal from '../components/TestimonialModal';

const ALL_TESTIMONIALS = [
  {
    id: 1,
    category: 'Growth Marketer',
    name: "Saujan Shrestha",
    role: "AI Growth Marketer Graduate",
    background: "Ex-Digital Marketing Executive",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80",
    quote: "Before The AI Institute, my Digital Marketing knowledge was basically just hitting 'Boost' and figuring things out by trial and error. What's changed is how I look at marketing now—into Product-Led Growth, SEO, AEO, GEO, the AARRR framework, and Meta Ads analysis.",
    fullQuote: "Before The AI Institute, my Digital Marketing knowledge was basically just hitting 'Boost' and figuring things out by trial and error. I could run ads but had no real confidence reading the numbers or thinking about marketing from a growth angle. What's changed is how I look at marketing now, beyond clicks and likes, into content marketing, Product-Led Growth, SEO, AEO, GEO, the AARRR framework, and Meta Ads analysis. Working on real projects with The AI Institute and Remote Job Nepal made these concepts click instead of staying theoretical.",
    highlights: {
      beforeAfter: "Transitioned from basic Facebook boosting to full data-driven growth marketing.",
      skills: "Product-Led Growth, Meta Ads analysis, AARRR framework, AI copy generation."
    }
  },
  {
    id: 2,
    category: 'Growth Marketer',
    name: "Purnima Sitaula",
    role: "AI Growth Marketer Graduate",
    background: "Lead Generation & Cold Outreach Specialist",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80",
    quote: "So far I've learned to build a full marketing workflow using AI and automation, working with Meta Ads, Google Ads, LinkedIn Ads, Make, Google Sheets, and Gemini, connecting them to automate parts of the process.",
    fullQuote: "I had some background in lead generation, cold email support, and research, but growth marketing as a whole wasn't something I understood well. Running ads, building funnels, or using AI and automation tools for marketing wasn't something I was confident about. So far I've learned to build a full marketing workflow using AI and automation, working with Meta Ads, Google Ads, LinkedIn Ads, Make, Google Sheets, and Gemini.",
    highlights: {
      beforeAfter: "Automated end-to-end lead pipelines using AI agents and webhooks.",
      skills: "Make, Gemini API, Meta Ads, LinkedIn Ads, Automated Funnels."
    }
  },
  {
    id: 3,
    category: 'Growth Marketer',
    name: "Sangita Thapa",
    role: "AI Growth Marketer Graduate",
    background: "MA English / Public Health Background",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&auto=format&fit=crop&q=80",
    quote: "Coming from a non-technical background, I went from zero ad experience to launching live Meta ad campaigns, prompt engineering copy, and analyzing conversion metrics independently.",
    fullQuote: "My background is Public Health and I'm currently doing an MA in English, so the only AI experience I had was basic LLM use. I couldn't run a campaign on Meta, Google, or LinkedIn, and frameworks like Growth Loops or First Principles meant nothing to me. Since then I've built ad campaigns from scratch across all three platforms and actually launched the Meta one live.",
    highlights: {
      beforeAfter: "Non-tech background to launching live paid campaigns with positive ROI.",
      skills: "Prompt Engineering, Paid Social Strategy, Growth Loops, Copywriting."
    }
  },
  {
    id: 4,
    category: 'Software Developer',
    name: "Aman Regmi",
    role: "AI Software Developer Graduate",
    background: "CS Student @ Tribhuvan University",
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&auto=format&fit=crop&q=80",
    quote: "The AI Institute taught me how to develop full-stack SaaS apps using Next.js 15, Cursor IDE, and Claude 3.5 Sonnet. I deployed 3 full production apps in 12 weeks!",
    fullQuote: "At college we were taught theoretical C++ and outdated database scripts. The AI Institute completely reframed how modern engineering works in 2026. Learning how to prompt Cursor IDE, build custom RAG pipelines with Supabase pgvector, and deploy live on Vercel allowed me to land a paid remote software internship before graduation!",
    highlights: {
      beforeAfter: "Secured paid remote software developer internship in Berlin.",
      skills: "Next.js 15, Supabase pgvector, Cursor IDE, Claude 3.5, Vercel."
    }
  },
  {
    id: 5,
    category: 'AI Automation',
    name: "Kiran Bhattarai",
    role: "AI Automation Specialist Graduate",
    background: "Freelance Operations Specialist",
    avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&auto=format&fit=crop&q=80",
    quote: "I went from manually copy-pasting client data into spreadsheets to building autonomous N8N & Make workflows that save client teams 20+ hours every week.",
    fullQuote: "The AI Agents course was a game-changer. Learning Make.com, OpenAI Assistants API, and N8N workflow logic allowed me to offer high-ticket automation services to international agency clients. The mentors at The AI Institute reviewed my live client automations step-by-step.",
    highlights: {
      beforeAfter: "Built high-ticket agency automation services for US clients.",
      skills: "Make.com, N8N, OpenAI Assistants API, Webhooks, CrewAI."
    }
  }
];

export default function Testimonials() {
  const [selectedFilter, setSelectedFilter] = useState('All');
  const [activeModalTestimonial, setActiveModalTestimonial] = useState(null);

  const filters = ['All', 'Software Developer', 'Growth Marketer', 'AI Automation'];

  const filteredTestimonials = selectedFilter === 'All' 
    ? ALL_TESTIMONIALS 
    : ALL_TESTIMONIALS.filter(t => t.category === selectedFilter);

  return (
    <div className="pb-24 pt-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      
      {/* HEADER */}
      <div className="text-center space-y-4 max-w-3xl mx-auto">
        <span className="inline-block py-1.5 px-4 text-xs font-semibold rounded-full text-[#e11d48] border border-[#e11d48]/20 bg-[#e11d48]/10 tracking-wide uppercase">
          Student Stories & Proof
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold font-headline text-[#09090b] tracking-tight leading-tight">
          Real People. Real Skills. Real Deploys.
        </h1>
        <p className="text-base sm:text-lg text-zinc-600 max-w-2xl mx-auto leading-relaxed">
          Read how students from non-tech and technical backgrounds transformed their careers through The AI Institute's AI-native cohort programs.
        </p>
      </div>

      {/* FILTER TABS */}
      <div className="flex flex-wrap items-center justify-center gap-2.5">
        {filters.map((f) => (
          <button
            key={f}
            onClick={() => setSelectedFilter(f)}
            className={`px-5 py-2.5 rounded-full text-xs font-bold transition-all ${
              selectedFilter === f
                ? 'bg-[#09090b] text-white shadow-md'
                : 'bg-white border border-zinc-200 text-zinc-600 hover:text-zinc-900 hover:border-zinc-300'
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      {/* TESTIMONIALS GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredTestimonials.map((item) => (
          <div
            key={item.id}
            className="bg-white p-7 border border-zinc-200/90 rounded-2xl flex flex-col justify-between group cursor-pointer shadow-sm hover:shadow-md hover:border-zinc-300 transition-all duration-200"
            onClick={() => setActiveModalTestimonial(item)}
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md bg-zinc-100 border border-zinc-200 text-[#e11d48]">
                  {item.category}
                </span>
                <Quote className="w-5 h-5 text-zinc-300 group-hover:text-[#e11d48] transition-colors" />
              </div>

              <p className="text-sm text-zinc-700 leading-relaxed italic">
                "{item.quote}"
              </p>
            </div>

            <div className="pt-6 mt-6 border-t border-zinc-100 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <img
                  src={item.avatar}
                  alt={item.name}
                  className="w-10 h-10 rounded-full object-cover border border-[#e11d48]/40"
                />
                <div>
                  <h4 className="text-sm font-bold font-headline text-zinc-900 group-hover:text-[#e11d48] transition-colors">
                    {item.name}
                  </h4>
                  <p className="text-[11px] text-zinc-500">{item.role}</p>
                </div>
              </div>

              <span className="text-xs font-semibold text-zinc-500 group-hover:text-zinc-900 transition-colors flex items-center gap-1">
                Read story <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Testimonial Modal Popup */}
      <TestimonialModal
        isOpen={!!activeModalTestimonial}
        onClose={() => setActiveModalTestimonial(null)}
        testimonial={activeModalTestimonial}
      />

    </div>
  );
}
