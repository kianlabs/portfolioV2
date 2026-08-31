import TestimonialCard from "./TestimonialCard";

const stats = [
  {
    value: "24+",
    label: "Project selesai",
  },
  {
    value: "18+",
    label: "Klien yang puas",
  },
  {
    value: "3+",
    label: "Tahun pengalaman",
  },
];

const testimonials = [
  {
    name: "Andi Pratama",
    role: "Owner, Kopi Nusantara",
    content:
      "Website dari Kyan Labs benar-benar membantu bisnis kami terlihat lebih profesional dan jumlah pertanyaan customer meningkat drastis.",
  },
  {
    name: "Sari Dewi",
    role: "Founder, Toko Serba Ada",
    content:
      "Prosesnya cepat, komunikasinya jelas, dan hasil akhirnya melebihi ekspektasi. Sangat direkomendasikan untuk UMKM.",
  },
  {
    name: "Budi Santoso",
    role: "Direktur, CV Maju Bersama",
    content:
      "Dashboard custom yang dibuat Kyan Labs mempermudah kami memantau operasional bisnis setiap hari. Kerja sama yang sangat profesional.",
  },
];

export default function Testimoni() {
  return (
    <section
      id="testimoni"
      className="relative overflow-hidden bg-gradient-to-br from-[#161925] via-[#161925] to-[#235789] px-6 py-28 text-white lg:py-36"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-[#235789]/30 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-24 -left-24 h-80 w-80 rounded-full bg-[#C1292E]/20 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#F1D302]">
              Testimoni
            </p>

            <h2 className="mt-5 max-w-3xl text-4xl font-bold leading-[1.02] tracking-[-0.045em] sm:text-5xl lg:text-6xl">
              Apa kata klien kami.
            </h2>
          </div>

          <p className="max-w-md text-base leading-7 text-white/60 lg:text-right">
            Kepercayaan merupakan hal yang kami jaga dengan memberikan
            hasil yang sesuai kebutuhan bisnis Anda.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((item) => (
            <TestimonialCard
              key={item.name}
              name={item.name}
              role={item.role}
              content={item.content}
            />
          ))}
        </div>

        <div className="mt-16 grid divide-y divide-white/10 rounded-[28px] border border-white/15 bg-white/10 backdrop-blur-xl sm:grid-cols-3 sm:divide-x sm:divide-y-0">
          {stats.map((stat) => (
            <div key={stat.label} className="px-8 py-10 text-center">
              <span className="block text-5xl font-bold tracking-[-0.03em] text-white">
                {stat.value}
              </span>
              <span className="mt-3 block text-sm text-white/60">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
