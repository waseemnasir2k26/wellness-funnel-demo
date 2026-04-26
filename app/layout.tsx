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
  title: "Phoenix Wellness — Rise Again",
  description: "A wellness journey from burnout to balance. Free 7-day reset, quiz, guide, programme & book.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${fraunces.variable} ${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <header className="sticky top-0 z-50 backdrop-blur bg-cream/80 border-b border-sage-deep/10">
          <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2">
              <span className="serif text-2xl text-sage-deep">Phoenix</span>
              <span className="text-xs uppercase tracking-[0.2em] text-ink-soft hidden sm:inline">Wellness</span>
            </Link>
            <nav className="hidden md:flex items-center gap-8 text-sm">
              <Link href="/reset" className="hover:text-sage-deep transition">7-Day Reset</Link>
              <Link href="/quiz" className="hover:text-sage-deep transition">Quiz</Link>
              <Link href="/guide" className="hover:text-sage-deep transition">£27 Guide</Link>
              <Link href="/programme" className="hover:text-sage-deep transition">Programme</Link>
              <Link href="/book" className="hover:text-sage-deep transition">Book</Link>
            </nav>
            <Link href="/reset" className="btn-primary text-sm hidden sm:inline-flex">Free Reset</Link>
          </div>
        </header>

        <main className="flex-1">{children}</main>

        <footer className="border-t border-sage-deep/10 mt-24 bg-cream-deep/40">
          <div className="max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-8 text-sm">
            <div>
              <div className="serif text-2xl text-sage-deep mb-2">Phoenix Wellness</div>
              <p className="text-ink-soft leading-relaxed">A wellness journey from burnout to balance. Like a phoenix, you rise.</p>
            </div>
            <div>
              <div className="eyebrow mb-3">Explore</div>
              <ul className="space-y-2">
                <li><Link href="/reset" className="hover:text-sage-deep">7-Day Reset</Link></li>
                <li><Link href="/quiz" className="hover:text-sage-deep">Wellness Quiz</Link></li>
                <li><Link href="/guide" className="hover:text-sage-deep">£27 Guide</Link></li>
                <li><Link href="/programme" className="hover:text-sage-deep">Programme</Link></li>
                <li><Link href="/book" className="hover:text-sage-deep">Book</Link></li>
              </ul>
            </div>
            <div>
              <div className="eyebrow mb-3">Connect</div>
              <p className="text-ink-soft">hello@phoenix-wellness.com</p>
              <p className="text-ink-soft mt-4 text-xs">© 2026 Phoenix Wellness. All rights reserved.</p>
              <p className="text-ink-soft mt-2 text-xs italic">Demo build by SkynetLabs.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
