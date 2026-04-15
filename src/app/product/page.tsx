import Link from "next/link"

export default function ProductPage() {
  return (
    <main className="min-h-screen bg-subtle-gradient pt-24">
      {/* Hero */}
      <section className="hero-spacing px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-5xl mx-auto">
            <div className="animate-fade-in-up">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight tracking-tight">
                Three systems. One infrastructure.
              </h1>
            </div>
            <div className="animate-fade-in-up stagger-2">
              <p className="text-xl sm:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
                Compliance OS, Cashflow OS, and Decision Intelligence — built for regulated MSMEs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Compliance OS */}
      <section className="section-spacing px-4 sm:px-6 lg:px-8 bg-[#0a0a0b]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="animate-fade-in-up">
              <div className="inline-flex items-center bg-blue-500/10 border border-blue-500/20 rounded-full px-5 py-2.5 mb-8">
                <span className="text-blue-500 text-sm font-semibold">Compliance OS</span>
              </div>
              <h2 className="text-4xl sm:text-5xl font-bold text-white mb-8 leading-tight">
                Audit-ready compliance automation
              </h2>
              <p className="text-xl text-gray-400 mb-10 leading-relaxed">
                Automate export notifications, track Schedule M compliance, validate batch records, and maintain complete ALCOA+ audit trails. Every action documented. Every gap identified.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-blue-500/20 rounded-xl flex items-center justify-center mr-4 mt-1">
                    <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-2 text-lg">Export Notification Automation</h4>
                    <p className="text-gray-400 text-base leading-relaxed">Auto-generate and submit CDSCO export notifications with validation checks.</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-6 h-6 bg-blue-500/20 rounded-full flex items-center justify-center mr-3 mt-0.5">
                    <svg className="w-4 h-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Schedule M Gap Analysis</h4>
                    <p className="text-gray-400 text-sm">Continuous monitoring against Schedule M requirements with automated gap reports.</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-6 h-6 bg-blue-500/20 rounded-full flex items-center justify-center mr-3 mt-0.5">
                    <svg className="w-4 h-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Batch Record Validation</h4>
                    <p className="text-gray-400 text-sm">Validate batch records against SOPs with automated error detection.</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-6 h-6 bg-blue-500/20 rounded-full flex items-center justify-center mr-3 mt-0.5">
                    <svg className="w-4 h-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">ALCOA+ Audit Trails</h4>
                    <p className="text-gray-400 text-sm">Complete attribution, legibility, contiguity, availability, and authenticity tracking.</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-6 h-6 bg-blue-500/20 rounded-full flex items-center justify-center mr-3 mt-0.5">
                    <svg className="w-4 h-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">DPDP Compliance Mapping</h4>
                    <p className="text-gray-400 text-sm">Data protection compliance mapping for India's Digital Personal Data Protection Act.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="premium-card glass rounded-2xl p-10 animate-scale-in">
              <h3 className="text-white font-semibold mb-8 text-xl">Workflow: Compliance Validation</h3>
              <div className="space-y-5">
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-blue-500 rounded-xl flex items-center justify-center text-white text-base font-bold mr-4">1</div>
                  <div className="flex-1 bg-[#1e1e20] rounded-xl p-4">
                    <p className="text-white text-base font-medium">Upload Documents</p>
                    <p className="text-gray-500 text-sm mt-1">Batch records, SOPs, certificates</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm font-bold mr-3">2</div>
                  <div className="flex-1 bg-[#1e1e20] rounded-lg p-3">
                    <p className="text-white text-sm font-medium">Auto-Extract & Validate</p>
                    <p className="text-gray-500 text-xs">AI-powered data extraction with rule validation</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm font-bold mr-3">3</div>
                  <div className="flex-1 bg-[#1e1e20] rounded-lg p-3">
                    <p className="text-white text-sm font-medium">Gap Analysis</p>
                    <p className="text-gray-500 text-xs">Schedule M compliance scoring</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm font-bold mr-3">4</div>
                  <div className="flex-1 bg-[#1e1e20] rounded-lg p-3">
                    <p className="text-white text-sm font-medium">Human Review</p>
                    <p className="text-gray-500 text-xs">QA manager approval workflow</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white text-sm font-bold mr-3">5</div>
                  <div className="flex-1 bg-[#1e1e20] rounded-lg p-3">
                    <p className="text-white text-sm font-medium">Audit Trail Locked</p>
                    <p className="text-gray-500 text-xs">Immutable compliance record</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cashflow OS */}
      <section className="section-spacing px-4 sm:px-6 lg:px-8 bg-[#0a0a0b]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 premium-card glass rounded-2xl p-10 animate-scale-in">
              <h3 className="text-white font-semibold mb-8 text-xl">Workflow: Payment Recovery</h3>
              <div className="space-y-5">
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-green-500 rounded-xl flex items-center justify-center text-white text-base font-bold mr-4">1</div>
                  <div className="flex-1 bg-[#1e1e20] rounded-xl p-4">
                    <p className="text-white text-base font-medium">Invoice Aging Tracking</p>
                    <p className="text-gray-500 text-sm mt-1">Auto-categorize by days overdue</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white text-sm font-bold mr-3">2</div>
                  <div className="flex-1 bg-[#1e1e20] rounded-lg p-3">
                    <p className="text-white text-sm font-medium">WhatsApp Reminder</p>
                    <p className="text-gray-500 text-xs">Automated payment reminders via WhatsApp</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white text-sm font-bold mr-3">3</div>
                  <div className="flex-1 bg-[#1e1e20] rounded-lg p-3">
                    <p className="text-white text-sm font-medium">Escalation Detection</p>
                    <p className="text-gray-500 text-xs">Flag high-risk accounts for manual follow-up</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white text-sm font-bold mr-3">4</div>
                  <div className="flex-1 bg-[#1e1e20] rounded-lg p-3">
                    <p className="text-white text-sm font-medium">Samadhaan Case Draft</p>
                    <p className="text-gray-500 text-xs">Auto-generate MSME Samadhaan complaint</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white text-sm font-bold mr-3">5</div>
                  <div className="flex-1 bg-[#1e1e20] rounded-lg p-3">
                    <p className="text-white text-sm font-medium">GST/ITC Reconciliation</p>
                    <p className="text-gray-500 text-xs">Match invoices with tax credits</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2 animate-fade-in-up">
              <div className="inline-flex items-center bg-green-500/10 border border-green-500/20 rounded-full px-5 py-2.5 mb-8">
                <span className="text-green-500 text-sm font-semibold">Cashflow OS</span>
              </div>
              <h2 className="text-4xl sm:text-5xl font-bold text-white mb-8 leading-tight">
                Recover payments. Stop leakage.
              </h2>
              <p className="text-xl text-gray-400 mb-10 leading-relaxed">
                Track invoice aging, automate WhatsApp recovery, draft MSME Samadhaan cases, and reconcile GST/ITC. Turn your receivables into working capital.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-green-500/20 rounded-xl flex items-center justify-center mr-4 mt-1">
                    <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-2 text-lg">Invoice Aging Tracking</h4>
                    <p className="text-gray-400 text-base leading-relaxed">Real-time aging buckets with risk scoring for each account.</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-6 h-6 bg-green-500/20 rounded-full flex items-center justify-center mr-3 mt-0.5">
                    <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">WhatsApp Recovery Automation</h4>
                    <p className="text-gray-400 text-sm">Automated payment reminders with escalation sequences.</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-6 h-6 bg-green-500/20 rounded-full flex items-center justify-center mr-3 mt-0.5">
                    <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">MSME Samadhaan Case Drafting</h4>
                    <p className="text-gray-400 text-sm">Auto-generate complaint documents for delayed payments.</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-6 h-6 bg-green-500/20 rounded-full flex items-center justify-center mr-3 mt-0.5">
                    <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">GST/ITC Reconciliation</h4>
                    <p className="text-gray-400 text-sm">Match invoices with input tax credits for accurate filing.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Decision Intelligence */}
      <section className="section-spacing px-4 sm:px-6 lg:px-8 bg-[#0a0a0b]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="animate-fade-in-up">
              <div className="inline-flex items-center bg-purple-500/10 border border-purple-500/20 rounded-full px-5 py-2.5 mb-8">
                <span className="text-purple-500 text-sm font-semibold">Decision Intelligence Layer</span>
              </div>
              <h2 className="text-4xl sm:text-5xl font-bold text-white mb-8 leading-tight">
                See risks before they become problems
              </h2>
              <p className="text-xl text-gray-400 mb-10 leading-relaxed">
                Risk scoring, real-time alerts, actionable recommendations, and complete dashboard visibility. Know exactly where your business stands at all times.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-purple-500/20 rounded-xl flex items-center justify-center mr-4 mt-1">
                    <svg className="w-5 h-5 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-2 text-lg">Risk Scoring Engine</h4>
                    <p className="text-gray-400 text-base leading-relaxed">Multi-dimensional risk scoring for compliance, cashflow, and operations.</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-6 h-6 bg-purple-500/20 rounded-full flex items-center justify-center mr-3 mt-0.5">
                    <svg className="w-4 h-4 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Real-Time Alerts</h4>
                    <p className="text-gray-400 text-sm">Instant notifications for critical gaps, payment delays, and audit risks.</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-6 h-6 bg-purple-500/20 rounded-full flex items-center justify-center mr-3 mt-0.5">
                    <svg className="w-4 h-4 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Actionable Recommendations</h4>
                    <p className="text-gray-400 text-sm">Prioritized action items based on risk and impact.</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-6 h-6 bg-purple-500/20 rounded-full flex items-center justify-center mr-3 mt-0.5">
                    <svg className="w-4 h-4 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Executive Dashboards</h4>
                    <p className="text-gray-400 text-sm">High-level visibility for owners and detailed views for managers.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="premium-card glass rounded-2xl p-10 animate-scale-in">
              <h3 className="text-white font-semibold mb-8 text-xl">Dashboard Preview</h3>
              <div className="space-y-6">
                <div className="bg-[#1e1e20] rounded-xl p-6">
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-gray-400 text-base">Compliance Score</span>
                    <span className="text-green-500 font-bold text-2xl">87/100</span>
                  </div>
                  <div className="w-full bg-[#27272a] rounded-full h-3">
                    <div className="bg-green-500 h-3 rounded-full transition-all duration-1000" style={{ width: '87%' }}></div>
                  </div>
                </div>
                
                <div className="bg-[#1e1e20] rounded-lg p-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-400 text-sm">Cashflow Health</span>
                    <span className="text-yellow-500 font-bold">72/100</span>
                  </div>
                  <div className="w-full bg-[#27272a] rounded-full h-2">
                    <div className="bg-yellow-500 h-2 rounded-full" style={{ width: '72%' }}></div>
                  </div>
                </div>

                <div className="bg-[#1e1e20] rounded-lg p-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-400 text-sm">Audit Readiness</span>
                    <span className="text-blue-500 font-bold">91/100</span>
                  </div>
                  <div className="w-full bg-[#27272a] rounded-full h-2">
                    <div className="bg-blue-500 h-2 rounded-full" style={{ width: '91%' }}></div>
                  </div>
                </div>

                <div className="border border-red-500/20 bg-red-500/5 rounded-lg p-4">
                  <div className="flex items-center mb-2">
                    <div className="w-2 h-2 bg-red-500 rounded-full mr-2 animate-pulse"></div>
                    <span className="text-red-500 font-semibold text-sm">Critical Alert</span>
                  </div>
                  <p className="text-gray-400 text-sm">3 invoices overdue 60+ days. Immediate action required.</p>
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
            Ready to see it in action?
          </h2>
          <p className="text-xl text-gray-400 mb-10 leading-relaxed">
            Book a demo to see how Cybrbrain can protect your business.
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
