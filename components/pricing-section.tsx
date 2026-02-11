"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, Shield, Crown, CheckCircle2 } from "lucide-react";
import {
  motion,
  useMotionValue,
  useMotionTemplate,
  useSpring,
} from "framer-motion";
import { MouseEvent, useRef } from "react";

function PricingCard({ plan, index }: { plan: any; index: number }) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function onMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.8 }}
      onMouseMove={onMouseMove}
      className={`group relative rounded-[2.5rem] border ${
        plan.popular ? "border-sky-500/50" : "border-zinc-900"
      } bg-[#080808] p-10 overflow-hidden transition-all duration-500 hover:border-zinc-700`}
    >
      {/* Dynamic Spotlight */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-[2.5rem] opacity-0 transition duration-500 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              800px circle at ${mouseX}px ${mouseY}px,
              rgba(56, 189, 248, 0.08),
              transparent 80%
            )
          `,
        }}
      />

      <div className="relative z-10 flex flex-col h-full">
        <div className="flex justify-between items-start mb-12">
          <div
            className={`p-4 rounded-2xl ${plan.popular ? "bg-sky-500/10 text-sky-400" : "bg-zinc-900 text-zinc-500"} border border-white/5 group-hover:scale-110 transition-transform duration-500`}
          >
            <plan.icon className="h-6 w-6 stroke-[1.5px]" />
          </div>
          {plan.popular && (
            <div className="flex flex-col items-end">
              <span className="text-[9px] font-sans font-black bg-sky-500 text-black px-3 py-1 rounded-full uppercase tracking-[0.2em]">
                Most Scalable
              </span>
            </div>
          )}
        </div>

        <div className="mb-8">
          <h3 className="text-3xl font-sans font-bold text-white tracking-tight mb-2">
            {plan.name}
          </h3>
          <p className="text-sm font-sans font-light text-zinc-500 leading-relaxed min-h-[40px]">
            {plan.description}
          </p>
        </div>

        <div className="mb-12">
          <div className="flex items-baseline gap-1">
            <span className="text-5xl font-sans font-bold text-white tracking-tighter">
              {plan.price}
            </span>
            {plan.price !== "Custom" && (
              <span className="text-zinc-600 text-xs font-sans font-bold tracking-widest uppercase ml-2">
                / Node
              </span>
            )}
          </div>
        </div>

        {/* Feature List with Custom Bullet */}
        <div className="space-y-5 mb-16 flex-grow">
          {plan.features.map((feature: string, i: number) => (
            <div key={i} className="flex items-center gap-4 group/item">
              <div
                className={`h-1.5 w-1.5 rounded-full ${plan.popular ? "bg-sky-500" : "bg-zinc-800"} group-hover/item:scale-150 transition-transform`}
              />
              <span className="text-sm font-sans font-light text-zinc-500 group-hover:text-zinc-300 transition-colors">
                {feature}
              </span>
            </div>
          ))}
        </div>

        <Button
          className={`group/btn relative w-full h-14 rounded-2xl overflow-hidden transition-all duration-500 ${
            plan.popular
              ? "bg-white text-black hover:bg-zinc-200"
              : "bg-transparent text-white border border-zinc-800 hover:border-zinc-600"
          }`}
        >
          <span className="relative z-10 flex items-center justify-center gap-2 font-sans font-bold text-[11px] tracking-[0.2em] uppercase">
            {plan.cta}
            <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
          </span>
          {plan.popular && (
            <motion.div
              animate={{ x: ["-100%", "200%"] }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 bg-gradient-to-r from-transparent via-black/5 to-transparent -skew-x-12"
            />
          )}
        </Button>
      </div>
    </motion.div>
  );
}

export function PricingSection() {
  const plans = [
    {
      name: "Starter",
      price: "Enquiry",
      description:
        "Foundational digital infrastructure for emerging businesses and startups.",
      features: [
        "Single Core Module",
        "10 User Licenses",
        "Standard API Access",
        "Cloud Native Hosting",
      ],
      icon: Zap,
      popular: false,
      cta: "Initialize",
    },
    {
      name: "Professional",
      price: "Enquiry",
      description:
        "Multi-modular integration for high-growth operations and data-driven teams.",
      features: [
        "3 Integrated Modules",
        "50 User Licenses",
        "Custom Workflow Engine",
        "Priority L1 Support",
      ],
      icon: Crown,
      popular: true,
      cta: "Scale Now",
    },
    {
      name: "Enterprise",
      price: "Custom",
      description:
        "Infinite scale with dedicated cloud resource and multi-region orchestration.",
      features: [
        "Unlimited Ecosystem",
        "Global Licenses",
        "AI Orchestration Node",
        "On-Prem Deployment",
      ],
      icon: Shield,
      popular: false,
      cta: "Architecture Call",
    },
  ];

  return (
    <section
      className="relative py-60 bg-[#050505] overflow-hidden"
      id="pricing"
    >
      {/* Breathable Background Decor */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[800px] bg-sky-500/[0.03] blur-[150px] rounded-full pointer-events-none" />

      <div className="container relative mx-auto max-w-6xl px-8 md:px-12 z-10">
        {/* Header - Breathable Alignment */}
        <div className="max-w-3xl mb-32">
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="flex items-center gap-3 mb-6"
          >
            <div className="h-px w-8 bg-zinc-800" />
            <span className="text-[10px] font-sans font-bold tracking-[0.4em] text-zinc-500 uppercase">
              Financial Architecture
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-sans font-bold tracking-tighter text-white leading-[1.1] mb-8"
          >
            Predictable Pricing. <br />
            <span className="font-serif italic text-zinc-600 font-light">
              Built for global scale.
            </span>
          </motion.h2>

          <p className="text-zinc-500 text-lg font-sans font-light max-w-xl leading-relaxed">
            Choose a foundation that evolves with your complexity. No hidden
            fees, just pure engineering.
          </p>
        </div>

        {/* The Cards Grid - Added spacing */}
        <div className="grid lg:grid-cols-3 gap-8 mb-40">
          {plans.map((plan, index) => (
            <PricingCard key={index} plan={plan} index={index} />
          ))}
        </div>

        {/* Footer Trust Signals - Clean & Grayscale */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="flex flex-col md:flex-row items-center justify-between gap-12 border-t border-zinc-900 pt-20"
        >
          <div className="flex flex-wrap justify-center md:justify-start gap-12 opacity-40 hover:opacity-100 transition-opacity duration-700">
            <div className="flex items-center gap-3 grayscale">
              <Shield className="h-5 w-5 text-white" />
              <span className="text-[10px] font-sans font-bold tracking-[0.2em] text-white uppercase">
                ISO 27001
              </span>
            </div>
            <div className="flex items-center gap-3 grayscale">
              <Zap className="h-5 w-5 text-white" />
              <span className="text-[10px] font-sans font-bold tracking-[0.2em] text-white uppercase">
                99.9% Uptime
              </span>
            </div>
            <div className="flex items-center gap-3 grayscale">
              <CheckCircle2 className="h-5 w-5 text-white" />
              <span className="text-[10px] font-sans font-bold tracking-[0.2em] text-white uppercase">
                SOC2 Type II
              </span>
            </div>
          </div>

          <p className="text-[10px] font-sans font-bold text-zinc-600 tracking-widest uppercase text-center md:text-right">
            Questions?{" "}
            <span className="text-white cursor-pointer hover:underline underline-offset-4">
              Talk to an Architect
            </span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
