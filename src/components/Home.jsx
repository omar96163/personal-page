import { useEffect, useState } from "react";

/* ── Animated counter ── */
function Counter({ to, suffix = "", duration = 1800 }) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    let start = 0;
    const step = Math.ceil(to / (duration / 16));
    const timer = setInterval(() => {
      start += step;
      if (start >= to) { setCount(to); clearInterval(timer); }
      else setCount(start);
    }, 16);
    return () => clearInterval(timer);
  }, [to, duration]);
  return <>{count}{suffix}</>;
}

/* ── Typewriter ── */
function Typewriter({ words, speed = 100, pause = 2000 }) {
  const [idx, setIdx] = useState(0);
  const [sub, setSub] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[idx];
    if (!deleting && sub === current.length) {
      const t = setTimeout(() => setDeleting(true), pause);
      return () => clearTimeout(t);
    }
    if (deleting && sub === 0) {
      setDeleting(false);
      setIdx((i) => (i + 1) % words.length);
      return;
    }
    const t = setTimeout(
      () => setSub((s) => (deleting ? s - 1 : s + 1)),
      deleting ? speed / 2 : speed
    );
    return () => clearTimeout(t);
  }, [sub, deleting, idx, words, speed, pause]);

  return (
    <span>
      {words[idx].slice(0, sub)}
      <span className="animate-[blink_0.8s_step-end_infinite] text-violet-400">|</span>
    </span>
  );
}

/* ── Floating tech chip ── */
function TechChip({ label, color, style, delay }) {
  return (
    <div
      className="absolute flex items-center gap-1.5 px-3 py-1.5 glass rounded-full text-xs font-semibold shadow-xl"
      style={{
        ...style,
        animation: `floatChip 4s ease-in-out ${delay}s infinite`,
        borderColor: color + "44",
        color,
        zIndex: 10,
      }}
    >
      <span
        className="w-2 h-2 rounded-full flex-shrink-0"
        style={{ background: color, boxShadow: `0 0 6px ${color}` }}
      />
      {label}
    </div>
  );
}

