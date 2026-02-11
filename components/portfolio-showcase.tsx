"use client"

import { motion } from "framer-motion"
import { ExternalLink, Sparkles, Code2, Eye, ArrowUpRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"

export function PortfolioShowcase() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  
  const portfolioItems = [
    {
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1-6laqPMa8FuLJLGY15UqGeDduXqPTnL.png",
      title: "Modern SaaS Platform",
      category: "Web Application",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2-2SM27flFV2PAGevb0yGPlw5a1VO0Uc.png",
      title: "E-commerce Solution",
      category: "Next.js Storefront",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/3-auovg1HaxuQFknmxHcpbfOBXQPjAWw.png",
      title: "Analytics Dashboard",
      category: "Data Visualization",
      gradient: "from-emerald-500 to-teal-500",
    },
    {
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/4-1SjePGsMFItZp8FKWs7dh9emmNImMD.png",
      title: "Marketing Landing Page",
      category: "High-Converting Design",
      gradient: "from-orange-500 to-red-500",
    },
    {
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/5-mlczSZMqTq3CmnCXAs0oV6ITGeKdDV.png",
      title: "Mobile Application",
      category: "React Native",
      gradient: "from-indigo-500 to-purple-500",
    },
  ]

  // Duplicate items for seamless infinite scroll
  const allItems = [...portfolioItems, ...portfolioItems, ...portfolioItems]

  return (
    <section className="relative py-24 overflow-hidden bg-gradient-to-b from-zinc-50/50 to-white dark:from-zinc-900/50 dark:to-zinc-950">
      {/* Vercel-style grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_110%)] dark:bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)]" />
      
      <div className="container relative mx-auto px-4 mb-16">
        <div className="text-center max-w-3xl mx-auto">
          {/* Section badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white/50 px-4 py-2 text-sm backdrop-blur-xl mb-6 dark:border-zinc-800 dark:bg-zinc-900/50"
          >
            <Sparkles className="h-4 w-4 text-blue-500" />
            <span className="font-medium text-zinc-700 dark:text-zinc-300">Featured Work</span>
          </motion.div>

          {/* Title */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="font-serif text-4xl md:text-5xl font-normal tracking-tight text-balance mb-4"
          >
            Websites that{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              convert
            </span>
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-zinc-600 dark:text-zinc-400 text-lg"
          >
            Real projects, real results. Built with Next.js, deployed on Vercel, and designed to scale.
          </motion.p>
        </div>
      </div>

      {/* Infinite Scroll Carousel */}
      <div className="relative">
        {/* Gradient masks for fade effect */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white via-white/80 to-transparent z-10 dark:from-zinc-950 dark:via-zinc-950/80" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white via-white/80 to-transparent z-10 dark:from-zinc-950 dark:via-zinc-950/80" />
        
        {/* Carousel track */}
        <div className="flex overflow-hidden">
          <motion.div
            initial={{ x: 0 }}
            animate={{ x: "-50%" }}
            transition={{
              duration: 40,
              repeat: Infinity,
              ease: "linear",
              repeatType: "loop",
            }}
            className="flex gap-6 px-4"
          >
            {allItems.map((item, index) => (
              <motion.div
                key={index}
                onHoverStart={() => setHoveredIndex(index)}
                onHoverEnd={() => setHoveredIndex(null)}
                className="relative flex-shrink-0 w-[500px] md:w-[600px] group"
              >
                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-lg transition-all duration-300 hover:shadow-2xl dark:border-zinc-800 dark:bg-zinc-900">
                  {/* Image */}
                  <img
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Content overlay */}
                  <div className="absolute inset-x-0 bottom-0 p-6 translate-y-6 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <span className={`inline-flex h-5 w-5 rounded-full bg-gradient-to-r ${item.gradient}`} />
                          <span className="text-xs font-medium text-white/90 uppercase tracking-wider">
                            {item.category}
                          </span>
                        </div>
                        <h3 className="text-lg font-semibold text-white mb-1">{item.title}</h3>
                      </div>
                      <Button
                        size="icon"
                        variant="ghost"
                        className="h-10 w-10 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white border-0"
                      >
                        <ArrowUpRight className="h-5 w-5" />
                      </Button>
                    </div>
                  </div>

                  {/* Vercel-style deploy indicator */}
                  {hoveredIndex === index && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="absolute top-4 left-4 flex items-center gap-2 rounded-full bg-white/90 backdrop-blur-sm px-3 py-1.5 text-xs font-medium text-zinc-900 shadow-lg dark:bg-zinc-900/90 dark:text-zinc-100"
                    >
                      <div className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                      <span>Deployed on Vercel</span>
                    </motion.div>
                  )}

                  {/* View counter - Vercel style */}
                  <div className="absolute top-4 right-4 flex items-center gap-1.5 rounded-full bg-black/50 backdrop-blur-sm px-3 py-1.5 text-xs font-medium text-white">
                    <Eye className="h-3.5 w-3.5" />
                    <span>{Math.floor(Math.random() * 900 + 100)}k</span>
                  </div>
                </div>

                {/* Caption for mobile/static view */}
                <div className="mt-3 flex items-center justify-between md:hidden">
                  <div>
                    <h4 className="font-medium text-zinc-900 dark:text-zinc-100">{item.title}</h4>
                    <p className="text-sm text-zinc-600 dark:text-zinc-400">{item.category}</p>
                  </div>
                  <Code2 className="h-4 w-4 text-zinc-400" />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* CTA Button */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        viewport={{ once: true }}
        className="container mx-auto px-4 mt-16 text-center"
      >
        <Button
          size="lg"
          className="group relative h-12 overflow-hidden rounded-full bg-gradient-to-r from-blue-600 to-purple-600 px-8 font-medium text-white shadow-lg shadow-blue-600/25 transition-all hover:scale-105 hover:shadow-xl dark:from-blue-500 dark:to-purple-500"
        >
          <span className="relative z-10 flex items-center gap-2">
            View All Projects
            <ExternalLink className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </span>
        </Button>
      </motion.div>
    </section>
  )
}