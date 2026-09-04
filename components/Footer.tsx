export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 py-12 px-6 md:py-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <a href="#beranda" className="text-lg font-bold">
              Zed<span className="text-white/50">.</span>
            </a>
            <p className="mt-4 text-sm text-white/50">
              Creative developer & designer crafting motion-driven digital
              experiences.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-sm font-medium text-white/50 uppercase tracking-[0.1em] mb-4">
              Navigation
            </p>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="#beranda"
                  className="text-white/60 hover:text-white transition"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#work"
                  className="text-white/60 hover:text-white transition"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#blog"
                  className="text-white/60 hover:text-white transition"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="#kontak"
                  className="text-white/60 hover:text-white transition"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Socials */}
          <div>
            <p className="text-sm font-medium text-white/50 uppercase tracking-[0.1em] mb-4">
              Socials
            </p>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/60 hover:text-white transition"
                >
                  Twitter
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/60 hover:text-white transition"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/60 hover:text-white transition"
                >
                  GitHub
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-8">
          <p className="text-xs text-white/40 text-center">
            © {currentYear} Zed. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
