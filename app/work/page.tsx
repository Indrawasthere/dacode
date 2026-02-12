"use client";

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { motion } from "framer-motion";
import { ArrowRight, ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const projects = [
  {
    title: "Neural CRM Platform",
    category: "Enterprise Software",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800",
    description:
      "AI-powered customer relationship management with predictive analytics",
    tags: ["Next.js", "TypeScript", "AI/ML", "PostgreSQL"],
    gradient: "from-blue-500 to-cyan-500",
    metrics: { users: "50k+", uptime: "99.9%", speed: "< 50ms" },
  },
  {
    title: "Supply Chain OS",
    category: "Logistics",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800",
    description: "Real-time warehouse management with IoT integration",
    tags: ["React", "Node.js", "MQTT", "Redis"],
    gradient: "from-purple-500 to-pink-500",
    metrics: { warehouses: "100+", accuracy: "99.8%", savings: "40%" },
  },
  {
    title: "Global HRIS Suite",
    category: "Human Capital",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800",
    description: "Multi-tenant HR platform with global compliance",
    tags: ["Next.js", "GraphQL", "MongoDB", "Stripe"],
    gradient: "from-emerald-500 to-teal-500",
    metrics: { employees: "25k+", countries: "50+", compliance: "100%" },
  },
  {
    title: "Quantum POS Engine",
    category: "Retail Tech",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800",
    description: "Lightning-fast point of sale with offline-first architecture",
    tags: ["React Native", "IndexedDB", "Sync Engine"],
    gradient: "from-orange-500 to-red-500",
    metrics: { stores: "500+", txn: "1M+/day", offline: "Yes" },
  },
];

const categories = [
  "All",
  "Enterprise",
  "Logistics",
  "Human Capital",
  "Retail",
];

export default function WorkPage() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <main className="min-h-screen bg-black">
      <Header />

      <section className="relative pt-40 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.05),transparent_70%)]" />

        <div className="container mx-auto max-w-6xl px-8 z-10 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-20"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-white/5 bg-white/[0.02] px-4 py-2 backdrop-blur-xl mb-8">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-xs font-sans font-bold uppercase tracking-[0.3em] text-zinc-500">
                Case Studies
              </span>
            </div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-6xl md:text-8xl lg:text-[120px] font-sans font-bold tracking-tighter text-white leading-none mb-8"
            >
              Working with
              <br />
              <span className="font-serif italic text-zinc-600 font-light">
                clients.
              </span>
            </motion.h1>

            <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
              Real projects, real impact. Transforming businesses through
              thoughtful engineering and design.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap justify-center gap-3 mb-20"
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-6 py-3 rounded-full text-sm font-sans font-bold uppercase tracking-wider transition-all ${
                  activeFilter === cat
                    ? "bg-white text-black"
                    : "bg-zinc-900 text-zinc-400 hover:bg-zinc-800 hover:text-white border border-zinc-800"
                }`}
              >
                {cat}
              </button>
            ))}
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                onHoverStart={() => setHoveredIndex(index)}
                onHoverEnd={() => setHoveredIndex(null)}
                className="group relative rounded-3xl border border-zinc-900 bg-[#080808] overflow-hidden hover:border-zinc-700 transition-all"
              >
                <div className="relative aspect-video overflow-hidden">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    animate={{
                      scale: hoveredIndex === index ? 1.1 : 1,
                    }}
                    transition={{ duration: 0.6 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />

                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/10 text-xs font-bold text-white uppercase tracking-wider">
                      {project.category}
                    </span>
                  </div>

                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{
                      opacity: hoveredIndex === index ? 1 : 0,
                    }}
                    className="absolute inset-0 flex items-center justify-center gap-4"
                  >
                    <Button
                      size="icon"
                      className="h-12 w-12 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 border border-white/10"
                    >
                      <ExternalLink className="h-5 w-5 text-white" />
                    </Button>
                    <Button
                      size="icon"
                      className="h-12 w-12 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 border border-white/10"
                    >
                      <Github className="h-5 w-5 text-white" />
                    </Button>
                  </motion.div>
                </div>

                <div className="p-8">
                  <h3 className="text-2xl font-sans font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-sm text-zinc-400 mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-xs font-bold text-zinc-400"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="grid grid-cols-3 gap-4 pt-6 border-t border-zinc-900">
                    {Object.entries(project.metrics).map(([key, value]) => (
                      <div key={key}>
                        <p className="text-xs uppercase tracking-wider text-zinc-600 font-bold mb-1">
                          {key}
                        </p>
                        <p className="text-lg font-serif italic text-white">
                          {value}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-20"
          >
            <Button
              size="lg"
              className="h-14 px-10 rounded-full bg-white text-black hover:bg-zinc-200 font-bold"
            >
              View All Projects
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
