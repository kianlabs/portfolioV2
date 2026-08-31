import Image from "next/image";

type FeaturedProject = {
  id: string;
  title: string;
  category: string;
  description: string;
  year?: string;
  stack?: string[];
  image: string;
};

const featured: FeaturedProject = {
  id: "bertani",
  title: "Bertani",
  category: "Web Application",
  description:
    "Platform digital untuk mengelola aktivitas pertanian, mulai dari monitoring lahan hingga manajemen hasil panen.",
  year: "2026",
  stack: ["Next.js", "Web App"],
  image: "/projects/bertani.webp",
};

export default function SelectedWork() {
  // Set to true once /projects/bertani.webp is available in public/.
  const hasImage = false;

  return (
    <section
      id="work"
      className="bg-[#161925] px-6 py-28 text-white lg:py-36"
    >
      <div className="mx-auto max-w-7xl">
        <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#F1D302]">
          Selected Work
        </p>

        <div className="mt-16 grid gap-12 border-t border-white/10 pt-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-24">
          {/* Left — Project info */}
          <div data-reveal>
            <div className="flex items-baseline gap-4">
              <span className="text-3xl font-bold text-white/30">01</span>
              <h2 className="text-4xl font-bold leading-[1] tracking-[-0.04em] sm:text-5xl">
                Bertani
              </h2>
            </div>

            <p className="mt-3 text-sm font-medium uppercase tracking-[0.1em] text-white/50">
              Web Application
            </p>

            <p className="mt-6 max-w-sm text-base leading-7 text-white/60">
              {featured.description}
            </p>

            <div className="mt-8 flex flex-wrap gap-2">
              {featured.stack?.map((tech) => (
                <span
                  key={tech}
                  className="rounded-sm border border-white/10 px-3 py-1 text-xs text-white/60"
                >
                  {tech}
                </span>
              ))}
              {featured.year && (
                <span className="rounded-sm border border-white/10 px-3 py-1 text-xs text-white/60">
                  {featured.year}
                </span>
              )}
            </div>
          </div>

          {/* Right — Featured image */}
          <div data-project className="relative">
            <div className="overflow-hidden rounded-lg bg-white/5">
              {hasImage ? (
                <Image
                  src={featured.image}
                  alt={`${featured.title} — ${featured.category}`}
                  width={1600}
                  height={900}
                  sizes="(min-width: 1024px) 60vw, 100vw"
                  className="aspect-[16/9] w-full object-cover"
                />
              ) : (
                <div className="flex aspect-[16/9] items-center justify-center">
                  <p className="text-sm text-white/30">{featured.title}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
