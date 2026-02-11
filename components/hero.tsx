"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles, Github, Triangle, Rocket, Shield, Code2, ChevronDown } from "lucide-react"
import { motion } from "framer-motion"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.21, 0.47, 0.32, 0.98],
    },
  },
}

const floatingVariants = {
  float: {
    y: [0, -12, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
}

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-white via-zinc-50/50 to-white dark:from-zinc-950 dark:via-zinc-900/50 dark:to-zinc-950">
      {/* Vercel-style Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)] dark:bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)]" />
      
      {/* Animated Gradient Orbs - Next.js style */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
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
          className="absolute -left-[400px] -top-[400px] h-[800px] w-[800px] rounded-full bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 blur-3xl dark:from-blue-500/10 dark:via-purple-500/10 dark:to-pink-500/10"
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
          className="absolute -right-[400px] -bottom-[400px] h-[800px] w-[800px] rounded-full bg-gradient-to-r from-emerald-500/20 via-cyan-500/20 to-blue-500/20 blur-3xl dark:from-emerald-500/10 dark:via-cyan-500/10 dark:to-blue-500/10"
        />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="container relative mx-auto max-w-6xl px-4 py-20 md:py-32"
      >
        {/* shadcn/ui-style Trust Badge */}
        <motion.div
          variants={itemVariants}
          className="flex justify-center mb-6"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white/50 px-4 py-2 text-sm backdrop-blur-xl dark:border-zinc-800 dark:bg-zinc-900/50">
            <Shield className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
            <span className="font-medium text-zinc-700 dark:text-zinc-300">
              Trusted by 10,000+ developers
            </span>
            <span className="ml-2 flex h-5 w-5 items-center justify-center rounded-full bg-zinc-200 dark:bg-zinc-700">
              <Sparkles className="h-3 w-3 text-zinc-700 dark:text-zinc-300" />
            </span>
          </div>
        </motion.div>

        {/* Main Hero Content - Vercel/Next.js inspired */}
        <motion.div
          variants={itemVariants}
          className="text-center"
        >
          <motion.div
            variants={floatingVariants}
            animate="float"
            className="mb-6 flex justify-center"
          >
            <div className="relative">
              <div className="absolute inset-0 animate-pulse rounded-full bg-blue-500/30 blur-xl" />
              <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 shadow-2xl">
                <Triangle className="h-8 w-8 fill-white text-white" />
              </div>
            </div>
          </motion.div>

          <h1 className="font-cal text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-block bg-gradient-to-r from-zinc-900 via-zinc-800 to-zinc-900 bg-clip-text text-transparent dark:from-zinc-100 dark:via-zinc-200 dark:to-zinc-100"
            >
              Deploy. Scale.
            </motion.span>
            <br />
            <motion.span
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="inline-block mt-2"
            >
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent dark:from-blue-400 dark:via-purple-400 dark:to-pink-400">
                Ship faster.
              </span>
            </motion.span>
          </h1>

          <motion.p
            variants={itemVariants}
            className="mx-auto mt-6 max-w-2xl text-lg text-zinc-600 dark:text-zinc-400 md:text-xl"
          >
            The platform for frontend developers. Deploy your Next.js apps instantly, 
            authenticate users, and build beautiful interfaces with shadcn/ui.
          </motion.p>
        </motion.div>

        {/* CTA Section - Design only */}
        <motion.div
          variants={itemVariants}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <Button 
            size="lg" 
            className="group relative h-12 overflow-hidden rounded-full bg-gradient-to-r from-blue-600 to-purple-600 px-8 font-medium text-white shadow-lg shadow-blue-600/25 transition-all hover:scale-105 hover:shadow-xl dark:from-blue-500 dark:to-purple-500"
          >
            <span className="relative z-10 flex items-center gap-2">
              Get Started
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </span>
          </Button>

          <Button
            size="lg"
            variant="outline"
            className="h-12 rounded-full border-zinc-200 px-8 font-medium shadow-sm backdrop-blur-xl transition-all hover:scale-105 hover:bg-zinc-50 hover:shadow-md dark:border-zinc-800 dark:hover:bg-zinc-900"
          >
            <Github className="mr-2 h-4 w-4" />
            View on GitHub
          </Button>
        </motion.div>

        {/* Vercel-style Deploy Preview */}
        <motion.div
          variants={itemVariants}
          className="mt-16 flex justify-center"
        >
          <div className="inline-flex items-center gap-3 rounded-lg bg-zinc-100/80 px-4 py-2 text-sm backdrop-blur-sm dark:bg-zinc-800/80">
            <div className="flex -space-x-2">
              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-white shadow-sm dark:bg-zinc-900">
                <Code2 className="h-3 w-3 text-zinc-600 dark:text-zinc-400" />
              </div>
              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-white shadow-sm dark:bg-zinc-900">
                <Triangle className="h-3 w-3 fill-blue-500 text-blue-500" />
              </div>
            </div>
            <span className="text-zinc-700 dark:text-zinc-300">
              <span className="font-medium">vercel.com/</span>deploy/next-shadcn-template
            </span>
          </div>
        </motion.div>

        {/* Social Proof - Brand Icons */}
        <motion.div
          variants={itemVariants}
          className="mt-20 flex flex-col items-center gap-6"
        >
          <p className="text-xs font-medium uppercase tracking-wider text-zinc-500 dark:text-zinc-500">
            Built with the best tools
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 opacity-70">
            {[
              { name: "Vercel", icon: Triangle },
              { name: "Next.js", icon: "▲" },
              { name: "shadcn/ui", icon: Sparkles },
              { name: "Clerk", icon: Shield },
            ].map((item) => (
              <div
                key={item.name}
                className="flex items-center gap-2 font-cal text-lg text-zinc-600 dark:text-zinc-400"
              >
                {typeof item.icon === "string" ? (
                  <span className="text-xl">{item.icon}</span>
                ) : (
                  <item.icon className="h-5 w-5" />
                )}
                {item.name}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex cursor-pointer flex-col items-center gap-2"
          >
            <span className="text-xs font-medium text-zinc-400 dark:text-zinc-600">
              Scroll to explore
            </span>
            <div className="h-10 w-6 rounded-full border border-zinc-200 dark:border-zinc-800">
              <motion.div
                animate={{ y: [0, 16, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="mx-auto mt-2 h-1.5 w-1.5 rounded-full bg-zinc-400 dark:bg-zinc-600"
              />
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}