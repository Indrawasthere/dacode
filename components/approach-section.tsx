"use client";

import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import {
  Sparkles,
  Lightbulb,
  Code,
  Rocket,
  HeartHandshake,
} from "lucide-react";
import { useRef } from "react";

export function ApproachSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  // 1. Scroll Progress for Line & Reveal
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 50,
    damping: 20,
    restDelta: 0.001,
  });

  // 2. Opacity Reveal based on scroll (Biar text muncul pelan pas di-scroll)
  const opacityValue = useTransform(
    scrollYProgress,
    [0, 0.1, 0.9, 1],
    [0, 1, 1, 0],
  );

  const steps = [
    {
      number: "01",
      title: "Discovery",
      icon: Lightbulb,
      description: "Deep dive into business logic and bottleneck analysis.",
    },
    {
      number: "02",
      title: "Architecture",
      icon: Sparkles,
      description: "Defining the tech stack and system scalability map.",
    },
    {
      number: "03",
      title: "Development",
      icon: Code,
      description: "Sprinting with TypeScript, Next.js, and CI/CD rigor.",
    },
    {
      number: "04",
      title: "Deployment",
      icon: Rocket,
      description: "Edge-runtime rollout with automated health checks.",
    },
    {
      number: "05",
      title: "Evolution",
      icon: HeartHandshake,
      description: "Continuous scaling and performance auditing.",
    },
  ];

  return (
    <section
      ref={containerRef}
      className="relative py-60 bg-[#050505] overflow-hidden"
      id="process"
    >
      {/* Background Noise & Dynamic Glow */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-sky-500/5 blur-[120px] rounded-full pointer-events-none" />

      {/* --- BREATHABLE CONTAINER (WIDE MARGINS) --- */}
      <div className="container relative mx-auto max-w-6xl px-8 md:px-12 z-10">
        {/* Header - Silicon Valley Alignment */}
        <div className="max-w-3xl mb-40">
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="flex items-center gap-3 mb-6"
          >
            <div className="h-px w-8 bg-sky-500" />
            <span className="text-[10px] font-sans font-bold tracking-[0.4em] text-sky-500/80 uppercase">
              Execution Framework
            </span>
          </motion.div>

          <motion.h2
            style={{ opacity: opacityValue }}
            className="text-5xl md:text-7xl font-sans font-bold tracking-tighter text-white leading-[1.1]"
          >
            Rapid Deployment. <br />
            <span className="font-serif italic text-zinc-600 font-light">
              Zero Technical Debt.
            </span>
          </motion.h2>
        </div>

        {/* The Kinetic Timeline */}
        <div className="relative">
          {/* Main Tracing Line (Desktop) */}
          <div className="absolute top-[3.5rem] left-0 w-full h-[1px] bg-zinc-900 hidden lg:block">
            <motion.div
              style={{ scaleX, originX: 0 }}
              className="h-full bg-gradient-to-r from-transparent via-sky-500 to-white shadow-[0_0_20px_rgba(56,189,248,0.4)] relative"
            >
              {/* The "Leading Edge" Light */}
              <div className="absolute right-0 top-1/2 -translate-y-1/2 h-2 w-2 rounded-full bg-white shadow-[0_0_15px_#fff]" />
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-16 lg:gap-12">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.8 }}
                viewport={{ once: true }}
                className="group relative"
              >
                {/* Step Icon with Magnetic-like Hover */}
                <div className="relative z-20 mb-12">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="h-20 w-20 rounded-2xl bg-[#080808] border border-zinc-900 flex items-center justify-center group-hover:border-sky-500/30 transition-all duration-500 shadow-2xl"
                  >
                    <step.icon className="h-7 w-7 text-zinc-600 group-hover:text-white transition-colors duration-500 stroke-[1.5px]" />
                  </motion.div>

                  {/* Step Number Overlay */}
                  <div className="absolute -top-3 -right-3 text-[10px] font-sans font-black text-zinc-800 group-hover:text-sky-500 transition-colors tracking-tighter">
                    {step.number} /
                  </div>
                </div>

                {/* Content - Sophisticated Typography */}
                <div className="space-y-4 pr-4">
                  <h3 className="text-xl font-sans font-semibold text-white tracking-tight group-hover:text-sky-400 transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-sm font-sans font-light text-zinc-500 leading-relaxed group-hover:text-zinc-400 transition-colors">
                    {step.description}
                  </p>
                </div>

                {/* Vertical Line for Mobile (Seamless Connection) */}
                {index !== steps.length - 1 && (
                  <div className="absolute left-10 top-24 bottom-[-64px] w-[1px] bg-gradient-to-b from-zinc-800 to-transparent lg:hidden -z-10" />
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom Metrics - Minimalist Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-48 pt-16 border-t border-zinc-900 grid grid-cols-2 md:grid-cols-4 gap-12"
        >
          {[
            { label: "Stability SLA", val: "99.9%" },
            { label: "Cycle Velocity", val: "14 Days" },
            { label: "Audit Standard", val: "SOC2-II" },
            { label: "Final QA Pass", val: "100%" },
          ].map((m, i) => (
            <div key={i} className="group cursor-default">
              <p className="text-[9px] font-sans font-bold text-zinc-700 uppercase tracking-[0.3em] mb-3 group-hover:text-sky-500 transition-colors">
                {m.label}
              </p>
              <p className="text-2xl font-serif italic text-zinc-400 group-hover:text-white transition-colors">
                {m.val}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
