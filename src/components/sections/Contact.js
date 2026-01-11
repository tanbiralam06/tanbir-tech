"use client";

import { useState } from "react";

import { motion } from "framer-motion";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import { Mail, Github } from "lucide-react";
import { FaXTwitter, FaLinkedin } from "react-icons/fa6";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact: "",
    message: "",
  });
  const [status, setStatus] = useState("idle"); // idle, loading, success, error

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", contact: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setStatus("error");
    }
  };

  return (
    <Section id="contact" className="bg-slate-50 dark:bg-slate-900/50 py-20">
      <div className="max-w-5xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-white dark:bg-slate-800 rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row"
        >
          {/* Left Panel - Contact Info */}
          <div className="md:w-2/5 bg-slate-900 text-white p-8 md:p-12 flex flex-col justify-between relative overflow-hidden">
            {/* Decorative circle */}
            <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-white/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-40 h-40 bg-primary/20 rounded-full blur-3xl"></div>

            <div className="relative z-10">
              <h2 className="text-3xl font-bold mb-4">Get In Touch</h2>
              <p className="text-slate-300 mb-8 leading-relaxed text-sm md:text-base">
                Have a project in mind or just want to discuss? I'm open to new
                opportunities and collaborations.
              </p>

              <div className="space-y-6">
                <a
                  href="mailto:social.tanbir@gmail.com"
                  className="flex items-center gap-4 text-slate-300 hover:text-white transition-colors group"
                >
                  <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-white group-hover:bg-primary transition-colors">
                    <Mail size={18} />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 uppercase tracking-wider mb-0.5">
                      Email
                    </p>
                    <p className="font-medium text-sm md:text-base">
                      social.tanbir@gmail.com
                    </p>
                  </div>
                </a>
              </div>
            </div>

            <div className="relative z-10 mt-12">
              <h4 className="text-sm font-semibold uppercase tracking-wider mb-4 text-slate-400">
                Follow Me
              </h4>
              <div className="flex gap-4">
                <a
                  href="https://github.com/tanbiralam06"
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white hover:text-slate-900 transition-all duration-300"
                >
                  <Github size={18} />
                </a>
                <a
                  href="https://www.linkedin.com/in/tanbir06/"
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white hover:text-slate-900 transition-all duration-300"
                >
                  <FaLinkedin size={18} />
                </a>
                <a
                  href="https://x.com/Tanbir_tech"
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white hover:text-slate-900 transition-all duration-300"
                >
                  <FaXTwitter size={18} />
                </a>
              </div>
            </div>
          </div>

          {/* Right Panel - Form */}
          <div className="md:w-3/5 p-8 md:p-12 bg-white dark:bg-slate-800">
            <h3 className="text-2xl font-bold mb-6 text-slate-900 dark:text-white">
              Send a Message
            </h3>
            <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
              <div className="grid md:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <label
                    htmlFor="name"
                    className="text-sm font-medium text-slate-700 dark:text-slate-300"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all text-sm"
                    placeholder="Enter your name"
                  />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="contact"
                    className="text-sm font-medium text-slate-700 dark:text-slate-300"
                  >
                    Contact No
                  </label>
                  <input
                    type="tel"
                    id="contact"
                    value={formData.contact}
                    onChange={handleChange}
                    required
                    pattern="[0-9]{10}"
                    title="Please enter a valid 10-digit mobile number"
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all text-sm"
                    placeholder="Enter your contact number"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="email"
                  className="text-sm font-medium text-slate-700 dark:text-slate-300"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all text-sm"
                  placeholder="Enter your email"
                />
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="message"
                  className="text-sm font-medium text-slate-700 dark:text-slate-300"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none text-sm"
                  placeholder="Tell me about your project..."
                />
              </div>

              <div className="pt-2">
                <Button
                  type="submit"
                  className="w-full cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed py-3 text-base shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all"
                  disabled={status === "loading"}
                >
                  {status === "loading" ? "Sending..." : "Send Message"}
                </Button>
              </div>

              {status === "success" && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-3 bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400 rounded-lg text-center text-sm font-medium"
                >
                  Message sent successfully!
                </motion.div>
              )}
              {status === "error" && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-3 bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 rounded-lg text-center text-sm font-medium"
                >
                  Failed to send message. Please try again.
                </motion.div>
              )}
            </form>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
