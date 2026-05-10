export default function Page() {
  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block mb-4 px-3 py-1 rounded-full bg-[#161b22] border border-[#30363d] text-xs text-[#58a6ff] uppercase tracking-widest">
          API Monitoring
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-6">
          Alert Before Your{" "}
          <span className="text-[#58a6ff]">API Bill Spikes</span>
        </h1>
        <p className="text-lg text-[#8b949e] mb-8 max-w-xl mx-auto">
          Connect OpenAI, Anthropic, AWS and more. ML anomaly detection catches unusual cost patterns in real time and alerts your team before the damage is done.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="px-8 py-3 rounded-lg bg-[#58a6ff] text-[#0d1117] font-semibold hover:bg-[#79b8ff] transition-colors"
          >
            Start Monitoring — $15/mo
          </a>
          <a
            href="#faq"
            className="px-8 py-3 rounded-lg border border-[#30363d] text-[#c9d1d9] hover:border-[#58a6ff] hover:text-[#58a6ff] transition-colors"
          >
            Learn More
          </a>
        </div>
        <div className="mt-12 grid grid-cols-3 gap-6 text-center">
          <div className="p-4 rounded-lg bg-[#161b22] border border-[#30363d]">
            <div className="text-2xl font-bold text-[#58a6ff]">10+</div>
            <div className="text-xs text-[#8b949e] mt-1">API Providers</div>
          </div>
          <div className="p-4 rounded-lg bg-[#161b22] border border-[#30363d]">
            <div className="text-2xl font-bold text-[#58a6ff]">&lt;60s</div>
            <div className="text-xs text-[#8b949e] mt-1">Alert Latency</div>
          </div>
          <div className="p-4 rounded-lg bg-[#161b22] border border-[#30363d]">
            <div className="text-2xl font-bold text-[#58a6ff]">ML</div>
            <div className="text-xs text-[#8b949e] mt-1">Anomaly Detection</div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-md mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="rounded-xl border border-[#58a6ff] bg-[#161b22] p-8 text-center">
          <div className="text-sm text-[#58a6ff] uppercase tracking-widest mb-2">Pro</div>
          <div className="text-5xl font-bold text-white mb-1">$15</div>
          <div className="text-[#8b949e] mb-6">per month</div>
          <ul className="text-left space-y-3 mb-8">
            {[
              "Unlimited API provider connections",
              "ML-powered anomaly detection",
              "Email, Slack & webhook alerts",
              "Cost dashboard & root cause analysis",
              "Custom thresholds & alert rules",
              "7-day free trial",
            ].map((f) => (
              <li key={f} className="flex items-start gap-2 text-sm">
                <span className="text-[#58a6ff] mt-0.5">&#10003;</span>
                <span>{f}</span>
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block w-full py-3 rounded-lg bg-[#58a6ff] text-[#0d1117] font-semibold hover:bg-[#79b8ff] transition-colors"
          >
            Get Started Free
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-6">
          <div className="p-6 rounded-lg bg-[#161b22] border border-[#30363d]">
            <h3 className="font-semibold text-white mb-2">Which API providers are supported?</h3>
            <p className="text-sm text-[#8b949e]">OpenAI, Anthropic, AWS, Google Cloud, Azure, Cohere, Replicate, and more. New providers are added regularly based on user requests.</p>
          </div>
          <div className="p-6 rounded-lg bg-[#161b22] border border-[#30363d]">
            <h3 className="font-semibold text-white mb-2">How does the anomaly detection work?</h3>
            <p className="text-sm text-[#8b949e]">We use time-series analysis and statistical ML models trained on your historical usage patterns. The system learns your normal spending rhythms and flags deviations with root cause attribution.</p>
          </div>
          <div className="p-6 rounded-lg bg-[#161b22] border border-[#30363d]">
            <h3 className="font-semibold text-white mb-2">Can I cancel anytime?</h3>
            <p className="text-sm text-[#8b949e]">Yes. Cancel anytime from your billing portal with no questions asked. Your 7-day free trial requires no credit card upfront.</p>
          </div>
        </div>
      </section>

      <footer className="border-t border-[#21262d] py-8 text-center text-xs text-[#8b949e]">
        &copy; {new Date().getFullYear()} API Cost Anomaly Alerter. All rights reserved.
      </footer>
    </main>
  )
}
