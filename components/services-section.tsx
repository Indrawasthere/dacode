"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Database, Truck, Users, ArrowRight, Shield } from "lucide-react";

const SUITES = [
  {
    id: "ops",
    label: "Operations",
    icon: Database,
    title: "Intelligence Operations Suite",
    description:
      "Architecting the core of enterprise management. From AI-driven CRM to proprietary ERP frameworks.",
    features: [
      "Neural Lead Scoring",
      "Automated Fiscal Reporting",
      "Cross-platform Sync",
    ],
    imagePlaceholder: "Ops Visual",
  },
  {
    id: "logistics",
    label: "Logistics",
    icon: Truck,
    title: "Autonomous Supply Chain",
    description:
      "Next-gen WMS and asset tracking. Engineering nodes that self-heal and optimize in real-time.",
    features: [
      "Predictive Restocking",
      "RTLS Asset Tracking",
      "Mesh Network Nodes",
    ],
    imagePlaceholder: "Logistics Visual",
  },
  {
    id: "internal",
    label: "Human Capital",
    icon: Users,
    title: "Human Capital OS",
    description:
      "Managing global talent with precision. Scalable infrastructure for payroll, compliance, and growth.",
    features: ["Global Compliance", "Automated Payroll", "Retention Analytics"],
    imagePlaceholder: "HRIS Visual",
  },
];

export function EcosystemSection() {
  const [activeTab, setActiveTab] = useState(SUITES[0]);

  return (
    <section className="relative py-60 bg-[#050505] overflow-hidden">
      {/* 1. BREATHABLE CONTAINER: Limit width to 6xl and add significant X-padding */}
      <div className="container mx-auto max-w-6xl px-8 md:px-12">
        {/* Header - Narrower for better focus */}
        <div className="max-w-2xl mb-32">
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="flex items-center gap-3 mb-8"
          >
            <div className="h-px w-8 bg-blue-500" />
            <span className="text-[10px] font-sans font-bold tracking-[0.4em] text-blue-500 uppercase">
              Full Spectrum
            </span>
          </motion.div>

          <h2 className="text-5xl md:text-7xl font-sans font-bold text-white tracking-tighter leading-[1.1] mb-8">
            Everything you need <br />
            <span className="font-serif italic text-zinc-600 font-light text-4xl md:text-6xl">
              in one ecosystem.
            </span>
          </h2>
        </div>

        {/* Tab Navigation - Minimalist & Spaced */}
        <div className="flex flex-wrap gap-8 mb-16 border-b border-zinc-900 pb-2">
          {SUITES.map((suite) => (
            <button
              key={suite.id}
              onClick={() => setActiveTab(suite)}
              className={`relative pb-4 text-[11px] font-sans font-bold tracking-[0.2em] uppercase transition-all flex items-center gap-3
                ${activeTab.id === suite.id ? "text-white" : "text-zinc-600 hover:text-zinc-400"}`}
            >
              <suite.icon
                className={`w-4 h-4 transition-colors ${activeTab.id === suite.id ? "text-blue-500" : "text-zinc-700"}`}
              />
              {suite.label}
              {activeTab.id === suite.id && (
                <motion.div
                  layoutId="activeTabUnderline"
                  className="absolute bottom-[-1px] left-0 right-0 h-[2px] bg-blue-500 z-10"
                />
              )}
            </button>
          ))}
        </div>

        {/* Content Area - Increased padding and gap */}
        <div className="relative min-h-[500px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-start"
            >
              {/* Text Side - Occupies 5 columns */}
              <div className="lg:col-span-5 pt-4">
                <h3 className="text-3xl font-sans font-medium text-white mb-8 tracking-tight">
                  {activeTab.title}
                </h3>
                <p className="text-zinc-500 text-lg font-sans font-light leading-relaxed mb-12">
                  {activeTab.description}
                </p>

                <ul className="space-y-6 mb-16">
                  {activeTab.features.map((feat, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-4 text-zinc-400 text-sm font-sans font-light"
                    >
                      <div className="h-[1px] w-4 bg-zinc-800" />
                      {feat}
                    </li>
                  ))}
                </ul>

                <motion.button
                  whileHover={{ gap: "2rem" }}
                  className="flex items-center gap-6 text-white font-bold text-[10px] tracking-[0.3em] group transition-all"
                >
                  EXPLORE ARCHITECTURE
                  <ArrowRight className="w-4 h-4 text-blue-500" />
                </motion.button>
              </div>

              {/* Image Side - Occupies 7 columns */}
              <div className="lg:col-span-7 relative">
                <div className="aspect-[4/3] bg-[#080808] rounded-2xl border border-zinc-900 flex items-center justify-center overflow-hidden group shadow-2xl">
                  {/* Background Aura */}
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.05),transparent_70%)]" />

                  {/* Ganti div ini sama image beneran lu bre */}
                  <div className="relative z-10 text-zinc-800 font-mono text-[10px] tracking-[0.5em] uppercase border border-zinc-900/50 px-6 py-3 rounded-full">
                    {activeTab.imagePlaceholder}
                  </div>

                  {/* Floating Tech Badge */}
                  <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="absolute top-10 right-10 p-4 backdrop-blur-3xl bg-white/[0.01] border border-white/5 rounded-2xl shadow-2xl"
                  >
                    <Shield className="w-5 h-5 text-blue-500/50" />
                  </motion.div>
                </div>

                {/* Decorative background element for depth */}
                <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-blue-500/5 blur-[100px] rounded-full -z-10" />
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
