import React from "react";
import { FaJava, FaReact, FaDocker, FaTools } from "react-icons/fa";
import { SiSpringboot } from "react-icons/si";
import lin from "./images/lin.png";
import git from "./images/git.png";
import face from "./images/face.png";
import inst from "./images/inst.png";
function About() {
  return (
    <>
      <h1 className="text-center bg-black/90 text-5xl text-white">
        Know more...
      </h1>
      <section className=" flex justify-center items-start bg-black/90 text-white px-4 py-12 md:hidden">
        <div className="flex gap-4 max-w-8xl mt-10">
          {/* LEFT: Tech Stack */}
          <div className="flex-1 max-w-[30%] bg-gradient-to-b from-5% via-15% to-10% m-1 rounded-2xl shadow-md shadow-red-300 p-4 flex flex-col gap-3">
            <h2 className="text-lg font-bold mb-2 text-red-400">
              My Tech Stack
            </h2>
            <TechItem icon={<FaJava />} title="Java Full Stack Developer" />
            <TechItem icon={<FaReact />} title="MERN Stack Developer" />
            <TechItem icon={<SiSpringboot />} title="Spring Boot" />
            <TechItem icon={<FaDocker />} title="Docker" />
            <TechItem icon={<FaTools />} title="DevOps Basics" />
          </div>

          {/* RIGHT: About Me */}
          <div className="flex-1 max-w-[70%] bg-gradient-to-b from-5% via-5% to-3% rounded-2xl shadow-md shadow-red-300 p-6 flex flex-col justify-center">
            <h1 className="text-2xl md:text-3xl font-bold mb-4 text-red-400">
              About Me
            </h1>
            <p className="text-gray-300 leading-relaxed text-sm md:text-base">
              I am a passionate{" "}
              <span className="text-white font-semibold">
                Full Stack Developer
              </span>
              specializing in Java and MERN stack. I enjoy building scalable
              applications, creating modern web solutions, and implementing
              DevOps workflows.
              <br />
              <br />
              My main technologies include{" "}
              <span className="text-white font-semibold">
                Java, Spring Boot, React, Node.js, MongoDB, Docker
              </span>
              , and I am always eager to learn new tools and frameworks to
              improve my skills.
            </p>
            <div className="flex grid grid-cols-4 animate-pulse w-[30%]">
              <a href="https://www.linkedin.com/in/saurabh-srivastav-ab7712285/">
                <img src={lin} className="mt-6 px-6 py-2 " />
              </a>
              <a href="https://github.com/Saurabh12325">
                <img src={git} className="mt-6 px-6 py-2 " alt="GitHub" />
              </a>
              <a href="https://www.facebook.com/profile.php?id=100009390527895">
                <img src={face} className="mt-6 px-6 py-2  " alt="GitHub" />
              </a>
              <a href="https://www.instagram.com/its_saurabh_srivastav55?igsh=MWpsdm9yMjF5ZDE1OA==">
                <img src={inst} className="mt-6 px-6 py-2  " alt="Instagram" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

// Tech Item with icon only
const TechItem = ({ icon, title }) => (
  <div className="flex items-center gap-3 bg-black/40 p-2 rounded-xl cursor-pointer text-white font-medium">
    <span className="text-2x border-2 border-amber-200 rounded-full p-3">
      {icon}
    </span>
    <span>{title}</span>
  </div>
);

export default About;
