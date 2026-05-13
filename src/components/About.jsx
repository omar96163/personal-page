import ContactForm from "./ContactForm";
import { useInView } from "react-intersection-observer";

/* ── Section wrapper with fade-in ── */
function Section({ children, className = "" }) {
  const { ref, inView } = useInView({ threshold: 0.05, triggerOnce: true });
  return (
    <section
      ref={ref}
      className={`transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"} ${className}`}
    >
      {children}
    </section>
  );
}

/* ── Skill card ── */
function SkillCard({ icon, title, skills, delay, inView }) {
  return (
    <div
      className={`glass glass-hover rounded-2xl p-6 flex flex-col gap-5 opacity-0-init ${inView ? "animate-fadeUp" : ""}`}
      style={{ animationDelay: `${delay}s` }}
    >
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-violet-600 to-purple-400 flex items-center justify-center shadow-lg shadow-violet-700/30 flex-shrink-0">
          {icon}
        </div>
        <h3 className="font-bold text-white" style={{ fontFamily: "var(--font-primary)" }}>{title}</h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {skills.map((s) => (
          <span key={s} className="skill-chip">{s}</span>
        ))}
      </div>
    </div>
  );
}

/* ── Project card ── */
function ProjectCard({ img, title, href, ghref, desc, tags, delay, inView }) {
  return (
    <article
      className={`project-card opacity-0-init ${inView ? "animate-fadeUp" : ""}`}
      style={{ animationDelay: `${delay}s` }}
    >
      <div className="overflow-hidden h-48">
        <img src={img} alt={`${title} screenshot`} className="w-full h-full object-cover" />
      </div>
      <div className="p-6 flex flex-col gap-4">
        <div className="flex items-start justify-between gap-2">
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg font-bold text-white hover:text-violet-400 transition-colors duration-200 group flex items-center gap-2"
            style={{ fontFamily: "var(--font-primary)" }}
          >
            {title}
            <svg className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
          <a
            href={ghref}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 w-8 h-8 glass rounded-lg flex items-center justify-center text-slate-400 hover:text-white transition-colors duration-200"
            aria-label="Source code"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
              <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
            </svg>
          </a>
        </div>
        <p className="text-slate-400 text-sm leading-relaxed">{desc}</p>
        <div className="flex flex-wrap gap-2 mt-auto pt-2">
          {tags.map((t) => (
            <span key={t} className="skill-chip text-xs">{t}</span>
          ))}
        </div>
      </div>
    </article>
  );
}

