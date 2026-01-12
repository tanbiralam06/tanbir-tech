"use client";

import { motion } from "framer-motion";
import Section from "@/components/ui/Section";
import { skills } from "@/data/skills";
import {
  SiJavascript,
  SiPython,
  SiTypescript,
  SiHtml5,
  SiMui,
  SiNextdotjs,
  SiN8N,
  SiReact,
  SiTailwindcss,
  SiExpress,
  SiFirebase,
  SiGraphql,
  SiHuggingface,
  SiMongodb,
  SiMysql,
  SiNodedotjs,
  SiPostgresql,
  SiPrisma,
  SiSupabase,
  SiDocker,
  SiGit,
  SiNpm,
  SiVercel,
  SiFigma,
} from "react-icons/si";

// Map strings from data to actual components
const iconMap = {
  SiJavascript,
  SiPython,
  SiTypescript,
  SiHtml5,
  SiMui,
  SiNextdotjs,
  SiN8N,
  SiReact,
  SiTailwindcss,
  SiExpress,
  SiFirebase,
  SiGraphql,
  SiHuggingface,
  SiMongodb,
  SiMysql,
  SiNodedotjs,
  SiPostgresql,
  SiPrisma,
  SiSupabase,
  SiDocker,
  SiGit,
  SiNpm,
  SiVercel,
  SiFigma,
};

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
      type: "spring",
      stiffness: 100,
      damping: 10,
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
        transition={{ duration: 0.6 }}
        className="text-center mb-16 relative"
      >
        {/* Background Title */}

        <span className="absolute -top-12 left-1/2 -translate-x-1/2 text-[5rem] md:text-[9rem] lg:text-[12rem] font-black text-slate-200 dark:text-slate-800 select-none pointer-events-none z-0 w-full">
          TOOLS
        </span>

        <div className="relative z-10">
          <h2 className="text-5xl md:text-6xl font-black mb-6 text-slate-900 dark:text-white tracking-tight">
            Stuff I Use <span className="text-blue-500">Daily Drivers</span>
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
            A curated stack of technologies, tools, and platforms I leverage to
            build scalable, high-performance, and user-centric web applications.
          </p>
        </div>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 px-4 md:px-8 lg:px-20"
      >
        {skills.map((skill) => {
          const IconComponent = iconMap[skill.icon];

          return (
            <motion.div
              key={skill.name}
              variants={itemVariants}
              whileHover={{
                y: -5,
                transition: { duration: 0.2 },
              }}
              className="group flex items-center gap-4 p-4 rounded-2xl bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 hover:border-primary/50 dark:hover:border-primary/50 transition-colors duration-300"
            >
              <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-800 group-hover:bg-primary/10 transition-colors duration-300">
                {IconComponent ? (
                  <IconComponent
                    size={20}
                    style={{ color: skill.color }}
                    className="transition-colors duration-300"
                  />
                ) : (
                  <span className="text-xs">?</span>
                )}
              </div>

              <span className="font-semibold text-slate-700 dark:text-slate-200 group-hover:text-slate-900 dark:group-hover:text-white transition-colors">
                {skill.name}
              </span>
            </motion.div>
          );
        })}
      </motion.div>
    </Section>
  );
}
