"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Section from "@/components/ui/Section";
import { experience } from "@/data/experience";
import { Briefcase } from "lucide-react";

export default function Experience() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"],
  });

  return (
    <Section id="experience" className="bg-white dark:bg-slate-950">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-20"
      >
        <span className="text-primary font-semibold tracking-wider uppercase text-sm mb-2 block">
          Career Path
        </span>
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900 dark:text-white">
          Work Experience
        </h2>
        <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
          My professional journey and the value I&apos;ve delivered.
        </p>
      </motion.div>

      <div ref={containerRef} className="max-w-4xl mx-auto relative px-4">
        {/* Continuous Gradient Line */}
        <div className="absolute left-8 md:left-1/2 top-4 bottom-0 w-0.5 bg-gradient-to-b from-primary via-purple-500 to-transparent -translate-x-1/2 md:translate-x-0 hidden md:block opacity-20" />
        {/* Mobile Line */}
        <div className="absolute left-6 top-4 bottom-0 w-0.5 bg-gradient-to-b from-primary via-slate-300 to-transparent dark:from-primary dark:via-slate-700 md:hidden opacity-20" />

        <div className="space-y-12">
          {experience.map((job, index) => (
            <motion.div
              key={job.company}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative grid md:grid-cols-2 gap-8 md:gap-16 group"
            >
              {/* Timeline Dot (Desktop Center) */}
              <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 top-0 items-center justify-center">
                <div className="w-4 h-4 bg-primary rounded-full ring-4 ring-white dark:ring-slate-950 z-10 transition-transform duration-300 group-hover:scale-125 group-hover:ring-primary/20" />
              </div>

              {/* Date Column (Desktop: Alternating sides or fixed? Let's keep date on one side for "modern timeline" usually puts date on one side and content on other, OR puts content on right) */}
              {/* For better UX, let's keep content on RIGHT, Date on LEFT for all, effectively a sidemenu style, OR alternating zig zag but cleaner.
                  The user asked for "cool and modern". 
                  Let's do: Left side = Date & Role (Right aligned text), Right side = Company & Details (Left aligned text).
                  This creates a clean split.
              */}

              {/* Left Side: Period & Header info for Desktop */}
              <div
                className={`${
                  index % 2 === 1
                    ? "md:order-last md:text-left"
                    : "md:text-right"
                }`}
              >
                <div className="hidden md:block sticky top-24">
                  <span className="text-5xl font-bold text-slate-100 dark:text-slate-800/50 absolute top-0 -z-10 select-none overflow-hidden transition-colors group-hover:text-primary/5 dark:group-hover:text-primary/10">
                    0{index + 1}
                  </span>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mt-4 group-hover:text-primary transition-colors">
                    {job.role}
                  </h3>
                  <p className="text-primary font-medium mb-2">{job.company}</p>
                  <span className="inline-block px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 text-xs font-semibold rounded-full border border-slate-200 dark:border-slate-700">
                    {job.period}
                  </span>
                </div>
              </div>

              {/* Mobile Header (Visible only on mobile) */}
              <div className="md:hidden pl-12 relative">
                <div className="absolute left-0 top-0 w-3 h-3 bg-primary rounded-full mt-2 ring-4 ring-white dark:ring-slate-950" />
                <span className="text-sm font-semibold text-primary mb-1 block">
                  {job.period}
                </span>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                  {job.role}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 mb-4">
                  {job.company}
                </p>
              </div>

              {/* Right Side: Description card */}
              <div
                className={`${
                  index % 2 === 1 ? "md:order-first md:text-right" : ""
                } md:pt-4`}
              >
                <div
                  className={`bg-slate-50 dark:bg-slate-900/50 p-6 rounded-2xl border border-slate-100 dark:border-slate-800 hover:border-primary/50 dark:hover:border-primary/50 transition-colors duration-300 relative group-hover:shadow-lg dark:shadow-none ${
                    index % 2 === 1 ? "md:mr-auto" : "md:ml-auto"
                  }`}
                >
                  {/* Icon for visual interest */}
                  <div
                    className={`absolute -top-3 ${
                      index % 2 === 1 ? "-right-3 md:-left-3" : "-right-3"
                    } w-10 h-10 bg-white dark:bg-slate-800 rounded-xl shadow-md flex items-center justify-center text-primary rotate-12 group-hover:rotate-0 transition-transform duration-300`}
                  >
                    <Briefcase size={20} />
                  </div>

                  <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6">
                    {job.description}
                  </p>

                  <div
                    className={`flex flex-wrap gap-2 ${
                      index % 2 === 1 ? "md:justify-end" : ""
                    }`}
                  >
                    {job.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs font-medium text-slate-600 dark:text-slate-300 bg-white dark:bg-slate-800 px-2.5 py-1 rounded-md border border-slate-200 dark:border-slate-700 shadow-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
