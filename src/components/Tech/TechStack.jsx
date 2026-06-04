import React from "react";
import { motion } from "framer-motion";
import { FaJava, FaReact, FaNodeJs, FaDocker, FaAws } from "react-icons/fa";
import {
  SiMongodb,
  SiSpringboot,
  SiPostgresql,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiMysql,
  SiC,
  SiVite,
  SiIntellijidea,
  SiVercel,
  SiRender,
} from "react-icons/si";

const techIcons = [
  { icon: <FaJava className="text-[#f89820]" />, label: "Java" },
  { icon: <SiJavascript className="text-[#f0db4f]" />, label: "JavaScript" },
  { icon: <SiC className="text-blue-400" />, label: "C" },
  { icon: <SiHtml5 className="text-[#e34c26]" />, label: "HTML5" },
  { icon: <SiCss3 className="text-[#264de4]" />, label: "CSS3" },
  { icon: <SiTailwindcss className="text-[#38bdf8]" />, label: "Tailwind" },
  { icon: <FaReact className="text-[#61DBFB]" />, label: "React" },
  { icon: <SiVite className="text-purple-400" />, label: "Vite" },
  { icon: <FaNodeJs className="text-[#68A063]" />, label: "Node.js" },
  { icon: <SiSpringboot className="text-[#6DB33F]" />, label: "Spring Boot" },
  { icon: <SiPostgresql className="text-[#336791]" />, label: "PostgreSQL" },
  { icon: <SiMysql className="text-[#00758F]" />, label: "MySQL" },
  { icon: <SiMongodb className="text-[#47A248]" />, label: "MongoDB" },
  { icon: <FaDocker className="text-[#0db7ed]" />, label: "Docker" },
  { icon: <SiIntellijidea className="text-white" />, label: "IntelliJ" },
  { icon: <SiVercel className="text-white" />, label: "Vercel" },
  { icon: <SiRender className="text-[#46E3B7]" />, label: "Render" },
  { icon: <FaAws className="text-[#FF9900]" />, label: "AWS" },
];

const TechStack = () => {
  const doubled = [...techIcons, ...techIcons];

  return (
    <section className="bg-[#0f0f0f] py-20 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto mb-12">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center text-white"
        >
          Tech <span className="text-[#cb5151]">Stack</span>
        </motion.h2>
        <p className="text-gray-500 text-sm text-center mt-3">
          Tools and technologies I work with
        </p>
      </div>

      <div className="relative">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 h-full w-16 bg-gradient-to-r from-[#0f0f0f] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 h-full w-16 bg-gradient-to-l from-[#0f0f0f] to-transparent z-10 pointer-events-none" />

        <motion.div
          className="flex gap-10"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            duration: 25,
            ease: "linear",
          }}
        >
          {doubled.map(({ icon, label }, index) => (
            <div
              key={index}
              className="flex flex-col items-center gap-2 flex-shrink-0 group"
            >
              <div className="text-4xl md:text-5xl transition-transform duration-200 group-hover:scale-110">
                {icon}
              </div>
              <span className="text-gray-600 text-xs group-hover:text-gray-400 transition-colors">
                {label}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TechStack;
