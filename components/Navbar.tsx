export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-black/5 bg-[#FDFFFC]/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <a
          href="#beranda"
          className="text-lg font-bold tracking-tight"
        >
          Kyan Labs.
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          <a
            href="#tentang"
            className="text-sm text-[#514f59] transition hover:text-[#235789]"
          >
            Tentang
          </a>

          <a
            href="#layanan"
            className="text-sm text-[#514f59] transition hover:text-[#235789]"
          >
            Layanan
          </a>

          <a
            href="#portfolio"
            className="text-sm text-[#514f59] transition hover:text-[#235789]"
          >
            Portfolio
          </a>

          <a
            href="#proses"
            className="text-sm text-[#514f59] transition hover:text-[#235789]"
          >
            Proses
          </a>

          <a
            href="#faq"
            className="text-sm text-[#514f59] transition hover:text-[#235789]"
          >
            FAQ
          </a>
        </nav>

        <a
          href="#kontak"
          className="rounded-full bg-[#C1292E] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#a82025]"
        >
          Konsultasi
        </a>
      </div>
    </header>
  );
}

