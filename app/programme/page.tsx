import Link from "next/link";
import Image from "next/image";

const HERO = "https://images.unsplash.com/photo-1545389336-cf090694435e?w=1600&q=80&auto=format&fit=crop";
const COMMUNITY = "https://images.unsplash.com/photo-1594737626072-90dc274bc2bd?w=1400&q=80&auto=format&fit=crop";
const COACH = "https://images.unsplash.com/photo-1545205597-3d9d02c29597?w=800&q=80&auto=format&fit=crop";

const MODULES = [
  { n: "01", t: "Foundation", d: "The four pillars. The non-negotiables. The 4-week base camp." },
  { n: "02", t: "Nervous System", d: "Down-regulation, vagal tone, and how to actually feel safe in your body." },
  { n: "03", t: "Plate & Gut", d: "An anti-inflammatory architecture you can live with. For real life." },
  { n: "04", t: "Hormones & Cycle", d: "Cyclical living. Phase-aware nutrition. The end of pushing through." },
  { n: "05", t: "Sleep & Circadian", d: "Reclaim the hour that decides the next day." },
  { n: "06", t: "Movement & Strength", d: "Three modalities. Your hybrid. Built to last." },
  { n: "07", t: "Boundaries & Energy", d: "Word-for-word. The conversations that protect everything." },
  { n: "08", t: "Rising Forward", d: "Integration, identity, and the year ahead." },
];

const INCLUDES = [
  { t: "8 Live Coaching Calls", d: "Weekly. Recorded. Bring your real life — leave with real shifts." },
  { t: "Private Cohort Circle", d: "A small, vetted group. The opposite of a Facebook group." },
  { t: "Workbook + Audio Library", d: "100+ pages. 30+ guided audios. Yours forever." },
  { t: "Direct Voxer Access", d: "Voice support inside your pocket. M-F. 12 weeks." },
  { t: "1:1 Strategy Call", d: "60 minutes. Mid-programme. Just you and me." },
  { t: "Lifetime Module Access", d: "Re-enter any season. The work is rarely linear." },
];

export default function Programme() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <Image src={HERO} alt="Woman at sunrise yoga" fill className="object-cover" priority sizes="100vw" />
          <div className="absolute inset-0 bg-gradient-to-b from-cream-warm/30 via-cream-warm/70 to-cream-warm" />
        </div>
        <div className="max-w-4xl mx-auto px-6 pt-24 pb-20 md:pt-32 md:pb-28 text-center">
          <div className="eyebrow mb-6 fade-up">12-week programme · Cohort 9 opens June</div>
          <h1 className="text-5xl md:text-7xl mb-6 leading-[1.05] text-balance fade-up-d1">
            The <em className="text-terracotta">Rise</em> Programme.
          </h1>
          <p className="text-lg text-ink-soft leading-relaxed max-w-2xl mx-auto mb-10 fade-up-d2">
            Eight modules. Twelve weeks. Live coaching. A small cohort of risers walking the path with you. This is the deep work.
          </p>
          <div className="flex flex-wrap justify-center gap-3 fade-up-d3">
            <Link href="#apply" className="btn-primary">Apply for Cohort 9</Link>
            <Link href="/guide" className="btn-ghost">Start with the £27 Guide</Link>
          </div>
        </div>
      </section>

      {/* MODULES */}
      <section className="max-w-7xl mx-auto px-6 lg:px-10 py-24">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <div className="eyebrow mb-5">The modules</div>
          <h2 className="text-4xl md:text-5xl text-balance">Eight modules. <em className="text-saffron">One return home.</em></h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
          {MODULES.map((m, i) => (
            <div
              key={m.n}
              className="card group"
              style={{ animationDelay: `${i * 50}ms` }}
            >
              <div className="serif text-4xl mb-3 bg-clip-text text-transparent" style={{ backgroundImage: "linear-gradient(135deg, #e87f1c, #c8674a)", WebkitBackgroundClip: "text" }}>{m.n}</div>
              <div className="serif text-2xl mb-2 group-hover:text-terracotta transition-colors">{m.t}</div>
              <p className="text-ink-soft leading-relaxed text-sm">{m.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* COACH */}
      <section className="max-w-7xl mx-auto px-6 lg:px-10 py-24">
        <div className="grid md:grid-cols-12 gap-10 lg:gap-16 items-center">
          <div className="md:col-span-5">
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
              <Image src={COACH} alt="Phoenix, your coach" fill className="object-cover" sizes="(max-width: 768px) 100vw, 40vw" />
            </div>
          </div>
          <div className="md:col-span-7">
            <div className="eyebrow mb-5">Meet your coach</div>
            <h2 className="text-4xl md:text-5xl mb-6 text-balance">A guide who has <em className="text-terracotta">walked the way.</em></h2>
            <p className="text-lg text-ink-soft leading-relaxed mb-5">
              I was the woman in the corner office at 6am, on her third coffee, her first migraine, her hundredth resentment. I burned. I rose. I learned how. The programme is what I would have given that woman.
            </p>
            <p className="text-lg text-ink-soft leading-relaxed mb-8">
              Now, certified in nutritional therapy, somatic practice, and psychosynthesis — I walk the path beside you, not in front of you.
            </p>
            <div className="hairline-gold mb-6 max-w-xs" />
            <p className="serif italic text-saffron text-xl">— Phoenix, founder &amp; coach</p>
          </div>
        </div>
      </section>

      {/* INCLUDES */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <Image src={COMMUNITY} alt="" fill className="object-cover" sizes="100vw" />
          <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(32,41,31,0.95) 0%, rgba(110,61,79,0.92) 100%)" }} />
        </div>
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-24 md:py-28">
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <div className="eyebrow mb-5" style={{ color: "#e6b252" }}>What you get</div>
            <h2 className="text-4xl md:text-5xl text-cream-warm text-balance">Inside the <em style={{ color: "#f3dba8" }}>programme.</em></h2>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {INCLUDES.map((p) => (
              <div key={p.t} className="bg-cream-warm/5 border border-cream-warm/10 backdrop-blur rounded-2xl p-7 hover:bg-cream-warm/10 transition">
                <div className="serif text-2xl text-cream-warm mb-2">{p.t}</div>
                <p className="text-cream-warm/70 leading-relaxed text-sm">{p.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* APPLY */}
      <section id="apply" className="max-w-2xl mx-auto px-6 py-24">
        <div className="card text-center relative overflow-hidden">
          <div className="absolute -top-16 -right-16 w-48 h-48 rounded-full bg-gold-soft/30 blur-2xl" />
          <div className="relative">
            <div className="eyebrow mb-3">Investment</div>
            <div className="serif text-7xl mb-2 bg-clip-text text-transparent" style={{ backgroundImage: "linear-gradient(135deg, #e87f1c, #6e3d4f)", WebkitBackgroundClip: "text" }}>£1,997</div>
            <p className="text-ink-soft mb-8">Or three payments of £697.</p>
            <button className="btn-primary w-full">Apply for Cohort 9</button>
            <p className="text-xs text-ink-muted mt-4 italic">Application required. Limited to 24 risers per cohort.</p>
          </div>
        </div>
      </section>
    </>
  );
}
