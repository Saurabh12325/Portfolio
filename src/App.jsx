import "./App.css";
import Navbar from "./components/navbar/Navbar.jsx";
import About from "./components/about/About.jsx";
import Home from "./components/home/Home.jsx";
import Techstack from "./components/Tech/TechStack.jsx";
import Loader from "./components/Loader/Loader.jsx";
import Project from "./components/projects/Project.jsx";
import { useState, useEffect } from "react";
function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Navbar />
          <section id="home">
            <Home />
          </section>
          <section id="about">
            <About />
          </section>
          <section id="techstack">
            <Techstack />
          </section>
          <section id="project">
            <Project />
          </section>
        </>
      )}
    </>
  );
}

export default App;
