"use client";

import {
  motion,
  useInView,
  useSpring,
  useTransform,
  animate,
} from "framer-motion";
import { useRef, useEffect, useState } from "react";
import {
  TrendingUp,
  Users,
  Rocket,
  Sparkles,
  Target,
  BarChart3,
  ArrowUpRight,
  Zap,
  Globe,
  Award,
  CheckCircle2,
} from "lucide-react";

// Enhanced count-up with spring animation
const CountUp = ({
  target,
  duration = 2,
  suffix = "",
  prefix = "",
}: {
  target: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
}) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const increment = target / (duration * 60);
    let frame: number;

    const animate = () => {
      start += increment;
      if (start < target) {
        setCount(Math.floor(start));
        frame = requestAnimationFrame(animate);
      } else {
        setCount(target);
      }
    };

    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, [target, duration, isInView]);

  return (
    <motion.span
      ref={ref}
      initial={{ opacity: 0, y: 30, scale: 0.9 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{
        duration: 0.8,
        ease: [0.21, 0.47, 0.32, 0.98],
        delay: 0.2,
      }}
      className="tabular-nums inline-flex items-baseline"
    >
      {prefix}
      {count.toLocaleString()}
      {suffix}
    </motion.span>
  );
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.3,
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

const statCardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.21, 0.47, 0.32, 0.98],
    },
  },
  hover: {
    y: -12,
    scale: 1.02,
    transition: {
      duration: 0.4,
      ease: [0.21, 0.47, 0.32, 0.98],
    },
  },
};

