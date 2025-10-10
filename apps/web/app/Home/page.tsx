import { Metadata } from "next";
import NavigationBar from "@/components/Home/NavigationBar";
import HeroSection from "@/components/Home/HeroSection";
import ProblemSolution from "@/components/Home/ProblemSolution";
import FeaturesGrid from "@/components/Home/FeaturesGrid";
import DashboardPreview from "@/components/DashboardPreview";
import HowItWorks from "@/components/Home/HowItWorks";
import TestimonialsSection from "@/components/Home/TestimonialsSection";
import TrustedBySection from "@/components/Home/TrustedBySection";
import FAQSection from "@/components/Home/FAQSection";
import FinalCTASection from "@/components/Home/FinalCTASection";
import FooterSection from "@/components/Home/FooterSection";

export const metadata: Metadata = {
  title: "Let's Kraack | Master Technical Interviews",
  description: "Accelerate your tech interview preparation with personalized learning paths, practice problems, and mock interviews.",
};

export default function HomePage() {
  return (
    <main className="flex flex-col min-h-screen bg-black text-white">
      {/* Navigation Bar */}
      <NavigationBar />
      
      {/* Hero Section */}
      <HeroSection />

      {/* Problem-Solution Section */}
      <ProblemSolution />

      {/* Features Grid */}
      <FeaturesGrid />

      {/* Dashboard Preview */}
      <DashboardPreview />

      {/* How It Works */}
      <HowItWorks />
      
      {/* Testimonials Section */}
      <TestimonialsSection />
      
      {/* Trusted By Section */}
      <TrustedBySection />
      
      {/* FAQ Section */}
      <FAQSection />
      
      {/* Final CTA Section */}
      <FinalCTASection />
      
      {/* Footer */}
      <FooterSection />
    </main>
  );
}