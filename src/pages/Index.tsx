import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Specialties from "@/components/Specialties";
import FeesInsurance from "@/components/FeesInsurance";
import Reviews from "@/components/Reviews";
import Supervision from "@/components/Supervision";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import VideoModal from "@/components/VideoModal";

const Index = () => {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero onVideoClick={() => setIsVideoModalOpen(true)} />
      <About />
      <Specialties />
      <FeesInsurance />
      <Reviews />
      <Supervision />
      <Contact />
      <Footer />
      <VideoModal 
        isOpen={isVideoModalOpen} 
        onClose={() => setIsVideoModalOpen(false)} 
      />
    </div>
  );
};

export default Index;
