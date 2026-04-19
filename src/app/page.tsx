import Link from "next/link"

export default function Home() {
  return (
    <main className="min-h-screen bg-subtle-gradient">
      {/* Hero Section */}
      <section className="hero-spacing px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-5xl mx-auto">
            <div className="animate-fade-in-up">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight tracking-tight">
                Your compliance. Your cashflow.{" "}
                <span className="gradient-text">Under control.</span>
              </h1>
            </div>
            <div className="animate-fade-in-up stagger-2">
              <p className="text-xl sm:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
                Cybrbrain helps regulated businesses stay compliant, recover payments faster, and maintain a complete audit trail — without chaos.
              </p>
            </div>
            <div className="animate-fade-in-up stagger-3 flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                href="/waitlist"
                className="btn-premium bg-blue-600 hover:bg-blue-700 text-white px-10 py-5 rounded-xl text-lg font-semibold transition-all"
              >
                Join Waitlist
              </Link>
              <Link
                href="/product"
                className="btn-premium bg-[#1e1e20] hover:bg-[#27272a] text-white px-10 py-5 rounded-xl text-lg font-semibold transition-all border border-[#27272a]"
              >
                See How It Works
              </Link>
            </div>
            <div className="animate-fade-in-up stagger-4 mt-8">
              <div className="inline-flex items-center bg-blue-500/10 border border-blue-500/20 rounded-full px-6 py-3">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-3 animate-pulse-slow"></div>
                <span className="text-blue-400 text-sm font-medium">Ahmedabad pharma pilot batch now open</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="section-spacing px-4 sm:px-6 lg:px-8 bg-[#0a0a0b]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight">
              The problem isn&apos;t complexity. It&apos;s chaos.
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
              Regulated MSMEs face shutdown risks and cashflow traps every day.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="premium-card glass rounded-2xl p-8 animate-fade-in-up stagger-1">
              <div className="w-16 h-16 bg-red-500/10 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-white mb-4">Schedule M Shutdown Risk</h3>
              <p className="text-gray-400 text-lg leading-relaxed">Manual compliance tracking leads to gaps. One audit finding can shut down operations for months.</p>
            </div>

            <div className="premium-card glass rounded-2xl p-8 animate-fade-in-up stagger-2">
              <div className="w-16 h-16 bg-yellow-500/10 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-white mb-4">Cashflow Traps</h3>
              <p className="text-gray-400 text-lg leading-relaxed">Invoice aging eats working capital. Manual recovery is slow and inconsistent. MSMEs lose lakhs every month.</p>
            </div>

            <div className="premium-card glass rounded-2xl p-8 animate-fade-in-up stagger-3">
              <div className="w-16 h-16 bg-orange-500/10 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-white mb-4">Audit Trail Gaps</h3>
              <p className="text-gray-400 text-lg leading-relaxed">Spreadsheets and paper records can&apos;t prove compliance. When inspectors arrive, you have no defense.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="section-spacing px-4 sm:px-6 lg:px-8 bg-[#0a0a0b]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight">
              Three systems. One infrastructure.
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
              Built for regulated industries. No AI gimmicks. Just systems that work.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="premium-card bg-gradient-to-br from-blue-500/10 to-transparent border border-blue-500/30 rounded-2xl p-10 animate-fade-in-up stagger-1">
              <div className="w-16 h-16 bg-blue-500/20 rounded-2xl flex items-center justify-center mb-8">
                <svg className="w-8 h-8 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Compliance OS</h3>
              <p className="text-gray-400 text-lg mb-6 leading-relaxed">Automate export notifications, track Schedule M gaps, validate batch records, and maintain ALCOA+ audit trails.</p>
              <ul className="space-y-3 text-base text-gray-400">
                <li className="flex items-center"><span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>Export notification automation</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>Schedule M gap analysis</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>Batch record validation</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>DPDP compliance mapping</li>
              </ul>
            </div>

            <div className="premium-card bg-gradient-to-br from-green-500/10 to-transparent border border-green-500/30 rounded-2xl p-10 animate-fade-in-up stagger-2">
              <div className="w-16 h-16 bg-green-500/20 rounded-2xl flex items-center justify-center mb-8">
                <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Cashflow OS</h3>
              <p className="text-gray-400 text-lg mb-6 leading-relaxed">Track invoice aging, automate WhatsApp recovery, draft MSME Samadhaan cases, and reconcile GST/ITC.</p>
              <ul className="space-y-3 text-base text-gray-400">
                <li className="flex items-center"><span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>Invoice aging tracking</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>WhatsApp recovery automation</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>MSME Samadhaan case drafting</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>GST/ITC reconciliation</li>
              </ul>
            </div>

            <div className="premium-card bg-gradient-to-br from-purple-500/10 to-transparent border border-purple-500/30 rounded-2xl p-10 animate-fade-in-up stagger-3">
              <div className="w-16 h-16 bg-purple-500/20 rounded-2xl flex items-center justify-center mb-8">
                <svg className="w-8 h-8 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Decision Intelligence</h3>
              <p className="text-gray-400 text-lg mb-6 leading-relaxed">Risk scoring, real-time alerts, actionable recommendations, and complete dashboard visibility.</p>
              <ul className="space-y-3 text-base text-gray-400">
                <li className="flex items-center"><span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>Risk scoring engine</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>Real-time alerts</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>Actionable recommendations</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>Executive dashboards</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="section-spacing px-4 sm:px-6 lg:px-8 bg-[#0a0a0b]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight">
              Results that matter
            </h2>
            <p className="text-xl text-gray-400">Real outcomes from regulated businesses like yours.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="premium-card glass rounded-2xl p-10 animate-fade-in-up stagger-1">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-green-500/20 rounded-2xl flex items-center justify-center mr-6">
                  <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-4xl font-bold text-white">₹4.2L</p>
                  <p className="text-gray-400 text-base">Recovered in 21 days</p>
                </div>
              </div>
              <p className="text-gray-400 text-lg leading-relaxed">&quot;Automated WhatsApp recovery helped us collect overdue payments that were stuck for months. Our working capital is finally healthy.&quot;</p>
              <p className="text-gray-500 text-base mt-6">— Pharma MSME, Ahmedabad</p>
            </div>

            <div className="premium-card glass rounded-2xl p-10 animate-fade-in-up stagger-2">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-blue-500/20 rounded-2xl flex items-center justify-center mr-6">
                  <svg className="w-8 h-8 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-4xl font-bold text-white">0</p>
                  <p className="text-gray-400 text-base">Critical audit findings</p>
                </div>
              </div>
              <p className="text-gray-400 text-lg leading-relaxed">&quot;Passed our FDA inspection with zero critical findings. The audit trail system proved every compliance action was documented and verified.&quot;</p>
              <p className="text-gray-500 text-base mt-6">— Pharma Manufacturer, Gujarat</p>
            </div>
          </div>
        </div>
      </section>

      {/* Target Users */}
      <section className="section-spacing px-4 sm:px-6 lg:px-8 bg-[#0a0a0b]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight">
              Built for regulated MSMEs
            </h2>
            <p className="text-xl text-gray-400">Starting with pharma. Expanding to all regulated industries.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center animate-fade-in-up stagger-1">
              <div className="w-20 h-20 bg-[#1e1e20] rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-white mb-4">Business Owners</h3>
              <p className="text-gray-400 text-lg leading-relaxed">Protect your license. Sleep better knowing compliance is handled.</p>
            </div>

            <div className="text-center animate-fade-in-up stagger-2">
              <div className="w-20 h-20 bg-[#1e1e20] rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-white mb-4">QA Managers</h3>
              <p className="text-gray-400 text-lg leading-relaxed">Automate documentation. Focus on quality, not paperwork.</p>
            </div>

            <div className="text-center animate-fade-in-up stagger-3">
              <div className="w-20 h-20 bg-[#1e1e20] rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-white mb-4">Finance Teams</h3>
              <p className="text-gray-400 text-lg leading-relaxed">Recover faster. Stop chasing payments manually.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-spacing px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-500/10 to-transparent">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight">
            Ready to protect your business?
          </h2>
          <p className="text-xl text-gray-400 mb-10 leading-relaxed">
            Join the Ahmedabad pharma pilot batch. Limited spots available.
          </p>
          <Link
            href="/waitlist"
            className="btn-premium inline-block bg-blue-600 hover:bg-blue-700 text-white px-12 py-5 rounded-xl text-xl font-semibold transition-all"
          >
            Join Waitlist
          </Link>
        </div>
      </section>
    </main>
  )
}
