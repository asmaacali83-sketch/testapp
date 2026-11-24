import { Card } from "@/components/ui/card";
import { portfolio } from "@/data/portfolio";

export function Skills() {
  return (
    <section
      id="skills"
      aria-labelledby="skills-title"
      className="scroll-mt-24 px-5 py-24 sm:px-8 lg:py-28"
    >
      <div className="mx-auto max-w-7xl">
        <p className="text-xs font-bold uppercase tracking-[.22em] text-aqua">
          The toolkit
        </p>
        <div className="mt-4 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <h2
            id="skills-title"
            className="font-display text-5xl tracking-[-.04em] text-white sm:text-6xl"
          >
            Skills &amp; tools
          </h2>
          <p className="max-w-md leading-7 text-white/55">
            A snapshot of the tools and technologies behind the work.
          </p>
        </div>
        {portfolio.skills.length ? (
          <div className="mt-10 flex flex-wrap gap-3">
            {portfolio.skills.map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-white/15 bg-white/[.04] px-5 py-3 text-sm text-white"
              >
                {skill}
              </span>
            ))}
          </div>
        ) : (
          <Card className="mt-10 flex flex-col gap-3 border-dashed border-white/20 p-7 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="font-semibold text-white">Skills list coming soon</p>
              <p className="mt-1 text-sm text-white/55">
                Add only confirmed skills to the skills list in the portfolio
                data file.
              </p>
            </div>
            <span
              aria-hidden="true"
              className="font-display text-3xl italic text-purple/80"
            >
              TBD
            </span>
          </Card>
        )}
      </div>
    </section>
  );
}
