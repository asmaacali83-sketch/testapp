import { Card } from "@/components/ui/card";
import { portfolio } from "@/data/portfolio";

export function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-title"
      className="scroll-mt-24 bg-paper px-5 py-24 text-ink sm:px-8 lg:py-32"
    >
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[.8fr_1.2fr] lg:items-end">
        <div>
          <p className="text-xs font-bold uppercase tracking-[.22em] text-[#7652c8]">
            A little introduction
          </p>
          <h2
            id="about-title"
            className="mt-4 max-w-md font-display text-5xl leading-[1.05] tracking-[-.04em] sm:text-6xl"
          >
            About <span className="text-[#7652c8]">Asmaa.</span>
          </h2>
        </div>
        <Card className="border-ink/10 bg-white p-7 shadow-card sm:p-10">
          <p className="text-xl leading-9 text-ink/75">
            {portfolio.about.text ||
              "Asmaa's personal introduction will go here. Add a short biography in src/data/portfolio.ts when she is ready to share one."}
          </p>
          <div className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#f0eafe] px-4 py-2 text-sm font-semibold text-[#6440b4]">
            <span className="h-2 w-2 rounded-full bg-coral" />
            {portfolio.role}
          </div>
        </Card>
      </div>
    </section>
  );
}
