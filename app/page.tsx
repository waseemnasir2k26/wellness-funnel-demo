import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-cream via-cream to-cream-deep/40" />
        <div className="max-w-6xl mx-auto px-6 pt-20 pb-24 md:pt-28 md:pb-32 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <div className="eyebrow mb-6">Like a phoenix, I rise</div>
            <h1 className="text-5xl md:text-6xl leading-[1.05] mb-6">
              From <em className="text-sage-deep">burnout</em> back to <em className="text-gold">balance</em>.
            </h1>
            <p className="text-lg text-ink-soft leading-relaxed mb-8 max-w-lg">
              A clear, gentle journey. Begin with a free 7-day reset. Discover your wellness archetype. Walk the path. Rise.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/reset" className="btn-primary">Start Free 7-Day Reset</Link>
              <Link href="/quiz" className="btn-ghost">Take the Quiz</Link>
            </div>
            <div className="mt-10 flex items-center gap-4 text-sm text-ink-soft">
              <div className="flex -space-x-2">
                <div className="w-8 h-8 rounded-full bg-sage-soft border-2 border-cream" />
                <div className="w-8 h-8 rounded-full bg-gold-soft border-2 border-cream" />
                <div className="w-8 h-8 rounded-full bg-sage border-2 border-cream" />
              </div>
              <span>Trusted by 1,200+ rising women</span>
            </div>
          </div>
          <div className="relative aspect-[4/5] rounded-3xl overflow-hidden bg-gradient-to-br from-sage-soft via-cream-deep to-gold-soft shadow-xl">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center px-8">
                <div className="serif text-8xl text-sage-deep/30 mb-4">P</div>
                <div className="eyebrow text-sage-deep">Hero photograph</div>
                <p className="text-ink-soft text-sm mt-2">Wellness lifestyle imagery</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* JOURNEY */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <div className="eyebrow mb-4">The Journey</div>
          <h2 className="text-4xl md:text-5xl mb-4">Five gentle steps. One clear path.</h2>
          <p className="text-ink-soft max-w-xl mx-auto">No overwhelm. No quick fixes. A real path from where you are to where you want to be.</p>
        </div>

        <div className="grid md:grid-cols-5 gap-4">
          {[
            { n: "01", t: "Free 7-Day Reset", d: "A gentle restart. Daily emails. Tiny rituals.", href: "/reset" },
            { n: "02", t: "Find Your Archetype", d: "Quick quiz reveals your wellness pattern.", href: "/quiz" },
            { n: "03", t: "The Guide (£27)", d: "Your archetype-matched 60-page playbook.", href: "/guide" },
            { n: "04", t: "The Programme", d: "12-week deep transformation, supported.", href: "/programme" },
            { n: "05", t: "The Book", d: "The full philosophy, in print.", href: "/book" },
          ].map((s) => (
            <Link key={s.n} href={s.href} className="card hover:shadow-2xl transition group block">
              <div className="text-gold font-medium text-sm mb-3">{s.n}</div>
              <div className="serif text-xl mb-2 group-hover:text-sage-deep transition">{s.t}</div>
              <p className="text-sm text-ink-soft leading-relaxed">{s.d}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* PROMISE */}
      <section className="bg-sage-deep text-cream py-24">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <div className="eyebrow text-gold-soft mb-6">The Promise</div>
          <h2 className="text-4xl md:text-5xl text-cream mb-8 leading-tight">
            You don&apos;t need another <em>bootcamp</em>.<br />You need a path home to yourself.
          </h2>
          <p className="text-cream/80 leading-relaxed text-lg mb-10">
            Phoenix Wellness exists for women who&apos;ve done all the things — and still feel the ache. Whose bodies whisper before they shout. Who are ready to rise, not by force, but by design.
          </p>
          <Link href="/reset" className="btn-gold">Begin the Free Reset</Link>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <div className="eyebrow mb-4">Words from Risers</div>
          <h2 className="text-4xl md:text-5xl">Real women. Real returns to themselves.</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { q: "I cried reading the first email. Someone finally got it.", a: "Sarah M." },
            { q: "The quiz nailed me in 90 seconds. The guide changed my mornings.", a: "Priya K." },
            { q: "Six weeks in. Sleeping again. That alone was worth everything.", a: "Hannah R." },
          ].map((t) => (
            <div key={t.a} className="card">
              <div className="text-gold text-3xl serif mb-3">&ldquo;</div>
              <p className="text-ink-soft leading-relaxed mb-4 italic">{t.q}</p>
              <div className="text-sm font-medium">— {t.a}</div>
            </div>
          ))}
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="max-w-4xl mx-auto px-6 py-20 text-center">
        <h2 className="text-4xl md:text-5xl mb-6">Ready to rise?</h2>
        <p className="text-ink-soft text-lg mb-10 max-w-xl mx-auto">Start where it&apos;s gentle. The free 7-day reset arrives in your inbox tomorrow morning.</p>
        <Link href="/reset" className="btn-primary text-base">Start Free — 7-Day Reset</Link>
      </section>
    </>
  );
}
