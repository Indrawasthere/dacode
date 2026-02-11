"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Mail, Terminal } from "lucide-react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";

export function CTASection() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Parallax & Smooth Scaling
  const scale = useTransform(scrollYProgress, [0, 0.5], [0.9, 1]);
  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  const smoothScale = useSpring(scale, { stiffness: 100, damping: 30 });
  const smoothY = useSpring(y, { stiffness: 100, damping: 30 });

  return (
    <section
      ref={containerRef}
      className="relative py-80 bg-[#050505] overflow-hidden"
      id="contact"
    >
      {/* --- BACKGROUND ARCHITECTURE --- */}
      <div className="absolute inset-0 z-0">
        {/* Deep Radial Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.05)_0%,transparent_70%)]" />

        {/* Micro-Grid Texture */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] brightness-100 contrast-150 pointer-events-none" />

        {/* Cinematic Warp Lines */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-gradient-to-r from-transparent via-sky-500/10 to-transparent h-[1px] w-full"
            style={{
              top: `${15 + i * 12}%`,
              left: "-100%",
              rotate: "-2deg",
            }}
            animate={{ left: ["100%", "-100%"] }}
            transition={{
              duration: 8 + i,
              repeat: Infinity,
              ease: "linear",
              delay: i * 0.5,
            }}
          />
        ))}
      </div>

      {/* --- CONTENT BLOCK --- */}
      <motion.div
        style={{ opacity, scale: smoothScale, y: smoothY }}
        className="container relative mx-auto max-w-6xl px-8 z-10"
      >
        <div className="relative rounded-[3rem] border border-white/[0.03] bg-[#080808]/80 p-12 md:p-32 overflow-hidden backdrop-blur-3xl shadow-2xl">
          {/* Edge Glows */}
          <div className="absolute -top-40 -left-40 h-[400px] w-[400px] bg-sky-500/[0.05] blur-[120px] rounded-full" />
          <div className="absolute -bottom-40 -right-40 h-[400px] w-[400px] bg-emerald-500/[0.05] blur-[120px] rounded-full" />

          <div className="relative z-10 text-center">
            {/* Status Indicator */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-zinc-900/50 border border-white/5 mb-12"
            >
              <div className="relative flex h-2 w-2">
                <span className="animate-ping absolute h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                <span className="relative h-2 w-2 rounded-full bg-sky-500"></span>
              </div>
              <span className="text-[10px] font-sans font-bold text-zinc-400 uppercase tracking-[0.4em]">
                Project_Initialization_Ready
              </span>
            </motion.div>

            <h2 className="text-6xl md:text-[9rem] font-sans font-bold tracking-tighter text-white leading-[0.85] mb-12">
              Let&apos;s build the <br />
              <span className="font-serif italic text-zinc-700 font-light">
                new standard.
              </span>
            </h2>

            <p className="text-xl md:text-2xl text-zinc-500 max-w-3xl mx-auto mb-20 leading-relaxed font-sans font-light">
              We don&apos;t just ship code. We engineer unfair technological
              advantages.
              <span className="text-zinc-200">
                {" "}
                Ready to deploy your enterprise ecosystem?
              </span>
            </p>

            {/* CTA BUTTONS - Breathable Spacing */}
            <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
              <Button
                size="lg"
                className="h-20 px-12 rounded-2xl bg-white text-black hover:bg-zinc-200 text-sm font-sans font-bold tracking-[0.2em] uppercase transition-all duration-500 group shadow-[0_0_40px_rgba(255,255,255,0.1)]"
              >
                Initiate Project
                <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-2 transition-transform duration-500" />
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="h-20 px-12 rounded-2xl border-zinc-800 bg-transparent text-white hover:bg-zinc-900 text-sm font-sans font-bold tracking-[0.2em] uppercase transition-all duration-500"
              >
                <Terminal className="mr-3 h-5 w-5 text-sky-500" />
                Talk to Lead Architect
              </Button>
            </div>

            {/* Architecture Details */}
            <div className="mt-32 grid grid-cols-2 md:grid-cols-4 gap-12 border-t border-white/[0.03] pt-16">
              {[
                { label: "Protocol", val: "Enterprise-Grade" },
                { label: "SLA", val: "99.99% Uptime" },
                { label: "Engine", val: "Proprietary AI" },
                { label: "Stack", val: "Edge-Native" },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.5 + i * 0.1 }}
                  className="text-center md:text-left space-y-2"
                >
                  <p className="text-[9px] font-sans font-bold text-zinc-600 uppercase tracking-[0.3em]">
                    {stat.label}
                  </p>
                  <p className="text-sm font-sans font-bold text-zinc-400">
                    {stat.val}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Final Branding Footer Signal */}
        <div className="mt-20 flex justify-center opacity-20 hover:opacity-100 transition-opacity duration-1000">
          <p className="text-[10px] font-sans font-bold tracking-[1em] text-white uppercase">
            DACODE SYSTEMS © 2026
          </p>
        </div>
      </motion.div>
    </section>
  );
}
