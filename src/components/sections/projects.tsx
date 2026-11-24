import { ProjectGallery } from "@/components/projects/project-gallery";

export function Projects() {
  return (
    <section
      id="projects"
      aria-labelledby="projects-title"
      className="scroll-mt-24 bg-[#191827] px-5 py-24 sm:px-8 lg:py-32"
    >
      <div className="mx-auto max-w-7xl">
        <p className="text-xs font-bold uppercase tracking-[.22em] text-coral">
          Selected projects
        </p>
        <div className="mt-4 mb-10 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <h2
            id="projects-title"
            className="max-w-xl font-display text-5xl leading-[1.05] tracking-[-.04em] text-white sm:text-6xl"
          >
            Real work.
            <br />
            <span className="text-purple">Real screenshots.</span>
          </h2>
          <p className="max-w-md leading-7 text-white/55">
            A closer look at five websites. Select any project to inspect its
            original full-size screenshot.
          </p>
        </div>
        <ProjectGallery />
      </div>
    </section>
  );
}
