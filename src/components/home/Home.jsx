import React, { useState, useEffect } from "react";
import bg from "./images/bg.svg";
import ss from "./images/ss.jpg";
import { motion } from "framer-motion";
import { FiMail, FiPhone } from "react-icons/fi"; // Import icons from react-icons

function Home() {
  const text =
    "I'm Passionate and curious JAVA full-stack developer with a love for building interactive web experiences, Skilled in React, Spring Boot, MongoDB, REST APIs, and aspiring DevOps engineer.Constantly learning, improving, and exploring new technologies and cloud tools";

  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayedText((prev) => prev + text[i]);
      i++;
      if (i === text.length) clearInterval(interval);
    }, 40);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* Mobile Section */}
      <div className="bg-[#1A1A1A] min-[763px]:hidden w-screen h-screen gap-20 flex justify-center items-center ">
        <img
          src={bg}
          className="min-[763px]:hidden absolute top-4 object-cover left-0 "
          alt=""
        />
        <img
          src={bg}
          className="min-[763px]:hidden absolute top-4 object-cover right-0 "
          alt=""
        />

        <div className="md:hidden ">
          <div className="flex flex-col md:hidden justify-center items-center  ">
            <div className="right  mb-20 p-3 z-50 md:hidden  ">
              <motion.img
                whileInView={{ scale: [0, 1] }}
                transition={{ duration: 2, ease: "easeInOut" }}
                src={ss}
                className="h-[70vw] w-[70vw] object-cover rounded-[100%] border-red border-3 shadow-red-500 shadow-xl"
                alt=""
              />
            </div>
            <div className=" left md:hidden z-[100] p-2 flex flex-col cursor-pointer ">
              <motion.h1
                whileInView={{ scale: [0, 1] }}
                transition={{ duration: 1.5, ease: "easeIn" }}
                className={`text-white text-3xl flex relative justify-center font-bold '}`}
              >
                Hello, I'm{" "}
                <span className="text-[#c25959] max-[403px]:absolute ">
                  <br />
                  Saurabh Srivastav
                </span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className="text-white text-lg text-center mt-9 "
              >
                {displayedText}
                <span className="animate-pulse">|</span>
              </motion.p>

              {/* Resume Button */}
              <div className="flex justify-center mt-6">
                <a
                  href="/path-to-your-resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#c25959] hover:bg-red-700 text-white font-bold py-2 px-6 rounded-lg transition-colors duration-300"
                >
                  Download Resume
                </a>
              </div>

              {/* Contact Info */}
              <div className="flex flex-col items-center gap-3 mt-4 text-white text-lg">
                <a
                  href="mailto:your-email@example.com"
                  className="flex items-center gap-2 hover:text-[#c25959] transition-colors"
                >
                  <FiMail size={20} className="mr-2" /> saurabhsri.mau@gmail.com
                </a>
                <a
                  href="tel:+911234567890"
                  className="flex items-center gap-2 hover:text-[#c25959] transition-colors"
                >
                  <FiPhone size={20} /> +91 6306255916
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Laptop Section */}
      <div className="bg-[#1A1A1A] max-[763px]:hidden  w-screen h-screen gap-20 flex justify-center items-center m ">
        <img
          src={bg}
          className="absolute top-4 object-cover left-0 w-[70%]"
          alt=""
        />
        <img
          src={bg}
          className="absolute top-4 object-cover right-0 w-[70%]"
          alt=""
        />
        <div className="left max-md:hidden z-[100] flex flex-col justify-center items-center w-1/2">
          <div className=" left md:hidden z-[100] p-2 flex flex-col cursor-pointer ">
            <motion.h1
              whileInView={{ scale: [0, 1] }}
              transition={{ duration: 1.5, ease: "easeIn" }}
              className={`text-white text-3xl flex relative justify-center font-bold '}`}
            >
              Hello, I'm{" "}
              <span className="text-[#cb5151] text-5xl max-[403px]:absolute ">
                <br />
                Saurabh Srivastav
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              className="text-white text-lg text-center mt-9 "
            >
              {displayedText}
              <span className="animate-pulse">|</span>
            </motion.p>

            {/* Resume Button */}
            <div className="flex justify-center mt-6">
              <a
                href="/path-to-your-resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#cb5151] hover:bg-red-700 text-white font-bold py-2 px-6 rounded-lg transition-colors duration-300"
              >
                Download Resume
              </a>
            </div>

            {/* Contact Info */}
            <div className="flex flex-col items-center gap-3 mt-4 text-white text-lg">
              <a
                href="mailto:saurabhsri.mau@gmail.com"
                className="flex hover:text-[#cb5151] transition-colors"
              >
                <FiMail size={20} className="mr-2" /> saurabhsri.mau@gmail.com
              </a>
              <a
                href="tel:+6306255916"
                className="flex items-center gap-2 hover:text-[#cb5151] transition-colors"
              >
                <FiPhone size={20} /> +91 6306255916
              </a>
            </div>
          </div>
        </div>

        <div className="right max-md:hidden flex justify-center mt-10 mb-20 w-1/2 z-50">
          <motion.img
            whileInView={{ scale: [0, 0.9] }}
            transition={{ duration: 2, ease: "easeInOut" }}
            src={ss}
            className={`h-[500px] w-[500px] object-cover rounded-full border-red border-3 shadow-red-500 shadow-xl `}
            alt=""
          />
        </div>
      </div>
    </>
  );
}

export default Home;
