import Link from "next/link";
import Image from "next/image";

const COVER = "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=1200&q=80&auto=format&fit=crop";
const HANDS = "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=1200&q=80&auto=format&fit=crop";
const TEA = "https://images.unsplash.com/photo-1499209974431-9dddcece7f88?w=1200&q=80&auto=format&fit=crop";

const INSIDE = [
  { t: "Archetype Decoder", d: "Your full pattern, mapped. Strengths, leaks, blind spots, and the lever that moves your whole system." },
  { t: "The 28-Day Foundation", d: "Daily rituals scaled to your archetype. Not a list — a sequence." },
  { t: "Plate Architecture", d: "What to eat, when, and why. Anti-inflammatory at the base. Practical, not perfect." },
  { t: "Movement that Mends", d: "Three modalities. Pick yours. Built for the body you have, not the one you don't." },
  { t: "The Sleep Stack", d: "Eight levers, ranked by effort and return. Apply two and your nights change." },
  { t: "Boundary Scripts", d: "Word-for-word. The conversations that protect your energy." },
];

export default function Guide() {
  return (
    <>
      {/* HERO */}
      <section className="max-w-7xl mx-auto px-6 lg:px-10 pt-16 pb-24 md:pt-20 md:pb-28">
        <div className="grid md:grid-cols-12 gap-10 lg:gap-16 items-center">
          <div className="md:col-span-6 fade-up">
            <div className="eyebrow mb-6">£27 · Instant download · 60 pages</div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl mb-6 leading-[1.05] text-balance">
              The <em className="text-terracotta">Rise</em> Guide.
            </h1>
            <p className="text-lg text-ink-soft leading-relaxed mb-8 max-w-md">
              Sixty pages. Archetype-matched. The exact rituals, plates, and practices for your wellness pattern. No padding. No filler.
            </p>
            <div className="flex flex-wrap gap-3 mb-8">
              <Link href="#buy" className="btn-gold">Buy now — £27</Link>
              <Link href="/quiz" className="btn-ghost">Take the quiz first</Link>
            </div>
            <div className="text-sm text-ink-muted flex flex-wrap gap-x-5 gap-y-2">
              <span className="flex items-center gap-1.5"><span className="text-sage-deep">✓</span> Instant PDF + EPUB</span>
              <span className="flex items-center gap-1.5"><span className="text-sage-deep">✓</span> Lifetime access</span>
              <span className="flex items-center gap-1.5"><span className="text-sage-deep">✓</span> 14-day refund</span>
            </div>
          </div>

          <div className="md:col-span-6 fade-up-d2">
            <div className="relative">
              <div className="relative aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl">
                <Image src={COVER} alt="The Rise Guide on linen" fill className="object-cover" priority sizes="(max-width: 768px) 100vw, 50vw" />
                <div className="absolute inset-0 bg-gradient-to-tr from-ink/30 via-transparent to-transparent" />
                <div className="absolute bottom-8 left-8 right-8 text-cream-warm">
                  <div className="text-xs tracking-[0.4em] mb-2 text-gold-soft">PHOENIX WELLNESS</div>
                  <div className="serif text-5xl md:text-6xl italic">Rise.</div>
                </div>
              </div>
              <div className="absolute -top-6 -right-6 rounded-full w-28 h-28 flex flex-col items-center justify-center shadow-2xl rotate-[8deg] float" style={{ background: "linear-gradient(135deg, #e87f1c, #c8674a)", color: "#fdf9f1" }}>
                <div className="text-[10px] tracking-widest">FROM</div>
                <div className="serif text-2xl">£27</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INSIDE */}
      <section className="max-w-7xl mx-auto px-6 lg:px-10 py-24">
        <div className="grid md:grid-cols-12 gap-12 items-start">
          <div className="md:col-span-5">
            <div className="eyebrow mb-5">What&apos;s inside</div>
            <h2 className="text-4xl md:text-5xl mb-6 text-balance">A real playbook, <em className="text-saffron">not another mindset deck.</em></h2>
            <p className="text-ink-soft text-lg leading-relaxed mb-8">
              Six chapters. Zero fluff. Every page earns its place.
            </p>
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-xl">
              <Image src={HANDS} alt="Reading the guide" fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" />
            </div>
          </div>
          <div className="md:col-span-7 grid sm:grid-cols-2 gap-4">
            {INSIDE.map((b, i) => (
              <div key={b.t} className={`card ${i % 2 === 1 ? "sm:translate-y-6" : ""}`}>
                <div className="text-terracotta serif text-2xl mb-3">0{i + 1}</div>
                <div className="serif text-xl mb-2">{b.t}</div>
                <p className="text-ink-soft leading-relaxed text-sm">{b.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AUTHOR NOTE */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <Image src={TEA} alt="" fill className="object-cover" sizes="100vw" />
          <div className="absolute inset-0 bg-sage-darker/85" />
        </div>
        <div className="max-w-3xl mx-auto px-6 py-28 md:py-36 text-center">
          <div className="eyebrow mb-5 text-gold-soft">A note from the author</div>
          <p className="serif italic text-2xl md:text-3xl text-cream-warm leading-snug text-balance">
            &ldquo;I wrote this guide because I lived it. I have walked every page back from the brink. If you read nothing else this year, read the chapter on rest. Then the one on boundaries. Everything else is a bonus.&rdquo;
          </p>
          <div className="mt-8 text-cream-warm/70 tracking-widest text-xs uppercase">— Phoenix</div>
        </div>
      </section>

      {/* BUY */}
      <section id="buy" className="max-w-2xl mx-auto px-6 py-24">
        <div className="card text-center relative overflow-hidden">
          <div className="absolute -top-16 -right-16 w-48 h-48 rounded-full bg-gold-soft/30 blur-2xl" />
          <div className="absolute -bottom-16 -left-16 w-48 h-48 rounded-full bg-sage-soft/30 blur-2xl" />
          <div className="relative">
            <div className="eyebrow mb-3">Buy the guide</div>
            <div className="serif text-7xl mb-2 bg-clip-text text-transparent" style={{ backgroundImage: "linear-gradient(135deg, #e87f1c, #6e3d4f)", WebkitBackgroundClip: "text" }}>£27</div>
            <p className="text-ink-soft mb-8">One payment. Lifetime access. Instant download.</p>
            <button className="btn-gold w-full">Pay with card · £27</button>
            <p className="text-xs text-ink-muted mt-4 italic">Demo button. Real Stripe wired on production build.</p>
            <div className="hairline my-8" />
            <p className="text-sm text-ink-soft">
              Not sure?{" "}
              <Link href="/quiz" className="text-sage-deep underline">Take the free quiz</Link>{" "}
              first — your archetype unlocks the right edition.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
