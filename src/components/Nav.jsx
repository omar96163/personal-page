import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

function Nav() {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu on route change
  useEffect(() => setMenuOpen(false), [location.pathname]);

  const links = [
    { to: "/", label: "Home" },
    { to: "/About", label: "About" },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? "nav-scrolled" : "bg-transparent"
        }`}
        style={{ fontFamily: "var(--font-primary)" }}
      >
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">

          {/* ── Logo ── */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="relative">
              {/* Outer Glow */}
              <div className="absolute inset-0 bg-violet-600/20 blur-xl rounded-full group-hover:bg-violet-600/40 transition-all duration-700"></div>
              
              {/* Icon Box */}
              <div className="relative w-11 h-11 rounded-2xl bg-[#0d0d1f] border border-white/10 flex items-center justify-center overflow-hidden transition-all duration-500 group-hover:border-violet-500/50 group-hover:-rotate-12">
                <div className="absolute inset-0 opacity-20 dot-pattern"></div>
                <span className="relative text-2xl font-black text-white group-hover:scale-110 transition-transform duration-500">
                  O
                </span>
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-violet-500 to-transparent opacity-50"></div>
              </div>
            </div>

            <div className="flex flex-col">
              <div className="flex items-center gap-1">
                <span className="text-white font-black text-xl tracking-tighter transition-colors group-hover:text-violet-400 uppercase">
                  Omar
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-violet-500 mt-1 animate-pulse"></span>
                <span className="text-white font-black text-xl tracking-tighter transition-colors group-hover:text-violet-400 uppercase">
                  Al-baz
                </span>
              </div>
              <span className="text-[10px] text-slate-500 font-bold uppercase tracking-[0.4em] leading-none mt-1">
                Full-stack Developer
              </span>
            </div>
          </Link>

          {/* ── Desktop links ── */}
          <div className="hidden sm:flex items-center gap-8">
            {links.map(({ to, label }) => (
              <Link
                key={to}
                to={to}
                className={`nav-link ${location.pathname === to ? "active" : ""}`}
              >
                {label}
              </Link>
            ))}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://mostaql.com/u/omar_youns"
              className="btn-primary hover:translate-x-1 text-sm py-2 px-5 rounded-lg"
            >
              <span>Hire Me</span>
              <svg className="w-4 h-4 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>

          {/* ── Hamburger ── */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="sm:hidden w-9 h-9 flex flex-col items-center justify-center gap-[5px] group"
            aria-label="Toggle menu"
          >
            <span className={`block w-5 h-0.5 bg-white rounded-full transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-[7px]" : ""}`} />
            <span className={`block w-5 h-0.5 bg-white rounded-full transition-all duration-300 ${menuOpen ? "opacity-0 scale-x-0" : ""}`} />
            <span className={`block w-5 h-0.5 bg-white rounded-full transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-[7px]" : ""}`} />
          </button>
        </div>
      </nav>

      {/* ── Mobile menu overlay ── */}
      <div
        className={`fixed inset-0 z-40 sm:hidden transition-all duration-400 ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        style={{ background: "rgba(6,6,16,0.97)", backdropFilter: "blur(20px)" }}
      >
        <div className="flex flex-col items-center justify-center h-full gap-10">
          {links.map(({ to, label }, i) => (
            <Link
              key={to}
              to={to}
              onClick={() => setMenuOpen(false)}
              className={`text-3xl font-bold tracking-tight transition-all duration-300 ${
                location.pathname === to ? "gradient-text" : "text-white hover:text-violet-400"
              }`}
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              {label}
            </Link>
          ))}
          <a
            href="mailto:omaralbaz635@gmail.com"
            onClick={() => setMenuOpen(false)}
            className="btn-primary mt-4"
          >
            <span>Hire Me</span>
          </a>
        </div>
      </div>
    </>
  );
}

export default Nav;
