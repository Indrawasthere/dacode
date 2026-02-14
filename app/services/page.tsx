"use client";

import Link from "next/link";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  Database,
  Users,
  Package,
  Zap,
  ShoppingCart,
  Sparkles,
  ArrowRight,
  Code,
  Cpu,
} from "lucide-react";
import { useRef } from "react";
import { Button } from "@/components/ui/button";

const techs = [
  "Next.js",
  "TypeScript",
  "PostgreSQL",
  "Tailwind CSS",
  "Framer Motion",
  "Node.js",
  "Python",
  "OpenAI API",
  "Redis",
  "Docker",
  "AWS",
  "GraphQL",
];

const services = [
  {
    icon: Database,
    title: "Custom CRM",
    tagline: "Customer Intelligence",
    description:
      "Transform customer relationships with AI-powered insights and automated workflows.",
  },
  {
    icon: Users,
    title: "HRIS Platform",
    tagline: "Human Capital",
    description:
      "Complete HR solution managing payroll, attendance, and compliance globally.",
  },
  {
    icon: Package,
    title: "Warehouse",
    tagline: "Smart Logistics",
    description:
      "Real-time inventory control with IoT integration and supply chain optimization.",
  },
  {
    icon: Zap,
    title: "Asset Management",
    tagline: "Enterprise Tracking",
    description:
      "Track company assets with automated depreciation and lifecycle management.",
  },
  {
    icon: ShoppingCart,
    title: "Point of Sale",
    tagline: "Modern Retail",
    description:
      "Lightning-fast POS with offline support and real-time analytics sync.",
  },
  {
    icon: Sparkles,
    title: "AI Integration",
    tagline: "Intelligent Automation",
    description:
      "Enhance systems with custom chatbots and predictive decision models.",
  },
];

export default function ServicesPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <main className="min-h-screen bg-black selection:bg-white selection:text-black">
      <Header />

      <section
        ref={heroRef}
        className="relative h-[80vh] flex flex-col items-center justify-center overflow-hidden"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_10%,#111,transparent)]" />

        <motion.div
          style={{ opacity }}
          className="container mx-auto px-8 text-center z-10"
        >
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block px-4 py-1.5 rounded-full border border-white/10 bg-white/5 mb-8"
          >
            <span className="text-[10px] font-sans font-bold uppercase tracking-[0.4em] text-zinc-500">
              System Capabilities
            </span>
          </motion.div>

          <h1 className="text-7xl md:text-9xl font-sans font-bold tracking-tighter text-white mb-8">
            Built for <br />
            <span className="font-serif italic font-light text-zinc-500 text-6xl md:text-8xl">
              the future.
            </span>
          </h1>
        </motion.div>
      </section>

      <div className="py-10 border-y border-white/5 bg-zinc-950/50 backdrop-blur-sm overflow-hidden flex relative">
        <motion.div
          className="flex whitespace-nowrap gap-12 items-center"
          animate={{ x: [0, -1000] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        >
          {[...techs, ...techs].map((tech, i) => (
            <div key={i} className="flex items-center gap-4">
              <div className="h-1.5 w-1.5 rounded-full bg-blue-500" />
              <span className="text-[11px] font-sans uppercase tracking-[0.3em] text-zinc-400 font-bold">
                {tech}
              </span>
            </div>
          ))}
        </motion.div>
        <div className="absolute inset-y-0 left-0 w-32 bg-linear-to-r from-black to-transparent z-10" />
        <div className="absolute inset-y-0 right-0 w-32 bg-linear-to-l from-black to-transparent z-10" />
      </div>

      <section className="py-24 bg-black">
        <div className="container mx-auto max-w-7xl px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-zinc-900 border border-zinc-900">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  className="group relative bg-black p-12 transition-colors hover:bg-zinc-950"
                >
                  <div className="absolute inset-0 bg-blue-500/2 opacity-0 group-hover:opacity-100 transition-opacity" />

                  <div className="relative z-10">
                    <div className="mb-8 text-zinc-500 group-hover:text-white transition-colors">
                      <Icon strokeWidth={1} size={40} />
                    </div>

                    <h3 className="text-2xl font-sans font-bold text-white mb-2 italic">
                      {service.title}
                    </h3>
                    <p className="text-[10px] uppercase tracking-widest text-zinc-600 font-bold mb-6">
                      {service.tagline}
                    </p>
                    <p className="text-zinc-500 text-sm leading-relaxed mb-12">
                      {service.description}
                    </p>

                    <Link
                      href="#"
                      className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-zinc-400 hover:text-white transition-all"
                    >
                      View Specs <ArrowRight size={12} />
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
