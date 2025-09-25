import { useState } from "react";
import ContactForm from "./ContactForm";

function About() {
  const [me, setme] = useState(true);

  return (
    <main>
      <section className="flex flex-col-reverse lg:flex-row lg:justify-around items-center min-h-screen">
        <div className="opacity-0 animate-[goRight_1s_ease_forwards_.5s] max-w-[500px]">
          <h1 className="text-3xl font-bold mb-4">
            Hi, I am{" "}
            <strong className="text-yellow-500 px-2 rounded-2xl border-2 border-dashed border-yellow-500">
              OMAR
            </strong>
          </h1>
          <p className="text-base mb-8">
            💻 A Talented & Passionate Full-Stack Developer |
            <p>🎓 ALX Graduate |</p>
            Focused on building modern, user-friendly, high-performance web
            applications 🚀
          </p>
          <article className="mb-8">
            <h2 className="text-3xl font-semibold mb-2">Who Am I ?</h2>
            <p className="text-base leading-relaxed">
              I started my web development journey through self-learning and
              intensive training at ALX. I’m passionate about building
              responsive, accessible, and high-quality web applications that
              provide an outstanding user experience.
            </p>
          </article>
        </div>
        <div className="flex flex-col items-center my-20 lg:my-0 opacity-0 animate-[goLeft_1s_ease_forwards_.5s]">
          <div className="relative w-72 h-72 md:w-96 md:h-96">
            <p
              className="absolute top-4 left-2 rounded-full text-black bg-white h-10 w-10 flex items-center justify-center text-[12px] z-50
          shadow-md shadow-gray-300 outline-none animate-[translate_3s_ease-in-out_infinite_1.2s_alternate] hover:rotate-[360deg] transition duration-500"
            >
              Next
            </p>
            <p
              className="absolute bottom-2 left-2 rounded-full bg-green-600 h-10 w-10 flex items-center justify-center text-[12px] z-50
          shadow-md shadow-green-700 outline-none animate-[translate_3s_ease-in-out_infinite_1.7s_alternate] hover:rotate-[360deg] transition duration-500"
            >
              Node
            </p>
            <p
              className="absolute right-2 top-4 rounded-full text-black bg-yellow-300 h-10 w-10 flex items-center justify-center text-[12px] z-50
          shadow-md shadow-yellow-500 outline-none animate-[translate_3s_ease-in-out_infinite_2.2s_alternate] hover:rotate-[360deg] transition duration-500"
            >
              JSC
            </p>
            <p
              className="absolute right-2 bottom-4 rounded-full bg-gray-600 h-10 w-10 flex items-center justify-center text-[12px] z-50
          shadow-md shadow-gray-700 outline-none animate-[translate_3s_ease-in-out_infinite_2.7s_alternate] hover:rotate-[360deg] transition duration-500"
            >
              EXP
            </p>
            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-56 h-56 md:w-80 md:h-80 rounded-full border-8 border-yellow-500 
              shadow-[0_0_25px_3px_rgba(234,179,8,0.8),inset_0_0_20px_2px_rgba(234,179,8,0.6)] animate-[pulseShadow_3s_ease-in-out_infinite]"
            ></div>
            <img
              className="transition-all duration-500 hover:scale-95 scale-90 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
              src="images/omar.png"
              alt="OMAR ALBAZ's photo"
              title="OMAR ALBAZ"
            />
          </div>
          <p
            alt="Toggle details"
            onClick={() => (me ? setme(false) : setme(true))}
            className={`text-yellow-500 text-3xl md:text-4xl my-3 transition-all duration-500 
            cursor-pointer ${me ? "rotate-180" : ""} animate-pulse`}
          >
            ↯
          </p>
          <div
            className={`text-center transition-all duration-500 ${
              me ? "translate-y-0" : "-translate-y-60 scale-0 -z-50"
            } `}
          >
            <p>
              I am Omar El-Baz
              <br /> 26 years old <br />
              From Egypt <br />
              <a className="text-blue-500 hover:underline" href="/">
                My Resume
              </a>
            </p>
          </div>
        </div>
      </section>
      <section className="mt-40">
        <h2 className="text-2xl md:text-5xl font-bold mb-20 animate-[jello-vertical_1s_ease_forwards_2] text-center">
          My <span className="text-yellow-500">Projects</span>
        </h2>
        <section className="flex flex-wrap items-center justify-center gap-10">
          <article
            className="max-w-[600px] md:min-h-[600px] rounded-2xl p-4 group border-2 hover:-translate-y-2 transition duration-300 hover:border-yellow-500 
            shadow-md hover:shadow-yellow-300 bg-gradient-to-tr from-black via-yellow-950 to-black flex flex-col md:justify-around items-start gap-5 md:gap-0"
          >
            <img
              src="images/RecipeFinder.png"
              alt="Recipe Finder App screenshot"
              className="object-cover rounded-md opacity-70 group-hover:opacity-100 group-hover:scale-[1.02] transition duration-300"
            />
            <a
              className="font-medium text-yellow-500 hover:underline text-xl"
              href="https://recipe-finder-nine-inky.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Recipe Finder
              <span className="ml-4 text-[30px] group-hover:translate-x-3 group-hover:animate-pulse transition-all duration-300 inline-block">
                ›
              </span>
            </a>
            <p className="leading-relaxed">
              <strong>Recipe Finder</strong> is an interactive web application
              built with
              <span className="text-yellow-500 font-medium"> React </span>,
              <span className="text-yellow-400 font-medium">
                {" "}
                Tailwind CSS{" "}
              </span>
              , and
              <span className="text-yellow-500 font-medium">
                {" "}
                TheMealDB API
              </span>
              . <br></br> It allows users to instantly search for recipes by
              dish name and explore detailed information, including ingredients,
              preparation steps, and tutorial videos.<br></br> The app is{" "}
              <strong>fully responsive</strong> and offers a smooth, engaging
              user experience.
            </p>
            <ul className="flex flex-wrap gap-3 text-sm">
              <li className="px-2 py-1 bg-[#2d2d32] rounded-md">React</li>
              <li className="px-2 py-1 bg-[#2d2d32] rounded-md">
                Tailwind CSS
              </li>
              <li className="px-2 py-1 bg-[#2d2d32] rounded-md">REST API</li>
              <li className="px-2 py-1 bg-[#2d2d32] rounded-md">
                Responsive Design
              </li>
            </ul>
            <a
              href="https://github.com/omar96163/Recipe-Finder"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg p-2 border-2 border-yellow-500 text-yellow-500 transition duration-300
              hover:bg-yellow-500 hover:text-black font-semibold"
            >
              Source Code
            </a>
          </article>
          <article
            className="max-w-[600px] md:min-h-[600px] rounded-2xl p-4 border-2 group hover:-translate-y-2 transition duration-300 hover:border-yellow-500 
            shadow-md hover:shadow-yellow-300 bg-gradient-to-tr from-black via-yellow-950 to-black flex flex-col md:justify-around items-start gap-5 md:gap-0"
          >
            <img
              src="images/FilmGalaxy.png"
              alt="Film Galaxy App screenshot"
              className="object-cover rounded-md opacity-70 group-hover:opacity-100 group-hover:scale-[1.02] transition duration-300"
            />
            <a
              className="font-medium text-yellow-500 hover:underline text-xl"
              href="https://film-galaxy.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Film Galaxy
              <span className="ml-4 text-[30px] group-hover:translate-x-3 group-hover:animate-pulse transition-all duration-300 inline-block">
                ›
              </span>
            </a>
            <p className="leading-relaxed">
              <strong>Film Galaxy</strong> is a dynamic web application built
              with
              <span className="text-yellow-400 font-medium"> React </span>,
              <span className="text-yellow-400 font-medium">
                {" "}
                Tailwind CSS{" "}
              </span>
              , and
              <span className="text-yellow-400 font-medium">
                {" "}
                The Movie Database (TMDb) API
              </span>
              . <br></br>It allows movie enthusiasts to effortlessly discover,
              search, and explore films — from the latest blockbusters and
              timeless classics to hidden gems — providing detailed information
              in an intuitive <br></br> and user-friendly way.
            </p>
            <ul className="flex flex-wrap gap-3 text-sm">
              <li className="px-2 py-1 bg-[#2d2d32] rounded-md">React</li>
              <li className="px-2 py-1 bg-[#2d2d32] rounded-md">
                Tailwind CSS
              </li>
              <li className="px-2 py-1 bg-[#2d2d32] rounded-md">TMDb API</li>
              <li className="px-2 py-1 bg-[#2d2d32] rounded-md">
                Responsive Design
              </li>
            </ul>
            <a
              href="https://github.com/omar96163/FilmGalaxy"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg p-2 border-2 border-yellow-500 text-yellow-500 transition duration-300
              hover:bg-yellow-500 hover:text-black font-semibold"
            >
              Source Code
            </a>
          </article>
          <article
            className="max-w-[600px] md:min-h-[600px] rounded-2xl p-4 border-2 group hover:-translate-y-2 transition duration-300 hover:border-yellow-500 
            shadow-md hover:shadow-yellow-300 bg-gradient-to-tr from-black via-yellow-950 to-black flex flex-col md:justify-around items-start gap-5 md:gap-0"
          >
            <img
              src="images/CoursesWebsite.png"
              alt="Courses Website App screenshot"
              className="object-cover rounded-md opacity-70 group-hover:opacity-100 group-hover:scale-[1.02] transition duration-300"
            />
            <a
              className="font-medium text-yellow-500 hover:underline text-xl"
              href="https://courses-website-seven.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Courses Website
              <span className="ml-4 text-[30px] group-hover:translate-x-3 group-hover:animate-pulse transition-all duration-300 inline-block">
                ›
              </span>
            </a>
            <p className="leading-relaxed">
              <strong>Courses Website</strong> is a dynamic web platform built
              with
              <span className="text-yellow-500 font-medium"> Next </span>,
              <span className="text-yellow-400 font-medium">
                {" "}
                Tailwind CSS{" "}
              </span>
              , and{" "}
              <span className="text-yellow-500 font-medium">
                {" "}
                My custom backend API
              </span>
              .<br></br> It allows users to easily browse and enroll in courses,
              while providing an intuitive <strong>login system</strong>.
              <br></br>
              Administrators can add, edit, and delete courses, while managers
              can view and remove users as needed.
            </p>
            <ul className="flex flex-wrap gap-3 text-sm">
              <li className="px-2 py-1 bg-[#2d2d32] rounded-md">Next</li>
              <li className="px-2 py-1 bg-[#2d2d32] rounded-md">
                Tailwind CSS
              </li>
              <li className="px-2 py-1 bg-[#2d2d32] rounded-md">
                Custom Backend API
              </li>
              <li className="px-2 py-1 bg-[#2d2d32] rounded-md">
                Responsive Design
              </li>
            </ul>
            <a
              href="https://github.com/omar96163/Courses_website"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg p-2 border-2 border-yellow-500 text-yellow-500 transition duration-300
            hover:bg-yellow-500 hover:text-black font-semibold"
            >
              Source Code
            </a>
          </article>
          <article
            className="max-w-[600px] md:min-h-[600px] rounded-2xl p-4 border-2 group hover:-translate-y-2 transition duration-300 hover:border-yellow-500 
            shadow-md hover:shadow-yellow-300 bg-gradient-to-tr from-black via-yellow-950 to-black flex flex-col md:justify-around items-start gap-5 md:gap-0"
          >
            <img
              src="images/BackendProject.png"
              alt="Backend API project screenshot"
              className="object-cover rounded-md opacity-70 group-hover:opacity-100 group-hover:scale-[1.02] transition duration-300"
            />
            <a
              className="font-medium text-yellow-500 hover:underline text-xl"
              href="https://web.postman.co/workspace/bbc22dbf-66c2-44af-81c8-19f48b9ea28d/collection/40416893-005c78cd-64bc-455e-a674-2507b1e3d026?action=share&source=copy-link&creator=40416893"
              target="_blank"
              rel="noopener noreferrer"
            >
              Backend API collection
              <span className="ml-4 text-[30px] group-hover:translate-x-3 group-hover:animate-pulse transition-all duration-300 inline-block">
                ›
              </span>
            </a>
            <p className="leading-relaxed">
              <strong className="text-yellow-500">
                Node.js &amp; Express Backend
              </strong>{" "}
              is a RESTful API that I built to demonstrate my skills in creating
              robust and scalable server-side applications.<br></br> It features
              a clean architecture, JWT authentication, role-based access, and
              CRUD operations for courses and users.<br></br> This backend
              powers my demo projects and showcases how to structure and secure
              an API for production environments.
            </p>
            <ul className="flex flex-wrap gap-3 text-sm">
              <li className="px-2 py-1 bg-[#2d2d32] rounded-md">Node.js</li>
              <li className="px-2 py-1 bg-[#2d2d32] rounded-md">Express.js</li>
              <li className="px-2 py-1 bg-[#2d2d32] rounded-md">JWT Auth</li>
              <li className="px-2 py-1 bg-[#2d2d32] rounded-md">MongoDB</li>
              <li className="px-2 py-1 bg-[#2d2d32] rounded-md">Mongoose</li>
              <li className="px-2 py-1 bg-[#2d2d32] rounded-md">Multer</li>
              <li className="px-2 py-1 bg-[#2d2d32] rounded-md">CORS</li>
            </ul>
            <a
              href="https://github.com/omar96163/express-courses-app"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg p-2 border-2 border-yellow-500 text-yellow-500 transition duration-300
            hover:bg-yellow-500 hover:text-black font-semibold"
            >
              Source Code
            </a>
          </article>
        </section>
      </section>
      <section className="mt-40">
        <h2 className="text-2xl md:text-5xl font-bold mb-20 animate-[jello-vertical_1s_ease_forwards_2] text-center">
          Technical <span className="text-yellow-500">Skills</span>
        </h2>
        <div className="flex flex-wrap items-center justify-center gap-16">
          <div
            className="p-4 bg-gradient-to-tr from-black via-yellow-950 to-black rounded-xl shadow-lg hover:shadow-yellow-300 border-2 
            hover:-translate-y-2 transition duration-300 hover:border-yellow-500 w-[350px] md:min-h-[350px] 
            flex flex-col md:justify-around items-center gap-5 md:gap-0 group"
          >
            <div className="flex items-center justify-center">
              <div className="w-12 h-12 bg-yellow-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition duration-300">
                <svg
                  className="w-6 h-6 text-black"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                  />
                </svg>
              </div>
              <h3 className="md:text-xl font-bold ml-4">
                Frontend Development
              </h3>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-3">
              {[
                "CSS3",
                "HTML5",
                "Next.js",
                "React.js",
                "Responsive Design",
                "TailwindCSS",
                "Bootstrap",
                "JavaScript (ES6+)",
                "Styled Components",
              ].map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 bg-[#2d2d32] rounded-md text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
          <div
            className="p-4 bg-gradient-to-tr from-black via-yellow-950 to-black rounded-xl shadow-lg hover:shadow-yellow-300 border-2 
            hover:-translate-y-2 transition duration-300 hover:border-yellow-500 w-[350px] md:min-h-[350px] 
            flex flex-col md:justify-around items-center gap-5 md:gap-0 group"
          >
            <div className="flex items-center justify-center">
              <div className="w-12 h-12 bg-yellow-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition duration-300">
                <svg
                  className="w-6 h-6 text-black"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2"
                  />
                </svg>
              </div>
              <h3 className="md:text-xl font-bold ml-4">Backend Development</h3>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-3">
              {[
                "Node.js",
                "Express.js",
                "WebSockets",
                "JWT Authentication",
                "RESTful APIs",
                "Microservices",
                "API Integration",
              ].map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 bg-[#2d2d32] rounded-md text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
          <div
            className="p-4 bg-gradient-to-tr from-black via-yellow-950 to-black rounded-xl shadow-lg hover:shadow-yellow-300 border-2 
            hover:-translate-y-2 transition duration-300 hover:border-yellow-500 w-[350px] md:min-h-[350px] 
            flex flex-col md:justify-around items-center gap-5 md:gap-0 group"
          >
            <div className="flex items-center justify-center">
              <div className="w-12 h-12 bg-yellow-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition duration-300">
                <svg
                  className="w-6 h-6 text-black"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4"
                  />
                </svg>
              </div>
              <h3 className="md:text-xl font-bold ml-4">Database & Cloud</h3>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-3">
              {[
                "MongoDB",
                "MongoDB Atlas",
                "RailWay",
                "Netlify",
                "mongoose",
                "NoSQL",
                "Vercel",
                "Render",
              ].map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 bg-[#2d2d32] rounded-md text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
          <div
            className="p-4 bg-gradient-to-tr from-black via-yellow-950 to-black rounded-xl shadow-lg hover:shadow-yellow-300 border-2 
            hover:-translate-y-2 transition duration-300 hover:border-yellow-500 w-[350px] md:min-h-[350px] 
            flex flex-col md:justify-around items-center gap-5 md:gap-0 group"
          >
            <div className="flex items-center justify-center">
              <div className="w-12 h-12 bg-yellow-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition duration-300">
                <svg
                  className="w-6 h-6 text-black"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                  />
                </svg>
              </div>
              <h3 className="md:text-xl font-bold ml-4">Libraries & State</h3>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-3">
              {[
                "express-0validator",
                "React Query (TanStack)",
                "dotenv",
                "React Router",
                "cors",
                "Axios",
                "react intersection observer",
                "Context API",
                "Multer",
                "Zustand",
                "React Hook Form",
                "jsonwebtoken",
                "bcryptjs",
                "express",
              ].map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 bg-[#2d2d32] rounded-md text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
          <div
            className="p-4 bg-gradient-to-tr from-black via-yellow-950 to-black rounded-xl shadow-lg hover:shadow-yellow-300 border-2 
            hover:-translate-y-2 transition duration-300 hover:border-yellow-500 w-[350px] md:min-h-[350px] 
            flex flex-col md:justify-around items-center gap-5 md:gap-0 group"
          >
            <div className="flex items-center justify-center">
              <div className="w-12 h-12 bg-yellow-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition duration-300">
                <svg
                  className="w-6 h-6 text-black"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <h3 className="md:text-xl font-bold ml-4">Development Tools</h3>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-3">
              {[
                "Vite",
                "Figma",
                "Cursor",
                "ESLint",
                "VS Code",
                "Postman",
                "npm/yarn",
                "Prettier",
                "Git & GitHub",
              ].map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 bg-[#2d2d32] rounded-md text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
          <div
            className="p-4 bg-gradient-to-tr from-black via-yellow-950 to-black rounded-xl shadow-lg hover:shadow-yellow-300 border-2 
            hover:-translate-y-2 transition duration-300 hover:border-yellow-500 w-[350px] md:min-h-[350px] 
            flex flex-col md:justify-around items-center gap-5 md:gap-0 group"
          >
            <div className="flex items-center justify-center">
              <div className="w-12 h-12 bg-yellow-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition duration-300">
                <svg
                  className="w-6 h-6 text-black"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <h3 className="md:text-xl font-bold ml-4">Soft Skills</h3>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-3">
              {[
                "Team Collaboration",
                "Attention to Detail",
                "Time Management",
                "Problem Solving",
                "Agile / Scrum",
                "Communication",
                "Code Reviews",
                "UI/UX Design",
                "Continuous Learning",
              ].map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 bg-[#2d2d32] rounded-md text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-yellow-200 to-yellow-300 inline-flex items-center px-8 py-4 rounded-2xl shadow-lg">
            <svg
              className="w-5 h-5 text-black mr-2 hidden sm:block"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 10V3L4 14h7v7l9-11h-7z"
              />
            </svg>
            <span className="text-xl font-semibold text-gray-800">
              Always learning new technologies and staying updated with industry
              trends
            </span>
          </div>
        </div>
      </section>
      <section className="mt-40">
        <h2 className="text-2xl md:text-5xl text-yellow-500 font-bold mb-20 animate-[jello-vertical_1s_ease_forwards_2] text-center">
          Contact
        </h2>
        <div className="flex flex-col-reverse lg:flex-row items-center justify-around gap-y-16 lg:gap-0">
          <div className="flex flex-col items-center gap-y-8">
            <h2 className="md:text-2xl font-bold">Social media</h2>
            <div className="flex flex-col sm:flex-row sm:gap-x-8 gap-y-8">
              <div className="flex flex-col gap-y-8">
                <a
                  href="mailto:omaralbaz635@gmail.com"
                  className="px-6 py-3 flex items-center justify-center border-2 rounded-lg border-blue-500 text-blue-500 font-semibold group
                  transition duration-300 hover:-translate-y-2 hover:bg-blue-500 hover:text-white shadow-lg shadow-black"
                >
                  <svg
                    className="w-4 h-4 mr-2 group-hover:scale-125 transition duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 7.89a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  Email
                </a>
                <a
                  href="https://n.com/in/omar-profile"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 flex items-center justify-center border-2 rounded-lg border-blue-600 text-blue-600 font-semibold group
      transition duration-300 hover:-translate-y-2 hover:bg-blue-600 hover:text-white shadow-lg shadow-black"
                >
                  <svg
                    className="w-4 h-4 group-hover:scale-125 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782-3.433H2.555V9h4.564z"
                    />
                  </svg>
                  LinkedIn
                </a>
                <a
                  href="https://n.com/omar-profile"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 flex items-center justify-center border-2 rounded-lg border-gray-900 text-gray-900 font-semibold group
      transition duration-300 hover:-translate-y-2 hover:bg-gray-900 hover:text-white shadow-lg shadow-black"
                >
                  <svg
                    className="w-4 h-4 group-hover:scale-125 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                    />
                  </svg>
                  GitHub
                </a>
                <a
                  href="https://facebook.com/omar-profile"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 flex items-center justify-center border-2 rounded-lg border-blue-600 text-blue-600 font-semibold group
      transition duration-300 hover:-translate-y-2 hover:bg-blue-600 hover:text-white shadow-lg shadow-black"
                >
                  <svg
                    className="w-4 h-4 group-hover:scale-125 mr-2"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                  Facebook
                </a>
              </div>
              <div className="flex flex-col gap-y-8">
                <a
                  href="https://twitter.com/omar-profile"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 flex items-center justify-center border-2 rounded-lg border-sky-500 text-sky-500 font-semibold group
                transition duration-300 hover:-translate-y-2 hover:bg-sky-500 hover:text-white shadow-lg shadow-black"
                >
                  <svg
                    className="w-4 h-4 group-hover:scale-125 mr-2"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                  </svg>
                  Twitter
                </a>
                <a
                  href="https://instagram.com/omar-profile"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 flex items-center justify-center border-2 rounded-lg border-pink-500 text-pink-500 font-semibold group
                transition duration-300 hover:-translate-y-2 hover:bg-pink-500 hover:text-white shadow-lg shadow-black"
                >
                  <svg
                    className="w-4 h-4 group-hover:scale-125 mr-2"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987 6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.33-1.297C4.198 14.81 3.708 13.659 3.708 12.362c0-1.297.49-2.448 1.297-3.33.882-.807 2.033-1.297 3.33-1.297s2.448.49 3.33 1.297c.807.882 1.297 2.033 1.297 3.33s-.49 2.448-1.297 3.33c-.882.807-2.033 1.297-3.33 1.297zm7.605-.882c-.49.49-1.178.735-1.866.735s-1.376-.245-1.866-.735-.735-1.178-.735-1.866.245-1.376.735-1.866.1178-.735 1.866-.735 1.376.245 1.866.735.735 1.178.735 1.866-.245 1.376-.735 1.866z" />
                  </svg>
                  Instagram
                </a>
                <a
                  href="https://tiktok.com/@omar-profile"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 flex items-center justify-center border-2 rounded-lg border-gray-900 text-gray-900 font-semibold group
                transition duration-300 hover:-translate-y-2 hover:bg-gray-900 hover:text-white shadow-lg shadow-black"
                >
                  <svg
                    className="w-4 h-4 group-hover:scale-125 mr-2"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12.53.02C13.84 0 15.14.01 16.44 0c.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
                  </svg>
                  TikTok
                </a>
                <a
                  href="https://wa.me/01234567890"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 flex items-center justify-center border-2 rounded-lg border-green-500 text-green-500 font-semibold group
                transition duration-300 hover:-translate-y-2 hover:bg-green-500 hover:text-white shadow-lg shadow-black"
                >
                  <svg
                    className="w-4 h-4 group-hover:scale-125 mr-2"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.63z" />
                  </svg>
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
          <ContactForm />
        </div>
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-yellow-200 to-yellow-300 inline-flex items-center px-8 py-4 rounded-2xl shadow-lg">
            <svg
              className="w-6 h-6 text-black mr-2 hidden sm:block"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
              />
            </svg>
            <span className="text-xl font-semibold text-gray-800">
              Ready to collaborate and create amazing web experiences together!
            </span>
          </div>
        </div>
      </section>
    </main>
  );
}

export default About;
