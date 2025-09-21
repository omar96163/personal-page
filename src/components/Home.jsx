function Home() {
  // const hire = () => {
  //  const email = "omaralbaz635@gmail.com";
  //const subject = "Hiring Inquiry";
  //const body =
  //"Hello, I am interested in hiring you. Please let me know more details.";
  //window.location.href = `mailto:${email}?subject=${encodeURIComponent(
  // subject
  //)}&body=${encodeURIComponent(body)}`;
  //};

  return (
    <main className="flex flex-col-reverse md:flex-row items-center justify-around min-h-screen">
      <section className="flex flex-col items-center md:items-start justify-center gap-y-20 opacity-0 animate-[goRight_1s_ease_forwards_.5s]">
        <h1>
          <p className="text-xl lg:text-2xl ">HEY THERE</p>
          <p className="font-black text-3xl lg:text-5xl my-1">
            I am {""}
            <strong className="text-yellow-200 transition-all duration-300 font-black text-3xl lg:text-5xl animate-[color_1s_ease_infinite_alternate]">
              Omar AL-Baz
            </strong>
          </p>
          <p className="text-yellow-200 transition-all duration-300 animate-[color_1s_ease_infinite_alternate_1s] text-2xl lg:text-3xl">
            Full Stack Web Developer
          </p>
        </h1>
        <input
          //onClick={hire}
          type="button"
          value="HIRE ME"
          className="text-lg text-yellow-500 py-2 px-7 border-4 border-double rounded-md border-yellow-500 cursor-pointer
          hover:text-yellow-100 hover:border-yellow-100 hover:scale-110 duration-1000"
        />
        <div className="flex items-center gap-5 md:gap-10 hover:[animation-play-state:paused] animate-[heartbeat_1.5s_ease-in-out_infinite_both]">
          <a
            className="transition duration-300 hover:text-blue-700 hover:-translate-y-1"
            href="/"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="h-7 w-7">
              <path d="M22,0H2C0.895,0,0,0.895,0,2v20c0,1.105,0.895,2,2,2h11v-9h-3v-4h3V8.413c0-3.1,1.893-4.788,4.659-4.788 c1.325,0,2.463,0.099,2.795,0.143v3.24l-1.918,0.001c-1.504,0-1.795,0.715-1.795,1.763V11h4.44l-1,4h-3.44v9H22c1.105,0,2-0.895,2-2 V2C24,0.895,23.105,0,22,0z" />
            </svg>
          </a>
          <a
            className="transition duration-300 hover:text-orange-500 hover:-translate-y-1"
            href="/"
          >
            <svg viewBox="0 0 30 30" fill="currentColor" className="h-7 w-">
              <circle cx="15" cy="15" r="4" />
              <path d="M19.999,3h-10C6.14,3,3,6.141,3,10.001v10C3,23.86,6.141,27,10.001,27h10C23.86,27,27,23.859,27,19.999v-10   C27,6.14,23.859,3,19.999,3z M15,21c-3.309,0-6-2.691-6-6s2.691-6,6-6s6,2.691,6,6S18.309,21,15,21z M22,9c-0.552,0-1-0.448-1-1   c0-0.552,0.448-1,1-1s1,0.448,1,1C23,8.552,22.552,9,22,9z" />
            </svg>
          </a>
          <a
            className="transition duration-300 hover:text-blue-500 hover:-translate-y-1"
            href="/"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="h-7 w-7">
              <path d="M24,4.6c-0.9,0.4-1.8,0.7-2.8,0.8c1-0.6,1.8-1.6,2.2-2.7c-1,0.6-2,1-3.1,1.2c-0.9-1-2.2-1.6-3.6-1.6 c-2.7,0-4.9,2.2-4.9,4.9c0,0.4,0,0.8,0.1,1.1C7.7,8.1,4.1,6.1,1.7,3.1C1.2,3.9,1,4.7,1,5.6c0,1.7,0.9,3.2,2.2,4.1 C2.4,9.7,1.6,9.5,1,9.1c0,0,0,0,0,0.1c0,2.4,1.7,4.4,3.9,4.8c-0.4,0.1-0.8,0.2-1.3,0.2c-0.3,0-0.6,0-0.9-0.1c0.6,2,2.4,3.4,4.6,3.4 c-1.7,1.3-3.8,2.1-6.1,2.1c-0.4,0-0.8,0-1.2-0.1c2.2,1.4,4.8,2.2,7.5,2.2c9.1,0,14-7.5,14-14c0-0.2,0-0.4,0-0.6 C22.5,6.4,23.3,5.5,24,4.6z" />
            </svg>
          </a>
        </div>
      </section>
      <section className="relative w-72 h-72 md:w-96 md:h-96 my-20 md:my-0 opacity-0 animate-[goLeft_1s_ease_forwards_.5s]">
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
      </section>
    </main>
  );
}

export default Home;
