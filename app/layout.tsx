import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Phoenix Wellness — Like a phoenix, I rise.",
  description: "A wellness journey from burnout to balance. Free 7-day reset, archetype quiz, £27 guide, 12-week programme & the book.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${fraunces.variable} ${inter.variable} h-full`}>
      <body className="min-h-full flex flex-col">
        {/* Top color stripe */}
        <div className="h-1 w-full bg-gradient-to-r from-saffron via-terracotta to-plum" style={{
          background: "linear-gradient(to right, #e87f1c, #c8674a, #6e3d4f)",
        }} />

        <header className="sticky top-1 z-50 backdrop-blur-md bg-cream-warm/85 border-b border-sage-deep/8">
          <div className="max-w-7xl mx-auto px-6 lg:px-10 py-5 flex items-center justify-between">
            <Link href="/" className="flex items-baseline gap-2 group">
              <span className="serif text-2xl bg-gradient-to-r from-sage-deep to-terracotta bg-clip-text text-transparent" style={{
                backgroundImage: "linear-gradient(135deg, #3d5239, #c8674a)",
              }}>Phoenix</span>
              <span className="text-[10px] uppercase tracking-[0.3em] text-ink-muted hidden sm:inline">Wellness</span>
            </Link>
            <nav className="hidden md:flex items-center gap-9 text-[13px] font-medium">
              <Link href="/reset" className="hover:text-terracotta transition-colors">7-Day Reset</Link>
              <Link href="/quiz" className="hover:text-terracotta transition-colors">Quiz</Link>
              <Link href="/guide" className="hover:text-terracotta transition-colors">Guide</Link>
              <Link href="/programme" className="hover:text-terracotta transition-colors">Programme</Link>
              <Link href="/book" className="hover:text-terracotta transition-colors">Book</Link>
            </nav>
            <Link href="/reset" className="btn-primary text-xs px-5 py-2.5 hidden sm:inline-flex">Free Reset</Link>
          </div>
        </header>

        <main className="flex-1">{children}</main>

        {/* SkynetLabs Floating Badge */}
        <a
          href="https://skynetjoe.com"
          target="_blank"
          rel="noopener noreferrer"
          className="skynet-badge"
          aria-label="Designed and developed by SkynetLabs"
        >
          <span className="dot pulse-soft" />
          <span>Designed by SkynetLabs</span>
        </a>

        {/* Footer */}
        <footer className="relative mt-32 overflow-hidden" style={{
          background: "linear-gradient(135deg, #20291f 0%, #6e3d4f 100%)",
        }}>
          <div className="absolute inset-0 opacity-10" style={{
            background: "radial-gradient(circle at 20% 30%, #e87f1c 0%, transparent 40%), radial-gradient(circle at 80% 70%, #c8674a 0%, transparent 40%)",
          }} />

          <div className="relative max-w-7xl mx-auto px-6 lg:px-10 py-20 grid md:grid-cols-12 gap-10 text-cream-warm">
            <div className="md:col-span-5">
              <div className="serif text-4xl mb-3" style={{ color: "#f3dba8" }}>Phoenix Wellness</div>
              <p className="text-cream-warm/70 leading-relaxed max-w-sm mb-6">
                A wellness journey from burnout to balance. Like a phoenix, you rise — not by force, but by design.
              </p>
              <div className="hairline-gold mb-5 max-w-xs" />
              <p className="serif italic text-xl" style={{ color: "#e6b252" }}>Like a phoenix, I rise.</p>
            </div>

            <div className="md:col-span-3">
              <div className="eyebrow-gold mb-4">Explore</div>
              <ul className="space-y-2.5 text-sm">
                <li><Link href="/reset" className="text-cream-warm/80 hover:text-saffron transition-colors">7-Day Reset</Link></li>
                <li><Link href="/quiz" className="text-cream-warm/80 hover:text-saffron transition-colors">Wellness Quiz</Link></li>
                <li><Link href="/guide" className="text-cream-warm/80 hover:text-saffron transition-colors">£27 Guide</Link></li>
                <li><Link href="/programme" className="text-cream-warm/80 hover:text-saffron transition-colors">12-Week Programme</Link></li>
                <li><Link href="/book" className="text-cream-warm/80 hover:text-saffron transition-colors">The Book</Link></li>
              </ul>
            </div>

            <div className="md:col-span-4">
              <div className="eyebrow-gold mb-4">Connect</div>
              <p className="text-cream-warm/80 mb-1.5 text-sm">hello@phoenix-wellness.com</p>
              <p className="text-cream-warm/80 mb-6 text-sm">@phoenix.wellness</p>

              {/* Skynet attribution block */}
              <div className="border border-cream-warm/10 rounded-2xl p-5 backdrop-blur bg-cream-warm/5">
                <div className="text-[10px] tracking-[0.3em] uppercase text-cream-warm/50 mb-2">Designed &amp; Developed by</div>
                <a
                  href="https://skynetjoe.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block serif text-2xl mb-1 hover:text-saffron transition-colors"
                  style={{ color: "#f3dba8" }}
                >
                  SkynetLabs
                </a>
                <a
                  href="https://waseemnasir.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-sm text-cream-warm/70 hover:text-saffron transition-colors"
                >
                  waseemnasir.com →
                </a>
              </div>
            </div>
          </div>

          <div className="relative border-t border-cream-warm/10">
            <div className="max-w-7xl mx-auto px-6 lg:px-10 py-6 flex flex-wrap items-center justify-between gap-3 text-xs text-cream-warm/50">
              <p>© 2026 Phoenix Wellness · All rights reserved</p>
              <p>
                Crafted with care by{" "}
                <a href="https://skynetjoe.com" target="_blank" rel="noopener noreferrer" className="text-saffron hover:underline">SkynetLabs</a>
                {" · "}
                <a href="https://waseemnasir.com" target="_blank" rel="noopener noreferrer" className="text-saffron hover:underline">Waseem Nasir</a>
              </p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
