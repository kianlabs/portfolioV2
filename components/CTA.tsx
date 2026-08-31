export default function CTA() {
  return (
    <section
      id="kontak"
      className="bg-[#161925] px-6 py-28 text-[#FDFFFC] lg:py-36"
    >
      <div className="mx-auto max-w-4xl text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#F1D302]">
          Mulai Project Anda
        </p>

        <h2 className="mt-5 text-4xl font-bold leading-[0.98] tracking-[-0.05em] sm:text-5xl lg:text-6xl">
          Siap membuat website untuk bisnis Anda?
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-[#FDFFFC]/80">
          Ceritakan kebutuhan website atau aplikasi Anda. Kyan Labs
          akan membantu menentukan solusi yang sesuai dengan kebutuhan
          dan tujuan bisnis.
        </p>

        <div className="mt-9 flex flex-wrap justify-center gap-3">
          <a
            href="https://wa.me/6281318679190"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-[#FDFFFC] px-6 py-3.5 text-sm font-semibold text-[#161925] transition hover:bg-[#F1D302]"
          >
            Konsultasi via WhatsApp ↗
          </a>

          <a
            href="mailto:ridzkyan0504@gmail.com"
            className="rounded-full border border-[#FDFFFC]/60 px-6 py-3.5 text-sm font-semibold text-[#FDFFFC] transition hover:border-[#FDFFFC]/80"
          >
            Kirim Email
          </a>
        </div>
      </div>
    </section>
  );
}
