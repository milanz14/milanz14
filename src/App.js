import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import AboutCard from "./components/AboutCard";
import ProjectCard from "./components/ProjectCard";
import Hero from "./components/Hero";

function App() {
  return (
    <div>
      <div>
        <Header />
        <Routes>
          <Route exact path="/" element={<Hero />} />
          <Route exact path="/projects" element={<ProjectCard />} />
          <Route exact path="/about" element={<AboutCard />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