function Home() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  const stats = [
    { value: 2, suffix: "+", label: "Years Experience" },
    { value: 15, suffix: "+", label: "Projects Built" },
    { value: 100, suffix: "%", label: "Passion for Code" },
  ];

  const chips = [
    { label: "React.js",  color: "#61dafb", style: { top: "0%",  left: "40%" },  delay: 0 },
    { label: "Node.js",   color: "#68d391", style: { top: "35%", right: "-4%" }, delay: 0.5 },
    { label: "Next.js",color: "#e2e8f0", style: { top: "35%",  left: "-4%" },  delay: 1 },
    { label: "Express.js",   color: "#e2e8f0", style: { bottom: "10%", right: "4%" }, delay: 1.5 },
    { label: "JavaScript",   color: "#f1e05a", style: { bottom: "10%", left: "4%" },  delay: 2 }, 
  ];

  return (
    <main
      className="mesh-bg min-h-screen flex flex-col"
      style={{ fontFamily: "var(--font-primary)" }}
    >
      {/* ── Hero ── */}
      <section className="relative flex-1 flex items-center min-h-screen overflow-hidden">

        {/* Background decorative blobs */}
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute w-[600px] h-[600px] rounded-full"
            style={{
              top: "-25%", left: "-5%",
              background: "radial-gradient(circle, rgba(124,58,237,0.3) 0%, transparent 60%)",
              animation: "floatOrb 8s ease-in-out infinite",
            }}
          />
          <div
            className="absolute w-[400px] h-[400px] rounded-full"
            style={{
              bottom: "-10%", right: "-10%",
              background: "radial-gradient(circle, rgba(168,85,247,0.09) 0%, transparent 70%)",
              animation: "floatOrb 10s ease-in-out 2s infinite",
            }}
          />
          <div className="absolute inset-0 dot-pattern opacity-40" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 pt-24 pb-16 w-full">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* ── Left: Text ── */}
            <div className={`flex flex-col gap-7 opacity-0-init ${visible ? "animate-slideLeft" : ""}`}>

              {/* Badge */}
              <div className="section-tag w-fit">
                <span className="w-2 h-2 rounded-full bg-violet-400 animate-pulse" />
                Available for work
              </div>

              {/* Headline */}
              <div>
                <p className="text-slate-400 text-lg font-medium mb-2 tracking-wide">
                  Hey there 👋 I&apos;m
                </p>
                <h1
                  className="font-black leading-none mb-3"
                  style={{ fontSize: "clamp(2.8rem, 6vw, 4.5rem)" }}
                >
                  <span className="text-white">Omar</span>{" "}
                  <span className="gradient-text">Al-Baz</span>
                </h1>
                <h2
                  className="text-slate-300 font-semibold"
                  style={{ fontSize: "clamp(1.1rem, 2.5vw, 1.5rem)" }}
                >
                  <Typewriter
                    words={[
                      "Full Stack Developer",
                      "Next.js | React.js Developer",
                      "Node.js Engineer",
                      "Problem Solver",
                    ]}
                    speed={90}
                    pause={2200}
                  />
                </h2>
              </div>

              {/* Description */}
              <p className="text-slate-400 leading-relaxed max-w-lg text-base">
                I craft <span className="text-violet-400 font-medium">modern</span>, responsive web applications
                with a sharp eye for design and a deep focus on{" "}
                <span className="text-violet-400 font-medium">performance</span>.
                From sleek UIs to scalable APIs — I build it all.
              </p>

              {/* CTA buttons */}
              <div
                className={`flex flex-wrap gap-4 opacity-0-init ${visible ? "animate-fadeUp delay-400" : ""}`}
              >
                <a href="/About" className="btn-primary">
                  <span>View My Work</span>
                  <svg className="w-4 h-4 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
                <a href="mailto:omaralbaz635@gmail.com" className="btn-outline">
                  <span>Get In Touch</span>
                </a>
              </div>

              {/* Social links */}
              <div
                className={`flex items-center gap-4 opacity-0-init ${visible ? "animate-fadeUp delay-600" : ""}`}
              >
                {[
                  {
                    href: "https://github.com/omar96163",
                    color: "hover:text-white",
                    label: "GitHub",
                    icon: (
                      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                        <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                      </svg>
                    ),
                  },
                  {
                    href: "https://www.linkedin.com/in/omar-albaz-29b72b272",
                    color: "hover:text-blue-400",
                    label: "LinkedIn",
                    icon: (
                      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782-3.433H2.555V9h4.564zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                    ),
                  },
                  {
                    href: "mailto:omaralbaz635@gmail.com",
                    color: "hover:text-rose-400",
                    label: "Email",
                    icon: (
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 7.89a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    ),
                  },
                ].map(({ href, color, label, icon }) => (
                  <a
                    key={label}
                    href={href}
                    target={href.startsWith("mailto") ? undefined : "_blank"}
                    rel="noopener noreferrer"
                    aria-label={label}
                    className={`w-10 h-10 glass rounded-xl flex items-center justify-center text-slate-400 ${color} transition-all duration-300 hover:-translate-y-1 hover:shadow-lg`}
                  >
                    {icon}
                  </a>
                ))}
              </div>
            </div>

            {/* ── Right: Avatar + orbit ── */}
            <div className={`relative flex items-center justify-center opacity-0-init ${visible ? "animate-slideRight delay-200" : ""}`}>
              <div className="relative w-80 h-80 md:w-[460px] md:h-[460px] flex items-center justify-center">

                {/* ── Background Animations (Z-0) ── */}
                <div className="absolute inset-0 pointer-events-none z-0 flex items-center justify-center">
                  {/* Outer ambient glow */}
                  <div
                    className="absolute w-[120%] h-[120%] rounded-full"
                    style={{
                      background: "radial-gradient(circle, rgba(124,58,237,0.12) 0%, rgba(168,85,247,0.05) 40%, transparent 70%)",
                      animation: "floatOrb 8s ease-in-out infinite",
                    }}
                  />

                  {/* Rotating gradient ring (outer) */}
                  <div
                    className="absolute rounded-full"
                    style={{
                      width: "85%", height: "85%",
                      background: "conic-gradient(from 0deg, rgba(124,58,237,0.3), rgba(168,85,247,0.3), rgba(236,72,153,0.3), rgba(245,158,11,0.3), rgba(124,58,237,0.3))",
                      animation: "spinSlow 10s linear infinite",
                      filter: "blur(4px)",
                    }}
                  />
                  {/* Mask for gradient ring */}
                  <div
                    className="absolute rounded-full"
                    style={{
                      width: "82%", height: "82%",
                      background: "var(--clr-bg)",
                    }}
                  />

                  {/* Orbit ring 1 — dashed */}
                  <div className="orbit-ring" style={{ width: "95%", height: "95%", animationDuration: "25s", opacity: 0.6 }} />

                  {/* Orbit ring 2 — dashed reverse */}
                  <div className="orbit-ring-reverse" style={{ width: "75%", height: "75%", animationDuration: "18s", opacity: 0.5 }} />

                  {/* Orbit particles */}
                  {[
                    { size: "95%", dur: "25s", color: "#a855f7", dotSize: 6 },
                    { size: "95%", dur: "25s", color: "#ec4899", dotSize: 4, delay: "-9s" },
                    { size: "75%", dur: "18s", color: "#f59e0b", dotSize: 5, reverse: true },
                    { size: "75%", dur: "18s", color: "#7c3aed", dotSize: 4, reverse: true, delay: "-6s" },
                  ].map(({ size, dur, color, dotSize, reverse, delay }, i) => (
                    <div
                      key={i}
                      className="absolute"
                      style={{ width: size, height: size }}
                    >
                      <div
                        className="w-full h-full"
                        style={{
                          animation: `${reverse ? "spinSlowReverse" : "spinSlow"} ${dur} linear infinite`,
                          animationDelay: delay || "0s",
                        }}
                      >
                        <div
                          className="absolute rounded-full"
                          style={{
                            width: dotSize, height: dotSize,
                            background: color,
                            boxShadow: `0 0 ${dotSize * 3}px ${color}, 0 0 ${dotSize * 6}px ${color}55`,
                            top: 0, left: "50%",
                            transform: "translateX(-50%)",
                          }}
                        />
                      </div>
                    </div>
                  ))}

                  {/* Inner glow layer under avatar */}
                  <div
                    className="absolute rounded-full"
                    style={{
                      width: "60%", height: "60%",
                      background: "radial-gradient(circle, rgba(124,58,237,0.3) 0%, transparent 70%)",
                      animation: "pulseGlow 5s ease-in-out infinite",
                    }}
                  />
                </div>

                {/* ── Foreground: Avatar (Z-10) ── */}
                <div
                  className="relative z-10 w-64 h-64 md:w-[320px] md:h-[320px] rounded-full overflow-hidden"
                  style={{
                    border: "4px solid rgba(255,255,255,0.05)",
                    boxShadow: "0 0 40px rgba(124,58,237,0.3), inset 0 0 20px rgba(255,255,255,0.05)",
                    background: "var(--clr-bg2)",
                  }}
                >
                  <img
                    src="images/omar.png"
                    alt="Omar Al-Baz"
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>

                {/* Tech chips floating around (Z-20) */}
                <div className="absolute inset-0 z-20 pointer-events-none">
                  {chips.map((c) => (
                    <TechChip key={c.label} {...c} />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* ── Stats row ── */}
          <div
            className={`mt-20 grid grid-cols-3 gap-4 max-w-lg opacity-0-init ${
              visible ? "animate-fadeUp delay-700" : ""
            }`}
          >
            {stats.map(({ value, suffix, label }) => (
              <div key={label} className="text-center">
                <div
                  className="font-black text-3xl md:text-4xl gradient-text"
                  style={{ fontFamily: "var(--font-primary)" }}
                >
                  {visible && <Counter to={value} suffix={suffix} />}
                </div>
                <p className="text-slate-500 text-sm mt-1">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;
