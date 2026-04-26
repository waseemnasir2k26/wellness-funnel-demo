"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const HERO = "https://images.unsplash.com/photo-1602874801007-7d8d57e63b06?w=1400&q=80&auto=format&fit=crop";

const DAYS = [
  { d: "Day 1", t: "The Pause", s: "A 3-minute morning anchor that costs nothing.", img: "https://images.unsplash.com/photo-1545389336-cf090694435e?w=600&q=80&auto=format&fit=crop" },
  { d: "Day 2", t: "Breath as Medicine", s: "Why your nervous system is begging for it.", img: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=600&q=80&auto=format&fit=crop" },
  { d: "Day 3", t: "The Plate Shift", s: "One change. No overhaul. A real difference.", img: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=600&q=80&auto=format&fit=crop" },
  { d: "Day 4", t: "Movement that Mends", s: "Not exercise. Not punishment. Movement.", img: "https://images.unsplash.com/photo-1518310383802-640c2de311b2?w=600&q=80&auto=format&fit=crop" },
  { d: "Day 5", t: "Sleep, Reclaimed", s: "The hour that decides the next day.", img: "https://images.unsplash.com/photo-1520206183501-b80df61043c2?w=600&q=80&auto=format&fit=crop" },
  { d: "Day 6", t: "Boundaries as Love", s: "The quietest revolution of all.", img: "https://images.unsplash.com/photo-1499209974431-9dddcece7f88?w=600&q=80&auto=format&fit=crop" },
  { d: "Day 7", t: "Rising Forward", s: "What you carry. What you leave.", img: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80&auto=format&fit=crop" },
];

export default function Reset() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <Image src={HERO} alt="Lit candle in soft morning light" fill className="object-cover" priority sizes="100vw" />
          <div className="absolute inset-0 bg-gradient-to-r from-cream-warm via-cream-warm/85 to-cream-warm/30" />
        </div>
        <div className="max-w-7xl mx-auto px-6 lg:px-10 pt-20 pb-24 md:pt-28 md:pb-36">
          <div className="max-w-xl fade-up">
            <div className="eyebrow mb-6">Free · No card · Begin tomorrow</div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl mb-6 leading-[1.05] text-balance">
              The 7-Day <em className="text-sage-deep">Reset</em>.
            </h1>
            <p className="text-lg text-ink-soft leading-relaxed mb-2 max-w-md">
              Seven gentle mornings. One small ritual a day. Delivered with care.
            </p>
            <p className="serif italic text-gold mt-6 text-lg">A soft start, not another sprint.</p>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 lg:px-10 py-20 md:py-24">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* DAYS */}
          <div className="lg:col-span-7 space-y-5">
            <div className="mb-8">
              <div className="eyebrow-sage mb-3">What arrives in your inbox</div>
              <h2 className="text-3xl md:text-4xl">Seven mornings, seven shifts.</h2>
            </div>
            {DAYS.map((d, i) => (
              <div key={d.d} className={`flex gap-5 items-center group fade-up-d${Math.min(i, 3)}`}>
                <div className="relative w-24 h-24 md:w-28 md:h-28 shrink-0 rounded-2xl overflow-hidden img-zoom-wrap">
                  <Image src={d.img} alt={d.t} fill className="object-cover img-zoom" sizes="120px" />
                </div>
                <div className="flex-1">
                  <div className="text-gold serif text-sm tracking-wider mb-1">{d.d}</div>
                  <div className="serif text-2xl md:text-[1.6rem] mb-1 group-hover:text-sage-deep transition-colors">{d.t}</div>
                  <div className="text-sm text-ink-soft">{d.s}</div>
                </div>
              </div>
            ))}
          </div>

          {/* OPT-IN */}
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <div className="card relative overflow-hidden">
              <div className="absolute -top-12 -right-12 w-40 h-40 rounded-full bg-gold-soft/40 blur-2xl" />
              <div className="absolute -bottom-12 -left-12 w-40 h-40 rounded-full bg-sage-soft/40 blur-2xl" />

              {submitted ? (
                <div className="text-center py-8 relative">
                  <div className="serif italic text-gold text-sm tracking-widest mb-3">WELCOME, RISER</div>
                  <div className="serif text-4xl text-sage-deep mb-4">You&apos;re in.</div>
                  <p className="text-ink-soft">Day 1 lands tomorrow morning. Soft start.</p>
                </div>
              ) : (
                <div className="relative">
                  <div className="eyebrow mb-3">Begin tomorrow</div>
                  <div className="serif text-4xl mb-3 leading-tight">Send me Day 1.</div>
                  <p className="text-sm text-ink-soft mb-7">No spam. Unsubscribe any moment. Free forever.</p>
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      if (email) setSubmitted(true);
                    }}
                    className="space-y-3"
                  >
                    <input type="text" placeholder="First name" className="input-pill" />
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Email address"
                      className="input-pill"
                    />
                    <button type="submit" className="btn-primary w-full">Start the Reset</button>
                  </form>

                  <div className="hairline my-6" />

                  <div className="text-xs text-ink-muted space-y-1.5">
                    <div className="flex items-center gap-2"><span className="text-sage-deep">✓</span> Free forever, no card</div>
                    <div className="flex items-center gap-2"><span className="text-sage-deep">✓</span> One short email per day</div>
                    <div className="flex items-center gap-2"><span className="text-sage-deep">✓</span> Unsubscribe in one click</div>
                  </div>

                  <p className="text-xs text-ink-soft mt-6 text-center">
                    Already a riser?{" "}
                    <Link href="/quiz" className="text-sage-deep underline">Find your archetype.</Link>
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
