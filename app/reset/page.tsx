"use client";

import { useState } from "react";
import Link from "next/link";

export default function Reset() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  return (
    <section className="max-w-5xl mx-auto px-6 py-20">
      <div className="grid md:grid-cols-5 gap-12 items-start">
        <div className="md:col-span-3">
          <div className="eyebrow mb-4">Free · No card needed</div>
          <h1 className="text-5xl md:text-6xl mb-6 leading-[1.05]">
            The 7-Day <em className="text-sage-deep">Reset</em>.
          </h1>
          <p className="text-lg text-ink-soft leading-relaxed mb-8">
            Seven gentle mornings. One small ritual a day. Delivered with care.
          </p>

          <div className="hairline my-8" />

          <div className="space-y-4">
            {[
              { d: "Day 1", t: "The Pause", s: "A 3-minute morning anchor that costs nothing." },
              { d: "Day 2", t: "Breath as Medicine", s: "Why your nervous system is begging for it." },
              { d: "Day 3", t: "The Plate Shift", s: "One change. No overhaul. A real difference." },
              { d: "Day 4", t: "Movement that Mends", s: "Not exercise. Not punishment. Movement." },
              { d: "Day 5", t: "Sleep Reclaimed", s: "The hour that decides the next day." },
              { d: "Day 6", t: "Boundaries as Love", s: "The quietest revolution." },
              { d: "Day 7", t: "Rising Forward", s: "What you carry. What you leave." },
            ].map((d) => (
              <div key={d.d} className="flex gap-4 items-start">
                <div className="w-12 shrink-0 text-gold serif text-lg">{d.d}</div>
                <div>
                  <div className="serif text-xl">{d.t}</div>
                  <div className="text-sm text-ink-soft">{d.s}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="md:col-span-2 md:sticky md:top-24">
          <div className="card">
            {submitted ? (
              <div className="text-center py-8">
                <div className="serif text-3xl text-sage-deep mb-3">Welcome.</div>
                <p className="text-ink-soft">Day 1 lands in your inbox tomorrow morning. Soft start.</p>
              </div>
            ) : (
              <>
                <div className="eyebrow mb-3">Begin tomorrow</div>
                <div className="serif text-3xl mb-4 leading-tight">Send me Day 1.</div>
                <p className="text-sm text-ink-soft mb-6">No spam. Unsubscribe any moment. Free forever.</p>
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    if (email) setSubmitted(true);
                  }}
                  className="space-y-3"
                >
                  <input
                    type="text"
                    placeholder="First name"
                    className="w-full px-4 py-3 rounded-full border border-sage-deep/20 bg-cream/50 focus:outline-none focus:border-sage-deep transition"
                  />
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email address"
                    className="w-full px-4 py-3 rounded-full border border-sage-deep/20 bg-cream/50 focus:outline-none focus:border-sage-deep transition"
                  />
                  <button type="submit" className="btn-primary w-full">Start the Reset</button>
                </form>
                <p className="text-xs text-ink-soft mt-4 text-center">
                  Already a riser?{" "}
                  <Link href="/quiz" className="text-sage-deep underline">Find your archetype.</Link>
                </p>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
