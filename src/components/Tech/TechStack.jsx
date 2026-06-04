import React from "react";
import { motion } from "framer-motion";
import { FaJava, FaReact, FaNodeJs, FaDocker, FaAws, FaGitAlt, FaGithub } from "react-icons/fa";
import {
  SiMongodb,
  SiSpringboot,
  SiSpring,
  SiPostgresql,
  SiJavascript,
  SiTypescript,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiMysql,
  SiC,
  SiRedis,
  SiExpress,
  SiNginx,
  SiPostman,
  SiRabbitmq,
  SiApachekafka,
  SiGithubactions,
  SiVercel,
  SiRender,
  SiVite,
  SiIntellijidea,
} from "react-icons/si";

const categories = [
  {
    name: "Languages",
    techs: [
      { icon: <FaJava />, label: "Java", color: "#f89820" },
      { icon: <SiC />, label: "C", color: "#6b9fe4" },
      { icon: <SiJavascript />, label: "JavaScript", color: "#f0db4f" },
      { icon: <SiTypescript />, label: "TypeScript", color: "#3178c6" },
    ],
  },
  {
    name: "Frontend",
    techs: [
      { icon: <SiHtml5 />, label: "HTML", color: "#e34c26" },
      { icon: <SiCss3 />, label: "CSS", color: "#264de4" },
      { icon: <FaReact />, label: "React.js", color: "#61DBFB" },
      { icon: <FaReact />, label: "React Native", color: "#61DBFB" },
      { icon: <SiTailwindcss />, label: "Tailwind CSS", color: "#38bdf8" },
      { icon: null, label: "Zustand", color: "#cb5151" },
      { icon: null, label: "TanStack Query", color: "#EF4444" },
    ],
  },
  {
    name: "Backend",
    techs: [
      { icon: <FaNodeJs />, label: "Node.js", color: "#68A063" },
      { icon: <SiExpress />, label: "Express.js", color: "#ffffff" },
      { icon: <SiSpringboot />, label: "Spring Boot", color: "#6DB33F" },
      { icon: <SiSpring />, label: "Spring MVC", color: "#6DB33F" },
      { icon: null, label: "Microservices", color: "#cb5151" },
    ],
  },
  {
    name: "Database",
    techs: [
      { icon: <SiPostgresql />, label: "PostgreSQL", color: "#336791" },
      { icon: <SiMongodb />, label: "MongoDB", color: "#47A248" },
      { icon: <SiMysql />, label: "MySQL", color: "#00758F" },
      { icon: <SiRedis />, label: "Redis", color: "#DC382D" },
    ],
  },
  {
    name: "DevOps & Cloud",
    techs: [
      { icon: <FaDocker />, label: "Docker", color: "#0db7ed" },
      { icon: <FaGitAlt />, label: "Git", color: "#F05032" },
      { icon: <FaGithub />, label: "GitHub", color: "#ffffff" },
      { icon: <SiGithubactions />, label: "GitHub Actions", color: "#2088FF" },
      { icon: <FaAws />, label: "AWS", color: "#FF9900" },
      { icon: null, label: "CI/CD", color: "#cb5151" },
      { icon: <SiNginx />, label: "NGINX", color: "#009900" },
      { icon: <FaAws />, label: "EC2", color: "#FF9900" },
      { icon: <FaAws />, label: "RDS", color: "#FF9900" },
      { icon: <FaAws />, label: "ECR", color: "#FF9900" },
      { icon: <FaAws />, label: "ECS", color: "#FF9900" },
      { icon: <FaAws />, label: "ALB", color: "#FF9900" },
      { icon: <FaAws />, label: "Lambda", color: "#FF9900" },
      { icon: <FaAws />, label: "Bastion Host", color: "#FF9900" },
      { icon: <FaAws />, label: "ACM / SSL", color: "#FF9900" },
      { icon: <SiVercel />, label: "Vercel", color: "#ffffff" },
      { icon: <SiRender />, label: "Render", color: "#46E3B7" },
    ],
  },
  {
    name: "Security & Messaging",
    techs: [
      { icon: null, label: "JWT", color: "#cb5151" },
      { icon: null, label: "OAuth", color: "#EB5424" },
      { icon: null, label: "reCAPTCHA", color: "#4A90D9" },
      { icon: null, label: "Rate Limiting", color: "#cb5151" },
      { icon: <SiPostman />, label: "Postman", color: "#FF6C37" },
      { icon: <SiRabbitmq />, label: "RabbitMQ", color: "#FF6600" },
      { icon: <SiApachekafka />, label: "Kafka", color: "#ffffff" },
      { icon: null, label: "MQTT", color: "#660066" },
    ],
  },
];

const TechStack = () => {
  return (
    <section className="py-20 px-6" id="techstack">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center text-white"
        >
          Tech <span className="text-[#cb5151]">Stack</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="text-gray-500 text-sm text-center mt-3 mb-14"
        >
          Tools and technologies I work with
        </motion.p>

        {/* Categories */}
        <div className="flex flex-col gap-10">
          {categories.map((cat, ci) => (
            <motion.div
              key={cat.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: ci * 0.08 }}
            >
              {/* Category label */}
              <div className="flex items-center gap-3 mb-4">
                <span className="text-xs font-semibold uppercase tracking-widest text-[#cb5151] shrink-0">
                  {cat.name}
                </span>
                <div className="flex-1 h-px bg-white/5" />
              </div>

              {/* Tech chips */}
              <div className="flex flex-wrap gap-2.5">
                {cat.techs.map(({ icon, label, color }, ti) => (
                  <motion.div
                    key={label}
                    initial={{ opacity: 0, scale: 0.85 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.25, delay: ci * 0.08 + ti * 0.04 }}
                    whileHover={{ y: -3 }}
                    className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#1a1a1a] border border-white/5 hover:border-white/15 transition-all duration-200 cursor-default group"
                  >
                    {icon && (
                      <span
                        className="text-lg transition-transform duration-200 group-hover:scale-110 shrink-0"
                        style={{ color }}
                      >
                        {icon}
                      </span>
                    )}
                    {!icon && (
                      <span
                        className="w-1.5 h-1.5 rounded-full shrink-0"
                        style={{ backgroundColor: color }}
                      />
                    )}
                    <span className="text-sm text-gray-400 group-hover:text-white transition-colors font-medium whitespace-nowrap">
                      {label}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
