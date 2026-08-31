export default function CTA() {
  return (
    <section
      id="kontak"
      className="bg-white px-6 pb-28"
    >
      <div
        data-reveal
        className="mx-auto max-w-7xl">
        <div className="overflow-hidden rounded-[32px] bg-[#235789] px-8 py-16 text-white sm:px-12 lg:px-16 lg:py-20">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#F1D302]">
            Mulai Project Anda
          </p>

          <h2 className="mt-5 max-w-4xl text-4xl font-bold leading-[0.98] tracking-[-0.05em] sm:text-5xl lg:text-7xl">
            Siap membuat website untuk bisnis Anda?
          </h2>

          <p className="mt-6 max-w-2xl text-base leading-7 text-white/60">
            Ceritakan kebutuhan website atau aplikasi Anda. Kyan Labs
            akan membantu menentukan solusi yang sesuai dengan kebutuhan
            dan tujuan bisnis.
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <a
              href="https://wa.me/6281318679190"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-[#C1292E] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-[#A52025]"
            >
              Konsultasi via WhatsApp ↗
            </a>

            <a
              href="mailto:ridzkyan0504@gmail.com"
              className="rounded-full border border-white/15 px-6 py-3.5 text-sm font-semibold text-white transition hover:border-white/30"
            >
              Kirim Email
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}


