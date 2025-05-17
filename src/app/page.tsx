"use client";

<<<<<<< HEAD
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import CTASection from '@/components/CTASection';
import AboutSection from '@/components/AboutSection';
import ServicesSection from '@/components/ServicesSection';
import InsuranceSection from '@/components/InsuranceSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import FAQSection from '@/components/FAQSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
=======
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import CTASection from "@/components/CTASection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import InsuranceSection from "@/components/InsuranceSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer/Footer";
>>>>>>> 72081e7 (feat: Update CTASection component with improved layout and styling)

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <CTASection />
      <AboutSection />
      <ServicesSection />
      <InsuranceSection />
      <TestimonialsSection />
      <FAQSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
