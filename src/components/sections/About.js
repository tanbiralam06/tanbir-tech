"use client";

import { motion } from "framer-motion";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import { Download } from "lucide-react";
import Image from "next/image";

export default function About() {
  return (
    <Section id="about" className="bg-slate-50 dark:bg-slate-900/50">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="relative aspect-square max-w-md mx-auto md:mx-0 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden group">
            <div className="relative w-full h-full">
              <Image
                src="/projects/tanbir.png"
                alt="Tanbir's Profile"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110 drop-shadow-2xl"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                priority
              />
              <div className="absolute inset-0 bg-primary/10 mix-blend-overlay z-10 transition-opacity duration-300 group-hover:opacity-0" />
            </div>
          </div>
        </motion.div>

        <div className="flex flex-col gap-6">
          <motion.h2
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white"
          >
            About Me
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed"
          >
            I started my journey in Philosophy but found my true passion in coding.
            Now, as a Full Stack Developer, I combine critical thinking with technical expertise
            to build robust solutions.
          </motion.p>
          
          <motion.p
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed"
          >
            I love learning new technologies and solving complex problems.
            My goal is to create impactful digital experiences that help businesses grow.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Button variant="outline" className="gap-2 w-fit">
              <Download size={18} />
              Download Resume
            </Button>
          </motion.div>
        </div>
      </div>
    </Section>
  );
}
