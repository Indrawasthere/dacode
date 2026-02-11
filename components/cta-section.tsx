"use client";

import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Sparkles,
  Calendar,
  CheckCircle,
  Zap,
  TrendingUp,
} from "lucide-react";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.21, 0.47, 0.32, 0.98],
    },
  },
};

const floatingVariants = {
  float: {
    y: [0, -12, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

export function CTASection() {
  return (
    <section className="relative py-32 overflow-hidden bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 dark:from-blue-950 dark:via-purple-950 dark:to-pink-950">
      {/* Vercel-style grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_60%,transparent_100%)]" />

      {/* Animated gradient orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.2, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -left-[400px] -top-[400px] h-[800px] w-[800px] rounded-full bg-white/20 blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
          className="absolute -right-[400px] -bottom-[400px] h-[800px] w-[800px] rounded-full bg-white/20 blur-3xl"
        />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="container relative mx-auto px-4 z-10"
      >
        <motion.div
          variants={itemVariants}
          className="max-w-4xl mx-auto text-center"
        >
          {/* Floating icon */}
          <motion.div
            variants={floatingVariants}
            animate="float"
            className="flex justify-center mb-8"
          >
            <div className="relative">
              <div className="absolute inset-0 animate-pulse rounded-full bg-white/30 blur-xl" />
              <div className="relative flex h-20 w-20 items-center justify-center rounded-2xl bg-white/20 backdrop-blur-xl border border-white/30 shadow-2xl">
                <Sparkles className="h-10 w-10 text-white" />
              </div>
            </div>
          </motion.div>

          {/* Trust badge */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-xl px-4 py-2 text-sm border border-white/20 mb-6"
          >
            <CheckCircle className="h-4 w-4 text-white" />
            <span className="font-medium text-white">
              Trusted by 500+ agencies
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h2
            variants={itemVariants}
            className="font-cal text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6 text-balance"
          >
            Ready to transform
            <br />
            your agency?
          </motion.h2>

          {/* Subheading */}
          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            Partner with us and deliver conversion-focused websites that drive
            real results. Let's scale your agency together.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8"
          >
            <Button
              size="lg"
              className="group relative h-14 overflow-hidden rounded-full bg-white px-8 text-base font-semibold text-zinc-900 shadow-lg shadow-black/10 transition-all hover:scale-105 hover:shadow-xl"
            >
              <span className="relative z-10 flex items-center gap-2">
                Start scaling
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-zinc-100 to-white opacity-0 group-hover:opacity-100 transition-opacity" />
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="group h-14 rounded-full border-white/30 bg-white/10 px-8 text-base font-semibold text-white backdrop-blur-xl transition-all hover:scale-105 hover:bg-white/20 hover:border-white/40"
            >
              <Calendar className="mr-2 h-4 w-4" />
              Book a free call
            </Button>
          </motion.div>

          {/* Social proof with metrics */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto pt-8 border-t border-white/20"
          >
            {[
              { label: "Projects delivered", value: "1,000+", icon: Zap },
              { label: "Avg. conversion lift", value: "85%", icon: TrendingUp },
              { label: "Agency partners", value: "500+", icon: Sparkles },
              { label: "Response time", value: "< 2hrs", icon: Calendar },
            ].map((stat, i) => {
              const StatIcon = stat.icon;
              return (
                <div key={i} className="text-center">
                  <div className="flex items-center justify-center gap-1.5 mb-1">
                    <StatIcon className="h-4 w-4 text-white/80" />
                    <span className="font-cal text-lg font-bold text-white">
                      {stat.value}
                    </span>
                  </div>
                  <span className="text-xs text-white/70">{stat.label}</span>
                </div>
              );
            })}
          </motion.div>

          {/* Bottom note */}
          <motion.p
            variants={itemVariants}
            className="text-sm text-white/70 mt-8 flex items-center justify-center gap-2"
          >
            <span>✨ No commitment required</span>
            <span className="w-1 h-1 rounded-full bg-white/40" />
            <span>🎯 Free consultation</span>
            <span className="w-1 h-1 rounded-full bg-white/40" />
            <span>⚡ Response within 24h</span>
          </motion.p>

          {/* Company logos preview */}
          <motion.div
            variants={itemVariants}
            className="mt-12 flex items-center justify-center gap-6 opacity-70"
          >
            <span className="text-xs font-medium uppercase tracking-wider text-white/60">
              Join agencies from
            </span>
            <div className="flex items-center gap-4">
              {["Vercel", "Next.js", "Clerk", "shadcn"].map((company) => (
                <span key={company} className="text-sm font-cal text-white/80">
                  {company}
                </span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
