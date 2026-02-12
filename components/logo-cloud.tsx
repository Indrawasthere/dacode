"use client";

import { motion } from "framer-motion";
import { useRef, useState, useEffect } from "react";

const logos = [
  {
    name: "Android",
    url: "https://upload.wikimedia.org/wikipedia/commons/a/ab/Android_logo_2019_%28stacked%29.svg",
    width: 72,
  },
  {
    name: "Stripe",
    url: "https://upload.wikimedia.org/wikipedia/commons/b/ba/Stripe_Logo%2C_revised_2016.svg",
    width: 92,
  },
  {
    name: "OpenAI",
    url: "https://upload.wikimedia.org/wikipedia/commons/4/4d/OpenAI_Logo.svg",
    width: 100,
  },
  {
    name: "Google",
    url: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
    width: 88,
  },
  {
    name: "Tesla",
    url: "https://upload.wikimedia.org/wikipedia/commons/e/e8/Tesla_logo.png",
    width: 100,
  },
  {
    name: "Microsoft",
    url: "https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg",
    width: 100,
  },
  {
    name: "Amazon",
    url: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
    width: 92,
  },
  {
    name: "Meta",
    url: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg",
    width: 88,
  },
  {
    name: "Netflix",
    url: "https://upload.wikimedia.org/wikipedia/commons/7/75/Netflix_icon.svg",
    width: 48,
  },
  {
    name: "Spotify",
    url: "https://upload.wikimedia.org/wikipedia/commons/2/26/Spotify_logo_with_text.svg",
    width: 100,
  },
];

// Duplicate for seamless infinite scroll
const duplicatedLogos = [...logos, ...logos];

const fontSans = "font-['Inter',system-ui,sans-serif]";

export function LogoCloud() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [imageErrors, setImageErrors] = useState<Record<number, boolean>>({});

  // Fallback untuk logo yang gagal load
  const handleImageError = (index: number) => {
    setImageErrors((prev) => ({ ...prev, [index]: true }));
  };

  return (
    <section className="py-32 bg-black border-t border-white/[0.03] relative overflow-hidden">
      <div className="container mx-auto px-8 mb-16 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className={`text-xs ${fontSans} font-medium tracking-[0.3em] text-white/30 uppercase`}
        >
          Trusted by industry leaders
        </motion.p>

        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className={`text-2xl md:text-3xl ${fontSans} font-light text-white/60 mt-4 max-w-2xl mx-auto leading-relaxed`}
        >
          Powering the next generation of
          <span className="font-serif italic text-white/40">
            {" "}
            enterprise innovation
          </span>
        </motion.h3>
      </div>

      <div ref={containerRef} className="relative flex overflow-hidden">
        {/* Gradient Fades */}
        <div className="absolute inset-y-0 left-0 w-48 bg-gradient-to-r from-black via-black/90 to-transparent z-10" />
        <div className="absolute inset-y-0 right-0 w-48 bg-gradient-to-l from-black via-black/90 to-transparent z-10" />

        <motion.div
          className="flex whitespace-nowrap gap-16 items-center py-6"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 50,
            repeat: Infinity,
            ease: "linear",
            repeatType: "loop",
          }}
        >
          {duplicatedLogos.map((logo, i) => (
            <div
              key={i}
              className="flex items-center justify-center flex-shrink-0"
              style={{
                width: `${logo.width}px`,
                maxWidth: `${logo.width}px`,
                minWidth: `${logo.width}px`,
              }}
            >
              {!imageErrors[i] ? (
                <img
                  src={logo.url}
                  alt={`${logo.name} logo`}
                  className="w-full h-auto object-contain"
                  style={{
                    maxHeight: "36px",
                    filter: "brightness(0) invert(1) opacity(0.7)",
                  }}
                  onError={() => handleImageError(i)}
                />
              ) : (
                // Fallback text logo
                <span
                  className={`text-sm ${fontSans} font-medium text-white/40`}
                >
                  {logo.name}
                </span>
              )}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
