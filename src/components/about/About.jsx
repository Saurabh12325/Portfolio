import React from 'react'

function About() {
    return (
      <div className="bg-[#1A1A1A] min-h-screen w-full flex flex-col items-center px-4 py-12">
  <h1 className="text-white text-5xl font-bold mb-12">My Journey as a Java Developer</h1>

  <div className="grid  md:grid-cols-3 gap-8 max-w-5xl w-full">

 
    <div className="bg-gradient-to-r from-red-500  p-6 rounded-md shadow-red-500 shadow-md  border border-gray-700 text-white hover:shadow-lg hover:scale-110 transition-transform duration-700">
      <h2 className="text-xl font-semibold mb-2">Class 12 – Academic Foundation 🎓</h2>
      <p>I completed my Class 12 from <span className="font-semibold text-blue-400">Chandra Public School, Mau</span> with an outstanding <span className="text-green-400 font-bold">91.2%</span>. This phase built my discipline and consistency, and laid the foundation for my technical career.</p>
    </div>

    <div className="bg-gradient-to-r from-red-500  p-6 rounded-md shadow-red-500 shadow-md  border border-gray-700 text-white hover:shadow-lg hover:scale-110 transition-transform duration-700">
      <h2 className="text-xl font-semibold mb-2">B.Tech – First Year </h2>
      <p>Started B.Tech in Computer Science and secured a solid <span className="font-bold text-yellow-400">SGPA of 8.72</span> in the first year. Built a strong base in problem-solving, Java fundamentals, and software design principles.</p>
    </div>

   
    <div className="bg-gradient-to-r from-red-500  p-6 rounded-md shadow-red-500 shadow-md  border border-gray-700 text-white hover:shadow-lg hover:scale-110 transition-transform duration-700">
      <h2 className="text-xl font-semibold mb-2">Java Core & OOPs 👨‍💻</h2>
      <p>Dived into core Java, mastering object-oriented programming, exception handling, collections, multithreading, and basic DSA using Java. Built small CLI tools and desktop-based programs.</p>
    </div>


    <div className="bg-gradient-to-r from-red-500  p-6 rounded-md shadow-red-500 shadow-md  border border-gray-700 text-white hover:shadow-lg hover:scale-110 transition-transform duration-700">
      <h2 className="text-xl font-semibold mb-2">Spring Boot & Backend Dev 🌐</h2>
      <p>Started building REST APIs using Spring Boot. Implemented backend logic with MongoDB/PostgreSQL, JWT authentication, Spring Security, and role-based access control.</p>
    </div>


    <div className="bg-gradient-to-r from-red-500  p-6 rounded-md shadow-red-500 shadow-md  border border-gray-700 text-white hover:shadow-lg hover:scale-110 transition-transform duration-700">
      <h2 className="text-xl font-semibold mb-2">Projects & Practice </h2>
      <p>Developed real-world projects like <span className="text-pink-400">Quiz App, SnapSphere (social media backend), eCommerce backend, Event Management system</span>. Gained confidence in full-stack collaboration and deployment readiness.</p>
    </div>

    <div className="bg-gradient-to-r from-red-500  p-6 rounded-md shadow-red-500 shadow-md  border border-gray-700 text-white hover:shadow-lg hover:scale-110 transition-transform duration-700">
      <h2 className="text-xl font-semibold mb-2">Now – DevOps & Cloud </h2>
      <p>Learning GitHub Actions, Docker, and AWS services like EC2, S3, Route 53. Hosting Spring Boot apps on EC2, managing cost via billing dashboard, and exploring CI/CD integration.</p>
    </div>
  </div>

  <p className="text-gray-400 text-sm mt-10 text-center max-w-xl">
    “From securing 91.2% in school to building scalable Java backends — my journey reflects dedication, discipline, and constant learning.”
  </p>
</div>

    )
}

export default About
