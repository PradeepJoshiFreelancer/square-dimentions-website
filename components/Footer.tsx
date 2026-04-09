import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full py-12" style={{ background: "#1a1a1a" }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <Link href="#hero" className="font-display text-xl tracking-tight">
            <span style={{ color: "#C4813D" }}>Vijay </span>
            <span style={{ color: "#F5F0EB" }}>Singh</span>
          </Link>

          {/* Social Links */}
          {/* <div className="flex gap-4">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center border rounded-lg transition-all duration-300 hover:border-[#C4813D] hover:bg-[#C4813D] hover:text-[#F5F0EB]"
              style={{ borderColor: "#333" }}
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" style={{ color: "#F5F0EB" }} />
            </a>

            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center border rounded-lg transition-all duration-300 hover:border-[#C4813D] hover:bg-[#C4813D] hover:text-[#F5F0EB]"
              style={{ borderColor: "#333" }}
              aria-label="Twitter"
            >
              <Twitter className="w-4 h-4" style={{ color: "#F5F0EB" }} />
            </a>

            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center border rounded-lg transition-all duration-300 hover:border-[#C4813D] hover:bg-[#C4813D] hover:text-[#F5F0EB]"
              style={{ borderColor: "#333" }}
              aria-label="Instagram"
            >
              <InstagramIcon className="w-4 h-4" style={{ color: "#F5F0EB" }} />
            </a>
          </div> */}
        </div>

        {/* Copyright */}
        <div className="border-t pt-6 mt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs" style={{ color: "#555" }}>
            © 2026 Vijay Pal Singh. All rights reserved.
          </p>
          <div
            className="flex flex-wrap gap-4 text-xs text-center md:text-left"
            style={{ color: "#555" }}
          >
            <Link
              href="#hero"
              className="hover:text-[#C4813D] transition-colors"
            >
              Home
            </Link>
            <Link
              href="#about"
              className="hover:text-[#C4813D] transition-colors"
            >
              About
            </Link>
            <Link
              href="#services"
              className="hover:text-[#C4813D] transition-colors"
            >
              Services
            </Link>
            {/* NEW */}
            <Link
              href="#projects"
              className="hover:text-[#C4813D] transition-colors"
            >
              Projects
            </Link>
            <Link
              href="#team"
              className="hover:text-[#C4813D] transition-colors"
            >
              Team
            </Link>{" "}
            <Link
              href="#contact"
              className="hover:text-[#C4813D] transition-colors"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
