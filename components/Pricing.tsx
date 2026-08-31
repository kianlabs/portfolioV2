const packages = [
  {
    name: "Landing Page",
    price: "Rp249K",
    priceLabel: "Mulai dari",
    audience:
      "Cocok untuk UMKM / personal brand yang butuh satu halaman profesional.",
    features: [
      "Desain custom",
      "Responsive",
      "1x revisi",
      "Bantuan setup domain & hosting",
    ],
    popular: false,
  },
  {
    name: "Company Profile",
    price: "Rp549K",
    priceLabel: "Mulai dari",
    audience:
      "Untuk bisnis yang butuh beberapa halaman (Tentang, Layanan, Kontak, dst).",
    features: [
      "Semua di paket Landing Page",
      "Hingga 5 halaman",
      "SEO dasar",
      "2x revisi",
    ],
    popular: true,
  },
  {
    name: "Custom / Web Application",
    price: "Hubungi kami",
    priceLabel: null,
    audience:
      "Untuk dashboard, sistem custom, dan integrasi API dengan scope bervariasi.",
    features: [
      "Dashboard & sistem custom",
      "Integrasi API",
      "Konsultasi kebutuhan",
      "Penawaran sesuai scope",
    ],
    popular: false,
  },
];

export default function Pricing() {
  return (
    <section
      id="paket"
      className="bg-white px-6 py-28 lg:py-36"
    >
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#C1292E]">
              Paket Kami
            </p>

            <h2 className="mt-5 max-w-3xl text-4xl font-bold leading-[1.02] tracking-[-0.045em] sm:text-5xl lg:text-6xl">
              Pilih paket sesuai kebutuhan.
            </h2>
          </div>

          <p className="max-w-md text-base leading-7 text-[#626773] lg:text-right">
            Harga belum termasuk biaya domain. Mulai dari paket
            sederhana hingga sistem custom, kami bantu pilih yang
            paling sesuai.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3 lg:items-stretch">
          {packages.map((pkg) => (
            <article
              key={pkg.name}
              className={`relative flex flex-col rounded-[28px] border p-8 ${
                pkg.popular
                  ? "border-[#C1292E]/20 bg-[#FDF6F6] shadow-lg shadow-[#C1292E]/5"
                  : "border-black/10 bg-white"
              }`}
            >
              {pkg.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-[#C1292E] px-4 py-1 text-xs font-semibold text-white">
                  Paling Populer
                </span>
              )}

              <h3 className="text-2xl font-semibold tracking-[-0.03em] text-[#161925]">
                {pkg.name}
              </h3>

              <div className="mt-4 flex items-baseline gap-2">
                {pkg.priceLabel && (
                  <span className="text-sm text-[#626773]">
                    {pkg.priceLabel}
                  </span>
                )}
                <span className="text-4xl font-bold tracking-[-0.04em] text-[#161925]">
                  {pkg.price}
                </span>
                {pkg.name === "Company Profile" && (
                  <span className="text-xs text-[#8A8E98]">
                    / project
                  </span>
                )}
              </div>

              <p className="mt-4 text-sm leading-7 text-[#626773]">
                {pkg.audience}
              </p>

              <div className="my-6 h-px bg-black/10" />

              <ul className="space-y-3">
                {pkg.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-3 text-sm text-[#514f59]"
                  >
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#161925] text-white">
                      <span className="text-[11px]">✓</span>
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>

              <a
                href="#kontak"
                className={`mt-8 inline-flex items-center justify-center rounded-full px-6 py-3.5 text-sm font-semibold transition hover:-translate-y-0.5 ${
                  pkg.popular
                    ? "bg-[#C1292E] text-white hover:bg-[#A52025]"
                    : "bg-[#161925] text-white hover:bg-[#235789]"
                }`}
              >
                Diskusikan paket ini
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
