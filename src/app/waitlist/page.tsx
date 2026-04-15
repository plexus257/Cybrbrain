"use client"

import { useState } from "react"
import Link from "next/link"

export default function WaitlistPage() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    role: "",
    phone: "",
    email: "",
    problem: ""
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In production, this would send to an API
    console.log("Form submitted:", formData)
    setIsSubmitted(true)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  if (isSubmitted) {
    return (
      <main className="min-h-screen bg-subtle-gradient pt-24 flex items-center justify-center px-4">
        <div className="max-w-2xl mx-auto text-center animate-fade-in-up">
          <div className="w-24 h-24 bg-green-500/20 rounded-2xl flex items-center justify-center mx-auto mb-10 animate-float">
            <svg className="w-12 h-12 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            You're on the waitlist!
          </h1>
          <p className="text-xl text-gray-400 mb-10 leading-relaxed">
            We'll reach out within 24 hours to schedule your demo. The Ahmedabad pharma pilot batch is filling up fast.
          </p>
          <Link
            href="/"
            className="btn-premium inline-block bg-blue-600 hover:bg-blue-700 text-white px-10 py-5 rounded-xl text-xl font-semibold transition-all"
          >
            Back to Home
          </Link>
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-subtle-gradient pt-24">
      {/* Hero */}
      <section className="hero-spacing px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-5xl mx-auto">
            <div className="animate-fade-in-up">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight tracking-tight">
                Get early access
              </h1>
            </div>
            <div className="animate-fade-in-up stagger-2">
              <p className="text-xl sm:text-2xl text-gray-400 mb-6 max-w-3xl mx-auto leading-relaxed">
                Join the Ahmedabad pharma pilot batch. Limited spots available.
              </p>
            </div>
            <div className="animate-fade-in-up stagger-3 inline-flex items-center bg-red-500/10 border border-red-500/20 rounded-full px-6 py-3">
              <div className="w-2 h-2 bg-red-500 rounded-full mr-3 animate-pulse-slow"></div>
              <span className="text-red-400 text-base font-semibold">Pilot batch: 12/20 spots filled</span>
            </div>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="section-spacing px-4 sm:px-6 lg:px-8 bg-[#0a0a0b]">
        <div className="max-w-2xl mx-auto">
          <div className="premium-card glass rounded-2xl p-10 sm:p-14 animate-scale-in">
            <h2 className="text-3xl font-bold text-white mb-3">Tell us about your business</h2>
            <p className="text-gray-400 mb-10 text-lg leading-relaxed">We'll reach out within 24 hours to schedule your demo.</p>

            <form onSubmit={handleSubmit} className="space-y-8">
              <div>
                <label htmlFor="name" className="block text-base font-medium text-gray-300 mb-3">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-[#1e1e20] border border-[#27272a] rounded-xl px-5 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-all"
                  placeholder="Your full name"
                />
              </div>

              <div>
                <label htmlFor="company" className="block text-base font-medium text-gray-300 mb-3">
                  Company Name *
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  required
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full bg-[#1e1e20] border border-[#27272a] rounded-xl px-5 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-all"
                  placeholder="Your company name"
                />
              </div>

              <div>
                <label htmlFor="role" className="block text-base font-medium text-gray-300 mb-3">
                  Your Role *
                </label>
                <select
                  id="role"
                  name="role"
                  required
                  value={formData.role}
                  onChange={handleChange}
                  className="w-full bg-[#1e1e20] border border-[#27272a] rounded-xl px-5 py-4 text-white focus:outline-none focus:border-blue-500 transition-all"
                >
                  <option value="">Select your role</option>
                  <option value="owner">Business Owner</option>
                  <option value="qa">QA Manager</option>
                  <option value="finance">Finance Manager</option>
                  <option value="operations">Operations Manager</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="phone" className="block text-base font-medium text-gray-300 mb-3">
                  WhatsApp Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full bg-[#1e1e20] border border-[#27272a] rounded-xl px-5 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-all"
                  placeholder="+91 98765 43210"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-base font-medium text-gray-300 mb-3">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-[#1e1e20] border border-[#27272a] rounded-xl px-5 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-all"
                  placeholder="you@company.com"
                />
              </div>

              <div>
                <label htmlFor="problem" className="block text-base font-medium text-gray-300 mb-3">
                  Biggest Compliance/Cashflow Challenge *
                </label>
                <select
                  id="problem"
                  name="problem"
                  required
                  value={formData.problem}
                  onChange={handleChange}
                  className="w-full bg-[#1e1e20] border border-[#27272a] rounded-xl px-5 py-4 text-white focus:outline-none focus:border-blue-500 transition-all"
                >
                  <option value="">Select your biggest challenge</option>
                  <option value="schedule-m">Schedule M compliance gaps</option>
                  <option value="audit-trails">Missing audit trails</option>
                  <option value="payment-delays">Payment delays / cashflow issues</option>
                  <option value="export-notifications">Export notification complexity</option>
                  <option value="manual-processes">Too many manual processes</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <button
                type="submit"
                className="btn-premium w-full bg-blue-600 hover:bg-blue-700 text-white px-8 py-5 rounded-xl text-xl font-semibold transition-all"
              >
                Get Early Access
              </button>

              <p className="text-gray-500 text-sm text-center">
                By submitting, you agree to receive communications from Cybrbrain. We respect your privacy.
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* Trust Signals */}
      <section className="section-spacing px-4 sm:px-6 lg:px-8 bg-[#0a0a0b]">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center animate-fade-in-up stagger-1">
              <div className="w-16 h-16 bg-blue-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-white font-semibold mb-3 text-xl">Secure & Private</h3>
              <p className="text-gray-400 text-base leading-relaxed">Your data is encrypted and never shared with third parties.</p>
            </div>

            <div className="text-center animate-fade-in-up stagger-2">
              <div className="w-16 h-16 bg-green-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-white font-semibold mb-3 text-xl">Human Approval</h3>
              <p className="text-gray-400 text-base leading-relaxed">Every workflow requires human approval. No blind automation.</p>
            </div>

            <div className="text-center animate-fade-in-up stagger-3">
              <div className="w-16 h-16 bg-purple-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-white font-semibold mb-3 text-xl">Fast Onboarding</h3>
              <p className="text-gray-400 text-base leading-relaxed">Get started in under 48 hours. We handle the setup.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Alternative CTA */}
      <section className="section-spacing px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-500/10 to-transparent">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight">
            Prefer to talk first?
          </h2>
          <p className="text-xl text-gray-400 mb-10 leading-relaxed">
            Book a 30-minute demo call to see Cybrbrain in action.
          </p>
          <Link
            href="/"
            className="btn-premium inline-block bg-[#1e1e20] hover:bg-[#27272a] text-white px-12 py-5 rounded-xl text-xl font-semibold transition-all border border-[#27272a]"
          >
            Book Demo Call
          </Link>
        </div>
      </section>
    </main>
  )
}
