import { useState } from "react";
import React from "react";

import { Link } from "react-router-dom";

function Nav() {
  const [active, setactive] = useState("");
  const [menuo, setmenuo] = useState(false);

  return (
    <>
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
              via-yellow-500 to-slate-500 transition-all duration-300 hover:scale-105
              ${active === "/" ? "border-b-2 border-yellow-500 pb-1" : ""}`}
          >
            Home
          </Link>
          <Link
            onClick={() => setactive("/About")}
            to="/About"
            className={`text-lg font-semibold hover:text-transparent bg-clip-text hover:bg-gradient-to-b from-slate-500 
              via-yellow-500 to-slate-500 transition-all duration-300 hover:scale-105 
              ${
                active === "/About" ? "border-b-2 border-yellow-500 pb-1" : ""
              }`}
          >
            Details About Me
          </Link>
        </div>
        <div className="block sm:hidden cursor-pointer hover:scale-125 transition-all duration-300">
          <img
            src="images/menu.png"
            alt="menu"
            onClick={() => setmenuo(!menuo)}
          />
        </div>
      </div>
      <div
        className={`transition-all duration-1000 absolute left-0 bg-gray-100 p-4 top-[85px] space-y-4
          flex flex-col sm:hidden rounded-r-2xl border-2 border-r-yellow-500 border-y-yellow-500
         ${menuo ? "z-50" : "-z-50 -left-40"}`}
      >
        <Link
          onClick={() => {
            setactive("/");
            setmenuo(false);
          }}
          to="/"
          className={`text-lg font-semibold hover:text-transparent bg-clip-text hover:bg-gradient-to-b from-slate-500
              via-yellow-500 to-slate-500 transition-all duration-300 hover:scale-105 w-fit
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
              via-yellow-500 to-slate-500 transition-all duration-300 hover:scale-105 w-fit
              ${
                active === "/About" ? "border-b-2 border-yellow-500 pb-1" : ""
              }`}
        >
          About Me
        </Link>
      </div>
    </>
  );
}

export default Nav;
