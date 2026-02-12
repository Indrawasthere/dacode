"use client";

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  Target,
  Zap,
  Users,
  Award,
  ArrowRight,
  Sparkles,
  Code,
  Rocket,
} from "lucide-react";
import { useRef } from "react";
import { Button } from "@/components/ui/button";

export default function AboutPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 1], [0, 300]);

  return (
    <main className="min-h-screen bg-black">
      <Header />

      <section
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.05),transparent_70%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:64px_64px]" />

        <motion.div
          style={{ opacity, y }}
          className="container mx-auto max-w-5xl px-8 text-center z-10"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 rounded-full border border-white/5 bg-white/[0.02] px-4 py-2 backdrop-blur-xl mb-12"
          >
            <Sparkles className="h-4 w-4 text-blue-400" />
            <span className="text-xs font-sans font-bold uppercase tracking-[0.3em] text-zinc-500">
              About Us
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-6xl md:text-8xl lg:text-[120px] font-sans font-bold tracking-tighter text-white leading-none mb-8"
          >
            Building the
            <br />
            <span className="font-serif italic text-zinc-600 font-light">
              future of work.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-xl md:text-2xl text-zinc-400 max-w-3xl mx-auto leading-relaxed mb-16"
          >
            We're a team of engineers, designers, and strategists obsessed with
            crafting digital products that move businesses forward.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-12"
          >
            {[
              { label: "Founded", val: "2020" },
              { label: "Team Members", val: "50+" },
              { label: "Projects", val: "1000+" },
              { label: "Countries", val: "25+" },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <p className="text-4xl md:text-5xl font-serif italic text-white mb-2">
                  {stat.val}
                </p>
                <p className="text-xs uppercase tracking-[0.3em] text-zinc-500 font-bold">
                  {stat.label}
                </p>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      <section className="relative py-40 bg-[#050505]">
        <div className="container mx-auto max-w-6xl px-8">
          <div className="grid lg:grid-cols-2 gap-20 items-center mb-40">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-8">
                <div className="h-px w-8 bg-blue-500" />
                <span className="text-[10px] font-sans font-bold tracking-[0.4em] text-blue-500 uppercase">
                  Our Mission
                </span>
              </div>

              <h2 className="text-5xl md:text-6xl font-sans font-bold text-white tracking-tighter mb-8 leading-tight">
                Democratizing enterprise-grade technology
              </h2>

              <p className="text-lg text-zinc-400 leading-relaxed mb-8">
                We believe every business deserves access to world-class digital
                infrastructure. Our mission is to make enterprise software
                accessible, scalable, and delightful to use.
              </p>

              <Button
                size="lg"
                className="h-14 px-8 rounded-full bg-white text-black hover:bg-zinc-200 font-bold"
              >
                Read Our Story
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative aspect-square bg-zinc-900 rounded-3xl overflow-hidden border border-white/5"
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_70%)]" />
              <div className="absolute inset-0 flex items-center justify-center">
                <Code className="h-32 w-32 text-zinc-800" />
              </div>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Target,
                title: "Mission-Driven",
                desc: "Every line of code serves a purpose",
              },
              {
                icon: Zap,
                title: "Lightning Fast",
                desc: "Optimized for performance at scale",
              },
              {
                icon: Users,
                title: "User-Centric",
                desc: "Built for humans, powered by AI",
              },
              {
                icon: Award,
                title: "Award-Winning",
                desc: "Recognized globally for excellence",
              },
            ].map((value, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group p-8 rounded-2xl border border-zinc-900 bg-[#080808] hover:border-zinc-700 transition-all"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-zinc-900 mb-6 group-hover:bg-blue-500/10 transition-colors">
                  <value.icon className="h-7 w-7 text-zinc-600 group-hover:text-blue-500 transition-colors" />
                </div>
                <h3 className="text-xl font-sans font-bold text-white mb-3">
                  {value.title}
                </h3>
                <p className="text-sm text-zinc-500 leading-relaxed">
                  {value.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-40 bg-black">
        <div className="container mx-auto max-w-4xl px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl border border-white/5 bg-[#080808] p-16 relative overflow-hidden"
          >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[300px] bg-blue-500/5 blur-[100px]" />

            <div className="relative z-10">
              <Rocket className="h-16 w-16 text-zinc-700 mx-auto mb-8" />
              <h2 className="text-4xl md:text-5xl font-sans font-bold text-white mb-6">
                Ready to build something amazing?
              </h2>
              <p className="text-lg text-zinc-400 mb-10">
                Let's discuss how we can help transform your business.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="h-14 px-10 rounded-full bg-white text-black hover:bg-zinc-200 font-bold"
                >
                  Start a Project
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="h-14 px-10 rounded-full border-zinc-800 bg-transparent text-white hover:bg-zinc-900"
                >
                  View Our Work
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
