import { useState } from "react";
import React from "react";

import { Link } from "react-router-dom";

function Nav() {
  const [active, setactive] = useState("");
  const [menuo, setmenuo] = useState(false);

  return (
    <div className={`mb-20 md:mb-28`}>
      <div className="flex items-end justify-around">
        <Link to="/">
          <p
            onClick={() => setactive("/")}
            className="text-4xl font-bold transition-all duration-300 hover:scale-110"
          >
            B<i className="text-yellow-500">٨</i> Z ...
          </p>
        </Link>
        <div className="space-x-10 hidden sm:block">
          <Link
            onClick={() => setactive("/")}
            to="/"
            className={`text-lg font-semibold hover:text-transparent bg-clip-text hover:bg-gradient-to-b from-slate-500 
              via-yellow-500 to-slate-500 transition-all duration-500
              ${active === "/" ? "border-b-2 border-yellow-500 pb-1" : ""}`}
          >
            Home
          </Link>
          <Link
            onClick={() => setactive("/About")}
            to="/About"
            className={`text-lg font-semibold hover:text-transparent bg-clip-text hover:bg-gradient-to-b from-slate-500 
              via-yellow-500 to-slate-500 transition-all duration-500 
              ${
                active === "/About" ? "border-b-2 border-yellow-500 pb-1" : ""
              }`}
          >
            Details About Me
          </Link>
        </div>
        <img
          className="block sm:hidden cursor-pointer hover:scale-125 transition-all duration-500"
          src="images/menu.png"
          alt="menu"
          onClick={() => setmenuo(!menuo)}
        />
      </div>
      <div
        className={`flex flex-col items-center space-y-5 mt-20 sm:hidden transition-all duration-1000 ${
          menuo ? "" : "hidden"
        }`}
      >
        <Link
          onClick={() => {
            setactive("/");
            setmenuo(false);
          }}
          to="/"
          className={`text-lg font-semibold hover:text-transparent bg-clip-text hover:bg-gradient-to-b from-slate-500 
              via-yellow-500 to-slate-500 transition-all duration-500 hover:scale-105
              ${active === "/" ? "border-b-2 border-yellow-500 pb-1" : ""}`}
        >
          Home
        </Link>
        <Link
          onClick={() => {
            setactive("/About");
            setmenuo(false);
          }}
          to="/About"
          className={`text-lg font-semibold hover:text-transparent bg-clip-text hover:bg-gradient-to-b from-slate-500 
              via-yellow-500 to-slate-500 transition-all duration-500 hover:scale-105 
              ${
                active === "/About" ? "border-b-2 border-yellow-500 pb-1" : ""
              }`}
        >
          About Me
        </Link>
      </div>
    </div>
  );
}

export default Nav;
