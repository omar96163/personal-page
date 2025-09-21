import { useState } from "react";

function About() {
  const [me, setme] = useState(true);

  return (
    <main>
      <section className="flex flex-col-reverse lg:flex-row lg:justify-around lg:items-center min-h-screen">
        <div className="opacity-0 animate-[goRight_1s_ease_forwards_.5s] max-w-[450px]">
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
        <div className="flex flex-col items-center my-20 md:my-0 opacity-0 animate-[goLeft_1s_ease_forwards_.5s]">
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
          My Projects
        </h2>
        <section className="flex flex-wrap items-center justify-center gap-10">
          <article
            className="max-w-[600px] md:min-h-[590px] rounded-2xl p-5 border-2 group hover:-translate-y-2 transition duration-300 hover:border-yellow-500 
            shadow-md hover:shadow-yellow-300 bg-gradient-to-tr from-black via-yellow-950 to-black"
          >
            <img
              src="images/RecipeFinder.png"
              alt="Recipe Finder App screenshot"
              className="object-cover rounded-md mb-4 opacity-70 group-hover:opacity-100 group-hover:scale-[1.02] transition duration-300"
            />
            <a
              className="font-medium text-yellow-500 hover:underline text-xl"
              href="https://recipe-finder-nine-inky.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Recipe Finder
              <span className="ml-4 text-[25px] group-hover:translate-x-3 group-hover:animate-spin transition-all duration-300 inline-block">
                ›
              </span>
            </a>
            <p className="mt-3 leading-relaxed">
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
              preparation steps, and tutorial videos. The app is{" "}
              <strong>fully responsive</strong> and offers a smooth, engaging
              user experience.
            </p>
            <ul className="mt-4 flex flex-wrap gap-3 text-sm">
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
              className="inline-flex rounded-lg mt-4 p-2 border-2 border-yellow-500 text-yellow-500 transition duration-300
              hover:bg-yellow-500 hover:text-black font-semibold"
            >
              Source Code
            </a>
          </article>
          <article
            className="max-w-[600px] md:min-h-[590px] rounded-2xl p-5 border-2 group hover:-translate-y-2 transition duration-300 hover:border-yellow-500 
            shadow-md hover:shadow-yellow-300 bg-gradient-to-tr from-black via-yellow-950 to-black"
          >
            <img
              src="images/FilmGalaxy.png"
              alt="Film Galaxy App screenshot"
              className="object-cover rounded-md mb-4 opacity-70 group-hover:opacity-100 group-hover:scale-[1.02] transition duration-300"
            />
            <a
              className="font-medium text-yellow-500 hover:underline text-xl"
              href="https://film-galaxy.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Film Galaxy
              <span className="ml-4 text-[25px] group-hover:translate-x-3 group-hover:animate-spin transition-all duration-300 inline-block">
                ›
              </span>
            </a>
            <p className="mt-3 leading-relaxed">
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
            <ul className="mt-4 flex flex-wrap gap-3 text-sm">
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
              className="inline-flex rounded-lg mt-4 p-2 border-2 border-yellow-500 text-yellow-500 transition duration-300
              hover:bg-yellow-500 hover:text-black font-semibold"
            >
              Source Code
            </a>
          </article>
          <article
            className="max-w-[600px] md:min-h-[590px] rounded-2xl p-5 border-2 group hover:-translate-y-2 transition duration-300 hover:border-yellow-500 
            shadow-md hover:shadow-yellow-300 bg-gradient-to-tr from-black via-yellow-950 to-black"
          >
            <img
              src="images/CoursesWebsite.png"
              alt="Courses Website App screenshot"
              className="object-cover rounded-md mb-4 opacity-70 group-hover:opacity-100 group-hover:scale-[1.02] transition duration-300"
            />
            <a
              className="font-medium text-yellow-500 hover:underline text-xl"
              href="https://courses-website-seven.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Courses Website
              <span className="ml-4 text-[25px] group-hover:translate-x-3 group-hover:animate-spin transition-all duration-300 inline-block">
                ›
              </span>
            </a>
            <p className="mt-3 leading-relaxed">
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
              Administrators can add, edit, and delete courses, while managers
              can view and remove users as needed. The app is{" "}
              <strong>fully responsive</strong> and offers a smooth, engaging
              user experience.
            </p>
            <ul className="mt-4 flex flex-wrap gap-3 text-sm">
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
              className="inline-flex rounded-lg mt-4 p-2 border-2 border-yellow-500 text-yellow-500 transition duration-300
    hover:bg-yellow-500 hover:text-black font-semibold"
            >
              Source Code
            </a>
          </article>
        </section>
      </section>
      <section className="mt-40">
        <h2 className="text-3xl font-semibold mb-2">Skills</h2>
        <ul className="list-disc pl-6">
          <li>
            {" "}
            <li className="font-medium">Front-End Development :</li> HTML, CSS,
            JavaScript, React.js, Responsive Design, TailwindCSS.
          </li>
          <li>
            {" "}
            <li className="font-medium">Libraries :</li> Zustand, Axios, React
            Query (TanStack), React Router, React Hook Form
          </li>
          <li>
            <li className="font-medium">Tools :</li> Git, GitHub, VS studio
            code, figma
          </li>
          <li>
            <li className="font-medium">Other Skills :</li> UI / UX,
            Problem-solving, team-work, attention to detail, hard-work,
            communication skills
          </li>
        </ul>
      </section>
      <section className="mt-40">
        <h2 className="text-3xl font-semibold mb-2">My Goal</h2>
        <p className="text-base leading-relaxed">
          I aim to continuously enhance my skills by working on impactful
          projects and to join a team where I can grow and contribute to
          building exceptional web experiences
        </p>
      </section>
      <section className="mt-40">
        <h2 className="text-3xl font-semibold mb-2">Contact Me</h2>
        <p className="text-base leading-relaxed">
          If you are looking for a creative and dedicated Front-End Developer,
          feel free to reach out :
        </p>
        <ul className="list-disc pl-6 mt-2">
          <li>
            <a
              href="mail:omaralbaz635@gmail.com"
              className="text-blue-700 hover:underline"
            >
              Email
            </a>
          </li>
          <li>
            <a
              href="https://n.com/in/omar-profile"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-700 hover:underline"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a
              href="https://n.com/omar-profile"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-700 hover:underline"
            >
              GitHub
            </a>
          </li>
          <li>
            <a
              href="https://docs.n.com/document/d/1mfGqdfnBe544MaVqGR7fPeuFdCxJJmhuU9B7--QwxbE/edit?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-700 hover:underline"
            >
              My Resume
            </a>
          </li>
        </ul>
      </section>
    </main>
  );
}

export default About;
