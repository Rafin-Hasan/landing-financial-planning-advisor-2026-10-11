export default function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-6 py-6">
        <span className="font-bold text-xl">Cornerstone Financial</span>
        <a href="#cta" className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition">
          Get Started
        </a>
      </nav>

      <header className="max-w-4xl mx-auto text-center px-6 py-24">
        <p className="uppercase tracking-wide text-indigo-600 font-semibold mb-4">Financial Planning</p>
        <h1 className="text-4xl sm:text-5xl font-extrabold mb-6">A retirement plan built around your life</h1>
        <p className="text-lg text-slate-600 mb-10">Fee-only financial planning — no commissions, no product sales, just advice in your interest.</p>
        <a href="#cta" className="inline-block bg-indigo-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-indigo-700 transition">
          Book a Free Introduction Call
        </a>
      </header>

      <section className="max-w-6xl mx-auto px-6 py-16 grid sm:grid-cols-3 gap-8">
        <div className="p-6 rounded-xl border border-slate-100 shadow-sm">
          <h3 className="font-semibold text-lg mb-2">Fee-Only Advice</h3>
          <p className="text-slate-600">We’re paid by you, not by product commissions.</p>
        </div>

        <div className="p-6 rounded-xl border border-slate-100 shadow-sm">
          <h3 className="font-semibold text-lg mb-2">Full Financial Picture</h3>
          <p className="text-slate-600">Retirement, taxes, and estate planning, together.</p>
        </div>

        <div className="p-6 rounded-xl border border-slate-100 shadow-sm">
          <h3 className="font-semibold text-lg mb-2">Ongoing Check-Ins</h3>
          <p className="text-slate-600">Quarterly reviews to keep your plan on track.</p>
        </div>
      </section>

      <section id="cta" className="bg-indigo-600 text-white text-center px-6 py-20">
        <h2 className="text-3xl font-bold mb-4">Let’s plan your next chapter</h2>
        <p className="mb-8 text-indigo-100">Fee-only. Fiduciary. No sales pressure.</p>
        <a href="#" className="inline-block bg-white text-indigo-700 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-slate-100 transition">
          Book a Free Introduction Call
        </a>
      </section>

      <footer className="text-center py-8 text-slate-400 text-sm">
        © 2026 Cornerstone Financial. All rights reserved.
      </footer>
    </div>
  )
}
