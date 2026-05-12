import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import IntentNav from "@/components/IntentNav";
import ProductShowcase from "@/components/ProductShowcase";
import CustomProject from "@/components/CustomProject";
import Testimonials from "@/components/Testimonials";
import Differentials from "@/components/Differentials";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <AboutSection />
      <IntentNav />
      <ProductShowcase />
      <CustomProject />
      <Testimonials />
      <Differentials />
      <FAQ />
      <ContactSection />
      <FinalCTA />
      <Footer />
    </div>
  );
};

export default Index;
