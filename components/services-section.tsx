"use client";

import { motion } from "framer-motion";
import {
  Palette,
  Code,
  Zap,
  LifeBuoy,
  Sparkles,
  ArrowUpRight,
  Gauge,
  Users,
  Shield,
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

export function ServicesSection() {
  const services = [
    {
      title: "Conversion-Focused Design",
      description:
        "Strategic UI/UX that transforms visitors into customers with data-driven design decisions and A/B testing.",
      icon: Palette,
      gradient: "from-blue-500 to-cyan-500",
      stats: "+85% conversion",
      features: [
        "User research",
        "Wireframing",
        "Prototyping",
        "Visual design",
      ],
    },
    {
      title: "Agency White-Label",
      description:
        "Scalable platforms built for agencies to offer premium services under their own brand with full customization.",
      icon: Shield,
      gradient: "from-purple-500 to-pink-500",
      stats: "100% white-label",
      features: [
        "Custom branding",
        "Client portals",
        "Reporting dashboards",
        "API integration",
      ],
    },
    {
      title: "Scalable Development",
      description:
        "Future-proof architecture that grows with your agency using Next.js, Vercel, and modern best practices.",
      icon: Zap,
      gradient: "from-emerald-500 to-teal-500",
      stats: "<100ms response",
      features: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel deploy"],
    },
    {
      title: "Ongoing Growth",
      description:
        "Dedicated partnership that evolves with your business through continuous optimization and strategic guidance.",
      icon: LifeBuoy,
      gradient: "from-orange-500 to-red-500",
      stats: "24/7 monitoring",
      features: [
        "Performance audits",
        "SEO optimization",
        "Analytics",
        "Priority support",
      ],
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

      <div className="container relative mx-auto px-4 z-10">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white/50 px-4 py-2 text-sm backdrop-blur-xl mb-6 dark:border-zinc-800 dark:bg-zinc-900/50"
          >
            <Sparkles className="h-4 w-4 text-blue-500" />
            <span className="font-medium text-zinc-700 dark:text-zinc-300">
              Full-service solutions
            </span>
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="font-cal text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-balance mb-6"
          >
            Everything your{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              agency needs
            </span>
            <br />
            to scale
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed"
          >
            Comprehensive solutions designed for modern agencies. From
            conversion-focused design to scalable infrastructure, we've got you
            covered.
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover="hover"
                className="group relative rounded-2xl border border-zinc-200 bg-white/80 p-8 backdrop-blur-xl transition-all hover:border-zinc-300 hover:bg-white hover:shadow-xl dark:border-zinc-800 dark:bg-zinc-900/80 dark:hover:border-zinc-700 dark:hover:bg-zinc-900 dark:hover:shadow-2xl"
              >
                {/* Gradient glow on hover */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-500`}
                />

                {/* Icon with gradient background */}
                <div className="relative mb-6">
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-20 blur-xl group-hover:opacity-30 transition-opacity duration-500`}
                  />
                  <div
                    className={`relative flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${service.gradient} shadow-lg`}
                  >
                    <Icon className="h-7 w-7 text-white" />
                  </div>
                </div>

                {/* Title */}
                <h3 className="font-cal text-xl font-semibold text-zinc-900 dark:text-zinc-100 mb-3">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Stats badge */}
                <div className="inline-flex items-center gap-1.5 rounded-full bg-zinc-100 px-3 py-1.5 text-xs font-medium text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300 mb-6">
                  <Gauge className="h-3.5 w-3.5" />
                  {service.stats}
                </div>

                {/* Features list */}
                <ul className="space-y-2 mb-8">
                  {service.features.map((feature, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-2 text-xs text-zinc-600 dark:text-zinc-400"
                    >
                      <div className="h-1 w-1 rounded-full bg-zinc-400 dark:bg-zinc-600" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA Link */}
                <div className="flex items-center justify-between">
                  <span className="text-xs font-medium text-zinc-500 dark:text-zinc-500">
                    Learn more
                  </span>
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-zinc-100 opacity-0 transition-all group-hover:opacity-100 group-hover:bg-zinc-200 dark:bg-zinc-800 dark:group-hover:bg-zinc-700">
                    <ArrowUpRight className="h-4 w-4 text-zinc-700 dark:text-zinc-300" />
                  </div>
                </div>

                {/* Bottom accent border */}
                <div
                  className={`absolute bottom-0 left-1/2 h-0.5 w-0 -translate-x-1/2 bg-gradient-to-r ${service.gradient} group-hover:w-2/3 transition-all duration-500`}
                />
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-20 text-center"
        >
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-6 rounded-2xl border border-zinc-200 bg-white/50 backdrop-blur-xl dark:border-zinc-800 dark:bg-zinc-900/50">
            <div className="flex -space-x-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-cyan-500">
                <Users className="h-5 w-5 text-white" />
              </div>
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-purple-500 to-pink-500">
                <Code className="h-5 w-5 text-white" />
              </div>
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-emerald-500 to-teal-500">
                <Zap className="h-5 w-5 text-white" />
              </div>
            </div>
            <div className="text-left">
              <p className="font-medium text-zinc-900 dark:text-zinc-100">
                Not sure which service fits your needs?
              </p>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">
                Book a free consultation with our team
              </p>
            </div>
            <Button className="ml-auto rounded-full bg-zinc-900 px-6 hover:bg-zinc-800 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-100">
              Let's talk
              <ArrowUpRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
