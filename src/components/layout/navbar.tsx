import Link from "next/link";
import { ArrowUpRight, Menu } from "lucide-react";
import { portfolio } from "@/data/portfolio";

export function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-ink/90 backdrop-blur-xl">
      <a
        href="#main-content"
        className="sr-only z-50 rounded-full bg-sun px-4 py-2 text-ink focus:not-sr-only focus:absolute focus:left-4 focus:top-4"
      >
        Skip to content
      </a>
      <div className="mx-auto flex h-[76px] max-w-7xl items-center justify-between px-5 sm:px-8">
        <Link
          href="#home"
          className="rounded-md text-sm font-bold tracking-tight text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple"
          aria-label={`${portfolio.name}, home`}
        >
          <span className="mr-2 inline-flex h-9 w-9 items-center justify-center rounded-full bg-purple text-sm text-ink">
            A.
          </span>
          <span className="hidden sm:inline">{portfolio.name}</span>
        </Link>
        <nav aria-label="Main navigation" className="hidden items-center gap-6 lg:flex">
          {portfolio.navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-sm text-sm text-white/70 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="#contact"
            className="ml-1 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2.5 text-sm font-semibold text-ink transition-colors hover:bg-sun focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple"
          >
            Let&apos;s talk <ArrowUpRight size={16} aria-hidden="true" />
          </Link>
        </nav>
        <details className="group relative lg:hidden">
          <summary
            aria-label="Open navigation menu"
            className="flex h-11 w-11 cursor-pointer list-none items-center justify-center rounded-full border border-white/20 text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple [&::-webkit-details-marker]:hidden"
          >
            <Menu size={20} aria-hidden="true" />
          </summary>
          <nav
            aria-label="Mobile navigation"
            className="absolute right-0 top-14 flex w-56 flex-col gap-1 rounded-2xl border border-white/10 bg-[#1d1b2b] p-3 shadow-card"
          >
            {portfolio.navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-xl px-4 py-3 text-sm text-white/80 hover:bg-white/10 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </details>
      </div>
    </header>
  );
}
