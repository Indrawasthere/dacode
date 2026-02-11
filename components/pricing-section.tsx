"use client";

import { Button } from "@/components/ui/button";
import {
  Check,
  ArrowRight,
  Sparkles,
  Zap,
  Shield,
  TrendingUp,
  Users,
  Code,
} from "lucide-react";
import { motion } from "framer-motion";
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

export function PricingSection() {
  const [billingCycle, setBillingCycle] = useState<"project" | "monthly">(
    "project",
  );

  const plans = [
    {
      name: "Starter",
      price: {
        project: "$2,500",
        monthly: "$899",
      },
      period: {
        project: "per project",
        monthly: "per month",
      },
      description: "Perfect for testing conversion-focused design",
      features: [
        "Single landing page / microsite",
        "Mobile responsive design",
        "2 rounds of revisions",
        "1 week delivery",
        "Basic SEO optimization",
        "Analytics setup",
      ],
      cta: "Get Started",
      icon: Zap,
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      name: "Professional",
      price: {
        project: "$7,500",
        monthly: "$2,499",
      },
      period: {
        project: "per project",
        monthly: "per month",
      },
      description: "Scale with comprehensive web solutions",
      features: [
        "Multi-page website (up to 10 pages)",
        "Custom design system",
        "Unlimited revisions",
        "2 week delivery",
        "Advanced SEO & analytics",
        "CMS integration (Sanity/Contentful)",
        "30 days post-launch support",
        "Performance optimization",
      ],
      cta: "Get Started",
      featured: true,
      icon: TrendingUp,
      gradient: "from-purple-500 to-pink-500",
    },
    {
      name: "Enterprise",
      price: {
        project: "Custom",
        monthly: "Custom",
      },
      period: {
        project: "contact us",
        monthly: "contact us",
      },
      description: "White-label solutions with ongoing partnership",
      features: [
        "Unlimited pages & features",
        "White-label solutions",
        "Dedicated account manager",
        "Priority 24/7 support",
        "Custom integrations",
        "Ongoing maintenance",
        "Performance monitoring",
        "Monthly strategy calls",
        "Team training",
      ],
      cta: "Talk to Sales",
      icon: Shield,
      gradient: "from-emerald-500 to-teal-500",
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
        <motion.div
          variants={itemVariants}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white/50 px-4 py-2 text-sm backdrop-blur-xl mb-6 dark:border-zinc-800 dark:bg-zinc-900/50"
          >
            <Sparkles className="h-4 w-4 text-blue-500" />
            <span className="font-medium text-zinc-700 dark:text-zinc-300">
              Simple, transparent pricing
            </span>
          </motion.div>

          <h2 className="font-cal text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-balance mb-6">
            Choose the perfect plan
            <br />
            for your{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              agency
            </span>
          </h2>

          <p className="text-lg text-zinc-600 dark:text-zinc-400">
            All plans include our conversion-first approach. No hidden fees.
          </p>
        </motion.div>

        {/* Billing toggle - Vercel style */}
        <motion.div
          variants={itemVariants}
          className="flex items-center justify-center gap-4 mb-16"
        >
          <div className="inline-flex items-center rounded-full border border-zinc-200 bg-white/50 p-1 backdrop-blur-xl dark:border-zinc-800 dark:bg-zinc-900/50">
            <button
              onClick={() => setBillingCycle("project")}
              className={`relative rounded-full px-6 py-2 text-sm font-medium transition-all ${
                billingCycle === "project"
                  ? "bg-white text-zinc-900 shadow-lg dark:bg-zinc-800 dark:text-white"
                  : "text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
              }`}
            >
              Per Project
            </button>
            <button
              onClick={() => setBillingCycle("monthly")}
              className={`relative rounded-full px-6 py-2 text-sm font-medium transition-all ${
                billingCycle === "monthly"
                  ? "bg-white text-zinc-900 shadow-lg dark:bg-zinc-800 dark:text-white"
                  : "text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
              }`}
            >
              Monthly
            </button>
          </div>
          <div className="hidden sm:flex items-center gap-1.5 rounded-full bg-blue-500/10 px-3 py-1.5 text-xs font-medium text-blue-600 dark:text-blue-400">
            <Zap className="h-3.5 w-3.5" />
            Save 20% with annual
          </div>
        </motion.div>

        {/* Pricing Cards */}
        <motion.div
          className="grid lg:grid-cols-3 gap-6 lg:gap-8"
          variants={containerVariants}
        >
          {plans.map((plan, index) => {
            const Icon = plan.icon;

            return (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover="hover"
                className={`group relative rounded-3xl overflow-hidden transition-all ${
                  plan.featured
                    ? "lg:scale-105 bg-gradient-to-b from-white to-zinc-50/50 dark:from-zinc-900 dark:to-zinc-950 border-2 border-transparent [background:linear-gradient(white,white)_padding-box,linear-gradient(135deg,#3b82f6,#8b5cf6)_border-box] dark:[background:linear-gradient(#09090b,#09090b)_padding-box,linear-gradient(135deg,#3b82f6,#8b5cf6)_border-box]"
                    : "bg-white/80 dark:bg-zinc-900/80 border border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700"
                } backdrop-blur-xl p-8 shadow-xl`}
              >
                {/* Gradient glow on hover */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${plan.gradient} opacity-0 group-hover:opacity-5 rounded-3xl transition-opacity duration-500`}
                />

                {/* Featured badge */}
                {plan.featured && (
                  <motion.div
                    initial={{ y: -20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.15 + 0.3 }}
                    className="absolute -top-1 left-1/2 -translate-x-1/2 -translate-y-1/2"
                  >
                    <div className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 px-4 py-1.5 text-xs font-semibold text-white shadow-lg">
                      <Sparkles className="h-3.5 w-3.5" />
                      MOST POPULAR
                    </div>
                  </motion.div>
                )}

                {/* Plan header */}
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <div
                        className={`flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br ${plan.gradient} shadow-lg`}
                      >
                        <Icon className="h-5 w-5 text-white" />
                      </div>
                      <h3 className="font-cal text-2xl font-semibold text-zinc-900 dark:text-zinc-100">
                        {plan.name}
                      </h3>
                    </div>
                    <p className="text-sm text-zinc-600 dark:text-zinc-400">
                      {plan.description}
                    </p>
                  </div>
                </div>

                {/* Price */}
                <div className="mb-8">
                  <div className="flex items-baseline gap-2 mb-1">
                    <span className="font-cal text-4xl lg:text-5xl font-bold text-zinc-900 dark:text-zinc-100">
                      {plan.price[billingCycle]}
                    </span>
                  </div>
                  <p className="text-sm text-zinc-500 dark:text-zinc-500">
                    {plan.period[billingCycle]}
                  </p>
                </div>

                {/* Features */}
                <div className="mb-8 space-y-4">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start gap-3">
                      <div
                        className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gradient-to-br ${plan.gradient} opacity-20 group-hover:opacity-30 transition-opacity`}
                      >
                        <Check className="h-3.5 w-3.5 text-zinc-700 dark:text-zinc-300" />
                      </div>
                      <span className="text-sm text-zinc-600 dark:text-zinc-400">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <Button
                  size="lg"
                  className={`w-full rounded-xl font-medium transition-all ${
                    plan.featured
                      ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-600/25 hover:scale-105 hover:shadow-xl"
                      : "bg-zinc-900 text-white hover:bg-zinc-800 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-100"
                  }`}
                >
                  {plan.cta}
                  <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                </Button>

                {/* Bottom accent */}
                <div
                  className={`absolute bottom-0 left-1/2 h-1 w-0 -translate-x-1/2 bg-gradient-to-r ${plan.gradient} group-hover:w-2/3 transition-all duration-500 rounded-t-full`}
                />
              </motion.div>
            );
          })}
        </motion.div>

        {/* Features grid */}
        <motion.div
          variants={itemVariants}
          className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8 pt-12 border-t border-zinc-200 dark:border-zinc-800"
        >
          {[
            { label: "30-day guarantee", value: "Money-back", icon: Shield },
            { label: "Support", value: "24/7 priority", icon: Users },
            { label: "Deployment", value: "Vercel included", icon: Code },
            {
              label: "Analytics",
              value: "Advanced tracking",
              icon: TrendingUp,
            },
          ].map((item, i) => {
            const FeatureIcon = item.icon;
            return (
              <div key={i} className="flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-zinc-100 dark:bg-zinc-800">
                  <FeatureIcon className="h-5 w-5 text-zinc-700 dark:text-zinc-300" />
                </div>
                <div>
                  <div className="font-cal text-lg font-bold text-zinc-900 dark:text-zinc-100">
                    {item.value}
                  </div>
                  <div className="text-xs text-zinc-600 dark:text-zinc-400">
                    {item.label}
                  </div>
                </div>
              </div>
            );
          })}
        </motion.div>

        {/* FAQ tease */}
        <motion.div variants={itemVariants} className="mt-16 text-center">
          <p className="text-sm text-zinc-600 dark:text-zinc-400">
            Have questions? Check our{" "}
            <button className="font-medium text-zinc-900 underline underline-offset-4 hover:text-zinc-700 dark:text-zinc-100 dark:hover:text-zinc-300">
              FAQ
            </button>{" "}
            or{" "}
            <button className="font-medium text-zinc-900 underline underline-offset-4 hover:text-zinc-700 dark:text-zinc-100 dark:hover:text-zinc-300">
              contact sales
            </button>
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}
