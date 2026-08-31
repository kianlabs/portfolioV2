const points = [
  {
    title: "Desain yang jelas",
    description:
      "Hierarki informasi dibuat supaya pengunjung cepat memahami bisnis, produk, atau jasa Anda.",
  },
  {
    title: "Komunikasi langsung",
    description:
      "Scope, revisi, dan progres project dibicarakan secara transparan sejak awal.",
  },
  {
    title: "Responsive",
    description:
      "Website dirancang nyaman digunakan di desktop, tablet, dan smartphone.",
  },
  {
    title: "Siap dikembangkan",
    description:
      "Struktur project dibuat rapi agar lebih mudah dirawat dan dikembangkan kembali.",
  },
];

export default function About() {
  return (
    <section id="tentang" className="px-6 py-28 lg:py-36">
      <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-[0.75fr_1.25fr] lg:gap-24">
        {/* Left */}
        <div>
          <div className="sticky top-28 flex min-h-[340px] flex-col justify-between rounded-[28px] bg-[#235789] p-8 text-white">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#F1D302]">
                Tentang Kami
              </p>

              <span className="mt-6 block text-8xl font-bold tracking-[-0.07em]">
                01
              </span>
            </div>

            <p className="max-w-sm text-sm leading-7 text-white/60">
              Kami membuat website bukan sekadar agar terlihat bagus,
              tetapi agar bisnis Anda terlihat profesional dan lebih
              mudah dipercaya calon customer.
            </p>
          </div>
        </div>

        {/* Right */}
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#C1292E]">
            Tentang Kyan Labs
          </p>

          <h2 className="mt-5 max-w-3xl text-4xl font-bold leading-[1.02] tracking-[-0.045em] sm:text-5xl lg:text-6xl">
            Kami membantu bisnis tumbuh melalui website yang tepat.
          </h2>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-[#626773]">
            Mulai dari company profile, landing page, website bisnis,
            hingga aplikasi berbasis web. Setiap project dirancang
            berdasarkan kebutuhan bisnis, target customer, dan tujuan
            yang ingin dicapai.
          </p>

          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {points.map((point) => (
              <article
                key={point.title}
                className="rounded-2xl border border-black/10 bg-white p-6"
              >
                <h3 className="font-semibold">
                  {point.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-[#626773]">
                  {point.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}



