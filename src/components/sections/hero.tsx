import Link from "next/link";
import { ArrowDown, ArrowUpRight, Sparkles } from "lucide-react";
import { portfolio } from "@/data/portfolio";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section
      id="home"
      aria-labelledby="hero-title"
      className="relative isolate overflow-hidden border-b border-white/10"
    >
      <div className="absolute -left-36 top-8 -z-10 h-96 w-96 rounded-full bg-purple/20 blur-[100px]" />
      <div className="absolute -right-20 top-28 -z-10 h-80 w-80 rounded-full bg-coral/15 blur-[90px]" />
      <div className="mx-auto grid min-h-[650px] max-w-7xl items-center gap-12 px-5 py-20 sm:px-8 lg:grid-cols-[1.05fr_.95fr] lg:py-28">
        <div className="max-w-3xl">
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.05] px-4 py-2 text-xs font-medium tracking-wide text-white/75">
            <Sparkles size={14} className="text-sun" aria-hidden="true" />
            {portfolio.tagline}
          </div>
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-aqua">
            {portfolio.role}
          </p>
          <h1
            id="hero-title"
            className="font-display text-[clamp(3.2rem,8vw,6.6rem)] leading-[.99] tracking-[-0.06em] text-white"
          >
            Hello, I&apos;m
            <span className="mt-2 block bg-gradient-to-r from-purple via-coral to-sun bg-clip-text text-transparent">
              Asmaa.
            </span>
          </h1>
          <p className="mt-7 max-w-xl text-lg leading-8 text-white/65 sm:text-xl">
            {portfolio.name} — {portfolio.role}. Explore a collection of
            colorful website projects, made with care.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Link href="#projects">
              <Button>
                Explore my work <ArrowUpRight size={17} aria-hidden="true" />
              </Button>
            </Link>
            <Link href="#contact">
              <Button variant="outline">Get in touch</Button>
            </Link>
          </div>
          <a
            href="#about"
            className="mt-14 inline-flex items-center gap-2 rounded-sm text-sm text-white/50 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple"
          >
            Scroll to discover <ArrowDown size={15} aria-hidden="true" />
          </a>
        </div>
        <div className="relative mx-auto flex aspect-square w-full max-w-[470px] items-center justify-center">
          <div className="absolute inset-[8%] rotate-[-8deg] rounded-[36%_64%_54%_46%/53%_38%_62%_47%] bg-gradient-to-br from-purple via-[#7449d4] to-coral opacity-90" />
          <div className="absolute inset-[15%] rotate-[7deg] rounded-[57%_43%_43%_57%/42%_53%_47%_58%] border border-white/20" />
          <div className="absolute right-[4%] top-[15%] h-16 w-16 rounded-full bg-sun shadow-[0_0_70px_rgba(255,209,102,.4)]" />
          <div className="absolute bottom-[13%] left-[6%] h-12 w-12 rounded-full bg-aqua shadow-[0_0_55px_rgba(102,227,218,.35)]" />
          <div className="relative z-10 max-w-[290px] text-center">
            <span className="mb-3 block text-sm font-medium uppercase tracking-[.25em] text-white/65">
              Portfolio
            </span>
            <span className="font-display text-5xl leading-tight tracking-[-.05em] text-white sm:text-6xl">
              Asmaa
              <br />
              Cali Jimcaale
            </span>
            <span className="mx-auto mt-5 block h-1 w-16 rounded-full bg-sun" />
          </div>
          <div className="absolute bottom-[9%] right-[4%] rotate-6 rounded-2xl border border-white/15 bg-ink/80 px-5 py-3 text-sm text-white shadow-card backdrop-blur">
            Web Developer <span className="ml-1 text-coral">✳</span>
          </div>
        </div>
      </div>
    </section>
  );
}
