"use client";

import { motion } from "framer-motion";
import { Sparkles, Terminal } from "lucide-react";

export function ClientLogos() {
  const logos = [
    { name: "Vercel", src: "/logos/logoipsum-254.svg" },
    { name: "Next.js", src: "/logos/logoipsum-257.svg" },
    { name: "Clerk", src: "/logos/logoipsum-251.svg" },
    { name: "shadcn/ui", src: "/logos/logoipsum-242.svg" },
    { name: "Acme Inc", src: "/logos/logoipsum-258.svg" },
    { name: "Tesla", src: "/logos/logoipsum-254.svg" }, // Dummy additional
  ];

  // Triple the logos to ensure no gaps during high-speed scroll
  const allLogos = [...logos, ...logos, ...logos];

  return (
    <section className="relative py-24 overflow-hidden bg-black">
      {/* Background System */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>

      <div className="container relative z-10 mx-auto px-4">
        {/* Header - Minimalist & Cyber */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col items-center mb-16"
        >
          <div className="flex items-center gap-2 px-3 py-1 rounded-full border border-white/5 bg-white/5 mb-6">
            <Terminal className="h-3 w-3 text-zinc-500" />
            <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-zinc-500">
              Integrations_Status: Active
            </span>
          </div>

          <h2 className="text-zinc-400 text-sm font-medium uppercase tracking-[0.2em] text-center">
            Powering the next generation of{" "}
            <span className="text-white italic font-bold">
              digital infrastructure
            </span>
          </h2>
        </motion.div>

        {/* The Infinite Marquee */}
        <div className="relative group">
          {/* Masking Overlays (Glass fade) */}
          <div className="absolute left-0 top-0 bottom-0 w-32 md:w-64 bg-gradient-to-r from-black via-black/80 to-transparent z-20 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 md:w-64 bg-gradient-to-l from-black via-black/80 to-transparent z-20 pointer-events-none" />

          <div className="flex overflow-hidden select-none">
            <motion.div
              initial={{ x: 0 }}
              animate={{ x: "-50%" }}
              transition={{
                duration: 30,
                repeat: Infinity,
                ease: "linear",
              }}
              className="flex items-center gap-16 md:gap-24 pr-16 md:pr-24 min-w-max"
            >
              {allLogos.map((logo, index) => (
                <div
                  key={index}
                  className="relative flex items-center justify-center group/logo"
                >
                  <img
                    src={logo.src}
                    alt={logo.name}
                    className="h-8 md:h-10 w-auto object-contain opacity-30 grayscale brightness-200 transition-all duration-500 group-hover/logo:opacity-100 group-hover/logo:grayscale-0 group-hover/logo:scale-110"
                  />
                  {/* Subtle Glow beneath logo on hover */}
                  <div className="absolute -inset-4 bg-white/5 blur-xl rounded-full opacity-0 group-hover/logo:opacity-100 transition-opacity pointer-events-none" />
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Terminal Style Stats Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-20 max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-px bg-white/5 border border-white/5 rounded-2xl overflow-hidden"
        >
          {[
            { label: "Data_Throughput", value: "14.2 PB" },
            { label: "Global_Latency", value: "< 24ms" },
            { label: "Active_Nodes", value: "1,204" },
          ].map((stat, i) => (
            <div
              key={i}
              className="bg-black p-8 text-center hover:bg-zinc-900/50 transition-colors cursor-default"
            >
              <p className="text-[10px] font-mono text-zinc-600 uppercase tracking-widest mb-2">
                {stat.label}
              </p>
              <p className="text-2xl font-bold text-zinc-200 tracking-tighter">
                {stat.value}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
