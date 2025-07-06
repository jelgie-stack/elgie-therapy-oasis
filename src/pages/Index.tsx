import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Specialties from "@/components/Specialties";
import HowTherapyWorks from "@/components/HowTherapyWorks";
import FeesInsurance from "@/components/FeesInsurance";
import Reviews from "@/components/Reviews";
import Supervision from "@/components/Supervision";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import VideoModal from "@/components/VideoModal";
import FAQ from "@/components/FAQ";

const Index = () => {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero onVideoClick={() => setIsVideoModalOpen(true)} />
      <About />
      <Specialties />
      <HowTherapyWorks />
      <FeesInsurance />
      <Reviews />
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
