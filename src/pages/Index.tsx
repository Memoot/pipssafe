import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/home/HeroSection";
import { StatsSection } from "@/components/home/StatsSection";
import { ServicesSection } from "@/components/home/ServicesSection";
import { MarketsSection } from "@/components/home/MarketsSection";
import { AccountTypesSection } from "@/components/home/AccountTypesSection";
import { PlatformSection } from "@/components/home/PlatformSection";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { CTASection } from "@/components/home/CTASection";
import { PaymentMethodsSection } from "@/components/home/PaymentMethodsSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <StatsSection />
        <ServicesSection />
        <MarketsSection />
        <AccountTypesSection />
        <PlatformSection />
        <TestimonialsSection />
        <CTASection />
        <PaymentMethodsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
