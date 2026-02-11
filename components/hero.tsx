"use client";

import React, { useRef, useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Triangle } from "lucide-react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useMotionValue,
} from "framer-motion";

function CustomCursor() {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  // Spring yang kenyal buat cursor (vibe organic)
  const springConfig = { stiffness: 400, damping: 30, mass: 0.8 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };
    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, [cursorX, cursorY]);

  return (
    <motion.div
      className="pointer-events-none fixed left-0 top-0 z-[9999] h-5 w-5 rounded-full bg-white mix-blend-difference"
      style={{
        x: cursorXSpring,
        y: cursorYSpring,
        translateX: "-50%",
        translateY: "-50%",
      }}
    />
  );
}

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { stiffness: 80, damping: 25, mass: 0.5 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const opacityScroll = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const scaleScroll = useTransform(scrollYProgress, [0, 1], [1, 0.85]);
  const yScroll = useTransform(scrollYProgress, [0, 1], [0, 250]);

  // Blur effect pas scroll ke bawah
  const blurValue = useTransform(scrollYProgress, [0, 0.7], [0, 12]);
  const smoothBlur = useSpring(blurValue, { stiffness: 100, damping: 30 });
  const filterScroll = useTransform(smoothBlur, (v) => `blur(${v}px)`);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      mouseX.set(clientX / innerWidth - 0.5);
      mouseY.set(clientY / innerHeight - 0.5);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  const rotateX = useTransform(smoothY, [-0.5, 0.5], [7, -7]);
  const rotateY = useTransform(smoothX, [-0.5, 0.5], [-7, 7]);
  const translateX = useTransform(smoothX, [-0.5, 0.5], [-15, 15]);
  const translateY = useTransform(smoothY, [-0.5, 0.5], [-15, 15]);

  return (
    <>
      <CustomCursor />

      <section
        ref={ref}
        className="relative min-h-[110vh] w-full flex items-center justify-center overflow-hidden bg-[#020202] perspective-1000 px-4"
      >
        <motion.div
          style={{ opacity: opacityScroll }}
          className="absolute inset-0 pointer-events-none"
        >
          <motion.div
            style={{
              x: useTransform(smoothX, [-0.5, 0.5], ["-5%", "5%"]),
              y: useTransform(smoothY, [-0.5, 0.5], ["-5%", "5%"]),
            }}
            className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_70%)]"
          />

          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.12] mix-blend-overlay" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_60%,transparent_100%)]" />
        </motion.div>

        <motion.div
          style={{
            y: yScroll,
            scale: scaleScroll,
            opacity: opacityScroll,
            filter: filterScroll,
            rotateX,
            rotateY,
            x: translateX,
            y: translateY,
          }}
          className="container relative z-10 mx-auto max-w-7xl text-center"
        >
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center gap-2 rounded-full border border-white/5 bg-white/[0.02] px-4 py-1.5 backdrop-blur-3xl mb-12 shadow-2xl"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            <span className="text-[10px] font-sans font-bold uppercase tracking-[0.3em] text-zinc-500">
              Dacode Systems • Interactive Core
            </span>
          </motion.div>

          <h1 className="flex flex-col items-center mb-10">
            <div className="overflow-hidden py-1">
              <motion.span
                initial={{ y: "100%", rotate: 4 }}
                animate={{ y: 0, rotate: 0 }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                className="block font-serif italic text-6xl md:text-8xl lg:text-[110px] text-zinc-400 leading-none"
              >
                Enterprise
              </motion.span>
            </div>
            <div className="overflow-hidden py-1">
              <motion.span
                initial={{ y: "100%", rotate: -4 }}
                animate={{ y: 0, rotate: 0 }}
                transition={{
                  duration: 1.2,
                  delay: 0.15,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="block font-sans font-black text-6xl md:text-8xl lg:text-[130px] text-white tracking-tighter leading-[0.85]"
              >
                SOFTWARE.
              </motion.span>
            </div>
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.6 }}
            className="mx-auto max-w-2xl text-zinc-500 text-lg md:text-xl font-sans font-light leading-relaxed mb-16"
          >
            Engineering digital excellence. We build
            <span className="text-zinc-200 italic">
              {" "}
              resilient infrastructures{" "}
            </span>
            and intelligent ecosystems for the next era of business.
          </motion.p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 mb-24">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
              <Button
                size="lg"
                className="h-16 px-12 rounded-full bg-white text-black font-bold text-base hover:bg-zinc-200 transition-all shadow-[0_0_50px_rgba(255,255,255,0.1)]"
              >
                Get Started <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </motion.div>

            <button className="h-16 px-8 text-zinc-400 font-medium hover:text-white transition-colors flex items-center gap-2 group">
              Our Methodology
              <span className="w-8 h-px bg-zinc-700 group-hover:w-12 group-hover:bg-white transition-all duration-300" />
            </button>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 1 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-12 pt-16 border-t border-white/[0.03] max-w-5xl mx-auto"
          >
            {[
              { label: "Stability", val: "99.99%" },
              { label: "Deployment", val: "Global" },
              { label: "Latency", val: "2ms" },
              { label: "Encryption", val: "mTLS" },
            ].map((item, i) => (
              <div key={i} className="text-left group">
                <p className="text-[10px] font-sans font-bold uppercase tracking-[0.3em] text-zinc-600 mb-2 group-hover:text-blue-500 transition-colors">
                  {item.label}
                </p>
                <p className="text-2xl font-serif italic text-zinc-300">
                  {item.val}
                </p>
              </div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          animate={{
            y: [0, -30, 0],
            rotate: [12, 20, 12],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-20 hidden lg:block"
        >
          <Triangle className="text-white w-32 h-32 stroke-[0.5]" />
        </motion.div>
      </section>
    </>
  );
}
