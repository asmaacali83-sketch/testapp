import {
  ArrowUpRight,
  PanelsTopLeft,
  Smartphone,
  Sparkles,
  WandSparkles,
} from "lucide-react";
import { portfolio } from "@/data/portfolio";
import { Card } from "@/components/ui/card";

const icons = [Smartphone, PanelsTopLeft, WandSparkles, Sparkles];

export function Services() {
  return (
    <section
      id="services"
      aria-labelledby="services-title"
      className="scroll-mt-24 bg-paper px-5 py-24 text-ink sm:px-8 lg:py-32"
    >
      <div className="mx-auto max-w-7xl">
        <p className="text-xs font-bold uppercase tracking-[.22em] text-[#7652c8]">
          How I can help
        </p>
        <div className="mt-4 mb-10 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <h2
            id="services-title"
            className="font-display text-5xl tracking-[-.04em] sm:text-6xl"
          >
            What I offer.
          </h2>
          <p className="max-w-md leading-7 text-ink/60">
            Services are a starting point and can be edited to reflect Asmaa&apos;s
            confirmed offerings.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {portfolio.services.map((service, index) => {
            const Icon = icons[index];
            return (
              <Card
                key={service.title}
                className="group border-ink/10 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:shadow-card"
              >
                <div
                  className={`flex h-12 w-12 items-center justify-center rounded-2xl ${
                    service.color === "aqua"
                      ? "bg-aqua/30 text-[#1a7771]"
                      : service.color === "coral"
                        ? "bg-coral/25 text-[#b34f3c]"
                        : service.color === "sun"
                          ? "bg-sun/50 text-[#84620b]"
                          : "bg-purple/20 text-[#6947bb]"
                  }`}
                >
                  <Icon size={21} aria-hidden="true" />
                </div>
                <p className="mt-7 text-xs font-semibold tracking-[.14em] text-ink/40">
                  0{index + 1}
                </p>
                <h3 className="mt-2 text-xl font-bold tracking-tight">
                  {service.title}
                </h3>
                <p className="mt-3 min-h-[3rem] text-sm leading-6 text-ink/60">
                  {service.description}
                </p>
                <ArrowUpRight
                  size={18}
                  className="mt-6 text-ink/30 transition group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-[#7652c8]"
                  aria-hidden="true"
                />
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
