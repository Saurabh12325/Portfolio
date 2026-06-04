import "./App.css";
import Navbar from "./components/navbar/Navbar.jsx";
import About from "./components/about/About.jsx";
import Home from "./components/home/Home.jsx";
import Techstack from "./components/Tech/TechStack.jsx";
import Loader from "./components/Loader/Loader.jsx";
import Project from "./components/projects/Project.jsx";
import Experience from "./components/experience/Experience.jsx";
import Certificates from "./components/certificates/Certificates.jsx";
import Contact from "./components/contact/Contact.jsx";
import Footer from "./components/footer/Footer.jsx";
import StarField from "./components/StarField.jsx";
import CustomCursor from "./components/CustomCursor.jsx";
import { useState, useEffect } from "react";
function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <CustomCursor />
      {loading ? (
        <Loader />
      ) : (
        <div className="relative bg-[#0d0d0d] min-h-screen">
          <StarField />
          <div className="relative z-10">
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
            <section id="experience">
              <Experience />
            </section>
            <section id="certificates">
              <Certificates />
            </section>
            <section id="project">
              <Project />
            </section>
            <section id="contact">
              <Contact />
            </section>
            <Footer />
          </div>
        </div>
      )}
    </>
  );
}

export default App;
