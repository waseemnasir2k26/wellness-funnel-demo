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
      <body className="min-h-full flex flex-col bg-cream-warm">
        <header className="sticky top-0 z-50 backdrop-blur-md bg-cream-warm/80 border-b border-sage-deep/8">
          <div className="max-w-7xl mx-auto px-6 lg:px-10 py-5 flex items-center justify-between">
            <Link href="/" className="flex items-baseline gap-2 group">
              <span className="serif text-2xl text-sage-deep group-hover:text-gold transition-colors">Phoenix</span>
              <span className="text-[10px] uppercase tracking-[0.3em] text-ink-muted hidden sm:inline">Wellness</span>
            </Link>
            <nav className="hidden md:flex items-center gap-9 text-[13px] font-medium">
              <Link href="/reset" className="hover:text-sage-deep transition-colors">7-Day Reset</Link>
              <Link href="/quiz" className="hover:text-sage-deep transition-colors">Quiz</Link>
              <Link href="/guide" className="hover:text-sage-deep transition-colors">Guide</Link>
              <Link href="/programme" className="hover:text-sage-deep transition-colors">Programme</Link>
              <Link href="/book" className="hover:text-sage-deep transition-colors">Book</Link>
            </nav>
            <Link href="/reset" className="btn-primary text-xs px-5 py-2.5 hidden sm:inline-flex">Free Reset</Link>
          </div>
        </header>

        <main className="flex-1">{children}</main>

        <footer className="border-t border-sage-deep/10 mt-32 bg-cream-deep/30">
          <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16 grid md:grid-cols-4 gap-10 text-sm">
            <div className="md:col-span-2">
              <div className="serif text-3xl text-sage-deep mb-3">Phoenix Wellness</div>
              <p className="text-ink-soft leading-relaxed max-w-sm">
                A wellness journey from burnout to balance. Like a phoenix, you rise — not by force, but by design.
              </p>
              <div className="hairline-gold my-6 max-w-sm" />
              <p className="serif italic text-gold text-lg">Like a phoenix, I rise.</p>
            </div>
            <div>
              <div className="eyebrow-sage mb-4">Explore</div>
              <ul className="space-y-2.5">
                <li><Link href="/reset" className="hover:text-sage-deep transition-colors">7-Day Reset</Link></li>
                <li><Link href="/quiz" className="hover:text-sage-deep transition-colors">Wellness Quiz</Link></li>
                <li><Link href="/guide" className="hover:text-sage-deep transition-colors">£27 Guide</Link></li>
                <li><Link href="/programme" className="hover:text-sage-deep transition-colors">12-Week Programme</Link></li>
                <li><Link href="/book" className="hover:text-sage-deep transition-colors">The Book</Link></li>
              </ul>
            </div>
            <div>
              <div className="eyebrow-sage mb-4">Connect</div>
              <p className="text-ink-soft mb-2">hello@phoenix-wellness.com</p>
              <p className="text-ink-soft mb-6">@phoenix.wellness</p>
              <p className="text-ink-muted text-xs">© 2026 Phoenix Wellness</p>
              <p className="text-ink-muted mt-1 text-xs italic">Demo build · SkynetLabs</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
