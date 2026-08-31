export default function Footer() {
  return (
    <footer className="border-t border-black/10 bg-white px-6 py-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <a
          href="#beranda"
          className="font-bold tracking-tight"
        >
          Kyan Labs.
        </a>

        <nav className="flex flex-wrap gap-5 text-xs text-[#626773]">
          <a href="#tentang">Tentang</a>
          <a href="#layanan">Layanan</a>
          <a href="#portfolio">Portfolio</a>
          <a href="#proses">Proses</a>
          <a href="#faq">FAQ</a>
        </nav>

        <p className="text-xs text-[#626773]">
          © 2026 Kyan Labs.
        </p>
      </div>
    </footer>
  );
}
