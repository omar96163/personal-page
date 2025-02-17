import React from "react";

function Home() {
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
    <div className="flex flex-col-reverse md:flex-row items-center justify-around">
      <main className="text-xl lg:text-2xl leading-relaxed flex flex-col items-start justify-around h-[480px]">
        <h1>
          HEY HTERE <br />{" "}
          <p className="font-black text-3xl lg:text-5xl">
            {" "}
            I am{" "}
            <strong
              className="text-transparent bg-clip-text bg-gradient-to-b from-slate-950 via-yellow-500
            to-slate-950 transition-all duration-1000 font-black text-3xl lg:text-5xl animate-pulse"
            >
              Omar EL-Baz
            </strong>
          </p>{" "}
          Front End Web Developer
        </h1>
        <input
          onClick={hire}
          type="button"
          value="HIRE ME"
          className="text-lg text-yellow-500 py-2 px-7 border-4 border-double rounded-md border-yellow-500 cursor-pointer
          hover:text-yellow-100 hover:border-yellow-100 hover:scale-110 duration-1000"
        />
        <div className="flex gap-4 md:gap-10">
          <a
            className="border-[2px] rounded-full text-center px-3 py-1 hover:text-black hover:bg-white hover:border-black
            duration-1000 font-semibold hover:[animation-play-state:paused] animate-[bounce_1s_ease-in-out_infinite]"
            href="https://x.com/omaralbaz444"
            target="_blank"
            rel="noopener noreferrer"
          >
            X
          </a>
          <a
            className="border-[2px] rounded-full text-center px-3 py-1 hover:text-red-700 hover:bg-white hover:border-red-700
            duration-1000 font-semibold hover:[animation-play-state:paused] animate-[bounce_1.1s_ease-in-out_infinite]"
            href="https://github.com/omar96163?tab=overview&from=2024-12-01&to=2024-12-31"
            target="_blank"
            rel="noopener noreferrer"
          >
            Gih
          </a>
          <a
            className="border-[2px] rounded-full text-center px-3 py-1 hover:text-blue-700 hover:bg-white hover:border-blue-700
            duration-1000 font-semibold hover:[animation-play-state:paused] animate-[bounce_1.2s_ease-in-out_infinite]"
            href="www.linkedin.com/in/omar-albaz-29b72b272"
            target="_blank"
            rel="noopener noreferrer"
          >
            in
          </a>
          <a
            className="border-[2px] rounded-full text-center px-3 py-1 hover:text-yellow-500 hover:bg-white hover:border-yellow-500
            duration-1000 font-semibold hover:[animation-play-state:paused] animate-[bounce_1.3s_ease-in-out_infinite]"
            href="https://docs.google.com/document/d/1mfGqdfnBe544MaVqGR7fPeuFdCxJJmhuU9B7--QwxbE/edit?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            My.R
          </a>
        </div>
      </main>
      <img
        className="opacity-50 w-60 md:w-80 lg:w-96 shadow-yellow-500 transition duration-1000 hover:opacity-100
         rounded-full shadow-2xl"
        src="images/o.webp"
        alt="OMAR ALBAZ's photo"
        title="OMAR ALBAZ"
      />
    </div>
  );
}

export default Home;
