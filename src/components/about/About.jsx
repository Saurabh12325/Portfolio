import React from "react";
import { motion } from "framer-motion";
import { FaJava, FaReact, FaDocker, FaTools } from "react-icons/fa";
import { SiSpringboot } from "react-icons/si";
import lin from "./images/lin.png";
import git from "./images/git.png";
import face from "./images/face.png";
import inst from "./images/inst.png";

function About() {
  return (
    <>
      {/* {laptop view} */}
      <section className="flex max-[763px]:hidden justify-center items-start bg-black/90 text-white px-4 py-12 md:hidden">
        <div className="absolute top-[100%] text-white shadow-xl shadow-red-300">
          <h1 className="text-center text-5xl ">𝓚𝓷𝓸𝔀 𝓶𝓸𝓻𝓮...</h1>
        </div>
        <div className="flex gap-4 max-w-8xl mt-10">
          {/* LEFT: Tech Stack */}
          <motion.div
            whileInView={{ scaleX: [0, 1] }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="flex-1 max-w-[30%] bg-gradient-to-b from-5% via-15% to-10% m-1 rounded-2xl shadow-md shadow-red-300 p-4 flex flex-col gap-3"
          >
            <h2 className="text-lg font-bold mb-2 text-red-400">
              My Tech Stack
            </h2>
            <TechItem icon={<FaJava />} title="Java Full Stack Developer" />
            <TechItem icon={<FaReact />} title="MERN Stack Developer" />
            <TechItem icon={<SiSpringboot />} title="Spring Boot" />
            <TechItem icon={<FaDocker />} title="Docker" />
            <TechItem icon={<FaTools />} title="DevOps Basics" />
          </motion.div>

          {/* RIGHT: About Me */}
          <motion.div
            className="flex-1 max-w-[70%] bg-gradient-to-b from-5% via-5% to-3% rounded-2xl shadow-md shadow-red-300 p-6 flex flex-col justify-center"
            whileInView={{ scaleX: [0, 1] }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          >
            <h1 className="text-2xl md:text-3xl font-bold mb-4 text-red-400">
              About Me
            </h1>
            <motion.p
              className="text-gray-300 leading-relaxed text-sm md:text-base"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.2, delay: 0.2 }}
            >
              I am a passionate{" "}
              <span className="text-white font-semibold">
                Full Stack Developer
              </span>
              <br />
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
            </motion.p>

            <div className="flex grid grid-cols-4 animate-pulse w-[30%]">
              <a href="https://www.linkedin.com/in/saurabh-srivastav-ab7712285/">
                <motion.img
                  src={lin}
                  className="mt-6 px-6 py-2"
                  whileHover={{ scale: 1.2 }}
                  transition={{ duration: 0.3 }}
                />
              </a>
              <a href="https://github.com/Saurabh12325">
                <motion.img
                  src={git}
                  className="mt-6 px-6 py-2"
                  whileHover={{ scale: 1.2 }}
                  transition={{ duration: 0.3 }}
                  alt="GitHub"
                />
              </a>
              <a href="https://www.facebook.com/profile.php?id=100009390527895">
                <motion.img
                  src={face}
                  className="mt-6 px-6 py-2"
                  whileHover={{ scale: 1.2 }}
                  transition={{ duration: 0.3 }}
                  alt="Facebook"
                />
              </a>
              <a href="https://www.instagram.com/its_saurabh_srivastav55?igsh=MWpsdm9yMjF5ZDE1OA==">
                <motion.img
                  src={inst}
                  className="mt-6 px-6 py-2"
                  whileHover={{ scale: 1.2 }}
                  transition={{ duration: 0.3 }}
                  alt="Instagram"
                />
              </a>
            </div>
          </motion.div>
        </div>
      </section>
      {/* {Mobile view} */}
      <section className="flex min-[763px]:hidden justify-center items-start bg-black/90 text-white px-4 py-12 ">
        <div className="absolute top-[100%] text-white shadow-xl shadow-red-300">
          <h1 className="text-center text-5xl ">𝓚𝓷𝓸𝔀 𝓶𝓸𝓻𝓮...</h1>
        </div>
        <div className="flex flex-col gap-4 max-w-8xl mt-10">
          {/* LEFT: Tech Stack */}
          <motion.div
            whileInView={{ scaleX: [0, 1] }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="flex-1 max-w-[100%] bg-gradient-to-b from-5% via-15% to-10% m-1 rounded-2xl shadow-md shadow-red-300 p-4 flex flex-col gap-3"
          >
            <h2 className="text-lg font-bold mb-2 text-red-400">
              My Tech Stack
            </h2>
            <TechItem icon={<FaJava />} title="Java Full Stack Developer" />
            <TechItem icon={<FaReact />} title="MERN Stack Developer" />
            <TechItem icon={<SiSpringboot />} title="Spring Boot" />
            <TechItem icon={<FaDocker />} title="Docker" />
            <TechItem icon={<FaTools />} title="DevOps Basics" />
          </motion.div>
          {/* RIGHT: About Me */}
          <motion.div
            className="flex-1 max-w-[100%] bg-gradient-to-b from-5% via-5% to-3% rounded-2xl shadow-md shadow-red-300 p-6 flex flex-col justify-center"
            whileInView={{ scaleX: [0, 1] }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          >
            <h1 className="text-2xl md:text-3xl font-bold mb-4 text-red-400">
              About Me
            </h1>
            <motion.p
              className="text-gray-300 leading-relaxed text-sm md:text-base"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.2, delay: 0.2 }}
            >
              I am a passionate{" "}
              <span className="text-white font-semibold">
                Full Stack Developer
              </span>
              <br />
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
            </motion.p>

            <div className="flex grid grid-cols-4 animate-pulse w-[30%]">
              <a href="https://www.linkedin.com/in/saurabh-srivastav-ab7712285/">
                <motion.img
                  src={lin}
                  className="mt-6 px-6 py-2"
                  whileHover={{ scale: 1.2 }}
                  transition={{ duration: 0.3 }}
                />
              </a>
              <a href="https://github.com/Saurabh12325">
                <motion.img
                  src={git}
                  className="mt-6 px-6 py-2"
                  whileHover={{ scale: 1.2 }}
                  transition={{ duration: 0.3 }}
                  alt="GitHub"
                />
              </a>
              <a href="https://www.facebook.com/profile.php?id=100009390527895">
                <motion.img
                  src={face}
                  className="mt-6 px-6 py-2"
                  whileHover={{ scale: 1.2 }}
                  transition={{ duration: 0.3 }}
                  alt="Facebook"
                />
              </a>
              <a href="https://www.instagram.com/its_saurabh_srivastav55?igsh=MWpsdm9yMjF5ZDE1OA==">
                <motion.img
                  src={inst}
                  className="mt-6 px-6 py-2"
                  whileHover={{ scale: 1.2 }}
                  transition={{ duration: 0.3 }}
                  alt="Instagram"
                />
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}

// Tech Item with icon + motion
const TechItem = ({ icon, title }) => (
  <motion.div
    className="flex items-center gap-3 bg-black/40 p-2 rounded-xl cursor-pointer text-white font-medium"
    initial={{ opacity: 0, x: -20, scale: 0.8 }}
    animate={{ opacity: 1, x: 0, scale: 1 }}
    transition={{ duration: 0.5, type: "spring" }}
    whileHover={{ scale: 1.1 }}
  >
    <span className="text-2x border-2 border-amber-200 rounded-full p-3">
      {icon}
    </span>
    <span>{title}</span>
  </motion.div>
);

export default About;
