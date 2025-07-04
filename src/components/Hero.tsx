import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-therapy-office.jpg";

interface HeroProps {
  onVideoClick: () => void;
}

const Hero = ({ onVideoClick }: HeroProps) => {
  const handleBooking = () => {
    window.open("https://headway.co/booking/brigette-elgie", "_blank");
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Peaceful therapy office"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/60" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
            Therapy for Healing,{" "}
            <span className="text-primary">Growth</span>, and{" "}
            <span className="text-primary">Resilience</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
            Evidence-based trauma and family therapy in Park City & Telehealth
            across <strong>UT, CA, WA & NH</strong>
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              variant="cta" 
              size="lg" 
              onClick={handleBooking}
              className="text-lg px-8 py-6"
            >
              Book an Appointment
            </Button>
            <Button 
              variant="soft" 
              size="lg" 
              onClick={onVideoClick}
              className="text-lg px-8 py-6"
            >
              Watch Intro Video
            </Button>
          </div>

          <div className="mt-8 text-sm text-muted-foreground">
            <p>Licensed in Utah, California, Washington & New Hampshire</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;