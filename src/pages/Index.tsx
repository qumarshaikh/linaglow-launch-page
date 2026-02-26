import HeroSection from "@/components/HeroSection";
import EmotionalHook from "@/components/EmotionalHook";
import IngredientsSection from "@/components/IngredientsSection";
import TrustSection from "@/components/TrustSection";
import LeadCapture from "@/components/LeadCapture";
import BrandStory from "@/components/BrandStory";
import PreLaunchHype from "@/components/PreLaunchHype";
import StickyNotify from "@/components/StickyNotify";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <EmotionalHook />
      <IngredientsSection />
      <TrustSection />
      <LeadCapture />
      <BrandStory />
      <PreLaunchHype />
      <Footer />
      <StickyNotify />
    </div>
  );
};

export default Index;
