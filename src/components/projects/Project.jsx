import React from "react";
import { motion } from "framer-motion";

// Quizaki Images (LOCAL)
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
      "A modern finance website built with React, Tailwind CSS, and Framer Motion.",
    images: [finance1, finance2, finance3], // no images → slider will not render
    live: "https://my-finance-website-g1sx.vercel.app/",
    github: "https://github.com/Saurabh12325/Myfinance",
  },
  {
    id: 2,
    title: "Quizaki Website Backend",
    description:
      "Backend & frontend project with clean UI and scalable architecture.",
    images: [quiz1, quiz2],
    live: "https://quizaki.vercel.app/",
    github: "https://github.com/Saurabh12325/quizaki",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: (index) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: index * 0.2,
    },
  }),
};

const ImageSlider = ({ images }) => {
  // Safety check
  if (!images || images.length === 0) return null;

  return (
    <div className="relative w-full h-56 overflow-hidden">
      <motion.div
        className="flex h-full"
        style={{ width: `${images.length * 100}%` }}
        whileHover={
          images.length > 1
            ? { x: `-${(images.length - 1) * (100 / images.length)}%` }
            : {}
        }
        transition={{ duration: 0.8, ease: "easeInOut" }}
      >
        {images.map((img, index) => (
          <div
            key={index}
            className="h-full"
            style={{ width: `${100 / images.length}%` }}
          >
            <img
              src={img}
              alt={`project-${index}`}
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
    <section className="bg-black/90 text-white py-20 px-6">
      <div className=" flex flex-col justify-center items-center p-6">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-white text-5xl font-bold mb-8 text-center shadow-xl shadow-red-200"
        >
          𝓟𝓻𝓸𝓳𝓮𝓬𝓽𝓼
        </motion.h2>
      </div>
      <div className="max-w-7xl mx-auto mt-16">
        {/* Projects Grid */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-2">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={index}
              className="bg-black/80 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
            >
              {/* Image Slider */}
              <ImageSlider images={project.images} />

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">{project.title}</h3>

                <p className="text-slate-400 text-sm leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Links */}
                <div className="flex gap-4">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 text-sm rounded-lg bg-white text-black font-medium hover:bg-gray-200 transition"
                  >
                    Live Demo
                  </a>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 text-sm rounded-lg border border-white/30 hover:bg-white/10 transition"
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
