import Link from "next/link"

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-subtle-gradient pt-24">
      <section className="hero-spacing px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center max-w-5xl mx-auto">
          <div className="animate-fade-in-up">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight tracking-tight">
              Why Cybrbrain exists
            </h1>
          </div>
          <div className="animate-fade-in-up stagger-2">
            <p className="text-xl sm:text-2xl text-gray-400 mb-12">
              Building compliance infrastructure for India&apos;s regulated MSMEs.
            </p>
          </div>
        </div>
      </section>

      <section className="section-spacing px-4 sm:px-6 lg:px-8 bg-[#0a0a0b]">
        <div className="max-w-4xl mx-auto">
          <div className="premium-card glass rounded-2xl p-10 animate-fade-in-up">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-8 leading-tight">The Problem</h2>
            <p className="text-xl text-gray-400 mb-6 leading-relaxed">
              India&apos;s regulated MSMEs face a compliance crisis. Manual processes, spreadsheet chaos, and audit anxiety are the norm. One Schedule M gap can shut down a pharma unit for months. Payment delays from large buyers strangle working capital.
            </p>
            <p className="text-xl text-gray-400 leading-relaxed">
              Existing solutions are either too enterprise-focused or too generic. No one is building infrastructure specifically for India&apos;s regulated MSMEs — the backbone of our manufacturing ecosystem.
            </p>
          </div>
        </div>
      </section>

      <section className="section-spacing px-4 sm:px-6 lg:px-8 bg-[#0a0a0b]">
        <div className="max-w-4xl mx-auto">
          <div className="premium-card glass rounded-2xl p-10 animate-fade-in-up">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-8 leading-tight">Our Mission</h2>
            <p className="text-xl text-gray-400 mb-6 leading-relaxed">
              We&apos;re building compliance + cashflow infrastructure that protects MSMEs from shutdown risk and unlocks their working capital.
            </p>
            <p className="text-xl text-gray-400 leading-relaxed">
              Not AI employees. Not automation gimmicks. Real systems that document, validate, and recover — with human approval at every step.
            </p>
          </div>
        </div>
      </section>

      <section className="section-spacing px-4 sm:px-6 lg:px-8 bg-[#0a0a0b]">
        <div className="max-w-4xl mx-auto">
          <div className="premium-card glass rounded-2xl p-10 animate-fade-in-up">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-8 leading-tight">Our Vision</h2>
            <p className="text-xl text-gray-400 mb-6 leading-relaxed">
              Every regulated MSME in India should have audit-ready systems and healthy cashflow. Compliance should be a competitive advantage, not a burden.
            </p>
            <p className="text-xl text-gray-400 leading-relaxed">
              We&apos;re starting with pharma MSMEs in Ahmedabad. We&apos;ll expand to chemicals, food manufacturing, and export SMEs. The compliance challenges are similar — the infrastructure should be shared.
            </p>
          </div>
        </div>
      </section>

      <section className="section-spacing px-4 sm:px-6 lg:px-8 bg-[#0a0a0b]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-12 text-center leading-tight">Our Approach</h2>
          <div className="space-y-8">
            <div className="flex items-start animate-fade-in-up stagger-1">
              <div className="w-12 h-12 bg-blue-500/20 rounded-2xl flex items-center justify-center mr-6 mt-1">
                <span className="text-blue-500 font-bold text-xl">1</span>
              </div>
              <div>
                <h4 className="text-white font-semibold mb-3 text-xl">Human-in-the-loop</h4>
                <p className="text-gray-400 text-lg leading-relaxed">Every workflow requires human approval. We automate the tedious work, not the decisions.</p>
              </div>
            </div>
            <div className="flex items-start animate-fade-in-up stagger-2">
              <div className="w-12 h-12 bg-blue-500/20 rounded-2xl flex items-center justify-center mr-6 mt-1">
                <span className="text-blue-500 font-bold text-xl">2</span>
              </div>
              <div>
                <h4 className="text-white font-semibold mb-3 text-xl">Audit-ready by design</h4>
                <p className="text-gray-400 text-lg leading-relaxed">Every action is documented. Every change is tracked. Complete audit trails are non-negotiable.</p>
              </div>
            </div>
            <div className="flex items-start animate-fade-in-up stagger-3">
              <div className="w-12 h-12 bg-blue-500/20 rounded-2xl flex items-center justify-center mr-6 mt-1">
                <span className="text-blue-500 font-bold text-xl">3</span>
              </div>
              <div>
                <h4 className="text-white font-semibold mb-3 text-xl">Results-focused pricing</h4>
                <p className="text-gray-400 text-lg leading-relaxed">Pay for value, not seats. Our recovery module charges only on successful collections.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-spacing px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-500/10 to-transparent">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight">
            Join us in building this
          </h2>
          <p className="text-xl text-gray-400 mb-10 leading-relaxed">
            We&apos;re looking for pilot partners in Ahmedabad&apos;s pharma ecosystem.
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
