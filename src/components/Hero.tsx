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
    <section id="hero" className="relative min-h-screen flex items-center" style={{ marginTop: '80px' }}>
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Child trauma therapy session in Park City clinic with healing environment"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/60" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
            Child & Teen Therapist in Park City, UT – Trauma-Informed EMDR & ART
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
            Specialised care for anxiety, depression & ADHD.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 items-center">
            <div className="flex-shrink-0 mb-6 sm:mb-0 sm:mr-8">
              <img
                src="/public/lovable-uploads/8b9bb41a-7d3d-4a40-b9a9-a71278293db1.png"
                alt="Child therapy session Park City"
                className="w-32 h-32 rounded-full object-cover border-4 border-primary/20"
                loading="lazy"
              />
            </div>
            <Button 
              variant="cta" 
              size="lg" 
              onClick={handleBooking}
              className="text-lg px-8 py-6"
            >
              Book an Appointment
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