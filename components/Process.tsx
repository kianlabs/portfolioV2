const steps = [
  {
    number: "01",
    title: "Diskusi",
    description:
      "Ceritakan kebutuhan, tujuan, referensi, dan fitur yang Anda inginkan.",
  },
  {
    number: "02",
    title: "Perencanaan",
    description:
      "Kami menyusun struktur, alur, dan rencana desain sesuai brand serta kebutuhan bisnis Anda.",
  },
  {
    number: "03",
    title: "Pengembangan",
    description:
      "Desain dikembangkan menjadi website atau aplikasi yang responsif, cepat, dan siap digunakan.",
  },
  {
    number: "04",
    title: "Launch & Support",
    description:
      "Website dipublikasikan dan kami bantu memastikan semuanya berjalan dengan baik.",
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
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#C1292E]">
            Proses Kerja
          </p>

          <h2 className="mt-5 max-w-xl text-4xl font-bold leading-[1.02] tracking-[-0.045em] sm:text-5xl lg:text-6xl">
            Sederhana,
            <br />
            terstruktur,
            <br />
            dan transparan.
          </h2>
        </div>

        {/* Right — Horizontal steps */}
        <div
          data-process-list
          className="border-t border-black/10"
        >
          {/* Desktop: horizontal */}
          <div className="hidden gap-0 lg:grid lg:grid-cols-4">
            {steps.map((step, i) => (
              <div
                key={step.number}
                data-process-step
                className={`py-8 ${
                  i < steps.length - 1 ? "border-r border-black/10 pr-8" : ""
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className="text-xs font-semibold tracking-[0.15em] text-[#C1292E]">
                    {step.number}
                  </span>
                  {i < steps.length - 1 && (
                    <span className="h-px flex-1 bg-black/10" />
                  )}
                </div>
                <h3 className="mt-6 text-lg font-bold tracking-[-0.02em]">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-[#626773]">
                  {step.description}
                </p>
              </div>
            ))}
          </div>

          {/* Mobile: vertical */}
          <div className="space-y-0 lg:hidden">
            {steps.map((step, i) => (
              <div
                key={step.number}
                data-process-step
                className={`flex gap-5 py-8 ${
                  i < steps.length - 1 ? "border-b border-black/10" : ""
                }`}
              >
                <span className="text-xs font-semibold tracking-[0.15em] text-[#C1292E]">
                  {step.number}
                </span>
                <div>
                  <h3 className="text-lg font-bold tracking-[-0.02em]">
                    {step.title}
                  </h3>
                  <p className="mt-2 max-w-sm text-sm leading-6 text-[#626773]">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
