import React, { useState } from 'react';
import { X, Send, CheckCircle2 } from 'lucide-react';

export default function InquiryModal({ isOpen, onClose, selectedCourseName = "AI Software Developer" }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    course: selectedCourseName,
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      // Auto reset after 3 seconds
    }, 3000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 modal-overlay fade-in">
      <div 
        className="relative w-full max-w-lg bg-[#121216] border border-zinc-800 rounded-2xl p-6 sm:p-8 shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-zinc-400 hover:text-white rounded-full bg-zinc-900 border border-zinc-800 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div>
            <div className="mb-6">
              <span className="badge-pill text-xs text-[#e52b3d] border-[#e52b3d]/30 bg-[#e52b3d]/10 mb-2 inline-block">
                Quick Program Inquiry
              </span>
              <h3 className="text-2xl font-bold font-headline text-white">
                Have questions before enrolling?
              </h3>
              <p className="text-sm text-zinc-400 mt-1">
                Fill in your details below and our Kathmandu admissions counselor will call or email you back within 2 hours.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold uppercase text-zinc-400 mb-1">Full Name</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Aarav Sharma"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-2.5 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-[#e52b3d]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold uppercase text-zinc-400 mb-1">Email Address</label>
                  <input
                    type="email"
                    required
                    placeholder="aarav@gmail.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-2.5 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-[#e52b3d]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold uppercase text-zinc-400 mb-1">Phone Number (+977)</label>
                  <input
                    type="tel"
                    required
                    placeholder="9841234567"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-2.5 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-[#e52b3d]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase text-zinc-400 mb-1">Program of Interest</label>
                <select
                  value={formData.course}
                  onChange={(e) => setFormData({ ...formData, course: e.target.value })}
                  className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#e52b3d]"
                >
                  <option value="AI Software Developer">AI Software Developer (3 Months)</option>
                  <option value="AI Growth Marketer">AI Growth Marketer (3 Months)</option>
                  <option value="AI Agents & Automation">AI Agents & Automation (8 Weeks)</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase text-zinc-400 mb-1">Questions / Message</label>
                <textarea
                  rows="3"
                  placeholder="Ask about physical location, timing, installments, or pre-requisites..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-2.5 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-[#e52b3d]"
                ></textarea>
              </div>

              <button
                type="submit"
                className="btn-primary w-full justify-center py-3 text-sm font-semibold rounded-xl"
              >
                Send Inquiry <Send className="w-4 h-4 ml-1" />
              </button>
            </form>
          </div>
        ) : (
          <div className="text-center py-8 space-y-4 fade-in">
            <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold text-white font-headline">Inquiry Received!</h3>
            <p className="text-sm text-zinc-400 max-w-xs mx-auto">
              Thank you, <span className="text-white font-semibold">{formData.name}</span>. An admissions mentor from Carears.ai will reach out to you shortly via WhatsApp or call.
            </p>
            <button
              onClick={() => {
                setSubmitted(false);
                onClose();
              }}
              className="btn-secondary text-xs px-6 py-2"
            >
              Close Window
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
