const steps = [
  {
    number: "01",
    title: "Konsultasi",
    description:
      "Ceritakan kebutuhan, tujuan, referensi, dan fitur yang Anda inginkan.",
  },
  {
    number: "02",
    title: "Desain",
    description:
      "Kami menyusun struktur halaman dan desain visual sesuai brand serta kebutuhan bisnis Anda.",
  },
  {
    number: "03",
    title: "Development",
    description:
      "Desain dikembangkan menjadi website atau aplikasi yang responsif, cepat, dan siap digunakan.",
  },
  {
    number: "04",
    title: "Launch",
    description:
      "Website dipublikasikan ke domain Anda dan kami bantu memastikan semuanya berjalan dengan baik.",
  },
];

export default function Process() {
  return (
    <section
      id="proses"
      className="bg-[#FDFFFC] px-6 py-28 lg:py-36"
    >
      <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
        {/* Left */}
        <div data-reveal>
          <div className="sticky top-28">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#C1292E]">
              Cara Kerja
            </p>

            <h2 className="mt-5 max-w-xl text-4xl font-bold leading-[1.02] tracking-[-0.045em] sm:text-5xl lg:text-6xl">
              4 langkah mudah memulai project.
            </h2>

            <p className="mt-6 max-w-lg text-base leading-7 text-[#626773]">
              Proses dibuat sederhana dan transparan agar Anda selalu
              mengetahui perkembangan project dari awal sampai rilis.
            </p>

            <a
              href="#kontak"
              className="mt-8 inline-flex rounded-full bg-[#161925] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-[#235789]"
            >
              Mulai konsultasi ↗
            </a>
          </div>
        </div>

        {/* Right */}
        <div
          data-process-list
          className="border-t border-black/10"
        >
          {steps.map((step) => (
            <article
              data-process-step
              key={step.number}
              className="grid gap-5 border-b border-black/10 py-9 sm:grid-cols-[80px_1fr]"
            >
              <span
                className={`text-xs font-semibold tracking-[0.18em] ${
                  step.number === "01"
                    ? "text-[#C1292E]"
                    : step.number === "02"
                      ? "text-[#235789]"
                      : step.number === "03"
                        ? "text-[#9B8900]"
                        : "text-[#161925]"
                }`}
              >
                {step.number}
              </span>

              <div>
                <h3 className="text-2xl font-semibold tracking-[-0.035em] sm:text-3xl">
                  {step.title}
                </h3>

                <p className="mt-3 max-w-xl text-sm leading-7 text-[#626773]">
                  {step.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

