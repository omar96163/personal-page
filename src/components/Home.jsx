import React, { useState } from "react";

function Home() {
  const [me, setme] = useState(false);
  const hire = () => {
    const email = "omaralbaz635@gmail.com";
    const subject = "Hiring Inquiry";
    const body =
      "Hello, I am interested in hiring you. Please let me know more details.";
    window.location.href = `mailto:${email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  };

  return (
    <div className="flex items-center justify-around mt-28">
      <main className="text-2xl leading-relaxed flex flex-col items-start justify-evenly h-[480px]">
        <h1>
          HEY HTERE <br />{" "}
          <p
            className="hover:text-transparent bg-clip-text hover:bg-gradient-to-b from-slate-800 
          via-yellow-500 to-slate-800 transition-all duration-300 font-black text-5xl"
          >
            {" "}
            I am Omar EL-Baz
          </p>{" "}
          Front End Web Developer
        </h1>
        <input
          onClick={hire}
          type="button"
          value="HIRE ME"
          className="text-base py-2 px-7 border-y-4 border-double border-slate-500 rounded-md hover:border-yellow-500 
          transition-all duration-300 hover:scale-105 hover:bg-gradient-to-b from-slate-500 via-yellow-500 to-slate-500
          cursor-pointer hover:shadow-2xl hover:shadow-slate-500"
        />
        <div className="flex gap-3 items-center">
          <p className="border-y-4 rounded-md hover:border-yellow-500 transition duration-500 bg-white">
            CONTACT ME
          </p>
          <img
            onClick={() => (me ? setme(false) : setme(true))}
            src="/arrow.png"
            alt="Toggle details"
            className={`w-5 h-5 my-3 hover:scale-125 transition-all duration-500 
            cursor-pointer ${me ? "rotate-90" : "-rotate-90"}`}
          />
          <div
            className={`flex gap-3 transition-all duration-500 -z-10 ${
              me ? "z-10" : "-ml-44"
            }`}
          >
            <a
              className="text-black hover:text-white hover:bg-black hover:ring-2 ring-black 
              hover:scale-110 px-2 rounded-lg text-xl font-bold transition duration-300"
              href="https://x.com/omaralbaz444"
              target="_blank"
              rel="noopener noreferrer"
            >
              X
            </a>
            <a
              className="text-blue-700 hover:text-white hover:bg-blue-500 hover:ring-2 ring-blue-500 
              hover:scale-110 px-1 rounded-lg text-xl font-bold transition duration-300"
              href="www.linkedin.com/in/omar-albaz-29b72b272"
              target="_blank"
              rel="noopener noreferrer"
            >
              in
            </a>
            <a
              className="text-black hover:text-white hover:bg-black hover:ring-2 ring-black 
              hover:scale-110 px-2 rounded-lg text-xl font-bold transition duration-300"
              href="https://github.com/omar96163?tab=overview&from=2024-12-01&to=2024-12-31"
              target="_blank"
              rel="noopener noreferrer"
            >
              Gih
            </a>
          </div>
        </div>
      </main>
      <img
        className="hover:scale-110 hover:ring-2 hover:ring-yellow-500 hover:border-yellow-500 opacity-80 
        hover:opacity-100 transition-all duration-300 w-[400px] rounded-lg"
        src="/o.webp"
        alt="OMAR ALBAZ's photo"
        title="OMAR ALBAZ"
      />
    </div>
  );
}

export default Home;