/* ════════════════════════════════════════
   ABOUT PAGE
════════════════════════════════════════ */
function About() {
  const { ref: projRef, inView: projInView } = useInView({ threshold: 0.05, triggerOnce: true });
  const { ref: skillRef, inView: skillInView } = useInView({ threshold: 0.05, triggerOnce: true });
  const { ref: contactRef, inView: contactInView } = useInView({ threshold: 0.05, triggerOnce: true });

  /* ── Data ── */
  const projects = [
    {
      img: "images/RecipeFinder.png",
      title: "Recipe Finder",
      href: "https://recipe-finder-nine-inky.vercel.app/",
      ghref: "https://github.com/omar96163/Recipe-Finder",
      desc: "An interactive app to search recipes by dish name with detailed ingredients, steps, and tutorial videos. Fully responsive.",
      tags: ["React", "Tailwind CSS", "REST API"],
    },
    {
      img: "images/FilmGalaxy.png",
      title: "Film Galaxy",
      href: "https://film-galaxy.vercel.app/",
      ghref: "https://github.com/omar96163/FilmGalaxy",
      desc: "Discover, search and explore films — from blockbusters to hidden gems — with rich detail pages and a sleek UI.",
      tags: ["React", "Tailwind CSS", "TMDb API"],
    },
    {
      img: "images/CoursesWebsite.png",
      title: "Courses Platform",
      href: "https://courses-website-seven.vercel.app/",
      ghref: "https://github.com/omar96163/Courses_website",
      desc: "A full-featured courses platform with login system, role-based access (admin, manager, student), and CRUD operations.",
      tags: ["Next.js", "Tailwind CSS", "Custom API"],
    },
    {
      img: "images/BackendProject.png",
      title: "Backend API",
      href: "https://web.postman.co/workspace/bbc22dbf-66c2-44af-81c8-19f48b9ea28d/collection/40416893-005c78cd-64bc-455e-a674-2507b1e3d026",
      ghref: "https://github.com/omar96163/express-courses-app",
      desc: "A RESTful API with JWT auth, role-based access, CRUD for courses & users, and clean scalable architecture.",
      tags: ["Node.js", "Express", "MongoDB", "JWT"],
    },
  ];

  const skillGroups = [
    {
      icon: <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>,
      title: "Frontend",
      skills: ["React.js", "Next.js", "JavaScript", "Tailwind CSS", "HTML5", "CSS3", "Bootstrap", "Styled Components"],
    },
    {
      icon: <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2" /></svg>,
      title: "Backend",
      skills: ["Node.js", "Express.js", "RESTful APIs", "JWT Auth", "WebSockets", "Microservices"],
    },
    {
      icon: <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" /></svg>,
      title: "Database & Cloud",
      skills: ["MongoDB", "MongoDB Atlas", "Mongoose", "Vercel", "Netlify", "Railway", "Render"],
    },
    {
      icon: <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>,
      title: "Tools",
      skills: ["Git & GitHub", "VS Code", "Postman", "Figma", "Vite", "ESLint", "npm/yarn"],
    },
  ];

  const socialLinks = [
    { label: "Email", href: "mailto:omaralbaz635@gmail.com", color: "from-rose-500 to-pink-600", icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 7.89a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg> },
    { label: "GitHub", href: "https://github.com/omar96163", color: "from-slate-600 to-slate-800", icon: <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" /></svg> },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/omar-albaz-29b72b272", color: "from-blue-600 to-blue-700", icon: <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782-3.433H2.555V9h4.564zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg> },
  ];

  return (
    <main className="mesh-bg min-h-screen" style={{ fontFamily: "var(--font-secondary)" }}>
      <div className="max-w-6xl mx-auto px-6 pt-28 pb-20 flex flex-col gap-32">

        {/* ══════════ HERO BIO ══════════ */}
        <Section className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <div className="flex flex-col gap-6">
            <div className="section-tag w-fit">About Me</div>
            <h1 className="font-black text-white leading-tight" style={{ fontSize: "clamp(2rem,5vw,3.2rem)", fontFamily: "var(--font-primary)" }}>
              I build things for the <span className="gradient-text">web</span>
            </h1>
            <p className="text-slate-400 leading-relaxed">
              I&apos;m <span className="text-white font-semibold">Omar Al-Baz</span>, a passionate Full-Stack Developer
              from <span className="text-white font-semibold">Egypt 🇪🇬</span>. <br></br> I started my journey through
              self-learning and intensive training at <span className="text-violet-400 font-medium">ALX Africa</span>.
            </p>
            <p className="text-slate-400 leading-relaxed">
              I love turning ideas into polished, performant applications. <br></br> Whether it&apos;s a pixel-perfect UI
              or a scalable backend API — I care deeply about <span className="text-white font-medium">craft and quality</span>.
            </p>

            {/* Quick facts */}
            <div className="grid grid-cols-2 gap-3 mt-2">
              {[
                { label: "Age", value: "27" },
                { label: "Location", value: "Egypt" },
                { label: "Education", value: "ALX Graduate" },
                { label: "Focus", value: "Full-Stack" },
              ].map(({ label, value }) => (
                <div key={label} className="glass rounded-xl p-4 flex flex-col gap-1">
                  <span className="text-slate-500 text-xs uppercase tracking-wider">{label}</span>
                  <span className="text-white font-semibold text-sm">{value}</span>
                </div>
              ))}
            </div>

            <div className="flex gap-3 mt-2">
              <a href="https://mostaql.com/u/omar_youns" className="btn-primary text-sm py-2.5 px-6">
                <span>Hire Me</span>
              </a>
              <a target="_blank" rel="noopener noreferrer" href="https://drive.google.com/file/d/1JZfRd8j84hT0Hu2ypQ2QXYXAI5THL-G8/view?usp=sharing" className="btn-outline text-sm py-2.5 px-6">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3M3 17V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
                </svg>
                <span>Resume</span>
              </a>
            </div>
          </div>

          {/* Avatar */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-80 h-96">
              <div
                className="absolute inset-0 rounded-3xl"
                style={{ background: "linear-gradient(135deg, rgba(124,58,237,0.3), rgba(168,85,247,0.1))", animation: "pulseGlow 4s ease-in-out infinite" }}
              />
              <div className="absolute inset-2 rounded-3xl overflow-hidden border border-violet-500/20">
                <img src="images/omar.png" alt="Omar Al-Baz" className="w-full h-full object-cover" />
              </div>
              {/* Badge */}
              <div className="absolute -bottom-4 -right-4 glass rounded-2xl p-3 flex items-center gap-2 border border-violet-500/20">
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-xs font-semibold text-white">Open to work</span>
              </div>
            </div>
          </div>
        </Section>

        {/* ══════════ PROJECTS ══════════ */}
        <section ref={projRef}>
          <div className={`mb-12 opacity-0-init ${projInView ? "animate-fadeUp" : ""}`}>
            <div className="section-tag w-fit">Portfolio</div>
            <h2 className="text-3xl md:text-4xl font-black text-white mt-2" style={{ fontFamily: "var(--font-primary)" }}>
              My <span className="gradient-text">Projects</span>
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            {projects.map((p, i) => (
              <ProjectCard key={p.title} {...p} delay={i * 0.12} inView={projInView} />
            ))}
          </div>
        </section>

        {/* ══════════ SKILLS ══════════ */}
        <section ref={skillRef}>
          <div className={`mb-12 opacity-0-init ${skillInView ? "animate-fadeUp" : ""}`}>
            <div className="section-tag w-fit">Expertise</div>
            <h2 className="text-3xl md:text-4xl font-black text-white mt-2" style={{ fontFamily: "var(--font-primary)" }}>
              Technical <span className="gradient-text">Skills</span>
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-5">
            {skillGroups.map((g, i) => (
              <SkillCard key={g.title} {...g} delay={i * 0.1} inView={skillInView} />
            ))}
          </div>
          {/* Banner */}
          <div className={`mt-8 glass rounded-2xl p-5 flex items-center gap-4 opacity-0-init ${skillInView ? "animate-fadeUp delay-500" : ""}`}>
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center flex-shrink-0">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <p className="text-slate-300 text-sm">
              Always learning — currently exploring <span className="text-violet-400 font-medium">TypeScript, Prisma & Docker</span>
            </p>
          </div>
        </section>

        {/* ══════════ CONTACT ══════════ */}
        <section id="contact-section" ref={contactRef}>
          <div className={`mb-12 opacity-0-init ${contactInView ? "animate-fadeUp" : ""}`}>
            <div className="section-tag w-fit">Get in touch</div>
            <h2 className="text-3xl md:text-4xl font-black text-white mt-2" style={{ fontFamily: "var(--font-primary)" }}>
              Let&apos;s <span className="gradient-text">Connect</span>
            </h2>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left: Social links */}
            <div className={`flex flex-col gap-6 opacity-0-init ${contactInView ? "animate-slideLeft delay-200" : ""}`}>
              <p className="text-slate-400 leading-relaxed">
                Have a project in mind? Want to collaborate? Or just want to say hi? Feel free to reach out — I&apos;d love to hear from you!
              </p>
              <div className="flex flex-col gap-3">
                {socialLinks.map(({ label, href, color, icon }) => (
                  <a
                    key={label}
                    href={href}
                    target={href.startsWith("mailto") ? undefined : "_blank"}
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 glass rounded-2xl p-4 border border-white/5 hover:border-violet-500/30 transition-all duration-300 hover:-translate-x-2 group"
                  >
                    <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <span className="text-white">{icon}</span>
                    </div>
                    <span className="font-semibold text-white">{label}</span>
                    <svg className="w-4 h-4 text-slate-600 ml-auto group-hover:text-violet-400 group-hover:translate-x-1 transition-all duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                ))}
              </div>

              {/* Signature */}
              <div className={`mt-6 pt-4 opacity-0-init ${contactInView ? "animate-fadeUp delay-700" : ""}`}>
                <div
                  className="text-4xl text-white/80 select-none hover:text-violet-400 transition-colors duration-500 cursor-default" 
                  style={{ fontFamily: "var(--font-signature)", transform: "rotate(-2deg)" }}
                >
                  OMAR AL-BAZ <span className="text-slate-500 text-xs uppercase tracking-[0.2em]">full-stack</span>
                </div>
              </div>
            </div>
            {/* Right: Form */}
            <div className={`glass rounded-2xl p-8 opacity-0-init ${contactInView ? "animate-slideRight delay-300" : ""}`}>
              <ContactForm />
            </div>
          </div>
        </section>

        {/* ══════════ FOOTER ══════════ */}
        <footer className="border-t border-white/5 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-600 text-sm">
          <span>© {new Date().getFullYear()} Omar Al-Baz. All rights reserved.</span>
          <span className="flex items-center gap-1">
            Built with <span className="text-rose-500 mx-1">♥</span> using React & Tailwind
          </span>
        </footer>
      </div>
    </main>
  );
}

export default About;
