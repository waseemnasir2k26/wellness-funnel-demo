import Link from "next/link";
import Image from "next/image";

const HERO_BOOK = "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=1400&q=80&auto=format&fit=crop";
const LIFESTYLE = "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=1400&q=80&auto=format&fit=crop";
const COSY = "https://images.unsplash.com/photo-1474552226712-ac0f0961a954?w=1400&q=80&auto=format&fit=crop";

const PRAISE = [
  { q: "The book I wish I'd had ten years ago. A handbook for the recovering high-achiever.", a: "Dr. Imani Ola, MD", r: "Functional Medicine" },
  { q: "Wellness writing that finally treats women like adults. Beautifully crafted.", a: "Vogue UK", r: "Books of the Year" },
  { q: "Phoenix has done what almost no one in this space does — said the quiet part out loud.", a: "Hannah R.", r: "Reader, Edinburgh" },
];

const PARTS = [
  { p: "Part I", t: "The Burning", d: "How women arrive at burnout. Why every framework before this one missed it." },
  { p: "Part II", t: "The Ash", d: "The hard, sacred middle. What to do when nothing works and rest feels like failure." },
  { p: "Part III", t: "The Rising", d: "Architecture for the next chapter. Body, plate, sleep, boundaries, identity." },
];

export default function Book() {
  return (
    <>
      {/* HERO */}
      <section className="max-w-7xl mx-auto px-6 lg:px-10 pt-16 pb-24 md:pt-20 md:pb-28">
        <div className="grid md:grid-cols-12 gap-10 lg:gap-16 items-center">
          <div className="md:col-span-6 order-2 md:order-1 fade-up">
            <div className="eyebrow mb-6">The book · Available now</div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl mb-5 leading-[1.05] text-balance">
              <em className="text-sage-deep">Like a Phoenix</em>,<br />I Rise.
            </h1>
            <p className="serif italic text-xl text-gold mb-8">A wellness journey from burnout to balance.</p>
            <p className="text-ink-soft leading-relaxed mb-8 max-w-md">
              The full philosophy. The whole story. Every framework, every ritual, every hard-won truth — between two covers, in your hands, on your nightstand.
            </p>
            <div className="flex flex-wrap gap-3 mb-8">
              <a href="https://www.amazon.co.uk/" target="_blank" rel="noopener noreferrer" className="btn-gold">Buy on Amazon UK</a>
              <a href="https://www.amazon.com/" target="_blank" rel="noopener noreferrer" className="btn-ghost">Amazon US</a>
            </div>
            <div className="text-sm text-ink-muted flex flex-wrap gap-x-5 gap-y-1.5">
              <span>Paperback</span>
              <span>·</span>
              <span>Hardback</span>
              <span>·</span>
              <span>Kindle</span>
              <span>·</span>
              <span>Audiobook (read by author)</span>
            </div>
          </div>

          <div className="md:col-span-6 order-1 md:order-2 fade-up-d2">
            <div className="relative">
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
                <Image src={HERO_BOOK} alt="Like a Phoenix, I Rise — book on linen" fill className="object-cover" priority sizes="(max-width: 768px) 100vw, 50vw" />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-cream-warm rounded-2xl p-5 shadow-xl border border-sage-deep/10 max-w-[200px]">
                <div className="flex items-center gap-1 mb-1.5 text-gold">
                  {[...Array(5)].map((_, i) => <span key={i}>★</span>)}
                </div>
                <p className="text-xs text-ink-soft leading-snug">&ldquo;Beautifully crafted&rdquo; — <span className="serif italic">Vogue UK</span></p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRAISE */}
      <section className="bg-cream-deep/40 py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="text-center mb-12">
            <div className="eyebrow mb-5">Praise</div>
            <h2 className="text-4xl md:text-5xl text-balance">Words from <em className="text-gold">readers and critics.</em></h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {PRAISE.map((p, i) => (
              <div key={p.a} className={`card ${i === 1 ? "md:translate-y-8" : ""}`}>
                <div className="text-gold text-4xl serif leading-none mb-4">&ldquo;</div>
                <p className="serif italic text-lg leading-snug mb-6 text-balance">{p.q}</p>
                <div className="hairline-gold mb-4" />
                <div className="text-sm font-medium">{p.a}</div>
                <div className="text-xs text-ink-muted mt-0.5">{p.r}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INSIDE THE BOOK */}
      <section className="max-w-7xl mx-auto px-6 lg:px-10 py-24">
        <div className="grid md:grid-cols-12 gap-10 lg:gap-16 items-center">
          <div className="md:col-span-5">
            <div className="eyebrow mb-5">Inside the book</div>
            <h2 className="text-4xl md:text-5xl mb-6 text-balance">Three parts. <em className="text-sage-deep">One return.</em></h2>
            <p className="text-ink-soft text-lg leading-relaxed">
              The arc that took me ten years to walk, distilled into the book I wish I&apos;d had. For every woman ready to stop performing wellness, and start living it.
            </p>
          </div>
          <div className="md:col-span-7 space-y-4">
            {PARTS.map((b, i) => (
              <div key={b.p} className="card flex gap-5 items-start" style={{ animationDelay: `${i * 80}ms` }}>
                <div className="serif text-5xl text-gold/40 leading-none">{i + 1}</div>
                <div>
                  <div className="text-gold text-xs tracking-widest uppercase mb-1">{b.p}</div>
                  <div className="serif text-2xl mb-1.5">{b.t}</div>
                  <p className="text-ink-soft leading-relaxed text-sm">{b.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LIFESTYLE PHOTO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <Image src={COSY} alt="" fill className="object-cover" sizes="100vw" />
          <div className="absolute inset-0 bg-ink/55" />
        </div>
        <div className="max-w-3xl mx-auto px-6 py-28 md:py-36 text-center text-cream-warm">
          <p className="serif italic text-2xl md:text-4xl leading-snug text-balance">
            &ldquo;Burnout is not a personal failure. It is a structural mismatch between the woman you&apos;ve become and the way you&apos;re still living. The book is the bridge.&rdquo;
          </p>
          <div className="mt-8 text-cream-warm/70 tracking-widest text-xs uppercase">— Phoenix, from chapter 1</div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="max-w-3xl mx-auto px-6 py-24 md:py-28 text-center">
        <div className="relative w-full aspect-[3/2] mb-10 rounded-3xl overflow-hidden shadow-xl">
          <Image src={LIFESTYLE} alt="The book in your hands" fill className="object-cover" sizes="100vw" />
        </div>
        <h2 className="text-4xl md:text-5xl mb-5 text-balance">Take the book to bed <em className="text-gold">tonight.</em></h2>
        <p className="text-ink-soft text-lg mb-10">Free Amazon Prime delivery in 24 hours.</p>
        <div className="flex flex-wrap justify-center gap-3">
          <a href="https://www.amazon.co.uk/" target="_blank" rel="noopener noreferrer" className="btn-gold">Buy on Amazon UK</a>
          <Link href="/reset" className="btn-ghost">Or start the free reset</Link>
        </div>
      </section>
    </>
  );
}
