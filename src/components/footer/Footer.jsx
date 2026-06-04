import React from "react";
import { FiLinkedin, FiGithub, FiMail, FiHeart } from "react-icons/fi";

const quickLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#techstack", label: "Tech Stack" },
  { href: "#experience", label: "Experience" },
  { href: "#certificates", label: "Certificates" },
  { href: "#project", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

const socials = [
  {
    icon: <FiLinkedin size={16} />,
    href: "https://www.linkedin.com/in/saurabh-srivastav-ab7712285/",
    label: "LinkedIn",
  },
  {
    icon: <FiGithub size={16} />,
    href: "https://github.com/Saurabh12325",
    label: "GitHub",
  },
  {
    icon: <FiMail size={16} />,
    href: "mailto:saurabhsri.mau@gmail.com",
    label: "Email",
  },
];

function Footer() {
  return (
    <footer className="border-t border-white/5 text-white px-6 pt-14 pb-8">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <span className="text-[#cb5151] text-xl font-bold tracking-widest uppercase">
              Saurabh
            </span>
            <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
              Full Stack Developer · Ex-Intern @MacroCosmos Creations.
              Building scalable systems with Node.js, Spring Boot &amp; React.
            </p>
            <div className="flex gap-3">
              {socials.map(({ icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={label}
                  className="w-8 h-8 rounded-lg bg-[#1a1a1a] border border-white/5 flex items-center justify-center text-gray-400 hover:text-[#cb5151] hover:border-[#cb5151]/30 transition-all duration-200"
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-[#cb5151] mb-4">
              Quick Links
            </h4>
            <ul className="flex flex-col gap-2.5">
              {quickLinks.map(({ href, label }) => (
                <li key={href}>
                  <a
                    href={href}
                    className="text-gray-400 text-sm hover:text-white transition-colors"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-[#cb5151] mb-4">
              Contact
            </h4>
            <div className="flex flex-col gap-3 text-sm text-gray-400">
              <a
                href="mailto:saurabhsri.mau@gmail.com"
                className="hover:text-white transition-colors break-all"
              >
                saurabhsri.mau@gmail.com
              </a>
              <a
                href="tel:+916306255916"
                className="hover:text-white transition-colors"
              >
                +91 6306255916
              </a>
              <p className="text-gray-600 text-xs">Ghaziabad, Uttar Pradesh, India</p>
            </div>
          </div>
        </div>

        {/* Divider + copyright */}
        <div className="border-t border-white/5 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-gray-600 text-xs">
          <p>© {new Date().getFullYear()} Saurabh Srivastav. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Built with <FiHeart size={11} className="text-[#cb5151]" /> using React &amp; Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
