"use client";

import { motion } from "framer-motion";
import {
  Star,
  Quote,
  Sparkles,
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

interface Testimonial {
  image: string;
  quote: string;
  name: string;
  role: string;
  rating: number;
  company?: string;
}

const testimonials: Testimonial[] = [
  {
    image: "/placeholder.svg?height=400&width=400",
    quote:
      "Dacode transformed our agency's web presence completely. The conversion-focused design they delivered increased our client inquiries by 85% in just three months. Their attention to detail and understanding of agency needs is unmatched.",
    name: "Sarah Mitchell",
    role: "Founder",
    company: "Digital Growth Agency",
    rating: 5,
  },
  {
    image: "/placeholder.svg?height=400&width=400",
    quote:
      "Working with Dacode has been a game-changer for our white-label services. They deliver consistently high-quality work that we're proud to present to our clients. The partnership has allowed us to scale faster than we ever thought possible.",
    name: "James Rodriguez",
    role: "Creative Director",
    company: "Brand Studio",
    rating: 5,
  },
  {
    image: "/placeholder.svg?height=400&width=400",
    quote:
      "The team at Dacode doesn't just build websites—they build growth engines. Their strategic approach to conversion optimization has helped us achieve a 3x ROI on our web investment. Highly recommend for any agency looking to scale.",
    name: "Emily Chen",
    role: "CEO",
    company: "Marketing Solutions Co.",
    rating: 5,
  },
  {
    image: "/placeholder.svg?height=400&width=400",
    quote:
      "Their data-driven approach to design and development has completely changed how we approach client projects. We've seen a 2.5x increase in client retention since partnering with Spark.",
    name: "Michael Park",
    role: "Head of Product",
    company: "TechFlow Labs",
    rating: 5,
  },
];

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

export function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length,
    );
  };

  return (
    <section className="relative py-32 overflow-hidden bg-gradient-to-b from-zinc-50 to-white dark:from-zinc-950 dark:to-zinc-900">
      {/* Vercel-style grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_60%,transparent_100%)] dark:bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)]" />

      {/* Next.js-style gradient orbs */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="absolute -left-[400px] -top-[400px] h-[800px] w-[800px] rounded-full bg-blue-500/5 blur-3xl dark:bg-blue-500/10" />
        <div className="absolute -right-[400px] -bottom-[400px] h-[800px] w-[800px] rounded-full bg-purple-500/5 blur-3xl dark:bg-purple-500/10" />
      </div>

      <div className="container relative mx-auto px-4 z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white/50 px-4 py-2 text-sm backdrop-blur-xl mb-6 dark:border-zinc-800 dark:bg-zinc-900/50"
          >
            <Sparkles className="h-4 w-4 text-blue-500" />
            <span className="font-medium text-zinc-700 dark:text-zinc-300">
              Trusted by agencies
            </span>
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="font-cal text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-balance mb-6"
          >
            What our{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              partners
            </span>{" "}
            say
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed"
          >
            Don't just take our word for it—hear from the agencies we've helped
            scale and transform.
          </motion.p>
        </motion.div>

        {/* Desktop Grid - 3 columns */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="hidden lg:grid lg:grid-cols-3 gap-6"
        >
          {testimonials.slice(0, 3).map((testimonial, index) => (
            <TestimonialCard
              key={index}
              testimonial={testimonial}
              index={index}
            />
          ))}
        </motion.div>

        {/* Tablet Grid - 2 columns */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="hidden md:grid lg:hidden grid-cols-2 gap-6"
        >
          {testimonials.slice(0, 2).map((testimonial, index) => (
            <TestimonialCard
              key={index}
              testimonial={testimonial}
              index={index}
            />
          ))}
        </motion.div>

        {/* Mobile Carousel */}
        <div className="md:hidden relative">
          <div className="overflow-hidden">
            <motion.div
              animate={{ x: `-${activeIndex * 100}%` }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="flex"
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0 px-2">
                  <TestimonialCard testimonial={testimonial} index={index} />
                </div>
              ))}
            </motion.div>
          </div>

          {/* Carousel Controls */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <Button
              variant="outline"
              size="icon"
              onClick={prevTestimonial}
              className="h-10 w-10 rounded-full border-zinc-200 bg-white/50 backdrop-blur-xl dark:border-zinc-800 dark:bg-zinc-900/50"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`h-2 rounded-full transition-all ${
                    activeIndex === index
                      ? "w-6 bg-gradient-to-r from-blue-600 to-purple-600"
                      : "w-2 bg-zinc-300 dark:bg-zinc-700"
                  }`}
                />
              ))}
            </div>
            <Button
              variant="outline"
              size="icon"
              onClick={nextTestimonial}
              className="h-10 w-10 rounded-full border-zinc-200 bg-white/50 backdrop-blur-xl dark:border-zinc-800 dark:bg-zinc-900/50"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 pt-12 border-t border-zinc-200 dark:border-zinc-800"
        >
          {[
            { label: "5-Star Reviews", value: "98%" },
            { label: "Repeat Clients", value: "85%" },
            { label: "Avg. ROI", value: "312%" },
            { label: "Years Partnered", value: "7+" },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div className="font-cal text-2xl md:text-3xl font-bold text-zinc-900 dark:text-zinc-100">
                {stat.value}
              </div>
              <div className="text-sm text-zinc-600 dark:text-zinc-400 mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function TestimonialCard({
  testimonial,
  index,
}: {
  testimonial: Testimonial;
  index: number;
}) {
  const gradients = [
    "from-blue-500 to-cyan-500",
    "from-purple-500 to-pink-500",
    "from-emerald-500 to-teal-500",
    "from-orange-500 to-red-500",
  ];
  const gradient = gradients[index % gradients.length];

  return (
    <motion.div
      variants={cardVariants}
      whileHover="hover"
      className="group relative h-full rounded-2xl border border-zinc-200 bg-white/80 p-8 backdrop-blur-xl transition-all hover:border-zinc-300 hover:bg-white hover:shadow-xl dark:border-zinc-800 dark:bg-zinc-900/80 dark:hover:border-zinc-700 dark:hover:bg-zinc-900"
    >
      {/* Gradient glow on hover */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-500`}
      />

      {/* Quote icon */}
      <div className="absolute top-6 right-6">
        <div
          className={`flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br ${gradient} opacity-20 group-hover:opacity-30 transition-opacity duration-500`}
        >
          <Quote className="h-5 w-5 text-white" />
        </div>
      </div>

      {/* Rating */}
      <div className="flex items-center gap-1 mb-6">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`h-4 w-4 ${
              i < testimonial.rating
                ? "fill-yellow-400 text-yellow-400"
                : "fill-zinc-200 text-zinc-200 dark:fill-zinc-700 dark:text-zinc-700"
            }`}
          />
        ))}
      </div>

      {/* Quote */}
      <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed mb-6 line-clamp-5">
        "{testimonial.quote}"
      </p>

      {/* Author */}
      <div className="flex items-center gap-4">
        <div className="relative">
          <div
            className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-30 blur-md`}
          />
          <div className="relative h-12 w-12 rounded-full overflow-hidden ring-2 ring-white dark:ring-zinc-800">
            <img
              src={testimonial.image || "/placeholder.svg"}
              alt={testimonial.name}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
        <div>
          <h4 className="font-cal text-base font-semibold text-zinc-900 dark:text-zinc-100">
            {testimonial.name}
          </h4>
          <p className="text-xs text-zinc-600 dark:text-zinc-400">
            {testimonial.role}, {testimonial.company}
          </p>
        </div>
      </div>

      {/* Bottom accent border */}
      <div
        className={`absolute bottom-0 left-1/2 h-0.5 w-0 -translate-x-1/2 bg-gradient-to-r ${gradient} group-hover:w-2/3 transition-all duration-500`}
      />
    </motion.div>
  );
}
