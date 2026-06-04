import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiChevronLeft, FiChevronRight, FiExternalLink } from "react-icons/fi";
import apnaJava from "./images/apna_java.jpg";
import snowstorm from "./images/Screenshot 2026-06-04 181119.png";

const certificates = [
  {
    id: 1,
    title: "Alpha (DSA with Java)",
    issuer: "Apna College",
    issuedBy: "Shradha Khapra",
    tags: ["Java", "DSA", "Algorithms"],
    image: apnaJava,
    verifyUrl:
      "https://app.truscholar.io/profile?credId=6999ebf107cac02f39ff08ae",
  },
  {
    id: 2,
    title: "SnowStorm Hackathon",
    issuer: "Tech4Hack",
    issuedBy: "Tech4Hack",
    tags: ["Hackathon", "Tech4Hack", "Competitive Coding"],
    image: snowstorm,
    verifyUrl: "#",
  },
];

function Certificates() {
  const [current, setCurrent] = useState(0);

  const prev = () =>
    setCurrent((c) => (c - 1 + certificates.length) % certificates.length);
  const next = () => setCurrent((c) => (c + 1) % certificates.length);

  return (
    <section className="text-white py-20 px-6" id="certificates">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center mb-12"
        >
          My <span className="text-[#cb5151]">Certificates</span>
        </motion.h2>

        {/* Carousel */}
        <div className="relative flex items-center justify-center gap-4">
          {/* Prev */}
          <button
            onClick={prev}
            className="z-10 w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:border-[#cb5151]/60 hover:text-[#cb5151] transition-all duration-200 shrink-0"
          >
            <FiChevronLeft size={20} />
          </button>

          {/* Card */}
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.35 }}
              className="relative w-full max-w-lg rounded-2xl overflow-hidden group cursor-pointer"
              style={{ aspectRatio: "4/3" }}
            >
              {/* Image */}
              <img
                src={certificates[current].image}
                alt={certificates[current].title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />

              {/* Always-visible title bar */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent px-5 pt-10 pb-4">
                <h3 className="text-white font-bold text-lg leading-snug">
                  {certificates[current].title}
                </h3>
              </div>

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-black/70 flex flex-col justify-end px-5 pb-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="text-white font-bold text-lg mb-1">
                  {certificates[current].title}
                </h3>
                <p className="text-[#cb5151] text-sm font-semibold mb-0.5">
                  {certificates[current].issuer}
                </p>
                <p className="text-gray-400 text-xs mb-3">
                  Issued by {certificates[current].issuedBy}
                </p>
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {certificates[current].tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs bg-[#cb5151]/20 text-[#cb5151] border border-[#cb5151]/30 px-2 py-0.5 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <a
                  href={certificates[current].verifyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-xs text-[#cb5151] hover:text-white transition-colors font-medium w-fit"
                >
                  Verify <FiExternalLink size={11} />
                </a>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Next */}
          <button
            onClick={next}
            className="z-10 w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:border-[#cb5151]/60 hover:text-[#cb5151] transition-all duration-200 shrink-0"
          >
            <FiChevronRight size={20} />
          </button>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-6">
          {certificates.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-2 h-2 rounded-full transition-all duration-200 ${
                i === current ? "bg-[#cb5151] w-5" : "bg-white/20"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Certificates;
