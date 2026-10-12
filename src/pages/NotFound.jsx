import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Home } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="py-24 text-center max-w-xl mx-auto px-4 space-y-6">
      <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-900 border border-zinc-800 text-xs font-semibold text-zinc-400">
        <span className="w-2 h-2 rounded-full bg-[#e52b3d]"></span> Page Status · 404
      </div>

      <div className="text-8xl sm:text-9xl font-extrabold font-headline text-zinc-800 tracking-tighter select-none">
        4<span className="text-[#e52b3d]">0</span>4
      </div>

      <h1 className="text-3xl font-bold font-headline text-white">
        This page didn't make the cohort.
      </h1>

      <p className="text-sm text-zinc-400 leading-relaxed">
        The page you're looking for isn't enrolled — it may have moved, graduated, or never existed. Check the URL, or head back and start from the homepage.
      </p>

      <div className="pt-4 flex items-center justify-center gap-4">
        <Link to="/" className="btn-primary text-xs py-3 px-6">
          Back to home <ArrowRight className="w-4 h-4 ml-1" />
        </Link>
      </div>
    </div>
  );
}
