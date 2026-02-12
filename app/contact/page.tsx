"use client";

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Send, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <main className="min-h-screen bg-black">
      <Header />

      <section className="relative pt-40 pb-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.05),transparent_70%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:64px_64px]" />

        <div className="container mx-auto max-w-6xl px-8 z-10 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-20"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-white/5 bg-white/[0.02] px-4 py-2 backdrop-blur-xl mb-8">
              <Sparkles className="h-4 w-4 text-blue-400" />
              <span className="text-xs font-sans font-bold uppercase tracking-[0.3em] text-zinc-500">
                Get in Touch
              </span>
            </div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-6xl md:text-8xl lg:text-[120px] font-sans font-bold tracking-tighter text-white leading-none mb-8"
            >
              Let's build
              <br />
              <span className="font-serif italic text-zinc-600 font-light">
                with us.
              </span>
            </motion.h1>

            <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
              Have a project in mind? We'd love to hear about it. Let's build
              something great together.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <div className="rounded-3xl border border-zinc-900 bg-[#080808] p-10">
                <h2 className="text-3xl font-sans font-bold text-white mb-8">
                  Send us a message
                </h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-sans font-bold text-zinc-400 uppercase tracking-wider mb-3">
                      Name
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="w-full px-6 py-4 rounded-xl bg-zinc-900 border border-zinc-800 text-white placeholder-zinc-600 focus:outline-none focus:border-blue-500 transition-colors"
                      placeholder="John Doe"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-sans font-bold text-zinc-400 uppercase tracking-wider mb-3">
                      Email
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full px-6 py-4 rounded-xl bg-zinc-900 border border-zinc-800 text-white placeholder-zinc-600 focus:outline-none focus:border-blue-500 transition-colors"
                      placeholder="john@company.com"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-sans font-bold text-zinc-400 uppercase tracking-wider mb-3">
                      Company
                    </label>
                    <input
                      type="text"
                      value={formData.company}
                      onChange={(e) =>
                        setFormData({ ...formData, company: e.target.value })
                      }
                      className="w-full px-6 py-4 rounded-xl bg-zinc-900 border border-zinc-800 text-white placeholder-zinc-600 focus:outline-none focus:border-blue-500 transition-colors"
                      placeholder="Acme Inc."
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-sans font-bold text-zinc-400 uppercase tracking-wider mb-3">
                      Message
                    </label>
                    <textarea
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      rows={6}
                      className="w-full px-6 py-4 rounded-xl bg-zinc-900 border border-zinc-800 text-white placeholder-zinc-600 focus:outline-none focus:border-blue-500 transition-colors resize-none"
                      placeholder="Tell us about your project..."
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full h-14 rounded-xl bg-white text-black hover:bg-zinc-200 font-bold"
                  >
                    Send Message
                    <Send className="ml-2 h-5 w-5" />
                  </Button>
                </form>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="space-y-8"
            >
              <div className="rounded-3xl border border-zinc-900 bg-[#080808] p-10">
                <h2 className="text-2xl font-sans font-bold text-white mb-8">
                  Contact Information
                </h2>

                <div className="space-y-8">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-zinc-900 shrink-0">
                      <Mail className="h-6 w-6 text-blue-400" />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-wider text-zinc-600 font-bold mb-2">
                        Email
                      </p>
                      <a
                        href="mailto:hello@dacode.io"
                        className="text-white hover:text-blue-400 transition-colors"
                      >
                        hello@dacode.io
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-zinc-900 shrink-0">
                      <Phone className="h-6 w-6 text-emerald-400" />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-wider text-zinc-600 font-bold mb-2">
                        Phone
                      </p>
                      <a
                        href="tel:+6281234567890"
                        className="text-white hover:text-emerald-400 transition-colors"
                      >
                        +62 812 3456 7890
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-zinc-900 shrink-0">
                      <MapPin className="h-6 w-6 text-purple-400" />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-wider text-zinc-600 font-bold mb-2">
                        Location
                      </p>
                      <p className="text-white">
                        Jakarta, Indonesia
                        <br />
                        <span className="text-zinc-500 text-sm">
                          Remote-first, global reach
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="rounded-3xl border border-zinc-900 bg-[#080808] p-10">
                <h3 className="text-xl font-sans font-bold text-white mb-4">
                  Office Hours
                </h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between items-center">
                    <span className="text-zinc-400">Monday - Friday</span>
                    <span className="text-white font-bold">9:00 - 18:00</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-zinc-400">Saturday</span>
                    <span className="text-white font-bold">10:00 - 14:00</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-zinc-400">Sunday</span>
                    <span className="text-zinc-600">Closed</span>
                  </div>
                </div>
              </div>

              <div className="rounded-3xl border border-zinc-900 bg-gradient-to-br from-blue-500/5 to-purple-500/5 p-10">
                <h3 className="text-xl font-sans font-bold text-white mb-3">
                  Response Time
                </h3>
                <p className="text-zinc-400 mb-4">
                  We typically respond within 24 hours during business days.
                </p>
                <div className="flex items-center gap-2"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
