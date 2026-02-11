"use client";

import { motion } from "framer-motion";
import {
  TrendingUp,
  Award,
  ArrowUpRight,
  Sparkles,
  BarChart3,
  Target,
  Eye,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

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

export function CaseStudiesSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const caseStudies = [
    {
      client: "TechFlow Agency",
      project: "SaaS Landing Page Redesign",
      metric: "127%",
      metricLabel: "Conversion Increase",
      description:
        "Complete redesign of their flagship product landing page with A/B tested conversion optimization.",
      image: "/placeholder.svg?height=400&width=600",
      icon: TrendingUp,
      gradient: "from-blue-500 to-cyan-500",
      category: "Conversion Optimization",
      results: [
        "+127% conversion rate",
        "43% faster load time",
        "2.5x ROI in 3 months",
      ],
    },
    {
      client: "GrowthLab",
      project: "White-Label Platform",
      metric: "3x",
      metricLabel: "Faster Onboarding",
      description:
        "Built a scalable white-label solution enabling them to serve 50+ clients simultaneously.",
      image: "/placeholder.svg?height=400&width=600",
      icon: Award,
      gradient: "from-purple-500 to-pink-500",
      category: "Platform Development",
      results: [
        "3x faster onboarding",
        "50+ concurrent clients",
        "99.9% uptime",
      ],
    },
    {
      client: "Velocity Digital",
      project: "E-commerce Optimization",
      metric: "85%",
      metricLabel: "Revenue Growth",
      description:
        "Optimized checkout flow and implemented conversion-focused design patterns across their platform.",
      image: "/placeholder.svg?height=400&width=600",
      icon: BarChart3,
      gradient: "from-emerald-500 to-teal-500",
      category: "E-commerce",
      results: ["85% revenue growth", "34% cart recovery", "2.1x AOV increase"],
    },
    {
      client: "Nexus Partners",
      project: "Agency Website Rebuild",
      metric: "200+",
      metricLabel: "Qualified Leads/Month",
      description:
        "Strategic redesign focused on lead generation with integrated CRM and automation workflows.",
      image: "/placeholder.svg?height=400&width=600",
      icon: Target,
      gradient: "from-orange-500 to-red-500",
      category: "Lead Generation",
      results: [
        "200+ monthly leads",
        "47% conversion rate",
        "6-month payback period",
      ],
    },
  ];

  return (
    <section className="relative py-32 overflow-hidden bg-gradient-to-b from-zinc-50 to-white dark:from-zinc-950 dark:to-zinc-900">
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
        <motion.div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white/50 px-4 py-2 text-sm backdrop-blur-xl mb-6 dark:border-zinc-800 dark:bg-zinc-900/50"
          >
            <Sparkles className="h-4 w-4 text-blue-500" />
            <span className="font-medium text-zinc-700 dark:text-zinc-300">
              Proven results
            </span>
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="font-cal text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-balance mb-6"
          >
            Real{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              results
            </span>
            ,<br />
            real impact
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed"
          >
            See how we've transformed agencies and driven measurable growth for
            our partners. Every case study tells a story of innovation and
            success.
          </motion.p>
        </motion.div>

        {/* Grid */}
        <motion.div
          className="grid md:grid-cols-2 gap-8"
          variants={containerVariants}
        >
          {caseStudies.map((study, index) => {
            const IconComponent = study.icon;
            const isHovered = hoveredIndex === index;

            return (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover="hover"
                onHoverStart={() => setHoveredIndex(index)}
                onHoverEnd={() => setHoveredIndex(null)}
                className="group relative rounded-2xl border border-zinc-200 bg-white/80 backdrop-blur-xl overflow-hidden transition-all hover:border-zinc-300 hover:bg-white hover:shadow-2xl dark:border-zinc-800 dark:bg-zinc-900/80 dark:hover:border-zinc-700 dark:hover:bg-zinc-900"
              >
                {/* Gradient overlay on hover */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${study.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                />

                {/* Image Container */}
                <div className="relative h-64 overflow-hidden">
                  <motion.img
                    src={study.image || "/placeholder.svg"}
                    alt={study.project}
                    className="w-full h-full object-cover"
                    animate={isHovered ? { scale: 1.08 } : { scale: 1 }}
                    transition={{ duration: 0.6 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

                  {/* Category badge */}
                  <div className="absolute top-4 left-4">
                    <div className="inline-flex items-center gap-1.5 rounded-full bg-white/90 backdrop-blur-sm px-3 py-1.5 text-xs font-medium text-zinc-900 shadow-lg dark:bg-zinc-900/90 dark:text-zinc-100">
                      <div
                        className={`h-2 w-2 rounded-full bg-gradient-to-r ${study.gradient}`}
                      />
                      {study.category}
                    </div>
                  </div>

                  {/* View counter - Vercel style */}
                  <div className="absolute top-4 right-4 flex items-center gap-1.5 rounded-full bg-black/50 backdrop-blur-sm px-3 py-1.5 text-xs font-medium text-white">
                    <Eye className="h-3.5 w-3.5" />
                    <span>{Math.floor(Math.random() * 900 + 100)}k</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 relative">
                  {/* Client + Index */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="inline-flex items-center gap-2">
                      <div
                        className={`flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br ${study.gradient} shadow-lg`}
                      >
                        <IconComponent className="h-4 w-4 text-white" />
                      </div>
                      <span className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
                        {study.client}
                      </span>
                    </div>
                    <span className="font-cal text-sm font-bold text-zinc-400 dark:text-zinc-600">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  {/* Project title */}
                  <h3 className="font-cal text-2xl font-semibold text-zinc-900 dark:text-zinc-100 mb-4">
                    {study.project}
                  </h3>

                  {/* Metric */}
                  <div className="flex items-baseline gap-3 mb-4">
                    <div className="flex items-center gap-2">
                      <span
                        className={`font-cal text-4xl font-bold bg-gradient-to-r ${study.gradient} bg-clip-text text-transparent`}
                      >
                        {study.metric}
                      </span>
                      <span className="text-sm font-medium text-zinc-600 dark:text-zinc-400">
                        {study.metricLabel}
                      </span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed mb-6">
                    {study.description}
                  </p>

                  {/* Results list - appears on hover */}
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={
                      isHovered
                        ? { opacity: 1, height: "auto" }
                        : { opacity: 0, height: 0 }
                    }
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="pt-4 border-t border-zinc-200 dark:border-zinc-800">
                      <p className="text-xs font-medium uppercase tracking-wider text-zinc-500 dark:text-zinc-500 mb-3">
                        Key results
                      </p>
                      <ul className="space-y-2">
                        {study.results.map((result, i) => (
                          <li
                            key={i}
                            className="flex items-center gap-2 text-sm text-zinc-700 dark:text-zinc-300"
                          >
                            <div
                              className={`h-1.5 w-1.5 rounded-full bg-gradient-to-r ${study.gradient}`}
                            />
                            {result}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>

                  {/* CTA */}
                  <div className="flex items-center justify-between mt-6">
                    <Button
                      variant="ghost"
                      className="group/btn h-auto p-0 text-sm font-medium text-zinc-900 hover:bg-transparent dark:text-zinc-100"
                    >
                      Read case study
                      <ArrowUpRight className="ml-1 h-4 w-4 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                    </Button>
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-zinc-100 opacity-0 transition-all group-hover:opacity-100 dark:bg-zinc-800">
                      <ArrowUpRight className="h-4 w-4 text-zinc-700 dark:text-zinc-300" />
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div variants={itemVariants} className="mt-20 text-center">
          <Button
            size="lg"
            className="group relative h-12 overflow-hidden rounded-full bg-gradient-to-r from-blue-600 to-purple-600 px-8 font-medium text-white shadow-lg shadow-blue-600/25 transition-all hover:scale-105 hover:shadow-xl dark:from-blue-500 dark:to-purple-500"
          >
            <span className="relative z-10 flex items-center gap-2">
              View All Case Studies
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </span>
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
}
