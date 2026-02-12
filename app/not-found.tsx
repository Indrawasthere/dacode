"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { MoveLeft, Terminal, AlertTriangle } from "lucide-react";
import { useEffect, useState } from "react";

export default function NotFound() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <main className="relative h-screen w-full bg-black flex flex-col items-center justify-center overflow-hidden selection:bg-white selection:text-black">
      <div
        className="pointer-events-none absolute inset-0 z-0 transition-opacity duration-500"
        style={{
          background: `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, rgba(88, 44, 255, 0.15), transparent 80%)`,
        }}
      />

      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_80%)]" />

      <div className="relative z-10 text-center px-6">
        <motion.div
          animate={{
            rotate: [0, -10, 10, -10, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 4, repeat: Infinity }}
          className="flex justify-center mb-8"
        >
          <div className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
            <AlertTriangle className="text-[#582CFF] h-10 w-10" />
          </div>
        </motion.div>

        <div className="relative inline-block">
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-[12rem] md:text-[18rem] font-sans font-black tracking-tighter text-white leading-none"
          >
            404
          </motion.h1>

          <motion.h1
            animate={{ x: [-2, 2, -1], opacity: [0, 0.5, 0] }}
            transition={{
              duration: 0.2,
              repeat: Infinity,
              repeatType: "mirror",
            }}
            className="absolute inset-0 text-[12rem] md:text-[18rem] font-sans font-black tracking-tighter text-red-500/30 leading-none select-none"
          >
            404
          </motion.h1>

          <motion.h1
            animate={{ x: [1, -2, 1], opacity: [0, 0.5, 0] }}
            transition={{
              duration: 0.15,
              repeat: Infinity,
              repeatType: "mirror",
              delay: 0.1,
            }}
            className="absolute inset-0 text-[12rem] md:text-[18rem] font-sans font-black tracking-tighter text-cyan-500/30 leading-none select-none"
            Philippians
          >
            404
          </motion.h1>
        </div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="max-w-md mx-auto"
        >
          <h2 className="text-xl md:text-2xl font-sans text-zinc-300 mb-4 leading-snug">
            Oops!
            <br />
            <span className="text-white font-sans font-semibold">
              It looks like you're hitting the wrong endpoint
            </span>
          </h2>

          <p className="text-zinc-500 text-sm font-sans mb-12 leading-relaxed max-w-md">
            The route you’re trying to access doesn’t exist or has been moved.
            Double-check the endpoint or return to a valid path before the
            system pretends this was intentional.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group flex items-center gap-3 px-8 py-4 bg-white text-black rounded-full font-bold text-xs uppercase tracking-widest transition-all hover:bg-zinc-200"
              >
                <MoveLeft
                  size={16}
                  className="transition-transform group-hover:-translate-x-1"
                />
                Return ?
              </motion.button>
            </Link>

            <Link href="/contact">
              <button className="flex items-center gap-3 px-8 py-4 bg-white/5 border border-white/10 text-white rounded-full font-bold text-xs uppercase tracking-widest hover:bg-white/10 transition-all">
                <Terminal size={16} />
                Let's crush the bugs
              </button>
            </Link>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
