import PortfolioCard, {
  type PortfolioProject,
} from "./PortfolioCard";

const projects: PortfolioProject[] = [
  {
    id: "brand-website",
    type: "brand",
    category: "Company Profile",
    title: "Brand Website",
    description:
      "Struktur informasi jelas, visual premium, dan CTA yang membantu calon customer memahami bisnis lebih cepat.",
    tags: ["Next.js", "Responsive", "SEO"],
    accent: "#5B6EF5",
    url: "brand.kyanlabs.com",
  },
  {
    id: "product-store",
    type: "store",
    category: "E-Commerce",
    title: "Product Store",
    description:
      "Katalog produk yang rapi, tampilan mobile-friendly, dan alur pembelian yang dibuat sesederhana mungkin.",
    tags: ["React", "Checkout", "Mobile-first"],
    accent: "#F5A623",
    url: "store.kyanlabs.com",
  },
  {
    id: "business-dashboard",
    type: "dashboard",
    category: "Web Application",
    title: "Business Dashboard",
    description:
      "Monitoring data dan operasional bisnis dengan antarmuka yang ringkas, jelas, dan mudah digunakan.",
    tags: ["Dashboard", "API", "Database"],
    accent: "#34D1A6",
    url: "app.kyanlabs.com",
  },
];

export default function Portfolio() {
  return (
    <section
      id="portfolio"
      className="bg-[#235789] px-6 py-28 text-white lg:py-36"
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

        <div className="mt-16 grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-6">
          {projects.map((project, index) => (
            <PortfolioCard
              key={project.id}
              project={project}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
