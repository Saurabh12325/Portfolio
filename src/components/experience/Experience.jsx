import React from "react";
import { motion } from "framer-motion";
import { FiExternalLink, FiMapPin, FiCalendar } from "react-icons/fi";

const experiences = [
  {
    id: 1,
    company: "Cloud Computing Cell",
    siteUrl: "https://new-cccc.vercel.app/",
    location: "Ghaziabad, India",
    role: "Backend Developer",
    period: "Oct 2024 – Present",
    current: true,
    tags: ["Spring Boot", "MongoDB Atlas", "JWT", "REST API"],
    points: [
      {
        label: "Backend Development",
        desc: "Developed services using Spring Boot and MongoDB Atlas",
      },
      {
        label: "Authentication",
        desc: "Implemented JWT and OTP-based authentication",
      },
      {
        label: "API Development",
        desc: "Built REST APIs for frontend integration",
      },
      {
        label: "Database",
        desc: "Designed NoSQL schemas for efficient data handling",
      },
    ],
  },
  {
    id: 2,
    company: "MacroCosmos Creations Pvt Ltd",
    siteUrl: "https://www.macrocosmoscreations.com/",
    letterUrl: "https://drive.google.com/file/d/1izC76-yzwaPudVCOLqSn_AL8mHJ46qa9/view?usp=sharing",
    location: "Bangalore, India",
    role: "Full Stack Developer Intern",
    period: "Nov 2025 – May 2026",
    current: false,
    tags: ["React", "Node.js", "MySQL", "AWS EC2", "CI/CD", "AI Integration"],
    points: [
      {
        label: "Full Stack",
        desc: "Worked on React frontend and Node.js backend with API integration",
      },
      {
        label: "Database",
        desc: "MySQL — created production DB replica, handled migrations, queries, joins, cascading, and schema updates",
      },
      {
        label: "DevOps",
        desc: "Implemented CI/CD pipelines and AWS EC2 deployment using PM2 and GitHub Actions",
      },
      {
        label: "AI Integration",
        desc: "Worked on AI modules, prompt optimization, and API key integrations",
      },
      {
        label: "Optimization",
        desc: "Fixed bugs and improved performance in production systems",
      },
    ],
  },
];

function Experience() {
  return (
    <section className="text-white py-20 px-6" id="experience">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center mb-4"
        >
          My <span className="text-[#cb5151]">Experience</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="text-gray-500 text-sm text-center mb-16"
        >
          Internships & professional roles I've held
        </motion.p>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-white/8 -translate-x-1/2" />

          <div className="flex flex-col gap-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -60 : 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: index * 0.15, ease: "easeOut" }}
                className={`relative flex items-start gap-6 md:gap-0 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-6 md:left-1/2 -translate-x-1/2 flex items-center justify-center z-10 mt-6">
                  <div
                    className={`w-4 h-4 rounded-full border-2 border-[#cb5151] ${
                      exp.current ? "bg-[#cb5151]" : "bg-[#0f0f0f]"
                    }`}
                  />
                  {exp.current && (
                    <span className="absolute w-4 h-4 rounded-full bg-[#cb5151]/40 animate-ping" />
                  )}
                </div>

                {/* Spacer for opposite side on desktop */}
                <div className="hidden md:block md:w-1/2" />

                {/* Card */}
                <div
                  className={`ml-12 md:ml-0 md:w-1/2 ${
                    index % 2 === 0 ? "md:pl-10" : "md:pr-10"
                  }`}
                >
                  <div className="bg-[#1a1a1a] rounded-2xl p-6 border border-white/5 shadow-lg shadow-black/40 hover:border-[#cb5151]/30 hover:shadow-[#cb5151]/10 hover:shadow-xl transition-all duration-300 group">
                    {/* Company + link */}
                    <div className="flex items-start justify-between gap-3 mb-1">
                      <h3 className="text-white font-bold text-lg leading-snug group-hover:text-[#cb5151] transition-colors">
                        {exp.company}
                      </h3>
                      <div className="flex items-center gap-2 shrink-0">
                        {exp.letterUrl && (
                          <a
                            href={exp.letterUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-xs text-[#cb5151] border border-[#cb5151]/30 px-2 py-0.5 rounded-full hover:bg-[#cb5151]/10 transition-colors font-medium"
                            title="View Experience Letter"
                          >
                            Letter
                          </a>
                        )}
                        <a
                          href={exp.siteUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#cb5151] hover:text-white transition-colors mt-0.5"
                          title="Visit Site"
                        >
                          <FiExternalLink size={16} />
                        </a>
                      </div>
                    </div>

                    {/* Role */}
                    <p className="text-[#cb5151] text-sm font-semibold mb-3">
                      {exp.role}
                    </p>

                    {/* Meta */}
                    <div className="flex flex-wrap gap-4 text-gray-500 text-xs mb-4">
                      <span className="flex items-center gap-1.5">
                        <FiCalendar size={12} />
                        {exp.period}
                        {exp.current && (
                          <span className="ml-1 bg-[#cb5151]/20 text-[#cb5151] px-1.5 py-0.5 rounded-full text-[10px] font-semibold">
                            CURRENT
                          </span>
                        )}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <FiMapPin size={12} />
                        {exp.location}
                      </span>
                    </div>

                    {/* Bullet points */}
                    <ul className="flex flex-col gap-2 mb-5">
                      {exp.points.map((pt) => (
                        <li
                          key={pt.label}
                          className="flex gap-2 text-sm text-gray-400 leading-relaxed"
                        >
                          <span className="text-[#cb5151] mt-0.5 shrink-0">
                            ▸
                          </span>
                          <span>
                            <span className="text-white font-medium">
                              {pt.label}:
                            </span>{" "}
                            {pt.desc}
                          </span>
                        </li>
                      ))}
                    </ul>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {exp.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs bg-[#cb5151]/10 text-[#cb5151] border border-[#cb5151]/20 px-2.5 py-0.5 rounded-full font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
