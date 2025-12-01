"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Section from "@/components/ui/Section";
import { experience } from "@/data/experience";

export default function Experience() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"],
  });

  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <Section id="experience">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900 dark:text-white">
          Work Experience
        </h2>
        <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
          My professional journey and the value I&apos;ve delivered.
        </p>
      </motion.div>

      <div ref={containerRef} className="max-w-3xl mx-auto relative">
        {/* Timeline Line (Desktop) */}
        <motion.div 
          style={{ scaleY, originY: 0 }}
          className="hidden md:block absolute left-[50%] top-0 bottom-0 w-px bg-primary -translate-x-1/2 z-0" 
        />
        <div className="hidden md:block absolute left-[50%] top-0 bottom-0 w-px bg-slate-200 dark:bg-slate-700 -translate-x-1/2 -z-10" />

        {experience.map((job, index) => (
          <motion.div
            key={job.company}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, type: "spring", bounce: 0.3 }}
            className="relative pl-8 md:pl-0"
          >
            <div className={`md:flex items-center justify-between gap-8 mb-12 ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}>
              <div className="md:w-1/2 mb-4 md:mb-0" />
              
              {/* Timeline Dot */}
              <motion.div 
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.2 }}
                className="absolute left-0 md:left-1/2 w-4 h-4 bg-primary rounded-full border-4 border-white dark:border-slate-900 -translate-x-1.5 md:-translate-x-1/2 mt-1.5 z-10" 
              />
              
              <div className="md:w-1/2">
                <motion.div 
                  whileHover={{ y: -5, boxShadow: "0 10px 30px -10px rgba(0,0,0,0.1)" }}
                  className={`bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700 ${index % 2 === 0 ? "md:mr-8" : "md:ml-8"} transition-all duration-300`}
                >
                  <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full mb-2">
                    {job.period}
                  </span>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1">
                    {job.role}
                  </h3>
                  <h4 className="text-base font-medium text-slate-600 dark:text-slate-400 mb-4">
                    {job.company}
                  </h4>
                  <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-4">
                    {job.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {job.technologies.map((tech) => (
                      <span key={tech} className="text-xs text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-700 px-2 py-1 rounded">
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
