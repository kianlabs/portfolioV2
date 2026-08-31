import TestimonialCard from "./TestimonialCard";

const stats = [
  {
    value: "[X+]",
    label: "Project selesai",
  },
  {
    value: "[X+]",
    label: "Klien yang puas",
  },
  {
    value: "[X+]",
    label: "Tahun pengalaman",
  },
];

const placeholderTestimonials = [
  {
    name: "[PLACEHOLDER - ganti dengan nama klien]",
    role: "[PLACEHOLDER - posisi / bisnis klien]",
    content:
      "[PLACEHOLDER - ganti dengan testimoni asli dari klien. Contoh: 'Website dari Kyan Labs benar-benar membantu bisnis kami terlihat lebih profesional dan jumlah pertanyaan customer meningkat.']",
  },
];

export default function Testimoni() {
  return (
    <section
      id="testimoni"
      className="bg-white px-6 py-28 lg:py-36"
    >
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#C1292E]">
              Testimoni
            </p>

            <h2 className="mt-5 max-w-3xl text-4xl font-bold leading-[1.02] tracking-[-0.045em] sm:text-5xl lg:text-6xl">
              Apa kata klien kami.
            </h2>
          </div>

          <p className="max-w-md text-base leading-7 text-[#626773] lg:text-right">
            Kepercayaan merupakan hal yang kami jaga dengan memberikan
            hasil yang sesuai kebutuhan bisnis Anda.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {placeholderTestimonials.map((item) => (
            <TestimonialCard
              key={item.name}
              name={item.name}
              role={item.role}
              content={item.content}
            />
          ))}
        </div>

        <div className="mt-16 grid divide-y divide-black/10 rounded-[28px] border border-black/10 bg-white sm:grid-cols-3 sm:divide-x sm:divide-y-0">
          {stats.map((stat) => (
            <div key={stat.label} className="px-8 py-10 text-center">
              <span className="block text-5xl font-bold tracking-[-0.03em] text-[#161925]">
                {stat.value}
              </span>
              <span className="mt-3 block text-sm text-[#626773]">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
