"use client";

import { motion } from "framer-motion";
import Section from "@/components/ui/Section";
import { skills } from "@/data/skills";
import {
  Layout,
  Server,
  Database,
  Cloud,
  Wrench,
  Cpu,
  Globe,
  Terminal,
  FileCode,
  Palette,
  FileJson,
  Atom,
  Zap,
  Wind,
  Hexagon,
  Activity,
  Layers,
  Package,
  GitBranch,
  AppWindow,
  Orbit,
  Code2,
} from "lucide-react";

// Icon mapping based on data strings
const iconMap = {
  Layout,
  Server,
  Database,
  Cloud,
  Wrench,
  Cpu,
  Globe,
  Terminal,
  FileCode,
  Palette,
  FileJson,
  Atom,
  Zap,
  Wind,
  Hexagon,
  Activity,
  Layers,
  Package,
  GitBranch,
  AppWindow,
  Orbit,
  Code2,
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
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 12,
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
        className="text-center mb-16"
      >
        <span className="inline-block px-4 py-1.5 mb-4 text-xs font-bold tracking-wider text-primary uppercase bg-primary/10 rounded-full">
          My Expertise
        </span>
        <h2 className="text-3xl md:text-5xl font-bold mb-6 text-slate-900 dark:text-white tracking-tight">
          Technical <span className="text-primary italic">Skills</span>
        </h2>
        <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
          The technologies, tools and frameworks I use to bring ideas to life
          and build high-performance web applications.
        </p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {skills.map((category) => {
          const CategoryIcon = iconMap[category.icon] || Globe;

          return (
            <motion.div
              key={category.category}
              variants={itemVariants}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className="group relative bg-white dark:bg-slate-900/50 backdrop-blur-sm p-8 rounded-3xl border border-slate-200/60 dark:border-slate-800/60 hover:border-primary/50 dark:hover:border-primary/50 transition-all duration-300 overflow-hidden"
            >
              {/* Background Glow */}
              <div className="absolute -right-8 -top-8 w-24 h-24 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/10 transition-colors duration-500" />

              <div className="flex items-center gap-4 mb-8">
                <div className="p-3.5 bg-primary/10 rounded-2xl text-primary group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  <CategoryIcon size={24} />
                </div>
                <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100">
                  {category.category}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2.5">
                {category.items.map((item) => {
                  const ItemIcon = iconMap[item.icon] || Code2;
                  return (
                    <motion.div
                      key={item.name}
                      whileHover={{
                        scale: 1.05,
                        backgroundColor: "rgba(var(--primary-rgb), 0.1)",
                        borderColor: "var(--primary)",
                      }}
                      className="flex items-center gap-2 px-3.5 py-2 bg-slate-50/50 dark:bg-slate-800/50 text-slate-700 dark:text-slate-300 rounded-xl text-sm font-medium border border-slate-200 dark:border-slate-700/50 cursor-default transition-all duration-200"
                    >
                      <ItemIcon
                        size={14}
                        className="text-slate-400 group-hover:text-primary transition-colors"
                      />
                      {item.name}
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </Section>
  );
}
