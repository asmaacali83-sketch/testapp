"use client";

import Image from "next/image";
import * as Dialog from "@radix-ui/react-dialog";
import { ArrowUpRight, Expand, X } from "lucide-react";
import { portfolio } from "@/data/portfolio";
import { Card } from "@/components/ui/card";

export function ProjectGallery() {
  return (
    <>
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {portfolio.projects.map((project, index) => (
          <Dialog.Root key={project.title}>
            <Dialog.Trigger asChild>
              <button
                type="button"
                className="group block w-full rounded-3xl text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple focus-visible:ring-offset-4 focus-visible:ring-offset-ink"
                aria-label={`Open full-size screenshot: ${project.title}`}
              >
                <Card className="h-full overflow-hidden border-white/10 bg-white/[.04] transition duration-300 group-hover:-translate-y-1 group-hover:border-white/25 group-hover:bg-white/[.07] group-hover:shadow-card">
                  <div className="relative aspect-[1.78/1] overflow-hidden bg-[#262436]">
                    <Image
                      src={project.image}
                      alt={project.alt}
                      fill
                      sizes="(max-width: 767px) 100vw, (max-width: 1279px) 50vw, 33vw"
                      className="scale-[1.08] object-cover object-[center_18%] transition-transform duration-500 group-hover:scale-[1.1]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink/35 to-transparent" />
                    <span className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-ink/75 text-white backdrop-blur transition-colors group-hover:bg-purple group-hover:text-ink">
                      <Expand size={17} aria-hidden="true" />
                    </span>
                    <span className="absolute bottom-4 left-5 text-xs font-semibold tracking-[.18em] text-white/80">
                      0{index + 1} <span className="text-sun">/</span> 05
                    </span>
                  </div>
                  <div className="flex items-start justify-between gap-4 p-6">
                    <div>
                      <h3 className="font-display text-2xl tracking-tight text-white">
                        {project.title}
                      </h3>
                      <p className="mt-2 max-w-sm text-sm leading-6 text-white/55">
                        {project.description}
                      </p>
                    </div>
                    <span className="mt-1 text-white/45 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-sun">
                      <ArrowUpRight size={19} aria-hidden="true" />
                    </span>
                  </div>
                </Card>
              </button>
            </Dialog.Trigger>
            <Dialog.Portal>
              <Dialog.Overlay className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out" />
              <Dialog.Content className="fixed left-1/2 top-1/2 z-50 flex h-[min(84vh,800px)] max-h-[92vh] w-[min(96vw,1200px)] -translate-x-1/2 -translate-y-1/2 flex-col overflow-hidden rounded-2xl border border-white/15 bg-[#171624] shadow-2xl focus:outline-none">
                <div className="flex items-center justify-between gap-4 border-b border-white/10 px-5 py-4">
                  <div>
                    <Dialog.Title className="font-display text-xl text-white sm:text-2xl">
                      {project.title}
                    </Dialog.Title>
                    <Dialog.Description className="mt-1 text-sm text-white/55">
                      Full-size original website screenshot
                    </Dialog.Description>
                  </div>
                  <Dialog.Close asChild>
                    <button
                      type="button"
                      aria-label="Close project preview"
                      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/20 text-white transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple"
                    >
                      <X size={18} aria-hidden="true" />
                    </button>
                  </Dialog.Close>
                </div>
                <div className="relative min-h-0 flex-1 bg-black">
                  <Image
                    src={project.image}
                    alt={project.alt}
                    fill
                    sizes="96vw"
                    className="object-contain"
                    priority
                  />
                </div>
              </Dialog.Content>
            </Dialog.Portal>
          </Dialog.Root>
        ))}
      </div>
    </>
  );
}
