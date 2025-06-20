import './App.css';
import Navbar from './components/navbar/Navbar.jsx';
import About from './components/about/About.jsx';
import Home from './components/home/Home.jsx';
import Techstack from './components/Tech/TechStack.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/techstack" element={<Techstack/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
