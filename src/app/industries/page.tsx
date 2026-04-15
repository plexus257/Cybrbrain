import Link from "next/link"

export default function IndustriesPage() {
  return (
    <main className="min-h-screen bg-subtle-gradient pt-24">
      {/* Hero */}
      <section className="hero-spacing px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-5xl mx-auto">
            <div className="animate-fade-in-up">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight tracking-tight">
                Built for regulated industries
              </h1>
            </div>
            <div className="animate-fade-in-up stagger-2">
              <p className="text-xl sm:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
                Starting with pharma MSMEs. Expanding to all regulated businesses that need compliance infrastructure.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pharma - Primary Focus */}
      <section className="section-spacing px-4 sm:px-6 lg:px-8 bg-[#0a0a0b]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="animate-fade-in-up">
              <div className="inline-flex items-center bg-blue-500/10 border border-blue-500/20 rounded-full px-5 py-2.5 mb-8">
                <span className="text-blue-500 text-sm font-semibold">Primary Focus</span>
              </div>
              <h2 className="text-4xl sm:text-5xl font-bold text-white mb-8 leading-tight">
                Pharma MSMEs
              </h2>
              <p className="text-xl text-gray-400 mb-10 leading-relaxed">
                Ahmedabad's pharma ecosystem faces unique compliance challenges. Schedule M, CDSCO regulations, export requirements, and audit trails are non-negotiable. One mistake can mean shutdown.
              </p>
              
              <div className="space-y-6 mb-10">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-blue-500/20 rounded-xl flex items-center justify-center mr-4 mt-1">
                    <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-2 text-lg">Schedule M Compliance</h4>
                    <p className="text-gray-400 text-base leading-relaxed">Continuous gap analysis against WHO GMP standards.</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-8 h-8 bg-blue-500/20 rounded-xl flex items-center justify-center mr-4 mt-1">
                    <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-2 text-lg">CDSCO Export Notifications</h4>
                    <p className="text-gray-400 text-base leading-relaxed">Automated export notification generation and submission.</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-8 h-8 bg-blue-500/20 rounded-xl flex items-center justify-center mr-4 mt-1">
                    <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-2 text-lg">Batch Record Validation</h4>
                    <p className="text-gray-400 text-base leading-relaxed">Validate batch records against SOPs with error detection.</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-8 h-8 bg-blue-500/20 rounded-xl flex items-center justify-center mr-4 mt-1">
                    <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-2 text-lg">ALCOA+ Audit Trails</h4>
                    <p className="text-gray-400 text-base leading-relaxed">Complete documentation for FDA and other regulatory inspections.</p>
                  </div>
                </div>
              </div>

              <Link
                href="/waitlist"
                className="btn-premium inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all"
              >
                Join Pharma Pilot
              </Link>
            </div>

            <div className="premium-card glass rounded-2xl p-10 animate-scale-in">
              <h3 className="text-white font-semibold mb-8 text-xl">Pharma Pain Points We Solve</h3>
              <div className="space-y-6">
                <div className="bg-[#1e1e20] rounded-xl p-6 border-l-4 border-red-500">
                  <p className="text-white font-semibold mb-2 text-lg">Audit Anxiety</p>
                  <p className="text-gray-400 text-base leading-relaxed">Manual records mean no defense during inspections.</p>
                </div>
                <div className="bg-[#1e1e20] rounded-xl p-6 border-l-4 border-yellow-500">
                  <p className="text-white font-semibold mb-2 text-lg">Export Delays</p>
                  <p className="text-gray-400 text-base leading-relaxed">CDSCO notifications are complex and time-consuming.</p>
                </div>
                <div className="bg-[#1e1e20] rounded-xl p-6 border-l-4 border-orange-500">
                  <p className="text-white font-semibold mb-2 text-lg">Schedule M Gaps</p>
                  <p className="text-gray-400 text-base leading-relaxed">Continuous compliance monitoring is impossible manually.</p>
                </div>
                <div className="bg-[#1e1e20] rounded-xl p-6 border-l-4 border-red-500">
                  <p className="text-white font-semibold mb-2 text-lg">Cashflow Crunch</p>
                  <p className="text-gray-400 text-base leading-relaxed">Payment delays from large buyers strain working capital.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Future Industries */}
      <section className="section-spacing px-4 sm:px-6 lg:px-8 bg-[#0a0a0b]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-flex items-center bg-gray-500/10 border border-gray-500/20 rounded-full px-5 py-2.5 mb-8">
              <span className="text-gray-400 text-sm font-semibold">Coming Soon</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight">
              Expanding to more industries
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
              The compliance challenges we solve for pharma apply to many other regulated sectors.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Chemicals */}
            <div className="premium-card glass rounded-2xl p-10 opacity-70 hover:opacity-100 transition-opacity animate-fade-in-up stagger-1">
              <div className="w-16 h-16 bg-gray-500/20 rounded-2xl flex items-center justify-center mb-8">
                <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Chemical Manufacturing</h3>
              <p className="text-gray-400 mb-6 text-lg leading-relaxed">Pollution control compliance, safety documentation, and environmental audit trails.</p>
              <span className="text-gray-500 text-base">Coming Q3 2024</span>
            </div>

            {/* Food */}
            <div className="premium-card glass rounded-2xl p-10 opacity-70 hover:opacity-100 transition-opacity animate-fade-in-up stagger-2">
              <div className="w-16 h-16 bg-gray-500/20 rounded-2xl flex items-center justify-center mb-8">
                <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Food Manufacturing</h3>
              <p className="text-gray-400 mb-6 text-lg leading-relaxed">FSSAI compliance, batch traceability, and food safety audit documentation.</p>
              <span className="text-gray-500 text-base">Coming Q4 2024</span>
            </div>

            {/* Export SMEs */}
            <div className="premium-card glass rounded-2xl p-10 opacity-70 hover:opacity-100 transition-opacity animate-fade-in-up stagger-3">
              <div className="w-16 h-16 bg-gray-500/20 rounded-2xl flex items-center justify-center mb-8">
                <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Export SMEs</h3>
              <p className="text-gray-400 mb-6 text-lg leading-relaxed">Customs compliance, export documentation, and international trade audit trails.</p>
              <span className="text-gray-500 text-base">Coming Q1 2025</span>
            </div>
          </div>
        </div>
      </section>

      {/* Why Start with Pharma */}
      <section className="section-spacing px-4 sm:px-6 lg:px-8 bg-[#0a0a0b]">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-8 text-center leading-tight">
              Why start with pharma?
            </h2>
            <p className="text-xl text-gray-400 mb-12 text-center leading-relaxed">
              We understand pharma because we've lived it. The compliance burden is highest, the stakes are life-and-death, and the cashflow cycles are longest.
            </p>

            <div className="space-y-8">
              <div className="flex items-start animate-fade-in-up stagger-1">
                <div className="w-12 h-12 bg-blue-500/20 rounded-2xl flex items-center justify-center mr-6 mt-1">
                  <span className="text-blue-500 font-bold text-xl">1</span>
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-3 text-xl">Highest Regulatory Burden</h4>
                  <p className="text-gray-400 text-lg leading-relaxed">Pharma faces the most complex compliance requirements — Schedule M, CDSCO, FDA, WHO GMP. If we can solve this, we can solve anything.</p>
                </div>
              </div>

              <div className="flex items-start animate-fade-in-up stagger-2">
                <div className="w-12 h-12 bg-blue-500/20 rounded-2xl flex items-center justify-center mr-6 mt-1">
                  <span className="text-blue-500 font-bold text-xl">2</span>
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-3 text-xl">Concentrated Ecosystem</h4>
                  <p className="text-gray-400 text-lg leading-relaxed">Ahmedabad is India's pharma hub. 5,000+ pharma MSMEs in Gujarat alone. We can build deep expertise in one geography before expanding.</p>
                </div>
              </div>

              <div className="flex items-start animate-fade-in-up stagger-3">
                <div className="w-12 h-12 bg-blue-500/20 rounded-2xl flex items-center justify-center mr-6 mt-1">
                  <span className="text-blue-500 font-bold text-xl">3</span>
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-3 text-xl">Urgent Need</h4>
                  <p className="text-gray-400 text-lg leading-relaxed">Every pharma MSME we speak to has the same problem — manual compliance, audit anxiety, and cashflow traps. The need is immediate.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-spacing px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-500/10 to-transparent">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight">
            Are you a pharma MSME?
          </h2>
          <p className="text-xl text-gray-400 mb-10 leading-relaxed">
            Join our Ahmedabad pilot batch. Limited spots for early adopters.
          </p>
          <Link
            href="/waitlist"
            className="btn-premium inline-block bg-blue-600 hover:bg-blue-700 text-white px-12 py-5 rounded-xl text-xl font-semibold transition-all"
          >
            Join Pilot Batch
          </Link>
        </div>
      </section>
    </main>
  )
}
