import Nav from "./components/Nav";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./components/About";
import Home from "./components/Home";

function App() {
  return (
    <Router>
      <div className="min-h-screen max-h-full px-1 py-8 bg-gradient-to-t from-yellow-600 via-gray-700 to-black text-white">
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
