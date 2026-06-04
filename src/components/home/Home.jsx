import React, { useState, useEffect, useMemo } from "react";
import { motion } from "framer-motion";
import ss from "./images/ss.jpg";
import { FiMail, FiPhone } from "react-icons/fi";

const fullText =
  "Passionate full-stack developer skilled in React,Node.js, Spring Boot, MongoDB, and REST APIs. Aspiring DevOps engineer constantly exploring new technologies and cloud tools.";

const NUM_STARS = 160;
const NUM_SHOOTING = 5;

function rand(min, max) {
  return Math.random() * (max - min) + min;
}

function StarField() {
  const stars = useMemo(() =>
    Array.from({ length: NUM_STARS }, (_, i) => ({
      id: i,
      x: rand(0, 100),
      y: rand(0, 100),
      r: rand(0.6, 2),
      delay: rand(0, 4),
      duration: rand(2.5, 5),
    })), []);

  const shootingStars = useMemo(() =>
    Array.from({ length: NUM_SHOOTING }, (_, i) => ({
      id: i,
      startX: rand(10, 70),
      startY: rand(5, 40),
      delay: i * 3.2 + rand(0, 2),
    })), []);

  return (
    <svg
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ zIndex: 0 }}
      xmlns="http://www.w3.org/2000/svg"
    >
      {stars.map((s) => (
        <motion.circle
          key={s.id}
          cx={`${s.x}%`}
          cy={`${s.y}%`}
          r={s.r}
          fill="white"
          initial={{ opacity: 0.15 }}
          animate={{ opacity: [0.15, 0.9, 0.15] }}
          transition={{
            duration: s.duration,
            delay: s.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {shootingStars.map((s) => (
        <motion.line
          key={`sh-${s.id}`}
          x1={`${s.startX}%`}
          y1={`${s.startY}%`}
          x2={`${s.startX + 12}%`}
          y2={`${s.startY + 6}%`}
          stroke="white"
          strokeWidth="1.2"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{
            pathLength: [0, 1, 0],
            opacity: [0, 0.9, 0],
            x1: [`${s.startX}%`, `${s.startX + 20}%`],
            y1: [`${s.startY}%`, `${s.startY + 10}%`],
            x2: [`${s.startX + 12}%`, `${s.startX + 32}%`],
            y2: [`${s.startY + 6}%`, `${s.startY + 16}%`],
          }}
          transition={{
            duration: 1.1,
            delay: s.delay,
            repeat: Infinity,
            repeatDelay: 7 + rand(0, 5),
            ease: "easeIn",
          }}
        />
      ))}
    </svg>
  );
}

function Home() {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayedText((prev) => prev + fullText[i]);
      i++;
      if (i === fullText.length) clearInterval(interval);
    }, 30);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative bg-[#0f0f0f] min-h-screen flex items-center justify-center overflow-hidden">
      {/* Starfield */}
      <StarField />

      {/* Ambient blobs */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-[#cb5151]/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#cb5151]/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2 pointer-events-none" />

      <div className="relative z-10 max-w-6xl w-full mx-auto px-6 pt-28 pb-16 flex flex-col-reverse md:flex-row items-center justify-between gap-12">
        {/* Text */}
        <div className="flex-1 text-center md:text-left">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-[#cb5151] text-sm font-semibold uppercase tracking-widest mb-3"
          >
            Full Stack Developer
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight"
          >
            Hi, I'm <span className="text-[#cb5151]">Saurabh</span>
            <br />
            <span className="text-[#cb5151]">Srivastav</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="text-gray-400 text-sm sm:text-base mt-6 max-w-xl mx-auto md:mx-0 leading-relaxed min-h-[72px]"
          >
            {displayedText}
            <span className="text-[#cb5151] animate-pulse">|</span>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.9 }}
            className="flex flex-col sm:flex-row gap-3 mt-8 justify-center md:justify-start"
          >
            <a
              href="/SaurabhResumeoriginal.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#cb5151] hover:bg-[#a83e3e] text-white font-semibold py-3 px-8 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-[#cb5151]/30 text-sm"
            >
              Download Resume
            </a>
            <a
              href="#about"
              className="border border-white/15 hover:border-[#cb5151]/60 text-white font-semibold py-3 px-8 rounded-xl transition-all duration-300 hover:bg-[#cb5151]/10 text-sm"
            >
              Know More
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="flex flex-col sm:flex-row gap-4 mt-6 text-gray-500 text-xs justify-center md:justify-start"
          >
            <a
              href="mailto:saurabhsri.mau@gmail.com"
              className="flex items-center gap-2 hover:text-[#cb5151] transition-colors"
            >
              <FiMail size={14} /> saurabhsri.mau@gmail.com
            </a>
            <a
              href="tel:+916306255916"
              className="flex items-center gap-2 hover:text-[#cb5151] transition-colors"
            >
              <FiPhone size={14} /> +91 6306255916
            </a>
          </motion.div>
        </div>

        {/* Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="flex-shrink-0"
        >
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-[#cb5151]/20 blur-2xl scale-110 pointer-events-none" />
            <img
              src={ss}
              alt="Saurabh Srivastav"
              className="relative w-52 h-52 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 object-cover rounded-full border-2 border-[#cb5151]/40 shadow-2xl shadow-[#cb5151]/20"
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Home;
