"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

type Archetype = "ember" | "river" | "earth" | "sky";

const QUESTIONS = [
  {
    q: "When you crash, you most often crash into…",
    a: [
      { t: "Exhaustion that sleep doesn't fix", v: "ember" },
      { t: "Anxious overthinking at night", v: "river" },
      { t: "Heaviness, low motivation, fog", v: "earth" },
      { t: "Restlessness, scattered focus", v: "sky" },
    ],
  },
  {
    q: "Your body whispers loudest in your…",
    a: [
      { t: "Adrenals — wired and tired", v: "ember" },
      { t: "Gut — bloating, sensitivity", v: "river" },
      { t: "Hormones — heavy, cyclical", v: "earth" },
      { t: "Head — tension, sleep, racing", v: "sky" },
    ],
  },
  {
    q: "Mornings feel best when…",
    a: [
      { t: "Slow. Quiet. No alarm shock.", v: "ember" },
      { t: "Warm. Nourishing. Anti-inflammatory.", v: "river" },
      { t: "Grounded. Movement. Sunlight.", v: "earth" },
      { t: "Spacious. Unrushed. Single-task.", v: "sky" },
    ],
  },
  {
    q: "The phrase that lands hardest…",
    a: [
      { t: "I am running on fumes.", v: "ember" },
      { t: "I am inflamed.", v: "river" },
      { t: "I am stuck.", v: "earth" },
      { t: "I am scattered.", v: "sky" },
    ],
  },
  {
    q: "What you most quietly long for…",
    a: [
      { t: "Rest that actually restores", v: "ember" },
      { t: "A body that feels light again", v: "river" },
      { t: "Energy that returns of its own", v: "earth" },
      { t: "A still, clear mind", v: "sky" },
    ],
  },
];

const ARCHETYPES: Record<Archetype, { name: string; lede: string; path: string; img: string; tag: string }> = {
  ember: {
    name: "The Ember",
    tag: "Wired & tired · Adrenal-led",
    lede: "You burn bright but the wick is thin. Your nervous system is the doorway. Rest is your medicine — the radical, structural kind.",
    path: "Begin with the 7-Day Reset, then the Ember edition of the £27 Guide.",
    img: "https://images.unsplash.com/photo-1602874801007-7d8d57e63b06?w=1200&q=80&auto=format&fit=crop",
  },
  river: {
    name: "The River",
    tag: "Inflamed · Gut-led",
    lede: "Your body speaks through inflammation. Food, gut, and rhythm are your levers. When they sync, the river runs clear.",
    path: "Begin with the 7-Day Reset, then the River edition of the £27 Guide.",
    img: "https://images.unsplash.com/photo-1499209974431-9dddcece7f88?w=1200&q=80&auto=format&fit=crop",
  },
  earth: {
    name: "The Earth",
    tag: "Stuck · Hormone-led",
    lede: "You hold a slow, deep weight. Hormones, mood, and motivation move as one. Your work is to root — and gently lift.",
    path: "Begin with the 7-Day Reset, then the Earth edition of the £27 Guide.",
    img: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&q=80&auto=format&fit=crop",
  },
  sky: {
    name: "The Sky",
    tag: "Scattered · Mind-led",
    lede: "Your mind moves faster than your body can rest. You need anchor practices, not more inputs. Stillness is your strategy.",
    path: "Begin with the 7-Day Reset, then the Sky edition of the £27 Guide.",
    img: "https://images.unsplash.com/photo-1518310383802-640c2de311b2?w=1200&q=80&auto=format&fit=crop",
  },
};

export default function Quiz() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Archetype[]>([]);

  const pick = (v: string) => {
    const next = [...answers, v as Archetype];
    setAnswers(next);
    setStep(step + 1);
  };

  const reset = () => {
    setStep(0);
    setAnswers([]);
  };

  const result = (() => {
    if (step < QUESTIONS.length) return null;
    const counts: Record<string, number> = {};
    for (const a of answers) counts[a] = (counts[a] || 0) + 1;
    const top = Object.entries(counts).sort((a, b) => b[1] - a[1])[0][0];
    return ARCHETYPES[top as Archetype];
  })();

  return (
    <section className="max-w-3xl mx-auto px-6 py-20 md:py-24">
      {!result ? (
        <>
          <div className="text-center mb-12 fade-up">
            <div className="eyebrow mb-5">The Wellness Archetype Quiz · 90 seconds</div>
            <h1 className="text-5xl md:text-6xl mb-5 text-balance">Which <em className="text-saffron">fire</em> are you?</h1>
            <p className="text-ink-soft text-lg">Five questions. One archetype. A clear next step.</p>
          </div>

          <div className="card relative overflow-hidden fade-up-d1">
            <div className="absolute -top-16 -right-16 w-48 h-48 rounded-full bg-gold-soft/30 blur-2xl" />
            <div className="relative">
              <div className="flex justify-between text-xs text-ink-muted mb-4 tracking-widest uppercase">
                <span>Question {step + 1} of {QUESTIONS.length}</span>
                <span>{Math.round(((step) / QUESTIONS.length) * 100)}%</span>
              </div>
              <div className="w-full bg-sage-soft/40 rounded-full h-[3px] mb-10 overflow-hidden">
                <div
                  className="h-[3px] rounded-full transition-all duration-500"
                  style={{
                    width: `${((step) / QUESTIONS.length) * 100}%`,
                    background: "linear-gradient(to right, #e87f1c, #c8674a, #6e3d4f)",
                  }}
                />
              </div>

              <h2 className="serif text-3xl md:text-4xl mb-10 leading-tight text-balance">{QUESTIONS[step].q}</h2>

              <div className="space-y-3">
                {QUESTIONS[step].a.map((opt) => (
                  <button
                    key={opt.v + opt.t}
                    onClick={() => pick(opt.v)}
                    className="w-full text-left px-6 py-5 rounded-2xl border border-sage-deep/15 hover:border-sage-deep hover:bg-cream-deep/30 transition-all duration-300 group flex items-center gap-4"
                  >
                    <span className="w-2 h-2 rounded-full bg-sage-deep/30 group-hover:bg-saffron transition-colors" />
                    <span className="group-hover:text-terracotta transition-colors">{opt.t}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </>
      ) : (
        <div className="text-center fade-up">
          <div className="relative w-full aspect-[16/9] md:aspect-[2/1] rounded-3xl overflow-hidden mb-10 shadow-2xl">
            <Image src={result.img} alt={result.name} fill className="object-cover" sizes="100vw" priority />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 text-cream-warm text-left">
              <div className="eyebrow mb-3" style={{ color: "#f3dba8" }}>Your archetype</div>
              <h1 className="text-5xl md:text-7xl mb-2 leading-none" style={{ color: "#fdf9f1" }}>{result.name}</h1>
              <p className="text-cream-warm/80 text-sm tracking-widest uppercase" style={{ color: "#f3dba8" }}>{result.tag}</p>
            </div>
          </div>

          <p className="text-lg md:text-xl text-ink-soft leading-relaxed max-w-2xl mx-auto mb-10 text-balance">{result.lede}</p>

          <div className="card text-left max-w-md mx-auto mb-10">
            <div className="eyebrow mb-3">Your next step</div>
            <p className="text-ink-soft leading-relaxed">{result.path}</p>
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            <Link href="/reset" className="btn-primary">Start Free 7-Day Reset</Link>
            <Link href="/guide" className="btn-gold">See the £27 Guide</Link>
            <button onClick={reset} className="btn-ghost">Retake quiz</button>
          </div>
        </div>
      )}
    </section>
  );
}
