import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/navbar/Navbar.jsx'
import About from './components/about/About.jsx'
import Home from './components/home/Home.jsx'
import Techstack from './components/Tech/TechStack.jsx'

function App() {


  return (
    <>
   <Navbar/>
  <Home/>
  <About/>
   <Techstack/>

    </>
  )
}

export default App
