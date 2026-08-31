const services = [
  {
    title: "Website Development",
    description:
      "Company profile, landing page, dan website bisnis yang modern, cepat, dan responsif.",
  },
  {
    title: "Web Application",
    description:
      "Dashboard, sistem informasi, admin panel, dan aplikasi custom untuk operasional bisnis.",
  },
  {
    title: "UI/UX Design",
    description:
      "Desain antarmuka yang rapi, intuitif, dan sesuai dengan karakter brand Anda.",
  },
  {
    title: "Maintenance & Support",
    description:
      "Update konten, bug fix, optimasi, dan pengembangan fitur setelah website diluncurkan.",
  },
];

export default function Services() {
  return (
    <section
      id="layanan"
      className="bg-[#FDFFFC] px-6 py-28 lg:py-36"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-16 lg:grid-cols-[0.75fr_1.25fr] lg:gap-24">
          {/* Left */}
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#C1292E]">
              Layanan Kami
            </p>

            <h2 className="mt-5 max-w-xl text-4xl font-bold leading-[1.02] tracking-[-0.045em] sm:text-5xl lg:text-6xl">
              Solusi digital yang
              <br />
              kami berikan.
            </h2>
          </div>

          {/* Right — Editorial grid */}
          <div className="divide-y divide-black/10 border-t border-black/10">
            {services.map((service) => (
              <div
                key={service.title}
                className="py-8 first:pt-0 last:pb-0"
              >
                <h3 className="text-xl font-bold tracking-[-0.02em] sm:text-2xl">
                  {service.title}
                </h3>
                <p className="mt-3 max-w-md text-sm leading-7 text-[#626773]">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
