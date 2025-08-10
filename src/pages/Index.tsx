import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Specialties from "@/components/Specialties";
import HowTherapyWorks from "@/components/HowTherapyWorks";
import FeesInsurance from "@/components/FeesInsurance";

import Supervision from "@/components/Supervision";
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
        title="Therapist in Park City, UT | Child, Teen & Anxiety Therapy – Brigette Elgie, LMFT"
        description="Expert trauma-informed therapy for children, teens & adults in Park City. EMDR, ART, anxiety & depression treatment. Licensed in Utah, CA, WA, NH."
        canonicalUrl="https://elgietherapy.com/"
      />
      <Navbar />
      <Hero onVideoClick={() => setIsVideoModalOpen(true)} />
      <About />
      <Specialties />
      <HowTherapyWorks />
      <FeesInsurance />
      
      <Supervision />
      <Contact />
      <FAQ />
      <Footer />
      <VideoModal 
        isOpen={isVideoModalOpen} 
        onClose={() => setIsVideoModalOpen(false)} 
      />
    </div>
  );
};

export default Index;
