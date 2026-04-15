import Link from "next/link"

export default function HowItWorksPage() {
  return (
    <main className="min-h-screen bg-subtle-gradient pt-24">
      {/* Hero */}
      <section className="hero-spacing px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-5xl mx-auto">
            <div className="animate-fade-in-up">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight tracking-tight">
                How Cybrbrain works
              </h1>
            </div>
            <div className="animate-fade-in-up stagger-2">
              <p className="text-xl sm:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
                From document upload to audit-ready compliance — a complete workflow designed for regulated MSMEs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Workflow */}
      <section className="section-spacing px-4 sm:px-6 lg:px-8 bg-[#0a0a0b]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6 text-center leading-tight">The Complete Workflow</h2>
            <p className="text-xl text-gray-400 text-center max-w-2xl mx-auto leading-relaxed">Eight steps from chaos to compliance.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Step 1 */}
            <div className="premium-card glass rounded-2xl p-8 relative animate-fade-in-up stagger-1">
              <div className="absolute -top-4 -left-4 w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white font-bold text-base shadow-lg">1</div>
              <div className="w-16 h-16 bg-blue-500/20 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-white mb-3">Upload</h3>
              <p className="text-gray-400 text-base leading-relaxed">Upload documents: batch records, invoices, SOPs, certificates. Drag and drop or bulk upload.</p>
            </div>

            {/* Step 2 */}
            <div className="bg-[#141415] border border-[#27272a] rounded-xl p-6 relative">
              <div className="absolute -top-3 -left-3 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-sm">2</div>
              <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Extract</h3>
              <p className="text-gray-400 text-sm">AI-powered data extraction from documents. Structured data ready for validation.</p>
            </div>

            {/* Step 3 */}
            <div className="bg-[#141415] border border-[#27272a] rounded-xl p-6 relative">
              <div className="absolute -top-3 -left-3 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-sm">3</div>
              <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Validate</h3>
              <p className="text-gray-400 text-sm">Rule-based validation against SOPs, Schedule M, and compliance requirements.</p>
            </div>

            {/* Step 4 */}
            <div className="bg-[#141415] border border-[#27272a] rounded-xl p-6 relative">
              <div className="absolute -top-3 -left-3 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-sm">4</div>
              <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Score</h3>
              <p className="text-gray-400 text-sm">Risk scoring and compliance scoring. Know exactly where you stand.</p>
            </div>

            {/* Step 5 */}
            <div className="bg-[#141415] border border-[#27272a] rounded-xl p-6 relative">
              <div className="absolute -top-3 -left-3 w-8 h-8 bg-green-600 rounded-full flex items-center justify-center text-white font-bold text-sm">5</div>
              <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Draft</h3>
              <p className="text-gray-400 text-sm">Auto-generate compliance reports, recovery notices, and Samadhaan cases.</p>
            </div>

            {/* Step 6 */}
            <div className="bg-[#141415] border border-[#27272a] rounded-xl p-6 relative">
              <div className="absolute -top-3 -left-3 w-8 h-8 bg-green-600 rounded-full flex items-center justify-center text-white font-bold text-sm">6</div>
              <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Review</h3>
              <p className="text-gray-400 text-sm">Human review workflow. QA managers and owners approve before submission.</p>
            </div>

            {/* Step 7 */}
            <div className="bg-[#141415] border border-[#27272a] rounded-xl p-6 relative">
              <div className="absolute -top-3 -left-3 w-8 h-8 bg-green-600 rounded-full flex items-center justify-center text-white font-bold text-sm">7</div>
              <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Approve</h3>
              <p className="text-gray-400 text-sm">Final approval with digital signatures. Complete audit trail of who approved what.</p>
            </div>

            {/* Step 8 */}
            <div className="bg-[#141415] border border-[#27272a] rounded-xl p-6 relative">
              <div className="absolute -top-3 -left-3 w-8 h-8 bg-green-600 rounded-full flex items-center justify-center text-white font-bold text-sm">8</div>
              <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Submit</h3>
              <p className="text-gray-400 text-sm">Submit to regulators, customers, or authorities. Track submission status.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Role-Based Flows */}
      <section className="section-spacing px-4 sm:px-6 lg:px-8 bg-[#0a0a0b]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight">Role-Based Workflows</h2>
            <p className="text-xl text-gray-400 text-center max-w-2xl mx-auto leading-relaxed">Different views for different roles. Everyone sees what they need.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Owner Flow */}
            <div className="premium-card glass rounded-2xl p-10 animate-fade-in-up stagger-1">
              <div className="w-16 h-16 bg-blue-500/20 rounded-2xl flex items-center justify-center mb-8">
                <svg className="w-8 h-8 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Business Owner</h3>
              <p className="text-gray-400 mb-8 text-lg leading-relaxed">High-level visibility. Focus on risks and decisions.</p>
              <ul className="space-y-4">
                <li className="flex items-center text-base text-gray-300">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-4"></span>
                  Executive dashboard with KPIs
                </li>
                <li className="flex items-center text-sm text-gray-300">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                  Risk alerts and notifications
                </li>
                <li className="flex items-center text-sm text-gray-300">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                  Approval workflows for critical actions
                </li>
                <li className="flex items-center text-sm text-gray-300">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                  Cashflow and compliance health scores
                </li>
              </ul>
            </div>

            {/* QA Flow */}
            <div className="bg-[#141415] border border-[#27272a] rounded-xl p-8">
              <div className="w-14 h-14 bg-green-500/20 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">QA Manager</h3>
              <p className="text-gray-400 mb-6">Detailed compliance view. Focus on documentation and validation.</p>
              <ul className="space-y-3">
                <li className="flex items-center text-sm text-gray-300">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                  Document review queue
                </li>
                <li className="flex items-center text-sm text-gray-300">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                  Schedule M gap tracking
                </li>
                <li className="flex items-center text-sm text-gray-300">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                  Batch record validation
                </li>
                <li className="flex items-center text-sm text-gray-300">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                  Audit trail management
                </li>
              </ul>
            </div>

            {/* Finance Flow */}
            <div className="bg-[#141415] border border-[#27272a] rounded-xl p-8">
              <div className="w-14 h-14 bg-purple-500/20 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Finance Team</h3>
              <p className="text-gray-400 mb-6">Recovery-focused view. Focus on collections and reconciliation.</p>
              <ul className="space-y-3">
                <li className="flex items-center text-sm text-gray-300">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                  Invoice aging dashboard
                </li>
                <li className="flex items-center text-sm text-gray-300">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                  Payment recovery queue
                </li>
                <li className="flex items-center text-sm text-gray-300">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                  Samadhaan case management
                </li>
                <li className="flex items-center text-sm text-gray-300">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                  GST/ITC reconciliation
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-spacing px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-500/10 to-transparent">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight">
            Ready to streamline your workflow?
          </h2>
          <p className="text-xl text-gray-400 mb-10 leading-relaxed">
            Join the pilot batch and see how Cybrbrain transforms your operations.
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
