import { useState } from "react";
import { Link } from "react-router-dom";

function Nav() {
  const [active, setactive] = useState(location.pathname);
  const [menuo, setmenuo] = useState(false);

  return (
    <nav className="opacity-0 animate-[goDown_1s_ease_forwards_.5s]">
      <div className="flex items-center justify-around">
        <Link to="/">
          <p
            onClick={() => setactive("/")}
            className="text-4xl font-bold transition-all duration-300 hover:scale-105"
          >
            B<span className="text-yellow-500"> A </span>Z . . .
          </p>
        </Link>
        <div className="space-x-10 hidden sm:block">
          <Link
            onClick={() => setactive("/")}
            to="/"
            className={`text-lg font-semibold hover:text-yellow-500 transition-all duration-300
              ${active === "/" ? "border-b-2 border-yellow-500 pb-1" : ""}`}
          >
            Home
          </Link>
          <Link
            onClick={() => setactive("/About")}
            to="/About"
            className={`text-lg font-semibold hover:text-yellow-500 transition-all duration-300
              ${
                active === "/About" ? "border-b-2 border-yellow-500 pb-1" : ""
              }`}
          >
            Details About Me
          </Link>
        </div>
        <img
          className="block sm:hidden cursor-pointer hover:scale-125 transition-all duration-300"
          src="images/menu.png"
          alt="menu"
          onClick={() => setmenuo(!menuo)}
        />
      </div>
      <div
        className={`flex flex-col items-center space-y-5 mt-20 sm:hidden transition-all duration-300 ${
          menuo ? "" : "hidden"
        }`}
      >
        <Link
          onClick={() => {
            setactive("/");
            setmenuo(false);
          }}
          to="/"
          className={`text-lg font-semibold hover:text-yellow-600 transition-all duration-300 hover:scale-105
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
          className={`text-lg font-semibold hover:text-yellow-600 transition-all duration-300 hover:scale-105 
              ${
                active === "/About" ? "border-b-2 border-yellow-500 pb-1" : ""
              }`}
        >
          About Me
        </Link>
      </div>
    </nav>
  );
}

export default Nav;
