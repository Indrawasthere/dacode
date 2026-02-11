"use client";

import { useState } from "react";
import {
  ChevronDown,
  Sparkles,
  MessageCircle,
  HelpCircle,
  Mail,
  Zap,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
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

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "What's your typical project timeline?",
      answer:
        "Most projects take 2-4 weeks from kickoff to launch, depending on scope. We provide detailed timelines during our discovery phase and keep you updated throughout the process. Rush delivery options are available for qualified projects.",
      category: "process",
    },
    {
      question: "Do you offer white-label services?",
      answer:
        "Yes! Our Enterprise plan includes white-label solutions where we work behind the scenes as an extension of your agency. Your clients will only see your branding. We've partnered with 50+ agencies on white-label projects.",
      category: "services",
    },
    {
      question: "What if I need revisions after launch?",
      answer:
        "All our plans include post-launch support. Professional plans get 30 days of support, while Enterprise clients receive ongoing maintenance and updates as part of their package. We also offer flexible maintenance retainers.",
      category: "support",
    },
    {
      question: "Can you work with our existing tech stack?",
      answer:
        "Absolutely. We're experienced with Next.js, React, WordPress, Shopify, Sanity, Contentful, and more. During discovery, we'll assess your current setup and recommend the best approach for seamless integration.",
      category: "technical",
    },
    {
      question: "How do you ensure high conversion rates?",
      answer:
        "We use data-driven design principles, A/B testing, and proven conversion optimization techniques. Every design decision is backed by research and best practices from thousands of successful projects. Average conversion lift: 85%.",
      category: "process",
    },
    {
      question: "What's included in ongoing support?",
      answer:
        "Ongoing support includes bug fixes, security updates, performance monitoring, content updates, and monthly strategy calls. Enterprise clients also get priority 24/7 support and quarterly business reviews.",
      category: "support",
    },
  ];

  const categories = [
    { id: "all", label: "All", count: faqs.length },
    {
      id: "process",
      label: "Process",
      count: faqs.filter((f) => f.category === "process").length,
    },
    {
      id: "services",
      label: "Services",
      count: faqs.filter((f) => f.category === "services").length,
    },
    {
      id: "technical",
      label: "Technical",
      count: faqs.filter((f) => f.category === "technical").length,
    },
    {
      id: "support",
      label: "Support",
      count: faqs.filter((f) => f.category === "support").length,
    },
  ];

  const [activeCategory, setActiveCategory] = useState("all");

  const filteredFaqs =
    activeCategory === "all"
      ? faqs
      : faqs.filter((f) => f.category === activeCategory);

  return (
    <section className="relative py-32 overflow-hidden bg-linear-to-b from-white to-zinc-50/50 dark:from-zinc-950 dark:to-zinc-900/50">
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
          <div className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white/50 px-4 py-2 text-sm backdrop-blur-xl mb-6 dark:border-zinc-800 dark:bg-zinc-900/50">
            <Sparkles className="h-4 w-4 text-blue-500" />
            <span className="font-medium text-zinc-700 dark:text-zinc-300">
              FAQ
            </span>
          </div>

          <h2 className="font-cal text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-balance mb-6">
            Questions{" "}
            <span className="bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              answered
            </span>
          </h2>

          <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
            Everything you need to know about working with us. Can't find what
            you're looking for? Reach out to our team.
          </p>
        </motion.div>

        {/* Category filters - Vercel style */}
        <motion.div
          variants={itemVariants}
          className="flex flex-wrap items-center justify-center gap-2 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`relative rounded-full px-4 py-2 text-sm font-medium transition-all ${
                activeCategory === category.id
                  ? "bg-zinc-900 text-white dark:bg-white dark:text-zinc-900"
                  : "bg-white/50 text-zinc-600 hover:bg-white hover:text-zinc-900 dark:bg-zinc-900/50 dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-white"
              } backdrop-blur-sm border border-zinc-200 dark:border-zinc-800`}
            >
              <span className="relative z-10 flex items-center gap-2">
                {category.label}
                <span
                  className={`text-xs ${
                    activeCategory === category.id
                      ? "text-white/70 dark:text-zinc-900/70"
                      : "text-zinc-500"
                  }`}
                >
                  ({category.count})
                </span>
              </span>
            </button>
          ))}
        </motion.div>

        {/* FAQ Items */}
        <motion.div
          variants={containerVariants}
          className="max-w-3xl mx-auto space-y-4"
        >
          {filteredFaqs.map((faq, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              layout
              className="group relative"
            >
              <div className="relative rounded-2xl border border-zinc-200 bg-white/80 backdrop-blur-xl overflow-hidden transition-all hover:border-zinc-300 hover:bg-white hover:shadow-lg dark:border-zinc-800 dark:bg-zinc-900/80 dark:hover:border-zinc-700 dark:hover:bg-zinc-900">
                <button
                  onClick={() =>
                    setOpenIndex(openIndex === index ? null : index)
                  }
                  className="w-full px-6 py-5 flex items-center justify-between text-left"
                >
                  <div className="flex items-center gap-4">
                    {/* Category indicator */}
                    <div
                      className={`
                      flex h-8 w-8 shrink-0 items-center justify-center rounded-lg
                      ${faq.category === "process" ? "bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400" : ""}
                      ${faq.category === "services" ? "bg-purple-100 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400" : ""}
                      ${faq.category === "technical" ? "bg-emerald-100 text-emerald-600 dark:bg-emerald-900/30 dark:text-emerald-400" : ""}
                      ${faq.category === "support" ? "bg-orange-100 text-orange-600 dark:bg-orange-900/30 dark:text-orange-400" : ""}
                    `}
                    >
                      <HelpCircle className="h-4 w-4" />
                    </div>

                    <span className="font-cal text-base md:text-lg font-semibold text-zinc-900 dark:text-zinc-100 pr-8">
                      {faq.question}
                    </span>
                  </div>

                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-zinc-100 group-hover:bg-zinc-200 dark:bg-zinc-800 dark:group-hover:bg-zinc-700"
                  >
                    <ChevronDown className="h-4 w-4 text-zinc-600 dark:text-zinc-400" />
                  </motion.div>
                </button>

                <AnimatePresence mode="wait">
                  {openIndex === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="border-t border-zinc-200 dark:border-zinc-800">
                        <div className="px-6 py-5 text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                          {faq.answer}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Still have questions? */}
        <motion.div variants={itemVariants} className="mt-20 max-w-2xl mx-auto">
          <div className="relative rounded-3xl border border-zinc-200 bg-white/50 p-8 backdrop-blur-xl text-center dark:border-zinc-800 dark:bg-zinc-900/50">
            {/* Gradient orbs */}
            <div className="absolute -top-20 -left-20 h-40 w-40 rounded-full bg-blue-500/5 blur-3xl" />
            <div className="absolute -bottom-20 -right-20 h-40 w-40 rounded-full bg-purple-500/5 blur-3xl" />

            <div className="relative z-10">
              <div className="flex justify-center mb-4">
                <div className="flex -space-x-2">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-linear-to-br from-blue-500 to-cyan-500">
                    <MessageCircle className="h-5 w-5 text-white" />
                  </div>
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-linear-to-br from-purple-500 to-pink-500">
                    <Mail className="h-5 w-5 text-white" />
                  </div>
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-linear-to-br from-emerald-500 to-teal-500">
                    <Zap className="h-5 w-5 text-white" />
                  </div>
                </div>
              </div>

              <h3 className="font-cal text-2xl font-bold text-zinc-900 dark:text-zinc-100 mb-3">
                Still have questions?
              </h3>

              <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-6 max-w-md mx-auto">
                Can't find the answer you're looking for? Our team is ready to
                help.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="rounded-full bg-zinc-900 px-6 hover:bg-zinc-800 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-100">
                  <MessageCircle className="mr-2 h-4 w-4" />
                  Start a conversation
                </Button>
                <Button
                  variant="outline"
                  className="rounded-full border-zinc-200 px-6 dark:border-zinc-800"
                >
                  <Mail className="mr-2 h-4 w-4" />
                  Email support
                </Button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Response time guarantee */}
        <motion.div variants={itemVariants} className="mt-8 text-center">
          <p className="text-xs text-zinc-500 dark:text-zinc-600">
            ⚡ Average response time: &lt; 2 hours during business hours
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}
