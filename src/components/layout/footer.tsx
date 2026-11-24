import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { portfolio } from "@/data/portfolio";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-ink">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-5 py-9 sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <div>
          <Link
            href="#home"
            className="rounded-sm font-semibold text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple"
          >
            {portfolio.name}
          </Link>
          <p className="mt-1 text-sm text-white/50">{portfolio.role}</p>
        </div>
        <Link
          href="#home"
          className="inline-flex items-center gap-2 self-start rounded-sm text-sm text-white/70 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple sm:self-auto"
        >
          Back to top <ArrowUpRight size={15} aria-hidden="true" />
        </Link>
        <p className="text-xs text-white/40">
          © {new Date().getFullYear()} {portfolio.name}
        </p>
      </div>
    </footer>
  );
}
