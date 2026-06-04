import React, { useState } from "react";
import { motion } from "framer-motion";
import { FiMail, FiPhone, FiMapPin, FiSend, FiLinkedin, FiGithub } from "react-icons/fi";

const contactInfo = [
  {
    icon: <FiMail size={18} />,
    label: "Email",
    value: "saurabhsri.mau@gmail.com",
    href: "mailto:saurabhsri.mau@gmail.com",
  },
  {
    icon: <FiPhone size={18} />,
    label: "Phone",
    value: "+91 6306255916",
    href: "tel:+916306255916",
  },
  {
    icon: <FiMapPin size={18} />,
    label: "Location",
    value: "Ghaziabad, Uttar Pradesh, India",
    href: null,
  },
];

const socials = [
  {
    icon: <FiLinkedin size={18} />,
    href: "https://www.linkedin.com/in/saurabh-srivastav-ab7712285/",
    label: "LinkedIn",
  },
  {
    icon: <FiGithub size={18} />,
    href: "https://github.com/Saurabh12325",
    label: "GitHub",
  },
];

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, subject, message } = form;
    const body = `Name: ${name}%0AEmail: ${email}%0A%0A${message}`;
    window.location.href = `mailto:saurabhsri.mau@gmail.com?subject=${encodeURIComponent(subject)}&body=${body}`;
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setForm({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <section className="text-white py-20 px-6" id="contact">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center mb-4"
        >
          Get In <span className="text-[#cb5151]">Touch</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="text-gray-500 text-sm text-center mb-14"
        >
          Have a project in mind or want to collaborate? Drop a message.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Left — Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-6"
          >
            <div>
              <h3 className="text-white font-bold text-xl mb-2">Let's work together</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                I'm open to full-time roles, freelance projects, and collaborations.
                Whether it's a backend system, a full-stack app, or a cloud deployment —
                feel free to reach out.
              </p>
            </div>

            {/* Contact details */}
            <div className="flex flex-col gap-4">
              {contactInfo.map(({ icon, label, value, href }) => (
                <div key={label} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#1a1a1a] border border-white/5 flex items-center justify-center text-[#cb5151] shrink-0">
                    {icon}
                  </div>
                  <div>
                    <p className="text-gray-500 text-xs uppercase tracking-wider mb-0.5">{label}</p>
                    {href ? (
                      <a
                        href={href}
                        className="text-white text-sm font-medium hover:text-[#cb5151] transition-colors"
                      >
                        {value}
                      </a>
                    ) : (
                      <p className="text-white text-sm font-medium">{value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Socials */}
            <div className="flex gap-3 mt-2">
              {socials.map(({ icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={label}
                  className="w-10 h-10 rounded-xl bg-[#1a1a1a] border border-white/5 flex items-center justify-center text-gray-400 hover:text-[#cb5151] hover:border-[#cb5151]/30 transition-all duration-200"
                >
                  {icon}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Right — Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form
              onSubmit={handleSubmit}
              className="bg-[#1a1a1a] rounded-2xl p-6 border border-white/5 shadow-lg shadow-black/40 flex flex-col gap-4"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className="text-gray-500 text-xs uppercase tracking-wider">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    placeholder="Saurabh Srivastav"
                    className="bg-[#111] border border-white/8 rounded-xl px-4 py-2.5 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-[#cb5151]/50 transition-colors"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-gray-500 text-xs uppercase tracking-wider">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    placeholder="you@example.com"
                    className="bg-[#111] border border-white/8 rounded-xl px-4 py-2.5 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-[#cb5151]/50 transition-colors"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-gray-500 text-xs uppercase tracking-wider">Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  required
                  placeholder="Project Collaboration / Job Opportunity / Feedback"
                  className="bg-[#111] border border-white/8 rounded-xl px-4 py-2.5 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-[#cb5151]/50 transition-colors"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-gray-500 text-xs uppercase tracking-wider">Message</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder="Tell me about your project, idea, or feedback..."
                  className="bg-[#111] border border-white/8 rounded-xl px-4 py-2.5 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-[#cb5151]/50 transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="flex items-center justify-center gap-2 bg-[#cb5151] hover:bg-[#a83e3e] text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-[#cb5151]/30 text-sm mt-1"
              >
                <FiSend size={15} />
                {submitted ? "Opening mail client…" : "Send Message"}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
