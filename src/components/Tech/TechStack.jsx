import React from 'react';
import { FaJava, FaReact, FaNodeJs, FaDocker, FaAws } from 'react-icons/fa';
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
} from 'react-icons/si';

const techIcons = [
  <FaJava key="java" className="text-[#f89820]" title="Java" />,
  <SiJavascript key="javascript" className="text-[#f0db4f]" title="JavaScript" />,
  <SiC key="c" className="text-blue-400" title="C" />,
  <SiHtml5 key="html5" className="text-[#e34c26]" title="HTML5" />,
  <SiCss3 key="css3" className="text-[#264de4]" title="CSS3" />,
  <SiTailwindcss key="tailwind" className="text-[#38bdf8]" title="Tailwind CSS" />,
  <FaReact key="react" className="text-[#61DBFB]" title="React" />,
  <SiVite key="vite" className="text-purple-400" title="Vite" />,
  <FaNodeJs key="nodejs" className="text-[#68A063]" title="Node.js" />,
  <SiSpringboot key="springboot" className="text-[#6DB33F]" title="Spring Boot" />,
  <SiPostgresql key="postgresql" className="text-[#336791]" title="PostgreSQL" />,
  <SiMysql key="mysql" className="text-[#00758F]" title="MySQL" />,
  <SiMongodb key="mongodb" className="text-[#47A248]" title="MongoDB" />,
  <FaDocker key="docker" className="text-[#0db7ed]" title="Docker" />,
  <FaReact key="mern" className="text-[#61DBFB]" title="MERN Stack" />,
  <SiIntellijidea key="intellij" className="text-[#000000]" title="IntelliJ IDEA" />,
  <SiVercel key="vercel" className="text-white" title="Vercel" />,
  <SiRender key="render" className="text-[#46E3B7]" title="Render" />,
  <FaAws key="aws" className="text-[#FF9900]" title="AWS" />,
];

const TechStack = () => {
  return (
    <div className="bg-[#1A1A1A] min-h-screen flex flex-col justify-center items-center p-6">
      <h2 className="text-white text-4xl font-bold mb-8">My TechStack</h2>
      <div className="bg-[#2c2c2c] rounded-lg p-8 shadow-lg max-w-[800px] w-full">
        <div className="grid grid-cols-7 gap-8 justify-center">
          {techIcons.map((icon) => (
            <div
              key={icon.key}
              className="text-5xl text-white hover:scale-110 transition-transform duration-300 cursor-pointer flex justify-center"
              title={icon.props.title}
            >
              {icon}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechStack;
