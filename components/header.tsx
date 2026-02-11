"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
} from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "About", href: "" },
    { name: "Features", href: "" },
    { name: "Ecosystem", href: "" },
    { name: "Pricing", href: "#pricing" },
  ];

  return (
    // Container luar dibuat transparan & fixed
    <header className="fixed top-0 left-0 right-0 z-[100] flex justify-center p-4 md:p-6 pointer-events-none">
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className={`
          flex items-center justify-between w-full max-w-5xl px-4 py-2 rounded-full
          border transition-all duration-500 pointer-events-auto
          ${
            isScrolled
              ? "border-white/10 bg-black/80 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.5)]"
              : "border-white/5 bg-zinc-900/40 backdrop-blur-md"
          }
        `}
      >
        {/* BRAND AREA WITH LOGO */}
        <Link href="/" className="flex items-center gap-3 pl-2 group">
          {/* LOGO SLOT: Ganti 'src' pake path logo lu bre */}
          <div className="relative h-8 w-8 overflow-hidden rounded-lg">
            <img
              src="/logo.png" // Taruh file logo lu di folder public/logo.png
              alt="Dacode Logo"
              className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-110"
              onError={(e) => {
                // Fallback kalo logo belum ada, biar gak kopong
                e.currentTarget.src =
                  "https://cdn-icons-png.flaticon.com/512/606/606203.png";
              }}
            />
          </div>

          <span className="text-lg font-serif font-medium tracking-tight text-white italic hidden sm:block">
            Dacode
            <span className="text-zinc-500 font-sans not-italic text-xs ml-0.5">
              .sys
            </span>
          </span>
        </Link>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="px-4 py-1.5 text-[12px] font-sans font-medium text-zinc-400 hover:text-white transition-colors relative group"
            >
              {item.name}
              <span className="absolute bottom-0 left-4 right-4 h-px bg-white/20 scale-x-0 group-hover:scale-x-100 transition-transform origin-center" />
            </Link>
          ))}
        </nav>

        {/* ACTIONS */}
        <div className="flex items-center gap-2">
          <Button
            size="sm"
            className="h-9 px-6 rounded-full bg-[#582CFF] hover:bg-[#4622CC] text-white text-[11px] font-bold uppercase tracking-wider transition-all shadow-[0_0_20px_rgba(88,44,255,0.2)]"
          >
            Book a call
          </Button>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-zinc-400 hover:text-white"
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </motion.div>

      {/* MOBILE MENU OVERLAY */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.98 }}
            className="fixed inset-x-4 top-20 bg-zinc-950/95 border border-white/10 rounded-[2.5rem] p-8 md:hidden z-[90] shadow-2xl backdrop-blur-3xl"
          >
            <div className="flex flex-col gap-6 text-center">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-3xl font-serif italic text-zinc-500 hover:text-white transition-colors"
                >
                  {item.name}
                </Link>
              ))}
              <hr className="border-white/5 my-2" />
              <Button className="w-full h-14 bg-[#582CFF] text-white rounded-2xl font-bold text-lg">
                Book a call
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
