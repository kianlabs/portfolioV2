const services = [
  {
    number: "01",
    title: "Website Company Profile",
    description:
      "Website profesional untuk memperkenalkan bisnis, layanan, produk, dan meningkatkan kepercayaan calon customer.",
    className: "bg-[#235789] text-white",
    numberClass: "text-[#F1D302]",
    descriptionClass: "text-white/60",
  },
  {
    number: "02",
    title: "Web Application",
    description:
      "Dashboard, sistem informasi, admin panel, dan aplikasi custom untuk membantu operasional bisnis.",
    className: "bg-[#EAF0F6]",
    numberClass: "text-[#235789]",
    descriptionClass: "text-[#626773]",
  },
  {
    number: "03",
    title: "UI/UX Design",
    description:
      "Desain antarmuka modern, rapi, dan mudah digunakan untuk website maupun aplikasi.",
    className: "bg-[#F6E7E8]",
    numberClass: "text-[#C1292E]",
    descriptionClass: "text-[#626773]",
  },
  {
    number: "04",
    title: "Maintenance Website",
    description:
      "Update konten, bug fix, optimasi, dan pengembangan fitur setelah website diluncurkan.",
    className: "bg-[#FBF5CD]",
    numberClass: "text-[#8A7800]",
    descriptionClass: "text-[#626773]",
  },
];

export default function Services() {
  return (
    <section
      id="layanan"
      className="rounded-t-[48px] bg-white px-6 py-28 lg:py-36"
    >
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#C1292E]">
              Layanan Kami
            </p>

            <h2 className="mt-5 max-w-3xl text-4xl font-bold leading-[1.02] tracking-[-0.045em] sm:text-5xl lg:text-6xl">
              Solusi digital untuk membantu bisnis berkembang.
            </h2>
          </div>

          <p className="max-w-md text-base leading-7 text-[#626773] lg:text-right">
            Mulai dari website bisnis sederhana hingga aplikasi web
            custom, kami bantu memilih solusi yang sesuai dengan
            kebutuhan dan tujuan bisnis Anda.
          </p>
        </div>

        <div className="mt-14 grid gap-4 md:grid-cols-2">
          {services.map((service) => (
            <article
              key={service.number}
              className={`group min-h-[280px] rounded-[28px] border border-black/5 p-8 transition duration-300 hover:-translate-y-1 ${service.className}`}
            >
              <span
                className={`text-xs font-semibold tracking-[0.18em] ${service.numberClass}`}
              >
                {service.number}
              </span>

              <div className="mt-20">
                <h3 className="text-2xl font-semibold tracking-[-0.03em] sm:text-3xl">
                  {service.title}
                </h3>

                <p
                  className={`mt-4 max-w-md text-sm leading-7 ${service.descriptionClass}`}
                >
                  {service.description}
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <a
            href="#kontak"
            className="rounded-full bg-[#C1292E] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-[#A52025]"
          >
            Konsultasikan kebutuhan Anda ↗
          </a>
        </div>
      </div>
    </section>
  );
}

