import React, { useState } from "react";

function About() {
  const [me, setme] = useState(false);

  return (
    <div className="p-6 max-w-6xl mx-auto mt-16 bg-white">
      <div className="flex justify-between items-start lg:max-h-[295px]">
        <div>
          <h1 className="text-3xl font-bold mb-4">
            Hi, I'm{" "}
            <strong className="text-yellow-500 px-2 rounded-2xl border-2 border-dashed border-yellow-500 ml-1">
              {" "}
              OMAR
            </strong>{" "}
          </h1>
          <p className="text-lg mb-8 text-">
            A talented and passionate Front-End Developer and an ALX graduate{" "}
            <br /> with a strong focus on building modern, user-friendly web
            applications.
          </p>
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-2">Who Am I ?</h2>
            <p className="text-base leading-relaxed">
              I started my journey in web development through self-learning and
              intensive training at ALX. <br /> I enjoy crafting responsive and
              accessible web applications that offer a unique user experience.
            </p>
          </section>
        </div>
        <div className="flex flex-col items-center">
          <img
            className="hover:scale-105 hover:border-yellow-500 border-2 
            transition-all duration-300 w-[300px] rounded-lg"
            src="/o.webp"
            alt="OMAR ALBAZ's photo"
            title="OMAR ALBAZ"
          />
          <img
            onClick={() => (me ? setme(false) : setme(true))}
            src="/arrow.png"
            alt="Toggle details"
            className={`w-6 my-3 hover:scale-125 transition-all duration-300 
            cursor-pointer ${me ? "rotate-180" : ""}`}
          />
          <div
            className={`text-center transition-all duration-700 -z-10 ${
              me ? "z-10" : "-mt-40"
            } `}
          >
            <p>
              I am Omar El-Baz
              <br /> 25 years old <br />
              From Egypt <br />
              <a
                className="text-blue-500 hover:underline"
                href="https://docs.google.com/document/d/1mfGqdfnBe544MaVqGR7fPeuFdCxJJmhuU9B7--QwxbE/edit?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                My Resume
              </a>
            </p>
          </div>
        </div>
      </div>
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">My Projects</h2>
        <ul className="list-disc pl-6">
          <li>
            <li className="font-medium">
              <a
                className="text-blue-500 hover:underline"
                href="https://recipe-finder-nine-inky.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Recipe Finder
              </a>
            </li>
            Recipe Finder is an interactive web application <br /> that helps
            users search for recipes easily by dish name <br /> The app displays
            a list of recipes matching <br /> the search query and allows users
            to view detailed information for each recipe, <br />
            including ingredients, preparation instructions, and tutorial videos
            (if available).
          </li>
          <li>
            <li className="font-medium">
              <a
                className="text-blue-500 hover:underline"
                href="https://dynamic-to-do-list-js-omega.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                To do list
              </a>
            </li>
            This project is a simple To-Do List web application built with HTML,
            CSS, and JavaScript. <br /> It allows users to add, delete, and mark
            tasks as completed efficiently.
            <br />
            Users can enter a new task, which will be displayed in the list.
            <br />
            Users can remove unwanted tasks from the list
            <br />
            Tasks are stored in localStorage to retain them even after
            refreshing the page.
            <br />
          </li>
        </ul>
      </section>
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Skills</h2>
        <ul className="list-disc pl-6">
          <li>
            {" "}
            <li className="font-medium">Front-End Development :</li> HTML, CSS,
            JavaScript, React.js, Responsive Design, TailwindCSS.
          </li>
          <li>
            {" "}
            <li className="font-medium">Libraries :</li> Zustand, Axios, React
            Query (TanStack), React Router, React Hook Form.
          </li>
          <li>
            <li className="font-medium">Tools :</li> Git, GitHub, VS studio
            code, figma.
          </li>
          <li>
            <li className="font-medium">Other Skills :</li> UI / UX,
            Problem-solving, team-work, attention to detail, hard-work,
            communication skills
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">My Goals</h2>
        <p className="text-base leading-relaxed">
          I aim to continuously enhance my skills by working on impactful
          projects and to join a team where I can grow and contribute to
          building exceptional web experiences.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">Contact Me</h2>
        <p className="text-base leading-relaxed">
          If you're looking for a creative and dedicated Front-End Developer,
          feel free to reach out :
        </p>
        <ul className="list-disc pl-6 mt-2">
          <li>
            <a
              href="mailto:omaralbaz635@gmail.com"
              className="text-blue-500 hover:underline"
            >
              Email
            </a>
          </li>
          <li>
            <a
              href="https://linkedin.com/in/omar-profile"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a
              href="https://github.com/omar-profile"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              GitHub
            </a>
          </li>
          <li>
            <a
              href="https://docs.google.com/document/d/1mfGqdfnBe544MaVqGR7fPeuFdCxJJmhuU9B7--QwxbE/edit?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              My Resume
            </a>
          </li>
        </ul>
      </section>
    </div>
  );
}

export default About;
