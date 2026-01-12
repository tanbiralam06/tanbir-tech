"use client";

import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import Section from "@/components/ui/Section";
import { ArrowRight, Code2, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <Section
      id="home"
      className="relative min-h-[80vh] md:min-h-screen flex items-center justify-center overflow-hidden bg-slate-950"
    >
      {/* Aurora Background Effect */}
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
        {/* Abstract Gradient Blobs */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -top-[20%] -left-[10%] w-[70vw] h-[70vw] bg-purple-500/20 rounded-full blur-[120px] mix-blend-screen"
        />
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            x: [0, 100, 0],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute top-[20%] -right-[10%] w-[60vw] h-[60vw] bg-blue-500/20 rounded-full blur-[120px] mix-blend-screen"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            y: [0, 50, 0],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-[20%] left-[20%] w-[80vw] h-[80vw] bg-indigo-500/20 rounded-full blur-[120px] mix-blend-screen"
        />

        {/* Grain Overlay for Texture */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
            filter: "contrast(320%) brightness(100%)",
          }}
        />
      </div>

      <div className="relative z-10 text-center max-w-5xl mx-auto px-4">
        {/* Greeting Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-8 hover:bg-white/10 transition-colors"
        >
          <Sparkles className="w-4 h-4 text-amber-300" />
          <span className="text-sm font-medium text-slate-300">
            Welcome to my portfolio
          </span>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-8 text-white"
        >
          Crafting{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
            Exceptional
          </span>
          <br className="hidden md:block" /> Digital Experiences
        </motion.h1>

        {/* Sub-headline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-xl text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed font-light"
        >
          I'm <span className="text-white font-medium">Tanbir Alam</span>, a
          Full Stack Developer & Designer. I blend visual aesthetics with robust
          engineering to build software that feels as good as it looks.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <Button
            size="lg"
            href="#projects"
            className="group relative px-8 h-12 rounded-full overflow-hidden bg-white text-slate-950 font-semibold hover:bg-slate-100 transition-all"
          >
            <span className="relative z-10 flex items-center gap-2">
              View Work
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </span>
          </Button>

          <Button
            size="lg"
            variant="ghost"
            href="#contact"
            className="text-slate-300 hover:text-white hover:bg-white/5 rounded-full px-8 h-12"
          >
            Let's Talk
          </Button>
        </motion.div>
      </div>
    </Section>
  );
}
