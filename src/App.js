import Header from "./components/Header";
import AboutCard from "./components/AboutCard";
import Projects from "./components/Projects";
import Hero from "./components/Hero";
import Contact from "./components/Contact";

function App() {
  return (
    <div>
      <div>
        <Header />
        <Hero />
        <AboutCard />
        <Projects />
        <Contact />
      </div>
    </div>
  );
}

export default App;
