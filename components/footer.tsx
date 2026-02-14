"use client";

import Link from "next/link";
import {
  Triangle,
  Github,
  Linkedin,
  Mail,
  Twitter,
  ChevronRight,
  Globe,
} from "lucide-react";
import { motion } from "framer-motion";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const sections = [
    {
      title: "Solutions",
      links: ["CRM Engine", "HRIS Core", "WMS Pro", "Next-Gen POS"],
    },
    {
      title: "Platform",
      links: ["Documentation", "API Status", "Open Source", "Security"],
    },
    {
      title: "Company",
      links: ["About", "Blog", "Careers", "Legal"],
    },
  ];

  return (
    <footer className="relative bg-[#030303] pt-32 pb-12 overflow-hidden border-t border-zinc-900/50">
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.02] pointer-events-none" />

      <div className="container relative mx-auto max-w-6xl px-8 md:px-12 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 mb-32">
          <div className="lg:col-span-5 space-y-10">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="flex items-center gap-3"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-zinc-900 border border-white/5 shadow-inner">
                <Triangle className="h-5 w-5 fill-white text-white" />
              </div>
              <span className="text-2xl font-sans font-bold tracking-tighter text-white uppercase italic">
                Dacode<span className="text-sky-500">.</span>io
              </span>
            </motion.div>

            <p className="text-zinc-500 text-lg leading-relaxed max-w-sm font-sans font-light">
              Architecting the next generation of{" "}
              <span className="text-zinc-300">enterprise autonomy</span>.
              High-performance systems for high-stakes operations.
            </p>

            <div className="flex gap-4">
              {[Github, Linkedin, Twitter, Mail].map((Icon, i) => (
                <motion.a
                  key={i}
                  href="#"
                  whileHover={{ y: -4, scale: 1.1 }}
                  className="group relative p-3 rounded-xl bg-zinc-950 border border-zinc-900 text-zinc-600 hover:text-white hover:border-zinc-700 transition-all duration-300"
                >
                  <Icon className="h-5 w-5 relative z-10" />
                  <div className="absolute inset-0 rounded-xl bg-sky-500/0 group-hover:bg-sky-500/10 blur-xl transition-all" />
                </motion.a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-12">
            {sections.map((section, idx) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="space-y-8"
              >
                <h4 className="text-[10px] font-sans font-bold uppercase tracking-[0.4em] text-zinc-700">
                  {section.title}
                </h4>
                <ul className="space-y-5">
                  {section.links.map((link) => (
                    <li key={link}>
                      <Link
                        href="#"
                        className="group flex items-center text-sm font-sans font-medium text-zinc-500 hover:text-white transition-colors"
                      >
                        <span className="relative overflow-hidden">
                          <span className="inline-block transition-transform duration-300 group-hover:-translate-y-full">
                            {link}
                          </span>
                          <span className="absolute left-0 top-0 inline-block translate-y-full transition-transform duration-300 group-hover:translate-y-0 text-sky-500">
                            {link}
                          </span>
                        </span>
                        <ChevronRight className="h-3 w-3 ml-2 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-sky-500" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-wrap justify-center md:justify-start items-center gap-6 text-[10px] font-sans font-bold text-zinc-700 uppercase tracking-[0.2em]">
            <span className="flex items-center gap-2">
              <Globe className="h-3 w-3 text-emerald-500 animate-pulse" />©{" "}
              {currentYear} System All Rights Reserved
            </span>
            <span className="hidden md:block h-1 w-1 bg-zinc-800 rounded-full" />
            <span className="hover:text-zinc-400 transition-colors cursor-crosshair">
              Location: Jakarta Indonesia [6.2088° S, 106.8456° E]
            </span>
          </div>

          <div className="flex gap-10">
            {["Privacy", "Terms", "SLA"].map((item) => (
              <Link
                key={item}
                href="#"
                className="text-[10px] font-sans font-bold text-zinc-700 hover:text-sky-500 transition-colors uppercase tracking-[0.3em] relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-sky-500 transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-20 w-full flex flex-col items-center">
        <div className="w-full h-px bg-linear-to-r from-transparent via-zinc-900 to-transparent" />
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.2 }}
          className="py-8 font-sans font-black text-[12vw] leading-none text-zinc-900 select-none tracking-tighter"
        >
          DACODE SYSTEMS
        </motion.div>
      </div>
    </footer>
  );
}
