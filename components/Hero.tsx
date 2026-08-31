export default function Hero() {
  return (
    <section
      id="beranda"
      data-hero
      className="mx-auto grid min-h-screen max-w-7xl items-center gap-16 px-6 pb-20 pt-32 lg:grid-cols-2"
    >
      {/* Left */}
      <div>
        <div
          data-hero-badge
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-4 py-2 text-sm text-[#514f59]"
        >
          <span className="h-2 w-2 rounded-full bg-[#F1D302]" />
          Solusi digital untuk bisnis modern
        </div>

        <h1
          data-hero-title
          className="max-w-3xl text-5xl font-bold leading-[0.98] tracking-[-0.055em] sm:text-6xl lg:text-7xl"
        >
          Jasa pembuatan{" "}
          <span className="text-[#C1292E]">
            website & aplikasi
          </span>{" "}
          profesional.
        </h1>

        <p
          data-hero-text
          className="mt-8 max-w-xl text-lg leading-8 text-[#514f59]"
        >
          Kyan Labs membantu bisnis, UMKM, dan personal brand
          membangun website modern yang profesional, cepat,
          responsif, dan mudah dipercaya customer.
        </p>

        <div
          data-hero-actions
          className="mt-10 flex flex-wrap gap-3"
        >
          <a
            href="#kontak"
            className="rounded-full bg-[#C1292E] px-6 py-3.5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#a82025]"
          >
            Konsultasi Sekarang ↗
          </a>

          <a
            href="#portfolio"
            className="rounded-full border border-black/10 bg-white px-6 py-3.5 text-sm font-semibold transition hover:border-black/20"
          >
            Lihat Portfolio
          </a>
        </div>

        <p className="mt-5 text-sm text-[#7a7d87]">
          Konsultasi gratis · Pengerjaan transparan · Support
          setelah website rilis
        </p>
      </div>

      {/* Right */}
      <div
        data-hero-preview
        className="relative"
      >
        <div className="overflow-hidden rounded-[28px] border border-black/10 bg-white p-3">
          <div className="flex h-10 items-center gap-2 border-b border-black/5 px-3">
            <span className="h-2.5 w-2.5 rounded-full bg-[#C1292E]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#F1D302]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#235789]" />

            <div className="ml-3 h-5 flex-1 rounded-md bg-[#f1f2f4]" />
          </div>

          <div className="min-h-[480px] rounded-2xl bg-[#235789] p-8 text-white">
            <div className="flex items-center justify-between text-xs text-white/50">
              <strong className="text-white">
                Kyan Labs.
              </strong>

              <span>Portfolio · Tentang · Kontak</span>
            </div>

            <div className="pt-24">
              <span className="text-xs font-medium uppercase tracking-[0.2em] text-[#F1D302]">
                Pengalaman Digital
              </span>

              <h2 className="mt-5 max-w-md text-5xl font-bold leading-none tracking-[-0.05em]">
                Website & aplikasi
                <br />
                yang membantu bisnis tumbuh.
              </h2>

              <p className="mt-6 max-w-sm leading-7 text-white/55">
                Dirancang strategis untuk bisnis modern di Indonesia.
              </p>

              <div className="mt-12 h-28 rounded-2xl border border-white/10 bg-white/5" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

