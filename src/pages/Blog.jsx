import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Clock, Calendar, ArrowRight, Sparkles, BookOpen } from 'lucide-react';

const BLOG_POSTS = [
  {
    slug: 'why-nepal-developers-must-become-ai-native',
    title: 'Why Nepali Developers Must Become AI-Native in 2026',
    category: 'Real Talk',
    readTime: '5 min read',
    date: 'Oct 04, 2026',
    author: 'Bijay Shrestha',
    authorRole: 'Senior Software Developer',
    authorAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
    coverImage: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&auto=format&fit=crop&q=80',
    excerpt: 'The global tech bar has shifted. Companies in San Francisco and Berlin no longer hire developers just to write boilerplate code—they hire AI-assisted engineers who ship 10x faster.'
  },
  {
    slug: 'the-death-of-traditional-facebook-boosting',
    title: 'The Death of Traditional Facebook Boosting in Growth Marketing',
    category: 'Educational',
    readTime: '7 min read',
    date: 'Sep 28, 2026',
    author: 'Rohan Gurung',
    authorRole: 'Head of Growth',
    authorAvatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&auto=format&fit=crop&q=80',
    coverImage: 'https://images.unsplash.com/photo-1533750349088-cd871a92f312?w=800&auto=format&fit=crop&q=80',
    excerpt: 'Why clicking "Boost Post" is draining your ad budget. Here is how modern growth teams build automated Meta conversion funnels using AI content loops and ROAS analytics.'
  },
  {
    slug: 'how-to-land-a-us-remote-job-from-kathmandu',
    title: 'How to Land a US Remote Job from Kathmandu (Step-by-Step)',
    category: 'Guides',
    readTime: '10 min read',
    date: 'Sep 15, 2026',
    author: 'Remote Job Nepal Team',
    authorRole: 'Career Counselors',
    authorAvatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&auto=format&fit=crop&q=80',
    coverImage: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&auto=format&fit=crop&q=80',
    excerpt: 'A practical, zero-fluff playbook covering resume optimization for international Applicant Tracking Systems (ATS), async video intros, live code defense, and payment setup in Nepal.'
  },
  {
    slug: 'building-autonomous-ai-agents-with-make-and-n8n',
    title: 'Building Autonomous AI Agents with Make.com & N8N',
    category: 'Hot-takes',
    readTime: '6 min read',
    date: 'Sep 02, 2026',
    author: 'Aayush Adhikari',
    authorRole: 'AI Automation Lead',
    authorAvatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80',
    coverImage: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&auto=format&fit=crop&q=80',
    excerpt: 'Low-code automation is replacing repetitive data operations. Learn how to connect OpenAI API, Pinecone, and Make.com to build custom autonomous agents for business clients.'
  }
];

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const categories = ['All', 'Real Talk', 'Educational', 'Guides', 'Hot-takes'];

  const filteredPosts = selectedCategory === 'All'
    ? BLOG_POSTS
    : BLOG_POSTS.filter(p => p.category === selectedCategory);

  const featuredPost = BLOG_POSTS[0];

  return (
    <div className="pb-24 pt-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      
      {/* HEADER */}
      <div className="text-center space-y-4 max-w-3xl mx-auto">
        <span className="inline-block py-1.5 px-4 text-xs font-semibold rounded-full text-[#e11d48] border border-[#e11d48]/20 bg-[#e11d48]/10 tracking-wide uppercase">
          Carears.ai Field Notes
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold font-headline text-[#09090b] tracking-tight leading-tight">
          Real Talk on AI, Tech & Global Hiring
        </h1>
        <p className="text-base sm:text-lg text-zinc-600 max-w-2xl mx-auto leading-relaxed">
          Field notes written by working practitioners in Kathmandu building and shipping for international companies.
        </p>
      </div>

      {/* FEATURED POST */}
      <Link 
        to={`/blog/${featuredPost.slug}`}
        className="bg-white border border-zinc-200/90 rounded-3xl p-6 sm:p-10 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center group shadow-sm hover:shadow-md hover:border-zinc-300 transition-all duration-300 overflow-hidden"
      >
        <div className="relative h-64 sm:h-80 rounded-2xl overflow-hidden border border-zinc-200">
          <img
            src={featuredPost.coverImage}
            alt={featuredPost.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <span className="absolute top-4 left-4 text-xs font-bold px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-[#e11d48] border border-zinc-200 shadow-sm">
            Featured Article
          </span>
        </div>

        <div className="space-y-4">
          <div className="flex items-center gap-3 text-xs text-zinc-500">
            <span className="font-bold text-[#e11d48] uppercase tracking-wider">{featuredPost.category}</span>
            <span>·</span>
            <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> {featuredPost.readTime}</span>
            <span>·</span>
            <span>{featuredPost.date}</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-extrabold font-headline text-[#09090b] group-hover:text-[#e11d48] transition-colors leading-tight">
            {featuredPost.title}
          </h2>

          <p className="text-sm sm:text-base text-zinc-600 leading-relaxed">
            {featuredPost.excerpt}
          </p>

          <div className="flex items-center justify-between pt-4 border-t border-zinc-100">
            <div className="flex items-center gap-3">
              <img
                src={featuredPost.authorAvatar}
                alt={featuredPost.author}
                className="w-9 h-9 rounded-full object-cover border border-[#e11d48]/40"
              />
              <div>
                <p className="text-xs font-bold text-zinc-900 font-headline">{featuredPost.author}</p>
                <p className="text-[10px] text-zinc-500">{featuredPost.authorRole}</p>
              </div>
            </div>

            <span className="text-xs font-semibold text-zinc-900 group-hover:text-[#e11d48] flex items-center gap-1">
              Read article <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </span>
          </div>
        </div>
      </Link>

      {/* CATEGORY TABS */}
      <div className="flex flex-wrap items-center justify-center gap-2.5">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-5 py-2.5 rounded-full text-xs font-bold transition-all ${
              selectedCategory === cat
                ? 'bg-[#09090b] text-white shadow-md'
                : 'bg-white border border-zinc-200 text-zinc-600 hover:text-zinc-900 hover:border-zinc-300'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* POSTS GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredPosts.map((post) => (
          <Link
            key={post.slug}
            to={`/blog/${post.slug}`}
            className="bg-white border border-zinc-200/90 rounded-2xl overflow-hidden flex flex-col justify-between group shadow-sm hover:shadow-md hover:border-zinc-300 transition-all duration-200"
          >
            <div>
              <div className="relative h-48 overflow-hidden border-b border-zinc-100">
                <img
                  src={post.coverImage}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-3 left-3 text-[10px] font-bold px-2.5 py-1 rounded-md bg-white/90 backdrop-blur-md text-[#e11d48] border border-zinc-200 shadow-sm">
                  {post.category}
                </span>
              </div>

              <div className="p-6 space-y-3">
                <div className="flex items-center gap-2 text-xs text-zinc-400 font-medium">
                  <span>{post.date}</span>
                  <span>·</span>
                  <span>{post.readTime}</span>
                </div>

                <h3 className="text-xl font-bold font-headline text-zinc-900 group-hover:text-[#e11d48] transition-colors line-clamp-2">
                  {post.title}
                </h3>

                <p className="text-xs text-zinc-600 leading-relaxed line-clamp-3">
                  {post.excerpt}
                </p>
              </div>
            </div>

            <div className="px-6 pb-6 pt-3 flex items-center justify-between border-t border-zinc-100">
              <div className="flex items-center gap-2.5">
                <img
                  src={post.authorAvatar}
                  alt={post.author}
                  className="w-7 h-7 rounded-full object-cover border border-[#e11d48]/30"
                />
                <span className="text-xs text-zinc-700 font-medium">{post.author}</span>
              </div>

              <span className="text-xs text-zinc-500 group-hover:text-zinc-900 flex items-center gap-1 font-semibold">
                Read <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </span>
            </div>
          </Link>
        ))}
      </div>

    </div>
  );
}
