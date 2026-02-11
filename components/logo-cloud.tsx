"use client";

import { motion } from "framer-motion";

const logos = [
  {
    name: "Acme",
    url: "https://upload.wikimedia.org/wikipedia/commons/a/ab/Android_logo_2019_%28stacked%29.svg",
  },
  {
    name: "Quantum",
    url: "https://upload.wikimedia.org/wikipedia/commons/b/ba/Stripe_Logo%2C_revised_2016.svg",
  },
  {
    name: "Echo",
    url: "https://upload.wikimedia.org/wikipedia/commons/4/4d/OpenAI_Logo.svg",
  },
  {
    name: "Celestial",
    url: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
  },
  {
    name: "Pulse",
    url: "https://upload.wikimedia.org/wikipedia/commons/e/e8/Tesla_logo.png",
  },
];

const duplicatedLogos = [...logos, ...logos, ...logos];

export function LogoCloud() {
  return (
    <section className="py-20 bg-black overflow-hidden relative">
      <div className="container mx-auto px-8 mb-12 text-center">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-[10px] font-sans font-bold tracking-[0.4em] text-zinc-500 uppercase"
        >
          Powering the next generation of industry leaders
        </motion.p>
      </div>

      <div className="relative flex overflow-hidden">
        {/* Efek Gradient Fade Kiri & Kanan (Khas Limitless/Framer) */}
        <div className="absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-black to-transparent z-10" />
        <div className="absolute inset-y-0 right-0 w-40 bg-gradient-to-l from-black to-transparent z-10" />

        <motion.div
          className="flex whitespace-nowrap gap-20 items-center"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {duplicatedLogos.map((logo, i) => (
            <div
              key={i}
              className="flex items-center justify-center min-w-[120px]"
            >
              <img
                src={logo.url}
                alt={logo.name}
                className="h-8 w-auto grayscale opacity-30 hover:opacity-100 hover:grayscale-0 transition-all duration-500 cursor-crosshair"
              />
            </div>
          ))}
        </motion.div>
      </div>

      {/* Subtle Bottom Line */}
      <div className="mt-20 mx-auto max-w-4xl h-px bg-gradient-to-r from-transparent via-zinc-900 to-transparent" />
    </section>
  );
}
