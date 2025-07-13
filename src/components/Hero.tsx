import heroImage from "@/assets/hero-therapy-office.jpg";

interface HeroProps {
  onVideoClick: () => void;
}

const Hero = ({ onVideoClick }: HeroProps) => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen section--spacious flex items-center pt-16 scroll-mt-20">
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
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl">
          <h1 style={{ fontSize: 'clamp(1.5rem, 3vw + 1rem, 2.5rem)' }} className="font-bold text-foreground mb-6 leading-tight">
            Therapy that helps families thrive.
          </h1>
          
          <p className="tagline text-muted-foreground mb-8 leading-relaxed">
            Child &amp; Teen Therapist in Park City, UT – Trauma-Informed EMDR &amp; ART. Specialised care for anxiety, depression &amp; ADHD.
          </p>

          <a 
            href="#contact" 
            className="inline-block bg-accent text-accent-foreground px-8 py-3 rounded-lg font-medium hover:bg-accent/90 transition-all duration-300 hover:-translate-y-1"
            onClick={scrollToContact}
          >
            Book a free consult
          </a>

          <div className="mt-8 text-sm text-muted-foreground">
            <p>Licensed in Utah, California, Washington & New Hampshire</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;