import { Mail } from "lucide-react";

export default function Contact() {
  return (
    <section
      id="kontak"
      className="py-20 px-6 md:py-32 border-t border-white/10"
    >
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="mb-16 md:mb-20 text-center">
          <p className="text-[12px] font-medium text-white/50 uppercase tracking-[0.1em] mb-4">
            Get in Touch
          </p>
          <h2 className="text-4xl md:text-5xl font-bold leading-[1.1] tracking-[-0.03em] mb-6">
            Let&apos;s collaborate
          </h2>
          <p className="text-base md:text-lg text-white/60 max-w-2xl mx-auto">
            Have a project in mind? Let&apos;s talk about how I can help bring your
            vision to life with beautiful, functional design.
          </p>
        </div>

        {/* Contact Methods */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {/* Email */}
          <a
            href="mailto:hello@zed.dev"
            className="p-6 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 transition group"
          >
            <Mail className="w-6 h-6 mb-4 text-white/60 group-hover:text-white transition" />
            <p className="text-sm text-white/50 mb-2">Email</p>
            <p className="font-medium">hello@zed.dev</p>
          </a>

          {/* LinkedIn */}
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-6 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 transition group"
          >
            <svg
              className="w-6 h-6 mb-4 text-white/60 group-hover:text-white transition"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
            </svg>
            <p className="text-sm text-white/50 mb-2">LinkedIn</p>
            <p className="font-medium">zed.dev</p>
          </a>

          {/* Twitter */}
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-6 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 transition group"
          >
            <svg
              className="w-6 h-6 mb-4 text-white/60 group-hover:text-white transition"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M23.953 4.57a10 10 0 002.856-3.51 10 10 0 01-2.856.873c-1.025-.609-2.258-.994-3.564-.994-2.697 0-4.885 2.188-4.885 4.885 0 .39.045.765.144 1.126-4.064-.196-7.662-2.15-10.077-5.118-.42.722-.666 1.561-.666 2.46 0 1.694.863 3.187 2.182 4.062-.803-.026-1.56-.246-2.22-.616v.06c0 2.366 1.683 4.346 3.918 4.79-.41.112-.844.171-1.288.171-.314 0-.615-.03-.916-.086.631 1.953 2.445 3.377 4.604 3.417-1.68 1.319-3.809 2.105-6.102 2.105-.39 0-.779-.023-1.17-.067 2.189 1.394 4.768 2.209 7.557 2.209 9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63.961-.689 1.8-1.56 2.46-2.548z" />
            </svg>
            <p className="text-sm text-white/50 mb-2">Twitter</p>
            <p className="font-medium">@zeddev</p>
          </a>
        </div>

        {/* CTA */}
        <div className="text-center">
          <a
            href="mailto:hello@zed.dev"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-medium rounded-lg transition border border-white/10"
          >
            Send me an email
            <Mail className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
