const projects = [
  {
    number: "01",
    category: "Company Profile",
    title: "Brand Website",
    description:
      "Website company profile dengan struktur informasi yang jelas, visual premium, dan CTA yang membantu calon customer memahami bisnis lebih cepat.",
    tags: ["Next.js", "Responsive", "SEO"],
    mediaClass: "bg-[#E6EEF5]",
  },
  {
    number: "02",
    category: "E-Commerce",
    title: "Product Store",
    description:
      "Toko online dengan katalog produk yang rapi, tampilan mobile-friendly, dan alur pembelian yang dibuat sesederhana mungkin.",
    tags: ["React", "Checkout", "Mobile-first"],
    mediaClass: "bg-[#FBF5CD]",
  },
  {
    number: "03",
    category: "Web Application",
    title: "Business Dashboard",
    description:
      "Dashboard untuk monitoring data dan operasional bisnis dengan antarmuka yang ringkas, jelas, dan mudah digunakan.",
    tags: ["Dashboard", "API", "Database"],
    mediaClass: "bg-[#F5E5E6]",
  },
];

export default function Portfolio() {
  return (
    <section
      id="portfolio"
      className="bg-[#161925] px-6 py-28 text-white lg:py-36"
    >
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#F1D302]">
              Portfolio Kami
            </p>

            <h2 className="mt-5 max-w-3xl text-4xl font-bold leading-[1.02] tracking-[-0.045em] sm:text-5xl lg:text-6xl">
              Beberapa project yang kami kerjakan.
            </h2>
          </div>

          <p className="max-w-md text-base leading-7 text-white/55 lg:text-right">
            Setiap project dibuat berdasarkan kebutuhan bisnis, bukan
            sekadar mengikuti template yang sama.
          </p>
        </div>

        <div className="mt-16 space-y-6">
          {projects.map((project) => (
            <article
              key={project.number}
              className="grid overflow-hidden rounded-[28px] border border-white/10 bg-[#202433] lg:grid-cols-[1.15fr_0.85fr]"
            >
              {/* Mockup */}
              <div
                className={`flex min-h-[360px] items-end p-6 sm:p-10 ${project.mediaClass}`}
              >
                <div className="w-full translate-y-8 overflow-hidden rounded-t-[22px] border border-black/10 bg-white shadow-2xl shadow-black/15">
                  <div className="flex h-10 items-center gap-2 border-b border-black/5 bg-[#F7F7F7] px-4">
                    <span className="h-2 w-2 rounded-full bg-[#C1292E]" />
                    <span className="h-2 w-2 rounded-full bg-[#F1D302]" />
                    <span className="h-2 w-2 rounded-full bg-[#235789]" />
                  </div>

                  <div className="min-h-[260px] p-8">
                    <div className="h-7 w-2/3 rounded-full bg-[#161925]" />
                    <div className="mt-4 h-3 w-full rounded-full bg-[#D9DCE2]" />
                    <div className="mt-2 h-3 w-4/5 rounded-full bg-[#D9DCE2]" />

                    <div className="mt-10 grid grid-cols-2 gap-4">
                      <div className="h-24 rounded-2xl bg-[#EEF1F5]" />
                      <div className="h-24 rounded-2xl bg-[#EEF1F5]" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Copy */}
              <div className="flex flex-col justify-center p-8 sm:p-10 lg:p-12">
                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-white/40">
                  {project.number} / {project.category}
                </span>

                <h3 className="mt-5 text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">
                  {project.title}
                </h3>

                <p className="mt-5 max-w-lg text-sm leading-7 text-white/60">
                  {project.description}
                </p>

                <div className="mt-7 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/10 px-3 py-1.5 text-xs text-white/70"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <a
                  href="#kontak"
                  className="mt-8 text-sm font-semibold text-white"
                >
                  Lihat case study ↗
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

