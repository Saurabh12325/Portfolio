import React from "react";
import { motion } from "framer-motion";

import quiz1 from "./quizaki.png";
import quiz2 from "./si.png";
import finance1 from "./fi.png";
import finance2 from "./log.png";
import finance3 from "./sii.png";

const projects = [
  {
    id: 1,
    title: "My Finance Website",
    description:
      "A modern finance website built with React, Tailwind CSS, and Framer Motion. Features interactive charts and a clean dashboard UI.",
    images: [finance1, finance2, finance3],
    live: "https://my-finance-website-g1sx.vercel.app/",
    github: "https://github.com/Saurabh12325/Myfinance",
    tags: ["React", "Tailwind", "Framer Motion"],
  },
  {
    id: 2,
    title: "Quizaki Website",
    description:
      "Full-stack quiz platform with clean UI, scalable backend architecture, real-time scoring, and user authentication.",
    images: [quiz1, quiz2],
    live: "https://quizaki.vercel.app/",
    github: "https://github.com/Saurabh12325/quizaki",
    tags: ["React", "Node.js", "MongoDB"],
  },
];

const ImageSlider = ({ images }) => {
  if (!images || images.length === 0) return null;

  return (
    <div className="relative w-full h-52 overflow-hidden bg-black">
      <motion.div
        className="flex h-full"
        style={{ width: `${images.length * 100}%` }}
        whileInView={
          images.length > 1
            ? { x: `-${(images.length - 1) * (100 / images.length)}%` }
            : {}
        }
        transition={{ duration: 2.5, ease: "easeInOut", delay: 0.8 }}
      >
        {images.map((img, i) => (
          <div
            key={i}
            className="h-full"
            style={{ width: `${100 / images.length}%` }}
          >
            <img
              src={img}
              alt={`project-${i}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

function Project() {
  return (
    <section className="bg-[#111111] text-white py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center mb-4"
        >
          My <span className="text-[#cb5151]">Projects</span>
        </motion.h2>
        <p className="text-gray-500 text-sm text-center mb-16">
          A selection of things I've built
        </p>

        <div className="grid gap-8 sm:grid-cols-2">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="bg-[#1a1a1a] rounded-2xl overflow-hidden border border-white/5 shadow-lg shadow-black/40 hover:border-[#cb5151]/30 transition-all duration-300 hover:shadow-[#cb5151]/10 hover:shadow-xl group"
            >
              {/* Image Slider */}
              <div className="overflow-hidden">
                <ImageSlider images={project.images} />
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs bg-[#cb5151]/15 text-[#cb5151] px-2 py-0.5 rounded-full font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-lg font-semibold mb-2 group-hover:text-[#cb5151] transition-colors">
                  {project.title}
                </h3>

                <p className="text-gray-500 text-sm leading-relaxed mb-6">
                  {project.description}
                </p>

                <div className="flex gap-3">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 text-sm rounded-lg bg-[#cb5151] text-white font-medium hover:bg-[#a83e3e] transition-colors"
                  >
                    Live Demo
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 text-sm rounded-lg border border-white/15 hover:border-white/40 hover:bg-white/5 transition-colors"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Project;