const floatingVariants = {
  float: {
    y: [0, -15, 0],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

export function StatsSection() {
  const stats = [
    {
      number: 1000,
      formatted: "1,000+",
      label: "Projects Delivered",
      description:
        "Successfully deployed high-conversion websites for agencies worldwide with measurable ROI.",
      icon: Rocket,
      gradient: "from-blue-500 via-cyan-500 to-blue-500",
      glow: "group-hover:shadow-blue-500/25",
      suffix: "+",
      prefix: "",
    },
    {
      number: 85,
      formatted: "85%",
      label: "Avg Conversion Increase",
      description:
        "Our data-driven strategies help agencies achieve measurable growth and outperform competitors.",
      icon: TrendingUp,
      gradient: "from-purple-500 via-pink-500 to-purple-500",
      glow: "group-hover:shadow-purple-500/25",
      suffix: "%",
      prefix: "",
    },
    {
      number: 500,
      formatted: "500+",
      label: "Agency Partners",
      description:
        "Trusted by forward-thinking agencies to deliver exceptional results and long-term success.",
      icon: Users,
      gradient: "from-emerald-500 via-teal-500 to-emerald-500",
      glow: "group-hover:shadow-emerald-500/25",
      suffix: "+",
      prefix: "",
    },
  ];

  // Particle positions - use static values to avoid hydration mismatch
  const particles = Array.from({ length: 30 }, (_, i) => ({
    x: (i * 123) % 100,
    y: (i * 456) % 100,
    size: (i % 3) + 1,
    delay: i * 0.2,
    duration: 5 + (i % 5),
  }));

  return (
    <section className="relative py-40 overflow-hidden bg-linear-to-b from-black via-zinc-950 to-black dark:from-black dark:via-zinc-950 dark:to-black">
      {/* Premium animated grid background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_50%_-100px,#3b82f620,transparent)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_600px_at_80%_80%,#8b5cf620,transparent)]" />
      </div>

      {/* Animated gradient orbs - Vercel/Next.js inspired */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.15, 0.25, 0.15],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -left-[500px] -top-[500px] h-[1000px] w-[1000px] rounded-full bg-linear-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.15, 0.25, 0.15],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
          className="absolute -right-[500px] -bottom-[500px] h-[1000px] w-[1000px] rounded-full bg-linear-to-r from-emerald-500/20 via-cyan-500/20 to-blue-500/20 blur-3xl"
        />
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden">
        {particles.map((particle, i) => (
          <motion.div
            key={i}
            initial={{
              x: `${particle.x}%`,
              y: `${particle.y}%`,
              opacity: 0,
              scale: 0,
            }}
            animate={{
              y: [`${particle.y}%`, `${particle.y - 20}%`, `${particle.y}%`],
              opacity: [0, 0.3, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              delay: particle.delay,
              ease: "easeInOut",
            }}
            className="absolute h-1 w-1 rounded-full bg-linear-to-r from-blue-400 to-purple-400 blur-[1px]"
            style={{ width: particle.size, height: particle.size }}
          />
        ))}
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="container relative mx-auto px-4 z-10"
      >
        {/* Section badge with animation */}
        <motion.div
          variants={itemVariants}
          className="flex justify-center mb-8"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-900/80 px-5 py-2.5 text-sm backdrop-blur-xl shadow-2xl"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              <Sparkles className="h-4 w-4 text-blue-400" />
            </motion.div>
            <span className="font-medium bg-linear-to-r from-blue-300 via-purple-300 to-pink-300 bg-clip-text text-transparent">
              Real metrics, real results
            </span>
            <div className="flex h-5 w-5 items-center justify-center rounded-full bg-blue-500/20">
              <span className="text-[10px] font-bold text-blue-400">100+</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Headline with enhanced typography */}
        <motion.div variants={itemVariants} className="text-center mb-20">
          <h2 className="font-cal text-5xl md:text-6xl lg:text-7xl text-white leading-[1.1] tracking-tight text-balance">
            <span className="relative inline-block">
              <span className="absolute inset-0 bg-linear-to-r from-blue-400 via-purple-400 to-pink-400 blur-2xl opacity-30" />
              <span className="relative bg-linear-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Data-driven
              </span>
            </span>{" "}
            growth for
            <br />
            <span className="relative inline-block mt-2">
              <span className="absolute -inset-1 bg-white/5 blur-2xl" />
              <span className="relative text-white">modern agencies</span>
            </span>
          </h2>

          <motion.p
            variants={itemVariants}
            className="mx-auto mt-8 max-w-2xl text-lg md:text-xl text-zinc-400 leading-relaxed"
          >
            Every number tells a story of transformation. We help agencies turn
            visitors into customers, and customers into lifelong advocates.
          </motion.p>

          {/* Trust indicators */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap items-center justify-center gap-6 mt-8"
          >
            <div className="flex items-center gap-2 text-sm text-zinc-500">
              <CheckCircle2 className="h-4 w-4 text-emerald-500" />
              <span>ISO 27001 Certified</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-zinc-500">
              <Award className="h-4 w-4 text-amber-500" />
              <span>Awwwards Winner 2024</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-zinc-500">
              <Globe className="h-4 w-4 text-blue-500" />
              <span>Global Network</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Stats Grid with premium cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10"
          variants={containerVariants}
        >
          {stats.map((stat, index) => {
            const Icon = stat.icon;

            return (
              <motion.div
                key={index}
                variants={statCardVariants}
                whileHover="hover"
                className="group relative"
              >
                {/* Animated border gradient */}
                <div className="absolute -inset-px rounded-3xl bg-linear-to-b from-zinc-800 to-zinc-900 opacity-50 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Main card */}
                <div className="relative h-full rounded-3xl bg-linear-to-b from-zinc-900 to-zinc-950 p-10 shadow-2xl">
                  {/* Hover gradient overlay */}
                  <div
                    className={`absolute inset-0 bg-linear-to-br ${stat.gradient} opacity-0 group-hover:opacity-10 rounded-3xl transition-opacity duration-700`}
                  />

                  {/* Icon with premium effects */}
                  <div className="relative mb-8">
                    <div
                      className={`absolute inset-0 bg-linear-to-br ${stat.gradient} opacity-20 blur-2xl group-hover:opacity-40 transition-opacity duration-700`}
                    />
                    <div
                      className={`relative flex h-16 w-16 items-center justify-center rounded-2xl bg-linear-to-br ${stat.gradient} shadow-2xl group-hover:scale-110 transition-transform duration-500`}
                    >
                      <Icon className="h-8 w-8 text-white" />
                    </div>

                    {/* Decorative rings */}
                    <div className="absolute -top-2 -right-2 h-20 w-20 rounded-full border border-zinc-700/50 group-hover:border-blue-500/30 transition-colors duration-500" />
                    <div className="absolute -bottom-2 -left-2 h-20 w-20 rounded-full border border-zinc-700/50 group-hover:border-purple-500/30 transition-colors duration-500" />
                  </div>

                  {/* Stats Number with enhanced animation */}
                  <div className="relative mb-4">
                    <div className="flex items-end gap-2">
                      <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{
                          delay: index * 0.2 + 0.4,
                          duration: 0.8,
                          ease: [0.21, 0.47, 0.32, 0.98],
                        }}
                        className="font-cal text-6xl md:text-7xl font-bold bg-linear-to-b from-white to-zinc-300 bg-clip-text text-transparent"
                      >
                        {stat.number === 1000 ? (
                          <CountUp target={1000} suffix="+" />
                        ) : stat.number === 85 ? (
                          <CountUp target={85} suffix="%" />
                        ) : (
                          <CountUp target={500} suffix="+" />
                        )}
                      </motion.div>

                      {/* Live indicator */}
                      <motion.div
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="h-2 w-2 rounded-full bg-emerald-500"
                      />
                    </div>

                    {/* Label with gradient on hover */}
                    <h3 className="font-cal text-2xl font-semibold text-zinc-300 mt-3 group-hover:text-white transition-colors duration-300">
                      {stat.label}
                    </h3>
                  </div>

                  {/* Description with better readability */}
                  <p className="text-sm text-zinc-500 group-hover:text-zinc-400 leading-relaxed transition-colors duration-300 mb-8">
                    {stat.description}
                  </p>

                  {/* Interactive hover elements */}
                  <div className="absolute bottom-8 right-8 flex items-center gap-3">
                    <span className="text-xs font-medium text-zinc-600 group-hover:text-zinc-400 transition-colors duration-300 opacity-0 group-hover:opacity-100">
                      View case study
                    </span>
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 45 }}
                      className="flex h-10 w-10 items-center justify-center rounded-full bg-linear-to-br from-zinc-800 to-zinc-900 group-hover:from-blue-500 group-hover:to-purple-500 transition-all duration-500 shadow-lg"
                    >
                      <ArrowUpRight className="h-5 w-5 text-zinc-400 group-hover:text-white transition-colors duration-500" />
                    </motion.div>
                  </div>

                  {/* Progress bar animation */}
                  <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 + 0.6, duration: 0.8 }}
                    className="absolute bottom-0 left-0 right-0 h-1 rounded-b-3xl overflow-hidden"
                  >
                    <div
                      className={`absolute inset-0 bg-linear-to-r ${stat.gradient} opacity-30`}
                    />
                    <motion.div
                      animate={{ x: ["-100%", "100%"] }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                      className={`absolute inset-0 w-1/2 bg-linear-to-r ${stat.gradient} blur-md`}
                    />
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Enhanced metrics bar with premium styling */}
        <motion.div variants={itemVariants} className="mt-28 relative">
          {/* Decorative separator */}
          <div className="absolute -top-14 left-1/2 -translate-x-1/2 w-24 h-px bg-linear-to-r from-transparent via-zinc-700 to-transparent" />

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-12">
            {[
              {
                label: "Uptime SLA",
                value: "99.9%",
                icon: Target,
                change: "+0.1%",
                trend: "up",
              },
              {
                label: "Avg. Load Time",
                value: "<100ms",
                icon: Zap,
                change: "-45ms",
                trend: "down",
              },
              {
                label: "Pages Indexed",
                value: "50k+",
                icon: BarChart3,
                change: "+12k",
                trend: "up",
              },
              {
                label: "Happy Clients",
                value: "98%",
                icon: Users,
                change: "+5%",
                trend: "up",
              },
            ].map((metric, i) => {
              const MetricIcon = metric.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.8 + i * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="group relative"
                >
                  <div className="absolute inset-0 bg-linear-to-b from-zinc-800/0 to-zinc-800/50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className="relative p-4 rounded-2xl">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-linear-to-br from-zinc-800 to-zinc-900 group-hover:from-blue-500/20 group-hover:to-purple-500/20 transition-all duration-500">
                        <MetricIcon className="h-5 w-5 text-zinc-500 group-hover:text-blue-400 transition-colors duration-500" />
                      </div>
                      <span className="text-xs font-medium uppercase tracking-wider text-zinc-600 group-hover:text-zinc-400 transition-colors duration-500">
                        {metric.label}
                      </span>
                    </div>

                    <div className="flex items-baseline justify-between">
                      <div className="font-cal text-3xl font-bold text-white group-hover:scale-105 transition-transform duration-500 origin-left">
                        {metric.value}
                      </div>
                      <span
                        className={`text-xs font-medium ${
                          metric.trend === "up"
                            ? "text-emerald-500"
                            : "text-blue-500"
                        }`}
                      >
                        {metric.change}
                      </span>
                    </div>

                    {/* Mini chart sparkline */}
                    <div className="flex gap-0.5 mt-3">
                      {[40, 60, 45, 70, 55, 80, 75].map((height, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ height: 0 }}
                          whileInView={{ height }}
                          viewport={{ once: true }}
                          transition={{ delay: 1 + idx * 0.05, duration: 0.5 }}
                          className={`w-1.5 bg-linear-to-t ${
                            i === 0
                              ? "from-blue-500 to-cyan-500"
                              : i === 1
                                ? "from-purple-500 to-pink-500"
                                : i === 2
                                  ? "from-emerald-500 to-teal-500"
                                  : "from-orange-500 to-red-500"
                          } opacity-50 group-hover:opacity-100 transition-opacity duration-500 rounded-t-full`}
                        />
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Performance summary badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 1.2 }}
            className="absolute -bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-3 whitespace-nowrap"
          >
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-900/80 border border-zinc-800 backdrop-blur-sm">
              <div className="flex -space-x-2">
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-500/20 border border-blue-500/50">
                  <Zap className="h-3 w-3 text-blue-400" />
                </div>
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-purple-500/20 border border-purple-500/50">
                  <TrendingUp className="h-3 w-3 text-purple-400" />
                </div>
              </div>
              <span className="text-xs font-medium text-zinc-300">
                Performance score:{" "}
                <span className="text-emerald-400">98/100</span>
              </span>
            </div>
          </motion.div>
        </motion.div>

        {/* Animated scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1.5 }}
          className="flex justify-center mt-32"
        >
          <div className="flex flex-col items-center gap-3">
            <span className="text-xs font-medium uppercase tracking-wider text-zinc-600">
              Trusted by industry leaders
            </span>
            <div className="flex items-center gap-6 opacity-50">
              {["Vercel", "Next.js", "Clerk", "shadcn/ui"].map((brand) => (
                <span key={brand} className="text-sm font-cal text-zinc-500">
                  {brand}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
