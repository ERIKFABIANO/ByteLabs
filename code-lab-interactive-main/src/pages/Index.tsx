import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import LearningPathSection from "@/components/LearningPathSection";
import ChaptersGrid from "@/components/ChaptersGrid";
import FlowSection from "@/components/FlowSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-16">
        <HeroSection />
        <LearningPathSection />
        <ChaptersGrid />
        <FlowSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
