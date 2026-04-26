import Link from "next/link";

export default function Book() {
  return (
    <>
      <section className="max-w-5xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <div className="eyebrow mb-4">The book · Available now</div>
            <h1 className="text-5xl md:text-6xl mb-6 leading-[1.05]">
              <em className="text-sage-deep">Like a Phoenix</em>, I Rise.
            </h1>
            <p className="text-xl text-ink-soft mb-2 italic">A wellness journey from burnout to balance.</p>
            <p className="text-ink-soft leading-relaxed mb-8 mt-6">
              The full philosophy. The whole story. Every framework, every ritual, every hard-won truth — between two covers, in your hands, on your nightstand.
            </p>
            <div className="flex flex-wrap gap-4 mb-8">
              <a
                href="https://www.amazon.co.uk/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold"
              >
                Buy on Amazon UK
              </a>
              <a
                href="https://www.amazon.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost"
              >
                Amazon US
              </a>
            </div>
            <div className="text-sm text-ink-soft">
              Available in paperback, hardback, Kindle, and audiobook (read by the author).
            </div>
          </div>
          <div className="order-1 md:order-2 flex justify-center">
            <div className="relative w-[280px] md:w-[340px] aspect-[2/3] rounded-sm shadow-2xl bg-gradient-to-br from-sage-deep via-sage to-sage-deep flex items-center justify-center p-8">
              <div className="text-center">
                <div className="text-gold-soft text-xs tracking-[0.3em] mb-6">PHOENIX</div>
                <div className="serif text-5xl text-cream leading-tight italic mb-6">Like a Phoenix,<br />I Rise</div>
                <div className="hairline mx-auto w-12 bg-gold-soft opacity-60 mb-6" />
                <div className="text-cream/70 text-xs tracking-widest">A WELLNESS JOURNEY</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-cream-deep/40 py-20">
        <div className="max-w-3xl mx-auto px-6">
          <div className="eyebrow mb-4 text-center">Praise</div>
          <div className="space-y-8">
            {[
              { q: "The book I wish I'd had ten years ago. A handbook for the recovering high-achiever.", a: "Dr. Imani Ola, MD" },
              { q: "Wellness writing that finally treats women like adults. Beautifully crafted.", a: "Vogue UK" },
              { q: "Phoenix has done what almost no one in this space does — said the quiet part out loud.", a: "Hannah R., reader" },
            ].map((p) => (
              <div key={p.a} className="text-center">
                <p className="serif italic text-xl md:text-2xl text-ink leading-relaxed mb-3">&ldquo;{p.q}&rdquo;</p>
                <div className="text-sm text-ink-soft">— {p.a}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <div className="eyebrow mb-4">Inside the book</div>
          <h2 className="text-4xl md:text-5xl">Three parts. One return.</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { p: "Part I", t: "The Burning", d: "How women arrive at burnout. Why every framework before this one missed it." },
            { p: "Part II", t: "The Ash", d: "The hard, sacred middle. What to do when nothing works and rest feels like failure." },
            { p: "Part III", t: "The Rising", d: "Architecture for the next chapter. Body, plate, sleep, boundaries, identity." },
          ].map((b) => (
            <div key={b.p} className="card">
              <div className="text-gold text-sm font-medium mb-2">{b.p}</div>
              <div className="serif text-2xl mb-2">{b.t}</div>
              <p className="text-ink-soft leading-relaxed text-sm">{b.d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-6 py-20 text-center">
        <h2 className="text-4xl md:text-5xl mb-6">Take the book to bed tonight.</h2>
        <p className="text-ink-soft text-lg mb-10">Free Amazon Prime delivery in 24 hours.</p>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="https://www.amazon.co.uk/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold"
          >
            Buy on Amazon UK
          </a>
          <Link href="/reset" className="btn-ghost">Or start the free reset</Link>
        </div>
      </section>
    </>
  );
}
