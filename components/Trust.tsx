const items = [
  {
    title: "Desain Custom",
    description: "Sesuai identitas bisnis",
  },
  {
    title: "Responsive",
    description: "Desktop hingga mobile",
  },
  {
    title: "Modern & Cepat",
    description: "Fokus pada performa",
  },
  {
    title: "Support",
    description: "Pendampingan setelah rilis",
  },
];

export default function Trust() {
  return (
    <section
        data-trust
        className="mx-auto max-w-7xl px-6 pb-24">
      <div className="grid overflow-hidden rounded-2xl border border-black/10 bg-white sm:grid-cols-2 lg:grid-cols-4">
        {items.map((item) => (
          <div
            data-trust-item
            key={item.title}
            className="border-b border-black/10 p-6 last:border-b-0 sm:border-r lg:border-b-0"
          >
            <strong className="text-sm">
              {item.title}
            </strong>

            <p className="mt-1 text-xs text-[#6b6f79]">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
