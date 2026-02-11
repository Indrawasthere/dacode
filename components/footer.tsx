"use client";

import Link from "next/link";
import {
  IconBrandLinkedin,
  IconBrandTwitter,
  IconBrandInstagram,
  IconBrandGithub,
  IconMail,
  IconPhone,
  IconBrandVercel,
} from "@tabler/icons-react";
import { motion } from "framer-motion";
import {
  Sparkles,
  ArrowUpRight,
  Heart,
  Shield,
  Zap,
  Triangle,
} from "lucide-react";

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
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.21, 0.47, 0.32, 0.98],
    },
  },
};

export function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Services", href: "#services" },
    { name: "Process", href: "#approach" },
    { name: "Pricing", href: "#pricing" },
    { name: "Case Studies", href: "#case-studies" },
    { name: "FAQ", href: "#faq" },
  ];

  const resources = [
    { name: "Documentation", href: "#" },
    { name: "Blog", href: "#" },
    { name: "Templates", href: "#" },
    { name: "API Status", href: "#", badge: "Live" },
  ];

  const socialLinks = [
    { icon: IconBrandLinkedin, href: "https://linkedin.com", name: "LinkedIn" },
    { icon: IconBrandTwitter, href: "https://twitter.com", name: "Twitter" },
    {
      icon: IconBrandInstagram,
      href: "https://instagram.com",
      name: "Instagram",
    },
    { icon: IconBrandGithub, href: "https://github.com", name: "GitHub" },
  ];

  return (
    <footer className="relative border-t border-zinc-200 bg-white/50 backdrop-blur-xl dark:border-zinc-800 dark:bg-zinc-950/50">
      {/* Vercel-style grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_60%,transparent_100%)] dark:bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)]" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="container relative mx-auto px-4 py-16 z-10"
      >
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12 mb-12">
          {/* Brand Column - Large */}
          <motion.div variants={itemVariants} className="lg:col-span-4">
            <div className="flex items-center gap-3 mb-6">
              <motion.div
                whileHover={{ scale: 1.05, rotate: 5 }}
                className="relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 blur-lg opacity-50" />
                <div className="relative flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 shadow-lg">
                  <Triangle className="h-6 w-6 fill-white text-white" />
                </div>
              </motion.div>
              <div>
                <span className="font-cal text-2xl font-bold bg-gradient-to-r from-zinc-900 to-zinc-700 bg-clip-text text-transparent dark:from-zinc-100 dark:to-zinc-300">
                  Dacode
                </span>
                <span className="block text-xs font-medium text-zinc-500 dark:text-zinc-500">
                  ▲ Powered by Vercel
                </span>
              </div>
            </div>

            <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed mb-6 max-w-md">
              Trusted conversion websites, built for agencies that scale. Turn
              every visit into growth with a partner invested in your success.
            </p>

            {/* Built with badge */}
            <div className="flex items-center gap-2 text-xs text-zinc-500 dark:text-zinc-600">
              <span>Built with</span>
              <div className="flex items-center gap-1 px-2 py-1 rounded-md bg-zinc-100 dark:bg-zinc-800">
                <Heart className="h-3 w-3 text-red-500 fill-red-500" />
                <span>Next.js</span>
              </div>
              <span>&</span>
              <div className="flex items-center gap-1 px-2 py-1 rounded-md bg-zinc-100 dark:bg-zinc-800">
                <Shield className="h-3 w-3 text-purple-500" />
                <span>Clerk</span>
              </div>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants} className="lg:col-span-2">
            <h3 className="font-cal text-sm font-semibold uppercase tracking-wider text-zinc-900 dark:text-zinc-100 mb-5">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link, i) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.2 + i * 0.05 }}
                >
                  <Link
                    href={link.href}
                    className="group inline-flex items-center gap-1.5 text-sm text-zinc-600 hover:text-zinc-900 transition-colors dark:text-zinc-400 dark:hover:text-zinc-100"
                  >
                    {link.name}
                    <ArrowUpRight className="h-3.5 w-3.5 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Resources */}
          <motion.div variants={itemVariants} className="lg:col-span-2">
            <h3 className="font-cal text-sm font-semibold uppercase tracking-wider text-zinc-900 dark:text-zinc-100 mb-5">
              Resources
            </h3>
            <ul className="space-y-3">
              {resources.map((resource, i) => (
                <motion.li
                  key={resource.name}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.25 + i * 0.05 }}
                  className="flex items-center gap-2"
                >
                  <Link
                    href={resource.href}
                    className="group inline-flex items-center gap-1.5 text-sm text-zinc-600 hover:text-zinc-900 transition-colors dark:text-zinc-400 dark:hover:text-zinc-100"
                  >
                    {resource.name}
                    <ArrowUpRight className="h-3.5 w-3.5 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
                  </Link>
                  {resource.badge && (
                    <span className="inline-flex items-center rounded-full bg-emerald-500/10 px-2 py-0.5 text-xs font-medium text-emerald-600 dark:text-emerald-400">
                      {resource.badge}
                    </span>
                  )}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact & Social */}
          <motion.div variants={itemVariants} className="lg:col-span-4">
            <h3 className="font-cal text-sm font-semibold uppercase tracking-wider text-zinc-900 dark:text-zinc-100 mb-5">
              Get in touch
            </h3>

            <div className="space-y-4 mb-6">
              <motion.a
                href="mailto:hello@sparkagency.com"
                whileHover={{ x: 4 }}
                className="group flex items-center gap-3 text-sm text-zinc-600 hover:text-zinc-900 transition-colors dark:text-zinc-400 dark:hover:text-zinc-100"
              >
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-zinc-100 group-hover:bg-zinc-200 dark:bg-zinc-800 dark:group-hover:bg-zinc-700 transition-colors">
                  <IconMail className="h-4 w-4" />
                </span>
                <span>hello@dacode.com</span>
              </motion.a>

              <motion.a
                href="tel:+1234567890"
                whileHover={{ x: 4 }}
                className="group flex items-center gap-3 text-sm text-zinc-600 hover:text-zinc-900 transition-colors dark:text-zinc-400 dark:hover:text-zinc-100"
              >
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-zinc-100 group-hover:bg-zinc-200 dark:bg-zinc-800 dark:group-hover:bg-zinc-700 transition-colors">
                  <IconPhone className="h-4 w-4" />
                </span>
                <span>+1 (555) 123-4567</span>
              </motion.a>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-3">
              {socialLinks.map((social, i) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex h-10 w-10 items-center justify-center rounded-lg bg-zinc-100 text-zinc-600 hover:bg-zinc-200 hover:text-zinc-900 transition-all dark:bg-zinc-800 dark:text-zinc-400 dark:hover:bg-zinc-700 dark:hover:text-zinc-100"
                >
                  <social.icon className="h-5 w-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          variants={itemVariants}
          className="pt-8 border-t border-zinc-200 dark:border-zinc-800"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <p className="text-xs text-zinc-500 dark:text-zinc-600">
              © {currentYear} Dacode Agency. All rights reserved.
            </p>

            {/* Legal Links */}
            <div className="flex items-center gap-6">
              <Link
                href="#"
                className="text-xs text-zinc-500 hover:text-zinc-900 transition-colors dark:text-zinc-600 dark:hover:text-zinc-300"
              >
                Privacy Policy
              </Link>
              <Link
                href="#"
                className="text-xs text-zinc-500 hover:text-zinc-900 transition-colors dark:text-zinc-600 dark:hover:text-zinc-300"
              >
                Terms of Service
              </Link>
              <Link
                href="#"
                className="text-xs text-zinc-500 hover:text-zinc-900 transition-colors dark:text-zinc-600 dark:hover:text-zinc-300"
              >
                Cookie Policy
              </Link>
            </div>

            {/* Vercel Badge */}
            <motion.a
              href="https://vercel.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              className="inline-flex items-center gap-2 rounded-full bg-zinc-100 px-3 py-1.5 text-xs font-medium text-zinc-700 transition-colors hover:bg-zinc-200 dark:bg-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-700"
            >
              <IconBrandVercel className="h-4 w-4" />
              Deployed on Vercel
            </motion.a>
          </div>

          {/* Made with love */}
          <div className="flex justify-center mt-6">
            <p className="text-xs text-zinc-400 dark:text-zinc-600 flex items-center gap-1">
              Crafted with precision by the Dacode team
              <Sparkles className="h-3 w-3 ml-1" />
            </p>
          </div>
        </motion.div>
      </motion.div>
    </footer>
  );
}
