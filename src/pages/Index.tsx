import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Specialties from "@/components/Specialties";
import HowTherapyWorks from "@/components/HowTherapyWorks";
import FeesInsurance from "@/components/FeesInsurance";
import SupervisionCard from "@/components/SupervisionCard";
import FinalCTA from "@/components/FinalCTA";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import VideoModal from "@/components/VideoModal";
import FAQ from "@/components/FAQ";
import SEOHead from "@/components/SEOHead";
import { autoPingSitemap } from "@/utils/sitemapPing";

const Index = () => {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  useEffect(() => {
    autoPingSitemap();
  }, []);

  return (
    <div className="min-h-screen">
      <SEOHead 
        title="Brigette Elgie LMFT | Park City Child & Teen Therapist"
        description="Expert trauma-informed therapy for children, teens & adults in Park City. EMDR, ART, anxiety & depression treatment. Licensed in Utah, CA, WA, NH."
        canonicalUrl="https://www.elgietherapy.com/"
      />
      <Navbar />
      <Hero onVideoClick={() => setIsVideoModalOpen(true)} />
      <About />
      <Specialties />
      <HowTherapyWorks />
      <FeesInsurance />
      
      <Contact />
      <FinalCTA />
      <FAQ />
      <SupervisionCard />
      <Footer />
      <VideoModal 
        isOpen={isVideoModalOpen} 
        onClose={() => setIsVideoModalOpen(false)} 
      />
    </div>
  );
};

export default Index;
