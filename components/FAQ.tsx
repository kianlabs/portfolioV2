const faqs = [
  {
    question: "Berapa lama waktu pengerjaan?",
    answer:
      "Waktu pengerjaan tergantung scope project. Landing page sederhana biasanya lebih cepat dibanding website dengan dashboard, integrasi API, atau fitur custom.",
  },
  {
    question: "Apakah bisa membantu domain dan hosting?",
    answer:
      "Bisa. Domain, hosting, deployment, dan kebutuhan teknis lain dapat kami bantu sesuai stack dan kebutuhan project.",
  },
  {
    question: "Apakah desain bisa disesuaikan dengan brand?",
    answer:
      "Bisa. Warna, tipografi, layout, tone visual, dan konten akan disesuaikan dengan karakter bisnis Anda.",
  },
  {
    question: "Apakah ada revisi?",
    answer:
      "Ada. Jumlah dan ruang lingkup revisi akan disepakati di awal project supaya ekspektasi kedua pihak tetap jelas.",
  },
  {
    question: "Bisa maintenance setelah website selesai?",
    answer:
      "Bisa. Maintenance dapat mencakup update konten, bug fix, monitoring, optimasi, dan pengembangan fitur lanjutan.",
  },
];

export default function FAQ() {
  return (
    <section
      id="faq"
      className="bg-[#FDFFFC] px-6 py-28 lg:py-36"
    >
      <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-[0.75fr_1.25fr] lg:gap-24">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#C1292E]">
            FAQ
          </p>

          <h2 className="mt-5 max-w-xl text-4xl font-bold leading-[1.02] tracking-[-0.045em] sm:text-5xl lg:text-6xl">
            Pertanyaan yang
            <br />
            sering ditanyakan.
          </h2>
        </div>

        <div className="divide-y divide-black/10 border-y border-black/10">
          {faqs.map((faq) => (
            <details
              key={faq.question}
              className="group py-6"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-base font-semibold">
                {faq.question}

                <span className="text-xl font-light transition group-open:rotate-45">
                  +
                </span>
              </summary>

              <p className="mt-4 max-w-2xl pr-10 text-sm leading-7 text-[#626773]">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
