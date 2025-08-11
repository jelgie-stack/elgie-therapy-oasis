import { useState, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import heroImage from "@/assets/hero-therapy-office.jpg";

interface HeroProps {
  onVideoClick: () => void;
}

const Hero = ({ onVideoClick }: HeroProps) => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    // Only add scroll listener on client-side
    if (typeof window === 'undefined') return;
    
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToContact = () => {
    if (typeof document === 'undefined') return;
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const chevronOpacity = Math.max(0, 1 - scrollY / 120);

  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-16 scroll-mt-20">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="child-therapy-park-city-office-healing-environment"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/60" />
      </div>

      {/* Content */}
      <div className="container mx-auto relative z-10" style={{ paddingInline: 'clamp(16px, 4vw, 24px)' }}>
        <div className="max-w-2xl">
          <h1 style={{ fontSize: 'clamp(28px, 6vw, 40px)' }} className="font-bold text-foreground mb-6 leading-tight">
            Therapy that helps families thrive.
          </h1>
          
          <p className="text-muted-foreground mb-8 leading-relaxed" style={{ fontSize: 'clamp(16px, 3vw, 18px)' }}>
            Evidence‑based therapy in Park City, UT — in‑person or telehealth — to help you or your child feel calmer, more confident, and connected.
          </p>

          <div className="space-y-4 flex flex-col items-center sm:items-start">
            <a 
              href="https://care.headway.co/providers/brigette-elgie?utm_source=site&utm_medium=footer_cta&utm_campaign=142417" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-accent text-accent-foreground rounded-lg font-semibold hover:bg-accent/90 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 max-w-[90vw] sm:max-w-none"
              style={{ 
                fontSize: 'clamp(16px, 4vw, 18px)', 
                minHeight: '48px', 
                lineHeight: '1.2',
                padding: '0.75em 1.5em'
              }}
            >
              Check My Insurance & Book Now
            </a>
            
            <p className="text-sm text-muted-foreground text-center sm:text-left">
              Takes 2 minutes — no cost, no obligation.
            </p>
          </div>

          <div className="mt-8 text-sm text-muted-foreground text-center sm:text-left">
            <p>Licensed in Utah, California, Washington & New Hampshire</p>
          </div>
        </div>
      </div>

      {/* Scroll Chevron */}
      <div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden md:block transition-opacity duration-300"
        style={{ opacity: chevronOpacity }}
      >
        <ChevronDown 
          size={32} 
          className="text-primary animate-bounce cursor-pointer hover:text-primary/80 transition-colors"
          onClick={() => {
            if (typeof document === 'undefined') return;
            const aboutSection = document.querySelector('section:nth-of-type(2)');
            if (aboutSection) {
              aboutSection.scrollIntoView({ behavior: 'smooth' });
            }
          }}
        />
      </div>

      {/* Wave Divider */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
        <svg 
          className="relative block w-full h-16" 
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none"
        >
          <path 
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" 
            className="fill-background"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;