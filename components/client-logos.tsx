"use client"

import { motion } from "framer-motion"
import { Sparkles, ChevronRight } from "lucide-react"

export function ClientLogos() {
  const logos = [
    { name: "Vercel", src: "/logos/logoipsum-254.svg", width: 120 },
    { name: "Next.js", src: "/logos/logoipsum-257.svg", width: 110 },
    { name: "Clerk", src: "/logos/logoipsum-251.svg", width: 100 },
    { name: "shadcn/ui", src: "/logos/logoipsum-242.svg", width: 130 },
    { name: "Acme Inc", src: "/logos/logoipsum-258.svg", width: 115 },
  ]

  // Duplicate logos for infinite scroll
  const allLogos = [...logos, ...logos, ...logos]

  return (
    <section className="relative py-16 overflow-hidden bg-gradient-to-b from-zinc-50/30 to-white dark:from-zinc-900/30 dark:to-zinc-950">
      {/* Vercel-style grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_50%,transparent_100%)] dark:bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)]" />
      
      <div className="container relative mx-auto px-4">
        {/* Section header with gradient */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white/50 px-4 py-1.5 text-xs font-medium backdrop-blur-xl mb-4 dark:border-zinc-800 dark:bg-zinc-900/50">
            <Sparkles className="h-3.5 w-3.5 text-blue-500" />
            <span className="text-zinc-700 dark:text-zinc-300">Enterprise-ready</span>
          </div>
          
          <h2 className="font-serif text-2xl md:text-3xl font-normal tracking-tight text-balance">
            Trusted by{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              industry leaders
            </span>
          </h2>
          
          <p className="mt-3 text-sm text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
            Powering the world's most innovative teams, from startups to Fortune 500 companies.
          </p>
        </motion.div>

        {/* Option 1: Grid layout (for slower motion) */}
        <div className="hidden md:grid md:grid-cols-5 gap-8 items-center justify-items-center">
          {logos.map((logo, index) => (
            <motion.div
              key={logo.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ 
                scale: 1.08,
                filter: "grayscale(0%)",
                transition: { duration: 0.2 }
              }}
              className="group relative flex items-center justify-center h-12 w-full cursor-pointer"
            >
              {/* Gradient glow on hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-purple-500/0 to-pink-500/0 opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300" />
              
              {/* Logo */}
              <img 
                src={logo.src || "/placeholder.svg"} 
                alt={logo.name}
                className="h-full w-auto object-contain opacity-50 grayscale transition-all duration-300 group-hover:opacity-100 group-hover:grayscale-0 dark:brightness-90 dark:group-hover:brightness-100"
                style={{ maxWidth: logo.width }}
              />
              
              {/* Tooltip on hover */}
              <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs font-medium text-zinc-500 opacity-0 group-hover:opacity-100 transition-opacity duration-200 dark:text-zinc-400">
                {logo.name}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Option 2: Infinite scroll carousel (for dynamic feel) */}
        <div className="md:hidden relative">
          <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-white to-transparent z-10 dark:from-zinc-950" />
          <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-white to-transparent z-10 dark:from-zinc-950" />
          
          <div className="overflow-hidden">
            <motion.div
              initial={{ x: 0 }}
              animate={{ x: "-50%" }}
              transition={{
                duration: 25,
                repeat: Infinity,
                ease: "linear",
                repeatType: "loop",
              }}
              className="flex gap-10 items-center"
            >
              {allLogos.map((logo, index) => (
                <motion.div
                  key={`${logo.name}-${index}`}
                  whileHover={{ scale: 1.1 }}
                  className="flex-shrink-0 flex items-center justify-center h-10 cursor-pointer"
                >
                  <img 
                    src={logo.src || "/placeholder.svg"} 
                    alt={logo.name}
                    className="h-full w-auto object-contain opacity-50 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-300 dark:brightness-90 dark:hover:brightness-100"
                  />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Desktop carousel (alternative layout) - uncomment to use instead of grid */}
        {/* <div className="hidden md:block relative">
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10 dark:from-zinc-950" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10 dark:from-zinc-950" />
          
          <div className="overflow-hidden">
            <motion.div
              initial={{ x: 0 }}
              animate={{ x: "-33.33%" }}
              transition={{
                duration: 40,
                repeat: Infinity,
                ease: "linear",
                repeatType: "loop",
              }}
              className="flex gap-16 items-center"
            >
              {[...logos, ...logos, ...logos].map((logo, index) => (
                <motion.div
                  key={`${logo.name}-${index}`}
                  whileHover={{ scale: 1.1 }}
                  className="flex-shrink-0 flex items-center justify-center h-12 cursor-pointer"
                >
                  <img 
                    src={logo.src || "/placeholder.svg"} 
                    alt={logo.name}
                    className="h-full w-auto object-contain opacity-40 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-300"
                    style={{ maxWidth: logo.width }}
                  />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div> */}

        {/* Stats row - Vercel style */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-16 pt-8 border-t border-zinc-200 dark:border-zinc-800"
        >
          <div className="flex flex-wrap justify-center gap-12 md:gap-20">
            <div className="text-center">
              <div className="font-cal text-3xl md:text-4xl font-bold text-zinc-900 dark:text-zinc-100">500+</div>
              <div className="text-sm text-zinc-600 dark:text-zinc-400 mt-1">Projects Deployed</div>
            </div>
            <div className="text-center">
              <div className="font-cal text-3xl md:text-4xl font-bold text-zinc-900 dark:text-zinc-100">10k+</div>
              <div className="text-sm text-zinc-600 dark:text-zinc-400 mt-1">Developers</div>
            </div>
            <div className="text-center">
              <div className="font-cal text-3xl md:text-4xl font-bold text-zinc-900 dark:text-zinc-100">99.9%</div>
              <div className="text-sm text-zinc-600 dark:text-zinc-400 mt-1">Uptime SLA</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}