"use client";

import { motion } from "framer-motion";
import {
  Sparkles,
  ArrowUpRight,
  Zap,
  Target,
  Timer,
  Rocket,
  Palette,
  Code,
  TestTube,
  TrendingUp,
} from "lucide-react";
import { Button } from "@/components/ui/button";

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

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.21, 0.47, 0.32, 0.98],
    },
  },
  hover: {
    y: -8,
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  },
};

export function ApproachSection() {
  const steps = [
    {
      number: "01",
      title: "Discovery & Strategy",
      description:
        "We dive deep into your agency's goals, target audience, and competitive landscape to craft a conversion-focused strategy.",
      icon: Target,
      gradient: "from-blue-500 to-cyan-500",
      metrics: ["User research", "Competitor analysis", "KPI definition"],
    },
    {
      number: "02",
      title: "Design & Prototyping",
      description:
        "Stunning, user-centric designs that prioritize conversions. We prototype key interactions and gather feedback early.",
      icon: Palette,
      gradient: "from-purple-500 to-pink-500",
      metrics: ["Wireframes", "Interactive prototypes", "Visual design"],
    },
    {
      number: "03",
      title: "Development & Integration",
      description:
        "Scalable, performant websites built with Next.js. Seamless integrations with CRM, analytics, and marketing tools.",
      icon: Code,
      gradient: "from-emerald-500 to-teal-500",
      metrics: ["Next.js", "TypeScript", "API integration"],
    },
    {
      number: "04",
      title: "Testing & Optimization",
      description:
        "Rigorous testing across devices ensures flawless performance. We optimize for speed, accessibility, and conversions.",
      icon: TestTube,
      gradient: "from-orange-500 to-red-500",
      metrics: ["A/B testing", "Performance", "Accessibility"],
    },
    {
      number: "05",
      title: "Launch & Growth",
      description:
        "We don't just launch and leave. Ongoing support ensures your website continues to scale and drive results.",
      icon: Rocket,
      gradient: "from-indigo-500 to-purple-500",
      metrics: ["Deployment", "Monitoring", "Continuous improvement"],
    },
  ];

  return (
    <section className="relative py-32 overflow-hidden bg-gradient-to-b from-white to-zinc-50/50 dark:from-zinc-950 dark:to-zinc-900/50">
      {/* Vercel-style grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_60%,transparent_100%)] dark:bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)]" />

      {/* Next.js-style gradient orbs */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="absolute -left-[400px] -top-[400px] h-[800px] w-[800px] rounded-full bg-blue-500/5 blur-3xl dark:bg-blue-500/10" />
        <div className="absolute -right-[400px] -bottom-[400px] h-[800px] w-[800px] rounded-full bg-purple-500/5 blur-3xl dark:bg-purple-500/10" />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="container relative mx-auto px-4 z-10"
      >
        {/* Header */}
        <motion.div
          variants={itemVariants}
          className="max-w-3xl mx-auto text-center mb-20"
        >
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white/50 px-4 py-2 text-sm backdrop-blur-xl mb-6 dark:border-zinc-800 dark:bg-zinc-900/50"
          >
            <Sparkles className="h-4 w-4 text-blue-500" />
            <span className="font-medium text-zinc-700 dark:text-zinc-300">
              Our process
            </span>
          </motion.div>

          <h2 className="font-cal text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-balance mb-6">
            Built for{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              scale
            </span>
            ,<br />
            designed for growth
          </h2>

          <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
            A proven, transparent process that takes your vision from concept to
            market-leading conversion engine. Each phase is designed for maximum
            impact.
          </p>
        </motion.div>

        {/* Steps Grid - Desktop: 5 columns, Tablet: 3/2, Mobile: 1 */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-6"
          variants={containerVariants}
        >
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover="hover"
                className="group relative"
              >
                {/* Connector line between steps (desktop only) */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute -right-3 top-12 z-20">
                    <ArrowUpRight className="h-5 w-5 text-zinc-400 rotate-45" />
                  </div>
                )}

                {/* Card */}
                <div className="relative h-full rounded-2xl border border-zinc-200 bg-white/80 p-6 backdrop-blur-xl transition-all hover:border-zinc-300 hover:bg-white hover:shadow-xl dark:border-zinc-800 dark:bg-zinc-900/80 dark:hover:border-zinc-700 dark:hover:bg-zinc-900">
                  {/* Gradient glow on hover */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${step.gradient} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-500`}
                  />

                  {/* Step number with gradient */}
                  <div className="flex items-center justify-between mb-6">
                    <span
                      className={`font-cal text-4xl font-bold bg-gradient-to-r ${step.gradient} bg-clip-text text-transparent`}
                    >
                      {step.number}
                    </span>

                    {/* Icon container */}
                    <div className="relative">
                      <div
                        className={`absolute inset-0 bg-gradient-to-br ${step.gradient} opacity-20 blur-md group-hover:opacity-30 transition-opacity duration-500`}
                      />
                      <div
                        className={`relative flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${step.gradient} shadow-lg`}
                      >
                        <Icon className="h-6 w-6 text-white" />
                      </div>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="font-cal text-lg font-semibold text-zinc-900 dark:text-zinc-100 mb-3">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed mb-6">
                    {step.description}
                  </p>

                  {/* Metrics/Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {step.metrics.map((metric, i) => (
                      <span
                        key={i}
                        className="inline-flex items-center rounded-full bg-zinc-100 px-2.5 py-1 text-xs font-medium text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300"
                      >
                        {metric}
                      </span>
                    ))}
                  </div>

                  {/* Bottom accent border */}
                  <div
                    className={`absolute bottom-0 left-1/2 h-0.5 w-0 -translate-x-1/2 bg-gradient-to-r ${step.gradient} group-hover:w-2/3 transition-all duration-500`}
                  />
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Timeline metrics */}
        <motion.div
          variants={itemVariants}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 pt-12 border-t border-zinc-200 dark:border-zinc-800"
        >
          {[
            { label: "Average timeline", value: "4-8 weeks", icon: Timer },
            { label: "Client satisfaction", value: "98%", icon: Target },
            { label: "Projects delivered", value: "500+", icon: Rocket },
            { label: "Avg. conversion lift", value: "85%", icon: TrendingUp },
          ].map((stat, i) => {
            const StatIcon = stat.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 + i * 0.1 }}
                className="flex items-center gap-3"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-zinc-100 dark:bg-zinc-800">
                  <StatIcon className="h-5 w-5 text-zinc-700 dark:text-zinc-300" />
                </div>
                <div>
                  <div className="font-cal text-xl font-bold text-zinc-900 dark:text-zinc-100">
                    {stat.value}
                  </div>
                  <div className="text-xs text-zinc-600 dark:text-zinc-400">
                    {stat.label}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          variants={itemVariants}
          className="mt-20 flex flex-col sm:flex-row items-center justify-center gap-6 p-8 rounded-2xl bg-gradient-to-r from-blue-600/5 via-purple-600/5 to-pink-600/5 border border-zinc-200 dark:border-zinc-800"
        >
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-purple-600">
              <Zap className="h-5 w-5 text-white" />
            </div>
            <div className="text-left">
              <p className="font-medium text-zinc-900 dark:text-zinc-100">
                Ready to start your project?
              </p>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">
                Get a free timeline estimate and strategy call
              </p>
            </div>
          </div>
          <Button className="rounded-full bg-zinc-900 px-6 hover:bg-zinc-800 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-100">
            Start your journey
            <ArrowUpRight className="ml-2 h-4 w-4" />
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
}
