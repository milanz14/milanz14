import Header from "./components/Header";
import AboutCard from "./components/AboutCard";
import Projects from "./components/Projects";
import Hero from "./components/Hero";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <div>
        <Header />
        <Hero />
        <AboutCard />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
