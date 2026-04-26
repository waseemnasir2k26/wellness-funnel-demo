import Link from "next/link";

const MODULES = [
  { n: "Module 01", t: "Foundation", d: "The four pillars. The non-negotiables. The 4-week base camp." },
  { n: "Module 02", t: "Nervous System", d: "Down-regulation, vagal tone, and how to actually feel safe in your body." },
  { n: "Module 03", t: "Plate & Gut", d: "An anti-inflammatory architecture you can live with. For real life." },
  { n: "Module 04", t: "Hormones & Cycle", d: "Cyclical living. Phase-aware nutrition. The end of pushing through." },
  { n: "Module 05", t: "Sleep & Circadian", d: "Reclaim the hour that decides the next day." },
  { n: "Module 06", t: "Movement & Strength", d: "Three modalities. Your hybrid. Built to last." },
  { n: "Module 07", t: "Boundaries & Energy", d: "Word-for-word. The conversations that protect everything." },
  { n: "Module 08", t: "Rising Forward", d: "Integration, identity, and the year ahead." },
];

export default function Programme() {
  return (
    <>
      <section className="max-w-5xl mx-auto px-6 py-20 text-center">
        <div className="eyebrow mb-4">12-week programme</div>
        <h1 className="text-5xl md:text-6xl mb-6 leading-[1.05]">
          The <em className="text-sage-deep">Rise</em> Programme.
        </h1>
        <p className="text-lg text-ink-soft leading-relaxed max-w-2xl mx-auto mb-10">
          Eight modules. Twelve weeks. Live coaching calls. A small cohort of risers walking the path with you. This is the deep work.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link href="#apply" className="btn-primary">Apply for next cohort</Link>
          <Link href="/guide" className="btn-ghost">Start with the £27 guide</Link>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <div className="eyebrow mb-4">The modules</div>
          <h2 className="text-4xl md:text-5xl">Eight modules. One return home.</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          {MODULES.map((m) => (
            <div key={m.n} className="card">
              <div className="text-gold text-sm font-medium mb-2">{m.n}</div>
              <div className="serif text-2xl mb-2">{m.t}</div>
              <p className="text-ink-soft leading-relaxed text-sm">{m.d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-cream-deep/40 py-24">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="eyebrow mb-4">What you get</div>
            <h2 className="text-4xl md:text-5xl">Inside the programme.</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { t: "8 Live Coaching Calls", d: "Weekly. Recorded. Bring your real life — leave with real shifts." },
              { t: "Private Cohort Circle", d: "A small, vetted group. The opposite of a Facebook group." },
              { t: "Workbook + Audio Library", d: "100+ pages. 30+ guided audios. Yours forever." },
              { t: "Direct Voxer Access", d: "Voice support inside your pocket. M-F. 12 weeks." },
              { t: "1:1 Strategy Call", d: "60 minutes. Mid-programme. Just you and me." },
              { t: "Lifetime Module Access", d: "Re-enter any season. The work is rarely linear." },
            ].map((p) => (
              <div key={p.t} className="card">
                <div className="serif text-lg mb-2">{p.t}</div>
                <p className="text-ink-soft leading-relaxed text-sm">{p.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="apply" className="max-w-2xl mx-auto px-6 py-24">
        <div className="card text-center">
          <div className="eyebrow mb-3">Investment</div>
          <div className="serif text-5xl mb-2">£1,997</div>
          <p className="text-ink-soft mb-8">Or three payments of £697.</p>
          <button className="btn-primary w-full text-base">Apply for next cohort</button>
          <p className="text-xs text-ink-soft mt-4">Application required. Limited to 24 risers per cohort.</p>
        </div>
      </section>
    </>
  );
}
