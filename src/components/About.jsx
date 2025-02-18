import React, { useState } from "react";

function About() {
  const [me, setme] = useState(false);

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center">
        <div>
          <h1 className="text-3xl font-bold mb-4">
            Hi, I'm{" "}
            <strong className="text-yellow-500 px-2 rounded-2xl border-2 border-dashed border-yellow-500">
              {" "}
              OMAR
            </strong>{" "}
          </h1>
          <p className="text-base mb-8">
            A talented and passionate Front-End Developer and an ALX graduate{" "}
            with a strong focus on building modern,
            <br /> user-friendly web applications
          </p>
          <section className="mb-8">
            <h2 className="text-3xl font-semibold mb-2">Who Am I ?</h2>
            <p className="text-base leading-relaxed">
              I started my journey in web development through self-learning and
              intensive training at ALX <br /> I enjoy crafting responsive and
              accessible web applications that offer a unique user experience
            </p>
          </section>
        </div>
        <div className="flex flex-col items-center">
          <img
            className="opacity-50 w-44 md:w-52 lg:w-64 hover:opacity-100 transition-all duration-1000 
            rounded-full shadow-xl shadow-yellow-500"
            src="images/o.webp"
            alt="OMAR ALBAZ's photo"
            title="OMAR ALBAZ"
          />
          <p
            alt="Toggle details"
            onClick={() => (me ? setme(false) : setme(true))}
            className={`text-yellow-500 text-2xl md:text-4xl my-3 transition-all duration-500 
            cursor-pointer ${me ? "rotate-180" : ""} animate-pulse`}
          >
            ↯
          </p>
          <div
            className={`text-center transition-all duration-700 -z-50 ${
              me ? "z-50 mb-4" : "-mt-60 text-xs mb-52"
            } `}
          >
            <p>
              I am Omar El-Baz
              <br /> 25 years old <br />
              From Egypt <br />
              <a
                className="text-blue-500 hover:underline"
                href="https://docs.n.com/document/d/1mfGqdfnBe544MaVqGR7fPeuFdCxJJmhuU9B7--QwxbE/edit?usp=sharing"
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
        <h2 className="text-3xl font-semibold mb-2">My Projects</h2>
        <ul className="list-disc pl-6">
          <li>
            <li className="font-medium">
              <a
                className="text-blue-500 hover:underline text-xl"
                href="https://recipe-finder-nine-inky.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Recipe Finder
              </a>
            </li>
            Recipe Finder is an interactive web application that helps users
            search for recipes easily by dish name The app displays a list of
            recipes matching the search query and allows users to view detailed
            information for each recipe, including ingredients, preparation
            instructions, and tutorial videos
          </li>
          <li>
            <li className="font-medium">
              <a
                className="text-blue-500 hover:underline text-xl"
                href="https://dynamic-to-do-list-js-omega.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                To do list
              </a>
            </li>
            This project is a simple To-Do List web application built with HTML,
            CSS, and JavaScript It allows users to add, delete, and mark tasks
            as completed efficiently Users can enter a new task, which will be
            displayed in the list Users can remove unwanted tasks from the list
            Tasks are stored in localStorage to retain them even after
            refreshing the page
          </li>
        </ul>
      </section>
      <section className="mb-8">
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
      <section className="mb-8">
        <h2 className="text-3xl font-semibold mb-2">My Goal</h2>
        <p className="text-base leading-relaxed">
          I aim to continuously enhance my skills by working on impactful
          projects and to join a team where I can grow and contribute to
          building exceptional web experiences
        </p>
      </section>

      <section>
        <h2 className="text-3xl font-semibold mb-2">Contact Me</h2>
        <p className="text-base leading-relaxed">
          If you're looking for a creative and dedicated Front-End Developer,
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
    </div>
  );
}

export default About;
