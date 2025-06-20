import React from "react";
import { motion } from "framer-motion";

const leftVariant = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
};

const rightVariant = {
  hidden: { opacity: 0, x: 100 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
};

function About() {
  return (
    <div className="bg-black min-h-screen w-full flex flex-col items-center py-12">
      <h1 className="text-white text-4xl font-bold mb-12 text-center">
        My Journey as a Java FullStack Developer
      </h1>

      <div className="relative w-full max-w-5xl">
        {/* Center Vertical Line */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1 bg-red-500 h-full z-0"></div>

        {/* Timeline Block 1 - Left */}
        <motion.div
          className="flex justify-between items-center mb-16 relative z-10"
          variants={leftVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="w-5/12 text-right text-white">
            <div className="bg-red-400 p-4 rounded-xl shadow-lg">
              <h2 className="font-bold text-xl mb-2">Started Learning Java</h2>
              <p>
                In 2022, I began with Java basics like OOP, data structures,
                and problem-solving.
              </p>
            </div>
          </div>
          <div className="w-1/12 flex justify-center items-center">
            <div className="w-6 h-6 bg-white rounded-full border-4 border-red-500"></div>
          </div>
          <div className="w-5/12"></div>
        </motion.div>

        {/* Timeline Block 2 - Right */}
        <motion.div
          className="flex justify-between items-center mb-16 relative z-10"
          variants={rightVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="w-5/12"></div>
          <div className="w-1/12 flex justify-center items-center">
            <div className="w-6 h-6 bg-white rounded-full border-4 border-red-500"></div>
          </div>
          <div className="w-5/12 text-left text-white">
            <div className="bg-amber-500 p-4 rounded-xl shadow-lg">
              <h2 className="font-bold text-xl mb-2">Learned Spring Boot</h2>
              <p>
                I built REST APIs, integrated with MongoDB, and secured apps
                using JWT.
              </p>
            </div>
          </div>
        </motion.div>
        {/* Timeline Block 1 - Left */}
        <motion.div
          className="flex justify-between items-center mb-16 relative z-10"
          variants={leftVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="w-5/12 text-right text-white">
            <div className="bg-red-400 p-4 rounded-xl shadow-lg">
              <h2 className="font-bold text-xl mb-2">Started Learning Java</h2>
              <p>
                In 2022, I began with Java basics like OOP, data structures,
                and problem-solving.
              </p>
            </div>
          </div>
          <div className="w-1/12 flex justify-center items-center">
            <div className="w-6 h-6 bg-white rounded-full border-4 border-red-500"></div>
          </div>
          <div className="w-5/12"></div>
        </motion.div>

        {/* Timeline Block 2 - Right */}
        <motion.div
          className="flex justify-between items-center mb-16 relative z-10"
          variants={rightVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="w-5/12"></div>
          <div className="w-1/12 flex justify-center items-center">
            <div className="w-6 h-6 bg-white rounded-full border-4 border-red-500"></div>
          </div>
          <div className="w-5/12 text-left text-white">
            <div className="bg-amber-500 p-4 rounded-xl shadow-lg">
              <h2 className="font-bold text-xl mb-2">Learned Spring Boot</h2>
              <p>
                I built REST APIs, integrated with MongoDB, and secured apps
                using JWT.
              </p>
            </div>
          </div>
        </motion.div>
 {/* Timeline Block 1 - Left */}
        <motion.div
          className="flex justify-between items-center mb-16 relative z-10"
          variants={leftVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="w-5/12 text-right text-white">
            <div className="bg-red-400 p-4 rounded-xl shadow-lg">
              <h2 className="font-bold text-xl mb-2">Started Learning Java</h2>
              <p>
                In 2022, I began with Java basics like OOP, data structures,
                and problem-solving.
              </p>
            </div>
          </div>
          <div className="w-1/12 flex justify-center items-center">
            <div className="w-6 h-6 bg-white rounded-full border-4 border-red-500"></div>
          </div>
          <div className="w-5/12"></div>
        </motion.div>

        {/* Timeline Block 2 - Right */}
        <motion.div
          className="flex justify-between items-center mb-16 relative z-10"
          variants={rightVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="w-5/12"></div>
          <div className="w-1/12 flex justify-center items-center">
            <div className="w-6 h-6 bg-white rounded-full border-4 border-red-500"></div>
          </div>
          <div className="w-5/12 text-left text-white">
            <div className="bg-amber-500 p-4 rounded-xl shadow-lg">
              <h2 className="font-bold text-xl mb-2">Learned Spring Boot</h2>
              <p>
                I built REST APIs, integrated with MongoDB, and secured apps
                using JWT.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Repeat for other blocks */}
      </div>
    </div>
  );
}

export default About;
