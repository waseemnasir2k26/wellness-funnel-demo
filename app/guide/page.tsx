import Link from "next/link";

export default function Guide() {
  return (
    <>
      <section className="max-w-5xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="eyebrow mb-4">£27 · Instant download</div>
            <h1 className="text-5xl md:text-6xl mb-6 leading-[1.05]">
              The <em className="text-sage-deep">Rise</em> Guide.
            </h1>
            <p className="text-lg text-ink-soft leading-relaxed mb-8">
              60 pages. Archetype-matched. The exact rituals, plates, and practices for your wellness pattern. No padding. No filler.
            </p>
            <div className="flex flex-wrap gap-4 mb-8">
              <Link href="#buy" className="btn-gold">Buy now — £27</Link>
              <Link href="/quiz" className="btn-ghost">Take quiz first</Link>
            </div>
            <div className="text-sm text-ink-soft flex flex-wrap gap-x-6 gap-y-2">
              <span>✓ Instant PDF</span>
              <span>✓ Lifetime access</span>
              <span>✓ 14-day refund</span>
            </div>
          </div>
          <div className="relative aspect-[3/4] rounded-3xl bg-gradient-to-br from-sage-soft via-cream-deep to-gold-soft shadow-2xl flex items-center justify-center p-12">
            <div className="text-center">
              <div className="serif text-7xl text-sage-deep mb-4">Rise</div>
              <div className="eyebrow text-sage-deep">A Phoenix Wellness Guide</div>
              <div className="hairline my-8 mx-auto w-16" />
              <div className="text-xs text-ink-soft tracking-widest">60 PAGES · PDF + EPUB</div>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <div className="eyebrow mb-4">What&apos;s inside</div>
          <h2 className="text-4xl md:text-5xl">A real playbook, not another &ldquo;mindset&rdquo; deck.</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            { t: "Archetype Decoder", d: "Your full pattern, mapped. Strengths, leaks, blind spots, and the lever that moves your whole system." },
            { t: "The 28-Day Foundation", d: "Daily rituals scaled to your archetype. Not a list — a sequence." },
            { t: "Plate Architecture", d: "What to eat, when, and why. Anti-inflammatory at the base. Practical, not perfect." },
            { t: "Movement that Mends", d: "Three modalities. Pick yours. Built for the body you have, not the one you don't." },
            { t: "The Sleep Stack", d: "Eight levers, ranked by effort and return. Apply two and your nights change." },
            { t: "Boundary Scripts", d: "Word-for-word. The conversations that protect your energy." },
          ].map((b) => (
            <div key={b.t} className="card">
              <div className="serif text-xl mb-2">{b.t}</div>
              <p className="text-ink-soft leading-relaxed text-sm">{b.d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-sage-deep text-cream py-24">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <div className="eyebrow text-gold-soft mb-4">A note from the author</div>
          <p className="serif text-2xl md:text-3xl text-cream leading-relaxed italic">
            &ldquo;I wrote this guide because I lived it. I have walked every page back from the brink. If you read nothing else this year, read the chapter on rest. Then the one on boundaries. Everything else is a bonus.&rdquo;
          </p>
          <div className="mt-8 text-cream/80">— Phoenix</div>
        </div>
      </section>

      <section id="buy" className="max-w-2xl mx-auto px-6 py-24">
        <div className="card text-center">
          <div className="eyebrow mb-3">Buy the guide</div>
          <div className="serif text-5xl mb-2">£27</div>
          <p className="text-ink-soft mb-8">One payment. Lifetime access. Instant download.</p>
          <button className="btn-gold w-full text-base">Pay with card · £27</button>
          <p className="text-xs text-ink-soft mt-4">Demo button. Real Stripe wired on production build.</p>
          <div className="hairline my-8" />
          <p className="text-sm text-ink-soft">
            Not sure? <Link href="/quiz" className="text-sage-deep underline">Take the free quiz</Link> first — your archetype unlocks the right edition.
          </p>
        </div>
      </section>
    </>
  );
}
