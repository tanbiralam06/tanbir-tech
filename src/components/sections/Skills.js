"use client";

import { motion } from "framer-motion";
import Section from "@/components/ui/Section";
import { skills } from "@/data/skills";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export default function Skills() {
  return (
    <Section id="skills">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900 dark:text-white">
          Technical Skills
        </h2>
        <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
          A comprehensive list of technologies and tools I work with to build modern applications.
        </p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {skills.map((category) => (
          <motion.div
            key={category.category}
            variants={itemVariants}
            whileHover={{ y: -5 }}
            className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700 hover:shadow-xl hover:border-primary/20 transition-all duration-300"
          >
            <h3 className="text-xl font-bold mb-6 text-primary border-b border-slate-100 dark:border-slate-700 pb-2">
              {category.category}
            </h3>
            <div className="flex flex-wrap gap-3">
              {category.items.map((item) => (
                <motion.span
                  key={item}
                  whileHover={{ scale: 1.05, backgroundColor: "var(--color-primary)", color: "#ffffff" }}
                  className="px-4 py-2 bg-slate-50 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-lg text-sm font-medium border border-slate-200 dark:border-slate-600 cursor-default transition-colors"
                >
                  {item}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
}
