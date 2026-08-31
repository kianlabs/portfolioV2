const principles = [
  {
    title: "Clarity",
    description: "Struktur informasi yang jelas agar pengunjung cepat memahami bisnis Anda.",
  },
  {
    title: "Performance",
    description: "Website cepat, ringan, dan dioptimasi untuk semua perangkat.",
  },
  {
    title: "Maintainability",
    description: "Kode rapi dan terstruktur agar mudah dirawat dan dikembangkan.",
  },
];

export default function About() {
  return (
    <section id="tentang" className="bg-[#FDFFFC] px-6 py-28 lg:py-36">
      <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-[0.75fr_1.25fr] lg:gap-24">
        {/* Left */}
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#C1292E]">
            Tentang Kyan Labs
          </p>

          <h2 className="mt-5 max-w-xl text-4xl font-bold leading-[1.02] tracking-[-0.045em] sm:text-5xl lg:text-6xl">
            Kami membangun produk digital
            {" "}yang jelas, cepat, dan berguna.
          </h2>
        </div>

        {/* Right */}
        <div>
          <p className="text-base leading-7 text-[#626773]">
            Mulai dari company profile, landing page, website bisnis,
            hingga aplikasi berbasis web. Setiap project dirancang
            berdasarkan kebutuhan bisnis, target customer, dan tujuan
            yang ingin dicapai.
          </p>

          <div className="mt-12 space-y-0 border-t border-black/10">
            {principles.map((principle) => (
              <div
                key={principle.title}
                className="py-6 first:pt-0 last:pb-0"
              >
                <h3 className="text-lg font-bold tracking-[-0.02em]">
                  {principle.title}
                </h3>
                <p className="mt-1.5 text-sm leading-6 text-[#626773]">
                  {principle.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
