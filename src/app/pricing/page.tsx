import Link from "next/link"

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-subtle-gradient pt-24">
      {/* Hero */}
      <section className="hero-spacing px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-5xl mx-auto">
            <div className="animate-fade-in-up">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight tracking-tight">
                Simple, trust-based pricing
              </h1>
            </div>
            <div className="animate-fade-in-up stagger-2">
              <p className="text-xl sm:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
                No SaaS fluff. No hidden fees. Just pricing that makes sense for regulated MSMEs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="section-spacing px-4 sm:px-6 lg:px-8 bg-[#0a0a0b]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Pilot Plan */}
            <div className="premium-card glass rounded-2xl p-10 animate-fade-in-up stagger-1">
              <h3 className="text-2xl font-bold text-white mb-3">Pilot Plan</h3>
              <p className="text-gray-400 text-base mb-8">For early adopters in Ahmedabad</p>
              <div className="mb-8">
                <span className="text-5xl font-bold text-white">₹2K</span>
                <span className="text-gray-400 text-2xl">–₹5K</span>
                <span className="text-gray-500 text-base">/month</span>
              </div>
              <ul className="space-y-4 mb-10">
                <li className="flex items-start text-base text-gray-300">
                  <svg className="w-6 h-6 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Basic compliance tracking
                </li>
                <li className="flex items-start text-base text-gray-300">
                  <svg className="w-6 h-6 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Invoice aging dashboard
                </li>
                <li className="flex items-start text-base text-gray-300">
                  <svg className="w-6 h-6 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Email support
                </li>
                <li className="flex items-start text-base text-gray-300">
                  <svg className="w-6 h-6 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Up to 5 users
                </li>
              </ul>
              <Link
                href="/waitlist"
                className="btn-premium block w-full bg-[#1e1e20] hover:bg-[#27272a] text-white px-6 py-4 rounded-xl text-center font-semibold transition-all border border-[#27272a]"
              >
                Join Pilot
              </Link>
            </div>

            {/* Compliance Plan */}
            <div className="premium-card glass rounded-2xl p-10 relative border-2 border-blue-500 animate-fade-in-up stagger-2">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-blue-500 text-white text-sm font-bold px-4 py-1.5 rounded-full shadow-lg">
                POPULAR
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">Compliance Plan</h3>
              <p className="text-gray-400 text-base mb-8">Full compliance infrastructure</p>
              <div className="mb-8">
                <span className="text-5xl font-bold text-white">₹8K</span>
                <span className="text-gray-400 text-2xl">–₹25K</span>
                <span className="text-gray-500 text-base">/month</span>
              </div>
              <ul className="space-y-4 mb-10">
                <li className="flex items-start text-base text-gray-300">
                  <svg className="w-6 h-6 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Full Compliance OS
                </li>
                <li className="flex items-start text-base text-gray-300">
                  <svg className="w-6 h-6 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Schedule M gap analysis
                </li>
                <li className="flex items-start text-base text-gray-300">
                  <svg className="w-6 h-6 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  ALCOA+ audit trails
                </li>
                <li className="flex items-start text-base text-gray-300">
                  <svg className="w-6 h-6 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Priority support
                </li>
                <li className="flex items-start text-base text-gray-300">
                  <svg className="w-6 h-6 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Up to 20 users
                </li>
              </ul>
              <Link
                href="/waitlist"
                className="btn-premium block w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-4 rounded-xl text-center font-semibold transition-all"
              >
                Get Started
              </Link>
            </div>

            {/* Recovery Module */}
            <div className="premium-card glass rounded-2xl p-10 animate-fade-in-up stagger-3">
              <h3 className="text-2xl font-bold text-white mb-3">Recovery Module</h3>
              <p className="text-gray-400 text-base mb-8">Pay only for results</p>
              <div className="mb-8">
                <span className="text-5xl font-bold text-white">2–5%</span>
                <span className="text-gray-500 text-base"> success fee</span>
              </div>
              <ul className="space-y-4 mb-10">
                <li className="flex items-start text-base text-gray-300">
                  <svg className="w-6 h-6 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Full Cashflow OS
                </li>
                <li className="flex items-start text-base text-gray-300">
                  <svg className="w-6 h-6 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  WhatsApp automation
                </li>
                <li className="flex items-start text-base text-gray-300">
                  <svg className="w-6 h-6 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Samadhaan case drafting
                </li>
                <li className="flex items-start text-base text-gray-300">
                  <svg className="w-6 h-6 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  GST/ITC reconciliation
                </li>
                <li className="flex items-start text-base text-gray-300">
                  <svg className="w-6 h-6 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  No upfront cost
                </li>
              </ul>
              <Link
                href="/waitlist"
                className="btn-premium block w-full bg-[#1e1e20] hover:bg-[#27272a] text-white px-6 py-4 rounded-xl text-center font-semibold transition-all border border-[#27272a]"
              >
                Learn More
              </Link>
            </div>

            {/* Enterprise */}
            <div className="premium-card glass rounded-2xl p-10 animate-fade-in-up stagger-4">
              <h3 className="text-2xl font-bold text-white mb-3">Enterprise</h3>
              <p className="text-gray-400 text-base mb-8">For larger operations</p>
              <div className="mb-8">
                <span className="text-5xl font-bold text-white">Custom</span>
              </div>
              <ul className="space-y-4 mb-10">
                <li className="flex items-start text-base text-gray-300">
                  <svg className="w-6 h-6 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  All Compliance + Cashflow features
                </li>
                <li className="flex items-start text-base text-gray-300">
                  <svg className="w-6 h-6 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Decision Intelligence Layer
                </li>
                <li className="flex items-start text-base text-gray-300">
                  <svg className="w-6 h-6 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Custom integrations
                </li>
                <li className="flex items-start text-base text-gray-300">
                  <svg className="w-6 h-6 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Dedicated account manager
                </li>
                <li className="flex items-start text-base text-gray-300">
                  <svg className="w-6 h-6 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Unlimited users
                </li>
              </ul>
              <Link
                href="/waitlist"
                className="btn-premium block w-full bg-[#1e1e20] hover:bg-[#27272a] text-white px-6 py-4 rounded-xl text-center font-semibold transition-all border border-[#27272a]"
              >
                Contact Sales
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-spacing px-4 sm:px-6 lg:px-8 bg-[#0a0a0b]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-12 text-center leading-tight">
            Pricing Questions
          </h2>

          <div className="space-y-8">
            <div className="premium-card glass rounded-2xl p-8 animate-fade-in-up stagger-1">
              <h3 className="text-white font-semibold mb-4 text-xl">Why is pricing a range?</h3>
              <p className="text-gray-400 text-base leading-relaxed">
                Pricing scales with your business size — number of users, document volume, and complexity of operations. We'll provide a custom quote based on your specific needs.
              </p>
            </div>

            <div className="premium-card glass rounded-2xl p-8 animate-fade-in-up stagger-2">
              <h3 className="text-white font-semibold mb-4 text-xl">How does the recovery module work?</h3>
              <p className="text-gray-400 text-base leading-relaxed">
                You pay nothing upfront. We only charge a success fee (2-5%) on payments we actually recover for you. If we don't recover, you don't pay.
              </p>
            </div>

            <div className="premium-card glass rounded-2xl p-8 animate-fade-in-up stagger-3">
              <h3 className="text-white font-semibold mb-4 text-xl">Can I combine plans?</h3>
              <p className="text-gray-400 text-base leading-relaxed">
                Yes. Many businesses start with Compliance Plan and add the Recovery Module when they're ready to focus on collections.
              </p>
            </div>

            <div className="premium-card glass rounded-2xl p-8 animate-fade-in-up stagger-4">
              <h3 className="text-white font-semibold mb-4 text-xl">What's included in the pilot?</h3>
              <p className="text-gray-400 text-base leading-relaxed">
                The pilot is designed to help you validate the system with basic features. You'll get core compliance tracking and invoice aging dashboards at a reduced rate during the pilot period.
              </p>
            </div>

            <div className="premium-card glass rounded-2xl p-8 animate-fade-in-up stagger-5">
              <h3 className="text-white font-semibold mb-4 text-xl">Is there a long-term contract?</h3>
              <p className="text-gray-400 text-base leading-relaxed">
                No. We believe in earning your business every month. All plans are month-to-month with no long-term commitment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-spacing px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-500/10 to-transparent">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight">
            Not sure which plan is right for you?
          </h2>
          <p className="text-xl text-gray-400 mb-10 leading-relaxed">
            Book a demo and we'll help you find the best fit for your business.
          </p>
          <Link
            href="/waitlist"
            className="btn-premium inline-block bg-blue-600 hover:bg-blue-700 text-white px-12 py-5 rounded-xl text-xl font-semibold transition-all"
          >
            Book Demo
          </Link>
        </div>
      </section>
    </main>
  )
}
