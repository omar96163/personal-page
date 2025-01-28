import Nav from "./components/Nav";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Project from "./components/Project";
import Contact from "./components/Contact";
import About from "./components/About";
import Home from "./components/Home";

function App() {
  return (
    <Router>
      <div className="min-h-screen max-h-full px-10 pt-8">
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Project" element={<Project />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
