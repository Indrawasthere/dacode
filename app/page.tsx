import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { EcosystemSection } from "@/components/services-section";
import { ApproachSection } from "@/components/approach-section";
import { PricingSection } from "@/components/pricing-section";
import { TestimonialsSection } from "@/components/testimonials-section";
import { LogoCloud } from "@/components/logo-cloud";
import { CTASection } from "@/components/cta-section";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <Header />
      <Hero />
      <LogoCloud />
      <EcosystemSection />
      <ApproachSection />
      <PricingSection />
      <TestimonialsSection />
      <CTASection />
      <Footer />
    </main>
  );
}
