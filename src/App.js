import { Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import ProjectCard from "./components/ProjectCard";
import LandingPage from "./components/LandingPage";

function App() {
  return (
    <div>
      <Header />
      <div>
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
          <Route exact path="/projects" element={<ProjectCard />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
