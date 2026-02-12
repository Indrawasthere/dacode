"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  motion,
  AnimatePresence,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const { scrollY } = useScroll();

  const smoothScrollY = useSpring(scrollY, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const containerWidth = useTransform(smoothScrollY, [0, 100], ["90%", "100%"]);
  const maxWidth = useTransform(smoothScrollY, [0, 100], ["1000px", "1200px"]);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Work", href: "/work" },
    { name: "Services", href: "/services" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-100 flex justify-center px-4 py-6 pointer-events-none"
    >
      <motion.div
        style={{
          width: containerWidth,
          maxWidth: maxWidth,
        }}
        className={`
          flex items-center justify-between px-6 py-2.5 rounded-full
          border pointer-events-auto transition-colors duration-500
          ${
            isScrolled
              ? "border-white/10 bg-black/60 backdrop-blur-2xl shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
              : "border-white/5 bg-zinc-900/40 backdrop-blur-md"
          }
        `}
      >
        <Link href="/" className="flex items-center gap-3 pl-2 group">
          <motion.div
            whileHover={{ rotate: 360, scale: 1.1 }}
            className="relative h-9 w-9 overflow-hidden rounded-xl bg-white flex items-center justify-center shadow-inner"
          >
            <img
              src="/logo.png"
              className="h-5 w-5 object-contain"
              alt="Dacode"
              onError={(e) => (e.currentTarget.style.display = "none")}
            />
          </motion.div>

          <span className="text-lg font-serif font-medium tracking-tight text-white italic hidden sm:block">
            Dacode
            <span className="text-zinc-500 font-sans not-italic text-xs ml-0.5">
              .io
            </span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1 bg-white/5 p-1 rounded-full border border-white/5">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`relative px-4 py-1.5 text-[11px] font-sans font-bold uppercase tracking-widest transition-colors ${
                  isActive ? "text-white" : "text-zinc-500 hover:text-white"
                }`}
              >
                <span className="relative z-10">{item.name}</span>
                {isActive && (
                  <motion.div
                    layoutId="activeNav"
                    className="absolute inset-0 bg-white/10 rounded-full"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <Button
            size="sm"
            className="h-9 px-6 rounded-full bg-white text-black hover:bg-zinc-200 text-[11px] font-bold uppercase tracking-wider transition-transform active:scale-95 shadow-xl hidden sm:flex items-center gap-2"
          >
            Get Started
            <ArrowRight className="h-3 w-3" />
          </Button>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden flex h-9 w-9 items-center justify-center rounded-full bg-white/5 text-white"
          >
            {isMobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </motion.div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            className="fixed inset-x-4 top-24 bg-black/90 backdrop-blur-3xl border border-white/10 rounded-[2.5rem] p-8 md:hidden z-[90] shadow-2xl pointer-events-auto"
          >
            <div className="flex flex-col gap-4">
              {navItems.map((item, i) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-4xl font-serif italic text-zinc-600 hover:text-white transition-colors"
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
