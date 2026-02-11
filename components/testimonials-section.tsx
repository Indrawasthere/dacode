"use client";

import { motion } from "framer-motion";
import { Star, Terminal, ArrowUpRight } from "lucide-react";
import { useRef } from "react";

// 1. DATA DEFINITION (WAJIB ADA DI ATAS)
interface Testimonial {
  image: string;
  quote: string;
  name: string;
  role: string;
  company: string;
  impact: string;
}

const testimonials: Testimonial[] = [
  {
    image: "https://i.pravatar.cc/150?u=sarah",
    quote:
      "Dacode transformed our agency's web presence. The conversion-focused design increased inquiries by 85%. Unmatched precision.",
    name: "Sarah Mitchell",
    role: "Founder",
    company: "Digital Growth",
    impact: "+85% Inquiries",
  },
  {
    image: "https://i.pravatar.cc/150?u=james",
    quote:
      "Consistent high-quality work. They don't just build websites; they architect growth engines. 3x ROI achieved in Q1.",
    name: "James Rodriguez",
    role: "Creative Director",
    company: "Brand Studio",
    impact: "3x ROI",
  },
  {
    image: "https://i.pravatar.cc/150?u=emily",
    quote:
      "The team at Dacode understands the $10T AI economy better than anyone. They delivered a system, not just a site.",
    name: "Emily Chen",
    role: "CEO",
    company: "TechFlow Labs",
    impact: "AI Ready",
  },
  {
    image: "https://i.pravatar.cc/150?u=michael",
    quote:
      "Scalability was our main concern. Dacode built a core infrastructure that handles millions of requests without friction.",
    name: "Michael Park",
    role: "Head of Product",
    company: "Nexus AI",
    impact: "Zero Latency",
  },
];

export function TestimonialsSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  // 2. ANIMATION VARIANTS
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.8,
        ease: [0.21, 0.47, 0.32, 0.98],
      },
    }),
  };

  return (
    <section
      ref={containerRef}
      className="relative py-60 bg-[#050505] overflow-hidden"
    >
      {/* Background Decor */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.03)_0%,transparent_70%)] pointer-events-none" />

      <div className="container relative mx-auto max-w-6xl px-8 md:px-12 z-10">
        {/* Header Content */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-12 mb-32">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-8"
            >
              <Terminal className="h-4 w-4 text-sky-500" />
              <span className="text-[10px] font-sans font-bold tracking-[0.4em] text-sky-500 uppercase">
                Network_Validation
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-5xl md:text-7xl font-sans font-bold tracking-tighter text-white leading-none"
            >
              Trusted by the <br />
              <span className="font-serif italic text-zinc-600 font-light text-4xl md:text-6xl">
                new economy.
              </span>
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-zinc-500 max-w-[280px] text-base font-sans font-light leading-relaxed"
          >
            Real outcomes from global partners who migrated to our proprietary
            infrastructure.
          </motion.p>
        </div>

        {/* 3. MASONRY GRID (FIXED REFERENCE ERROR) */}
        <div className="columns-1 md:columns-2 gap-8 space-y-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-10%" }}
              className="relative break-inside-avoid rounded-[2rem] border border-zinc-900 bg-[#080808] p-10 group hover:border-zinc-700 transition-colors duration-500 overflow-hidden"
            >
              <div className="absolute top-0 right-0 px-6 py-2 bg-zinc-900 border-b border-l border-zinc-800 rounded-bl-2xl text-[10px] font-sans font-bold text-sky-500 tracking-widest uppercase">
                {t.impact}
              </div>

              <div className="flex gap-1 mb-10">
                {[...Array(5)].map((_, starIdx) => (
                  <Star
                    key={starIdx}
                    className="h-3 w-3 fill-white text-white opacity-20 group-hover:opacity-100 transition-opacity"
                  />
                ))}
              </div>

              <p className="text-zinc-400 text-xl leading-relaxed mb-12 font-sans font-light group-hover:text-zinc-200 transition-colors">
                "{t.quote}"
              </p>

              <div className="flex items-center justify-between pt-8 border-t border-zinc-900">
                <div className="flex items-center gap-4">
                  <img
                    src={t.image}
                    alt={t.name}
                    className="h-12 w-12 rounded-full grayscale group-hover:grayscale-0 transition-all duration-700 border border-zinc-800"
                  />
                  <div>
                    <h4 className="text-sm font-sans font-bold text-white tracking-wide">
                      {t.name}
                    </h4>
                    <p className="text-[10px] font-sans font-bold text-zinc-600 uppercase tracking-widest">
                      {t.role} <span className="text-zinc-800 mx-1">/</span>{" "}
                      <span className="text-zinc-500">{t.company}</span>
                    </p>
                  </div>
                </div>
                <ArrowUpRight className="h-5 w-5 text-zinc-800 group-hover:text-sky-500 transition-colors" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Metrics Footer */}
        <div className="mt-40 pt-20 border-t border-zinc-900/50">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
            {[
              { label: "Net Promoter Score", value: "9.8" },
              { label: "Client Retention", value: "96%" },
              { label: "Avg. ROI Factor", value: "4.2x" },
              { label: "Uptime Reliability", value: "99.99" },
            ].map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="space-y-2"
              >
                <span className="block text-[9px] font-sans font-bold text-zinc-600 uppercase tracking-[0.3em]">
                  {s.label}
                </span>
                <span className="text-4xl font-serif italic text-zinc-400">
                  {s.value}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
