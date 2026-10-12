import React from 'react';
import { X, Quote, Sparkles, Briefcase, Award } from 'lucide-react';

export default function TestimonialModal({ isOpen, onClose, testimonial }) {
  if (!isOpen || !testimonial) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 modal-overlay fade-in bg-black/50 backdrop-blur-sm">
      <div 
        className="relative w-full max-w-2xl bg-white border border-zinc-200 rounded-2xl p-6 sm:p-8 shadow-2xl overflow-y-auto max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-zinc-400 hover:text-zinc-900 rounded-full bg-zinc-100 hover:bg-zinc-200 border border-zinc-200 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Profile Header */}
        <div className="flex items-center gap-4 border-b border-zinc-100 pb-6 mb-6">
          <img
            src={testimonial.avatar}
            alt={testimonial.name}
            className="w-16 h-16 rounded-full object-cover border-2 border-[#e11d48]/40 shadow-sm"
          />
          <div>
            <h3 className="text-xl font-bold font-headline text-zinc-900 flex items-center gap-2">
              {testimonial.name}
            </h3>
            <p className="text-sm font-semibold text-[#e11d48]">{testimonial.role}</p>
            <p className="text-xs text-zinc-500 mt-0.5">{testimonial.background}</p>
          </div>
        </div>

        {/* Quote content */}
        <div className="space-y-4">
          <div className="flex gap-3 text-[#e11d48]">
            <Quote className="w-8 h-8 opacity-30 shrink-0 mt-1" />
            <p className="text-zinc-800 text-base leading-relaxed italic font-normal">
              "{testimonial.fullQuote || testimonial.quote}"
            </p>
          </div>

          {/* Highlights / Tools Learned */}
          {testimonial.highlights && (
            <div className="mt-6 pt-6 border-t border-zinc-100 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-zinc-50 p-4 rounded-xl border border-zinc-200/80">
                <div className="flex items-center gap-2 text-emerald-600 font-bold text-xs uppercase mb-1">
                  <Award className="w-4 h-4" /> Before vs After
                </div>
                <p className="text-xs text-zinc-700 leading-normal">{testimonial.highlights.beforeAfter}</p>
              </div>
              <div className="bg-zinc-50 p-4 rounded-xl border border-zinc-200/80">
                <div className="flex items-center gap-2 text-blue-600 font-bold text-xs uppercase mb-1">
                  <Briefcase className="w-4 h-4" /> Key Skills Built
                </div>
                <p className="text-xs text-zinc-700 leading-normal">{testimonial.highlights.skills}</p>
              </div>
            </div>
          )}
        </div>

        {/* Footer actions */}
        <div className="mt-8 flex justify-end">
          <button
            onClick={onClose}
            className="bg-zinc-900 hover:bg-black text-white font-semibold text-xs px-6 py-2.5 rounded-xl shadow-sm transition-all"
          >
            Close Story
          </button>
        </div>
      </div>
    </div>
  );
}
