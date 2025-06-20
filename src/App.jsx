import './App.css';
import Navbar from './components/navbar/Navbar.jsx';
import About from './components/about/About.jsx';
import Home from './components/home/Home.jsx';
import Techstack from './components/Tech/TechStack.jsx';


function App() {
  return (
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
    </>
  );
}

export default App;
