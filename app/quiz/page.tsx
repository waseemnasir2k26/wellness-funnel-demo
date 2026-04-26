"use client";

import { useState } from "react";
import Link from "next/link";

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

const ARCHETYPES: Record<Archetype, { name: string; lede: string; path: string }> = {
  ember: {
    name: "The Ember",
    lede: "You burn bright but the wick is thin. Your nervous system is the doorway. Rest is your medicine — the radical, structural kind.",
    path: "Begin with the 7-Day Reset, then the Ember edition of the £27 Guide.",
  },
  river: {
    name: "The River",
    lede: "Your body speaks through inflammation. Food, gut, and rhythm are your levers. When they sync, the river runs clear.",
    path: "Begin with the 7-Day Reset, then the River edition of the £27 Guide.",
  },
  earth: {
    name: "The Earth",
    lede: "You hold a slow, deep weight. Hormones, mood, and motivation move as one. Your work is to root — and gently lift.",
    path: "Begin with the 7-Day Reset, then the Earth edition of the £27 Guide.",
  },
  sky: {
    name: "The Sky",
    lede: "Your mind moves faster than your body can rest. You need anchor practices, not more inputs. Stillness is your strategy.",
    path: "Begin with the 7-Day Reset, then the Sky edition of the £27 Guide.",
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
    <section className="max-w-3xl mx-auto px-6 py-20">
      {!result ? (
        <>
          <div className="text-center mb-12">
            <div className="eyebrow mb-4">The Wellness Archetype Quiz · 90 seconds</div>
            <h1 className="text-4xl md:text-5xl mb-4">Which fire are you?</h1>
            <p className="text-ink-soft">Five questions. One archetype. A clear next step.</p>
          </div>

          <div className="card">
            <div className="flex justify-between text-sm text-ink-soft mb-6">
              <span>Question {step + 1} of {QUESTIONS.length}</span>
              <span>{Math.round(((step) / QUESTIONS.length) * 100)}%</span>
            </div>
            <div className="w-full bg-sage-soft/40 rounded-full h-1 mb-8">
              <div
                className="bg-sage-deep h-1 rounded-full transition-all"
                style={{ width: `${((step) / QUESTIONS.length) * 100}%` }}
              />
            </div>

            <h2 className="serif text-2xl md:text-3xl mb-8 leading-tight">{QUESTIONS[step].q}</h2>

            <div className="space-y-3">
              {QUESTIONS[step].a.map((opt) => (
                <button
                  key={opt.v + opt.t}
                  onClick={() => pick(opt.v)}
                  className="w-full text-left px-5 py-4 rounded-2xl border border-sage-deep/15 hover:border-sage-deep hover:bg-cream-deep/40 transition group"
                >
                  <span className="group-hover:text-sage-deep transition">{opt.t}</span>
                </button>
              ))}
            </div>
          </div>
        </>
      ) : (
        <div className="text-center">
          <div className="eyebrow mb-4">Your archetype</div>
          <h1 className="text-5xl md:text-6xl mb-6 text-sage-deep">{result.name}</h1>
          <p className="text-lg text-ink-soft leading-relaxed max-w-xl mx-auto mb-10">{result.lede}</p>

          <div className="card text-left max-w-md mx-auto mb-10">
            <div className="eyebrow mb-3">Your next step</div>
            <p className="text-ink-soft leading-relaxed">{result.path}</p>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/reset" className="btn-primary">Start Free 7-Day Reset</Link>
            <Link href="/guide" className="btn-gold">See the £27 Guide</Link>
            <button onClick={reset} className="btn-ghost">Retake quiz</button>
          </div>
        </div>
      )}
    </section>
  );
}
