import React, { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { CheckCircle2, ShieldCheck, ArrowRight, ArrowLeft, QrCode, CreditCard, Sparkles, Building2 } from 'lucide-react';

export default function Enroll() {
  const [searchParams] = useSearchParams();
  const initialCourse = searchParams.get('course') || 'ai-software-developer';

  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    course: initialCourse,
    fullName: '',
    email: '',
    phone: '',
    city: 'Kathmandu',
    mode: 'physical', // physical or virtual
    paymentMethod: 'khalti', // khalti, fonepay, bank
  });

  const [isCompleted, setIsCompleted] = useState(false);

  const COURSE_DETAILS = {
    'ai-software-developer': { title: 'AI Software Developer', price: 35000, original: 45000 },
    'ai-growth-marketer': { title: 'AI Growth Marketer', price: 35000, original: 45000 },
    'ai-agentic-automation': { title: 'AI Agents & Automation', price: 25000, original: 35000 }
  };

  const selectedCourse = COURSE_DETAILS[formData.course] || COURSE_DETAILS['ai-software-developer'];
  const discountAmount = selectedCourse.original - selectedCourse.price;

  const handleNext = (e) => {
    e.preventDefault();
    if (step === 1) setStep(2);
  };

  const handleComplete = (e) => {
    e.preventDefault();
    setIsCompleted(true);
  };

  return (
    <div className="pb-24 pt-8 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
      
      {/* Header */}
      <div className="text-center space-y-3">
        <span className="badge-pill py-1.5 px-4 text-xs text-[#e52b3d] border-[#e52b3d]/30 bg-[#e52b3d]/10">
          Cohort 02 Enrollment
        </span>
        <h1 className="text-3xl sm:text-5xl font-extrabold font-headline text-white">
          Reserve Your Seat in Cohort 02
        </h1>
        <p className="text-sm sm:text-base text-zinc-400 max-w-xl mx-auto">
          Complete your registration details below. Limited to 25 seats per track for optimal practitioner mentorship.
        </p>
      </div>

      {!isCompleted ? (
        <div className="bg-[#121216] border border-zinc-800 rounded-3xl p-6 sm:p-10 shadow-2xl">
          
          {/* Wizard Step Indicators */}
          <div className="flex items-center justify-center gap-4 mb-8 border-b border-zinc-800/80 pb-6">
            <div className={`flex items-center gap-2 text-xs font-bold ${step === 1 ? 'text-[#e52b3d]' : 'text-emerald-400'}`}>
              <span className={`w-7 h-7 rounded-full flex items-center justify-center font-mono ${step === 1 ? 'bg-[#e52b3d] text-white' : 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/40'}`}>
                1
              </span>
              <span>Student Profile</span>
            </div>

            <span className="w-12 h-[1px] bg-zinc-800"></span>

            <div className={`flex items-center gap-2 text-xs font-bold ${step === 2 ? 'text-[#e52b3d]' : 'text-zinc-500'}`}>
              <span className={`w-7 h-7 rounded-full flex items-center justify-center font-mono ${step === 2 ? 'bg-[#e52b3d] text-white' : 'bg-zinc-900 text-zinc-500 border border-zinc-800'}`}>
                2
              </span>
              <span>Payment Method</span>
            </div>
          </div>

          {step === 1 ? (
            /* STEP 1: CONTACT DETAILS & PROGRAM */
            <form onSubmit={handleNext} className="space-y-6 fade-in">
              <div className="space-y-4">
                <h3 className="text-lg font-bold font-headline text-white">1. Select Your Track</h3>
                
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {Object.entries(COURSE_DETAILS).map(([key, val]) => (
                    <label
                      key={key}
                      className={`p-4 rounded-2xl border cursor-pointer transition-all flex flex-col justify-between ${
                        formData.course === key
                          ? 'bg-zinc-900 border-[#e52b3d] shadow-lg shadow-[#e52b3d]/15'
                          : 'bg-zinc-950 border-zinc-800 hover:border-zinc-700'
                      }`}
                    >
                      <input
                        type="radio"
                        name="course"
                        value={key}
                        checked={formData.course === key}
                        onChange={(e) => setFormData({ ...formData, course: e.target.value })}
                        className="sr-only"
                      />
                      <div>
                        <span className="text-xs font-bold text-[#e52b3d] block mb-1">Cohort 02</span>
                        <h4 className="text-sm font-bold text-white font-headline">{val.title}</h4>
                      </div>
                      <div className="mt-4 pt-3 border-t border-zinc-800/80 flex items-baseline justify-between">
                        <span className="text-sm font-extrabold text-white">NPR {val.price.toLocaleString()}</span>
                        <span className="text-[10px] text-zinc-500 line-through">NPR {val.original.toLocaleString()}</span>
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-bold font-headline text-white">2. Learning Location Preference</h3>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <label className={`p-4 rounded-xl border cursor-pointer transition-all ${
                    formData.mode === 'physical' ? 'bg-zinc-900 border-[#e52b3d]' : 'bg-zinc-950 border-zinc-800'
                  }`}>
                    <input
                      type="radio"
                      name="mode"
                      value="physical"
                      checked={formData.mode === 'physical'}
                      onChange={(e) => setFormData({ ...formData, mode: e.target.value })}
                      className="sr-only"
                    />
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-[#e52b3d]/10 text-[#e52b3d] flex items-center justify-center font-bold text-xs">KTM</div>
                      <div>
                        <p className="text-sm font-bold text-white">Physical Classroom (Kathmandu)</p>
                        <p className="text-xs text-zinc-400">In-person desk space & morning coffee lab</p>
                      </div>
                    </div>
                  </label>

                  <label className={`p-4 rounded-xl border cursor-pointer transition-all ${
                    formData.mode === 'virtual' ? 'bg-zinc-900 border-[#e52b3d]' : 'bg-zinc-950 border-zinc-800'
                  }`}>
                    <input
                      type="radio"
                      name="mode"
                      value="virtual"
                      checked={formData.mode === 'virtual'}
                      onChange={(e) => setFormData({ ...formData, mode: e.target.value })}
                      className="sr-only"
                    />
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-blue-500/10 text-blue-400 flex items-center justify-center font-bold text-xs">ZOOM</div>
                      <div>
                        <p className="text-sm font-bold text-white">Virtual Online (Zoom Hybrid)</p>
                        <p className="text-xs text-zinc-400">Live HD broadcast from outside Kathmandu</p>
                      </div>
                    </div>
                  </label>
                </div>
              </div>

              <div className="space-y-4 pt-2">
                <h3 className="text-lg font-bold font-headline text-white">3. Personal Contact Details</h3>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold uppercase text-zinc-400 mb-1">Full Legal Name</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Saurav Thapa"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-[#e52b3d]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase text-zinc-400 mb-1">Email Address</label>
                    <input
                      type="email"
                      required
                      placeholder="saurav@gmail.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-[#e52b3d]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase text-zinc-400 mb-1">Mobile Number (+977)</label>
                    <input
                      type="tel"
                      required
                      placeholder="9801234567"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-[#e52b3d]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase text-zinc-400 mb-1">Current City</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Kathmandu, Pokhara, Chitwan"
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-[#e52b3d]"
                    />
                  </div>
                </div>
              </div>

              <div className="pt-4 flex justify-end">
                <button
                  type="submit"
                  className="btn-primary py-3 px-8 text-sm font-semibold shadow-xl shadow-[#e52b3d]/30"
                >
                  Proceed to Payment Summary <ArrowRight className="w-4 h-4 ml-1" />
                </button>
              </div>

            </form>
          ) : (
            /* STEP 2: SUMMARY & PAYMENT SELECTION */
            <form onSubmit={handleComplete} className="space-y-6 fade-in">
              
              {/* Order Breakdown Box */}
              <div className="bg-zinc-950 border border-zinc-800 p-6 rounded-2xl space-y-3">
                <h3 className="text-sm font-bold uppercase tracking-wider text-zinc-400">Enrollment Order Breakdown</h3>
                <div className="flex items-center justify-between text-sm py-1">
                  <span className="text-zinc-300 font-medium">{selectedCourse.title} (Cohort 02)</span>
                  <span className="text-white font-mono">NPR {selectedCourse.original.toLocaleString()}</span>
                </div>
                <div className="flex items-center justify-between text-sm py-1 text-emerald-400">
                  <span>Early-bird Cohort Discount</span>
                  <span className="font-mono">- NPR {discountAmount.toLocaleString()}</span>
                </div>
                <div className="pt-3 border-t border-zinc-800 flex items-center justify-between">
                  <span className="text-base font-bold text-white">Total Amount Due</span>
                  <span className="text-2xl font-extrabold text-[#e52b3d] font-headline">
                    NPR {selectedCourse.price.toLocaleString()}
                  </span>
                </div>
              </div>

              {/* Payment Methods */}
              <div className="space-y-4">
                <h3 className="text-lg font-bold font-headline text-white">Select Payment Option</h3>

                <div className="space-y-3">
                  <label className={`p-4 rounded-xl border cursor-pointer flex items-center justify-between transition-all ${
                    formData.paymentMethod === 'khalti' ? 'bg-zinc-900 border-[#e52b3d]' : 'bg-zinc-950 border-zinc-800'
                  }`}>
                    <div className="flex items-center gap-3">
                      <input
                        type="radio"
                        name="paymentMethod"
                        value="khalti"
                        checked={formData.paymentMethod === 'khalti'}
                        onChange={(e) => setFormData({ ...formData, paymentMethod: e.target.value })}
                      />
                      <div className="w-8 h-8 rounded-lg bg-purple-600/20 text-purple-400 font-bold text-xs flex items-center justify-center">
                        Khalti
                      </div>
                      <div>
                        <p className="text-sm font-bold text-white">Khalti Wallet / Web Pay</p>
                        <p className="text-xs text-zinc-400">Instant digital confirmation & seat locking</p>
                      </div>
                    </div>
                  </label>

                  <label className={`p-4 rounded-xl border cursor-pointer flex items-center justify-between transition-all ${
                    formData.paymentMethod === 'fonepay' ? 'bg-zinc-900 border-[#e52b3d]' : 'bg-zinc-950 border-zinc-800'
                  }`}>
                    <div className="flex items-center gap-3">
                      <input
                        type="radio"
                        name="paymentMethod"
                        value="fonepay"
                        checked={formData.paymentMethod === 'fonepay'}
                        onChange={(e) => setFormData({ ...formData, paymentMethod: e.target.value })}
                      />
                      <div className="w-8 h-8 rounded-lg bg-red-600/20 text-red-400 font-bold text-xs flex items-center justify-center">
                        <QrCode className="w-4 h-4" />
                      </div>
                      <div>
                        <p className="text-sm font-bold text-white">Fonepay Direct QR Scan</p>
                        <p className="text-xs text-zinc-400">Scan from any Mobile Banking App in Nepal</p>
                      </div>
                    </div>
                  </label>

                  <label className={`p-4 rounded-xl border cursor-pointer flex items-center justify-between transition-all ${
                    formData.paymentMethod === 'bank' ? 'bg-zinc-900 border-[#e52b3d]' : 'bg-zinc-950 border-zinc-800'
                  }`}>
                    <div className="flex items-center gap-3">
                      <input
                        type="radio"
                        name="paymentMethod"
                        value="bank"
                        checked={formData.paymentMethod === 'bank'}
                        onChange={(e) => setFormData({ ...formData, paymentMethod: e.target.value })}
                      />
                      <div className="w-8 h-8 rounded-lg bg-blue-600/20 text-blue-400 font-bold text-xs flex items-center justify-center">
                        <Building2 className="w-4 h-4" />
                      </div>
                      <div>
                        <p className="text-sm font-bold text-white">Direct Bank Transfer</p>
                        <p className="text-xs text-zinc-400">Nabil Bank / NIC Asia Account Transfer</p>
                      </div>
                    </div>
                  </label>
                </div>
              </div>

              <div className="pt-4 flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="btn-secondary text-xs py-2.5 px-4"
                >
                  <ArrowLeft className="w-4 h-4 mr-1" /> Back to Edit Details
                </button>

                <button
                  type="submit"
                  className="btn-primary py-3.5 px-8 text-sm font-semibold shadow-xl shadow-[#e52b3d]/30"
                >
                  Confirm & Lock My Seat <CheckCircle2 className="w-4 h-4 ml-1" />
                </button>
              </div>

            </form>
          )}

        </div>
      ) : (
        /* SUCCESS CONFIRMATION MODAL STATE */
        <div className="bg-[#121216] border border-emerald-500/30 rounded-3xl p-8 sm:p-12 text-center space-y-6 shadow-2xl fade-in">
          <div className="w-20 h-20 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mx-auto shadow-lg shadow-emerald-500/10">
            <CheckCircle2 className="w-10 h-10" />
          </div>

          <div className="space-y-2 max-w-md mx-auto">
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-400">Seat Reserved</span>
            <h2 className="text-3xl font-extrabold font-headline text-white">Registration Submitted!</h2>
            <p className="text-sm text-zinc-300">
              Welcome to Cohort 02, <strong className="text-white">{formData.fullName}</strong>. Your seat for <strong className="text-white">{selectedCourse.title}</strong> is reserved.
            </p>
          </div>

          <div className="max-w-md mx-auto bg-zinc-950 border border-zinc-800 p-6 rounded-2xl text-left space-y-3">
            <div className="flex items-center justify-between text-xs text-zinc-400">
              <span>Enrollment Ref ID:</span>
              <span className="font-mono text-emerald-400 font-bold">CAR-2026-8942</span>
            </div>
            <div className="flex items-center justify-between text-xs text-zinc-400">
              <span>Learning Mode:</span>
              <span className="text-white font-medium uppercase">{formData.mode}</span>
            </div>
            <div className="flex items-center justify-between text-xs text-zinc-400">
              <span>Contact Phone:</span>
              <span className="text-white">{formData.phone}</span>
            </div>
          </div>

          <p className="text-xs text-zinc-400 max-w-sm mx-auto">
            An admissions coordinator from Remote Job Nepal / The AI Institute will send your class portal credentials and payment voucher to <strong className="text-zinc-200">{formData.email}</strong> shortly.
          </p>

          <div className="pt-4">
            <Link to="/" className="btn-primary py-3 px-8 text-sm font-semibold">
              Return to Homepage
            </Link>
          </div>
        </div>
      )}

    </div>
  );
}
