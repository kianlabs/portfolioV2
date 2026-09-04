import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

type Project = {
  id: string;
  title: string;
  category: string;
  description: string;
  year: string;
  image?: string;
  link?: string;
};

const projects: Project[] = [
  {
    id: "1",
    title: "Studio A",
    category: "Web Design",
    description: "Premium design studio showcase with interactive portfolio.",
    year: "2025",
    image: "/projects/studio-a.jpg",
  },
  {
    id: "2",
    title: "SaaS Co.",
    category: "Product Design",
    description: "Dashboard and analytics platform for data-driven teams.",
    year: "2025",
    image: "/projects/saas-co.jpg",
  },
  {
    id: "3",
    title: "Product Lab",
    category: "Web Application",
    description: "Collaborative product development platform with real-time features.",
    year: "2024",
    image: "/projects/product-lab.jpg",
  },
];

export default function Projects() {
  return (
    <section
      id="work"
      className="py-20 px-6 md:py-32 border-t border-white/10"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-16 md:mb-24">
          <p className="text-[12px] font-medium text-white/50 uppercase tracking-[0.1em] mb-4">
            Selected Work
          </p>
          <h2 className="text-4xl md:text-5xl font-bold leading-[1.1] tracking-[-0.03em]">
            Featured Projects
          </h2>
        </div>

        {/* Projects Grid */}
        <div className="grid gap-12 md:gap-16">
          {projects.map((project, idx) => (
            <div
              key={project.id}
              className="group"
            >
              <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
                {/* Content — Left on desktop, top on mobile */}
                <div className={idx % 2 === 1 ? "md:order-2" : ""}>
                  <div className="flex items-baseline gap-3 mb-4">
                    <span className="text-3xl font-bold text-white/20">
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <h3 className="text-2xl md:text-3xl font-bold">
                        {project.title}
                      </h3>
                      <p className="text-sm text-white/50 mt-1">
                        {project.category} — {project.year}
                      </p>
                    </div>
                  </div>

                  <p className="text-base text-white/70 leading-relaxed mb-6 md:mb-8">
                    {project.description}
                  </p>

                  <a
                    href={project.link || "#"}
                    className="inline-flex items-center gap-2 text-sm font-medium text-white/60 hover:text-white transition"
                  >
                    View Case Study
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>

                {/* Image — Right on desktop */}
                <div
                  className={`relative aspect-video rounded-lg overflow-hidden bg-white/5 border border-white/10 ${
                    idx % 2 === 1 ? "md:order-1" : ""
                  }`}
                >
                  {project.image ? (
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <div className="text-center">
                        <p className="text-white/40 text-sm">
                          {project.title} Screenshot
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Divider */}
              {idx < projects.length - 1 && (
                <div className="mt-12 md:mt-16 border-t border-white/5" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
