import Link from "next/link";
import Image from "next/image";

const HERO = "https://images.unsplash.com/photo-1545389336-cf090694435e?w=1600&q=80&auto=format&fit=crop";
const PHOTO_TEA = "https://images.unsplash.com/photo-1499209974431-9dddcece7f88?w=1200&q=80&auto=format&fit=crop";
const PHOTO_BOOK = "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=1200&q=80&auto=format&fit=crop";
const PHOTO_CANDLE = "https://images.unsplash.com/photo-1602874801007-7d8d57e63b06?w=1200&q=80&auto=format&fit=crop";
const PHOTO_PLATE = "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=1200&q=80&auto=format&fit=crop";
const PHOTO_MOUNTAIN = "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1600&q=80&auto=format&fit=crop";

const TESTIMONIALS = [
  {
    q: "I cried reading the first email. Someone finally got it.",
    a: "Sarah M.",
    r: "London · Riser since 2024",
    src: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&q=80&auto=format&fit=crop",
  },
  {
    q: "The quiz nailed me in 90 seconds. The guide changed my mornings.",
    a: "Priya K.",
    r: "Manchester · Riser since 2025",
    src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80&auto=format&fit=crop",
  },
  {
    q: "Six weeks in. Sleeping again. That alone was worth everything.",
    a: "Hannah R.",
    r: "Edinburgh · Riser since 2025",
    src: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&q=80&auto=format&fit=crop",
  },
];

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 pt-12 pb-20 md:pt-16 md:pb-28 grid md:grid-cols-12 gap-10 lg:gap-16 items-center">
          <div className="md:col-span-6 lg:col-span-5 fade-up">
            <div className="eyebrow mb-8">— Like a phoenix, I rise</div>
            <h1 className="text-[2.75rem] sm:text-5xl md:text-[3.5rem] lg:text-7xl mb-8 text-balance">
              From <em className="text-sage-deep">burnout</em>, back to <em className="text-gold">balance</em>.
            </h1>
            <p className="text-lg text-ink-soft leading-relaxed mb-10 max-w-md">
              A clear, gentle journey home to yourself. Begin with a free 7-day reset. Discover your wellness archetype. Walk the path. Rise.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/reset" className="btn-primary">Start Free 7-Day Reset</Link>
              <Link href="/quiz" className="btn-ghost">Take the Quiz</Link>
            </div>
            <div className="mt-12 flex items-center gap-4 text-sm text-ink-muted">
              <div className="flex -space-x-3">
                {TESTIMONIALS.map((t, i) => (
                  <div key={i} className="w-9 h-9 rounded-full overflow-hidden border-2 border-cream-warm shadow-sm">
                    <Image src={t.src} alt={t.a} width={80} height={80} className="object-cover w-full h-full" />
                  </div>
                ))}
              </div>
              <span>Trusted by 1,200+ rising women</span>
            </div>
          </div>

          <div className="md:col-span-6 lg:col-span-7 fade-up-d2">
            <div className="relative grid grid-cols-12 gap-3 lg:gap-4">
              <div className="col-span-8 relative aspect-[3/4] rounded-3xl overflow-hidden img-zoom-wrap shadow-2xl">
                <Image src={HERO} alt="Woman in golden hour yoga pose" fill className="object-cover img-zoom" priority sizes="(max-width: 768px) 100vw, 50vw" />
              </div>
              <div className="col-span-4 flex flex-col gap-3 lg:gap-4">
                <div className="relative aspect-square rounded-2xl overflow-hidden img-zoom-wrap shadow-xl">
                  <Image src={PHOTO_TEA} alt="Tea ritual" fill className="object-cover img-zoom" sizes="20vw" />
                </div>
                <div className="relative aspect-square rounded-2xl overflow-hidden img-zoom-wrap shadow-xl">
                  <Image src={PHOTO_CANDLE} alt="Candle close-up" fill className="object-cover img-zoom" sizes="20vw" />
                </div>
                <div className="relative aspect-square rounded-2xl overflow-hidden img-zoom-wrap shadow-xl">
                  <Image src={PHOTO_PLATE} alt="Nourishing plate" fill className="object-cover img-zoom" sizes="20vw" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MARQUEE / PRESS */}
      <section className="py-12 border-y border-sage-deep/10 bg-cream-deep/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 flex flex-wrap items-center justify-center gap-x-10 gap-y-3 text-ink-muted text-sm">
          <span className="serif italic text-base text-gold">As mentioned in</span>
          <span className="serif text-lg">Vogue</span>
          <span className="text-ink-muted/40">·</span>
          <span className="serif text-lg">Stylist</span>
          <span className="text-ink-muted/40">·</span>
          <span className="serif text-lg">Women&apos;s Health</span>
          <span className="text-ink-muted/40">·</span>
          <span className="serif text-lg">Refinery 29</span>
          <span className="text-ink-muted/40">·</span>
          <span className="serif text-lg">The Times</span>
        </div>
      </section>

      {/* JOURNEY */}
      <section className="max-w-7xl mx-auto px-6 lg:px-10 py-24 md:py-32">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <div className="eyebrow mb-5">The Journey</div>
          <h2 className="text-4xl md:text-5xl mb-5 text-balance">Five gentle steps. <em className="text-sage-deep">One clear path.</em></h2>
          <p className="text-ink-soft text-lg">No overwhelm. No quick fixes. A real path from where you are to where you want to be.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4 md:gap-5">
          {[
            { n: "01", t: "Free 7-Day Reset", d: "A gentle restart. Daily emails. Tiny rituals.", href: "/reset", img: PHOTO_CANDLE },
            { n: "02", t: "Find Your Archetype", d: "Quick quiz reveals your wellness pattern.", href: "/quiz", img: PHOTO_MOUNTAIN },
            { n: "03", t: "The £27 Guide", d: "Your archetype-matched 60-page playbook.", href: "/guide", img: PHOTO_BOOK },
            { n: "04", t: "12-Week Programme", d: "Deep transformation in a small cohort.", href: "/programme", img: HERO },
            { n: "05", t: "The Book", d: "The full philosophy, in print.", href: "/book", img: PHOTO_TEA },
          ].map((s) => (
            <Link key={s.n} href={s.href} className="card-photo group block">
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image src={s.img} alt={s.t} fill className="object-cover img-zoom" sizes="(max-width: 768px) 100vw, 20vw" />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/40 via-transparent to-transparent" />
                <div className="absolute top-4 left-4 text-cream-warm serif text-2xl">{s.n}</div>
              </div>
              <div className="p-5">
                <div className="serif text-lg mb-1.5 group-hover:text-sage-deep transition-colors">{s.t}</div>
                <p className="text-sm text-ink-soft leading-relaxed">{s.d}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* PROMISE — large editorial photo */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <Image src={PHOTO_MOUNTAIN} alt="Woman on mountain at dawn" fill className="object-cover" sizes="100vw" />
          <div className="absolute inset-0 bg-gradient-to-r from-ink/85 via-ink/65 to-ink/40" />
        </div>
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-32 md:py-44">
          <div className="max-w-2xl">
            <div className="eyebrow mb-6 text-gold-soft">The Promise</div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl text-cream-warm mb-8 leading-[1.05] text-balance">
              You don&apos;t need another bootcamp.<br />
              <em className="text-gold-soft">You need a path home to yourself.</em>
            </h2>
            <p className="text-cream-warm/80 text-lg leading-relaxed mb-10 max-w-lg">
              Phoenix Wellness exists for women who&apos;ve done all the things — and still feel the ache. Whose bodies whisper before they shout. Who are ready to rise, not by force, but by design.
            </p>
            <Link href="/reset" className="btn-gold">Begin the Free Reset</Link>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="max-w-7xl mx-auto px-6 lg:px-10 py-24 md:py-32">
        <div className="text-center mb-16">
          <div className="eyebrow mb-5">Words from Risers</div>
          <h2 className="text-4xl md:text-5xl text-balance">Real women. <em className="text-sage-deep">Real returns to themselves.</em></h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {TESTIMONIALS.map((t, i) => (
            <div key={t.a} className={`card-photo ${i === 1 ? "md:translate-y-8" : ""}`}>
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image src={t.src} alt={t.a} fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" />
              </div>
              <div className="p-7">
                <div className="text-gold serif text-4xl leading-none mb-3">&ldquo;</div>
                <p className="serif italic text-xl leading-snug mb-5 text-balance">{t.q}</p>
                <div className="hairline-gold mb-4" />
                <div className="text-sm font-medium">{t.a}</div>
                <div className="text-xs text-ink-muted mt-0.5">{t.r}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* DIVIDER */}
      <div className="max-w-2xl mx-auto px-6 py-8">
        <div className="divider-stamp">PHOENIX</div>
      </div>

      {/* FINAL CTA */}
      <section className="max-w-4xl mx-auto px-6 py-20 md:py-28 text-center">
        <h2 className="text-5xl md:text-6xl mb-6 text-balance">Ready to <em className="text-gold">rise</em>?</h2>
        <p className="text-ink-soft text-lg mb-10 max-w-xl mx-auto leading-relaxed">
          Start where it&apos;s gentle. The free 7-day reset arrives in your inbox tomorrow morning.
        </p>
        <Link href="/reset" className="btn-primary">Start Free — 7-Day Reset</Link>
        <p className="text-xs text-ink-muted mt-6 italic">No card. No spam. Unsubscribe any moment.</p>
      </section>
    </>
  );
}
