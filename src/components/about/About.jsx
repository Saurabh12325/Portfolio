import React from "react";
import { motion } from "framer-motion";
import { FaJava, FaReact, FaDocker, FaTools } from "react-icons/fa";
import { SiSpringboot } from "react-icons/si";
import lin from "./images/lin.png";
import git from "./images/git.png";
import face from "./images/face.png";
import inst from "./images/inst.png";

const techItems = [
  { icon: <FaJava />, title: "Java Full Stack Developer" },
  { icon: <FaReact />, title: "MERN Stack Developer" },
  { icon: <SiSpringboot />, title: "Spring Boot" },
  { icon: <FaDocker />, title: "Docker" },
  { icon: <FaTools />, title: "DevOps Basics" },
];

const socials = [
  {
    href: "https://www.linkedin.com/in/saurabh-srivastav-ab7712285/",
    img: lin,
    alt: "LinkedIn",
  },
  { href: "https://github.com/Saurabh12325", img: git, alt: "GitHub" },
  {
    href: "https://www.facebook.com/profile.php?id=100009390527895",
    img: face,
    alt: "Facebook",
  },
  {
    href: "https://www.instagram.com/its_saurabh_srivastav55?igsh=MWpsdm9yMjF5ZDE1OA==",
    img: inst,
    alt: "Instagram",
  },
];

function About() {
  return (
    <section className="bg-[#111111] text-white py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center mb-16"
        >
          Know <span className="text-[#cb5151]">More</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Tech Stack */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-[#1a1a1a] rounded-2xl p-6 border border-white/5 shadow-lg shadow-black/40"
          >
            <h3 className="text-[#cb5151] text-base font-bold uppercase tracking-wider mb-5">
              Tech Stack
            </h3>
            <div className="flex flex-col gap-3">
              {techItems.map(({ icon, title }) => (
                <TechItem key={title} icon={icon} title={title} />
              ))}
            </div>
          </motion.div>

          {/* About Me */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="md:col-span-2 bg-[#1a1a1a] rounded-2xl p-6 border border-white/5 shadow-lg shadow-black/40 flex flex-col justify-between"
          >
            <div>
              <h3 className="text-[#cb5151] text-base font-bold uppercase tracking-wider mb-5">
                About Me
              </h3>
              <p className="text-gray-300 leading-relaxed text-sm md:text-base">
                I am a passionate{" "}
                <span className="text-white font-semibold">
                  Full Stack Developer
                </span>{" "}
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
            </div>

            <div className="flex gap-5 mt-8">
              {socials.map(({ href, img, alt }) => (
                <a
                  key={alt}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <motion.img
                    src={img}
                    alt={alt}
                    className="w-7 h-7 object-contain opacity-70 hover:opacity-100"
                    whileHover={{ scale: 1.2, y: -2 }}
                    transition={{ duration: 0.2 }}
                  />
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

const TechItem = ({ icon, title }) => (
  <motion.div
    className="flex items-center gap-3 bg-black/30 p-3 rounded-xl text-white text-sm font-medium hover:bg-[#cb5151]/10 transition-colors cursor-default"
    whileHover={{ x: 4 }}
    transition={{ duration: 0.2 }}
  >
    <span className="text-lg border border-[#cb5151]/40 rounded-lg p-2 text-[#cb5151]">
      {icon}
    </span>
    <span>{title}</span>
  </motion.div>
);

export default About;
