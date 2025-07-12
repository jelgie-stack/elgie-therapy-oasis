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
    <section className="hero" id="hero">
      <picture>
        <source media="(max-width:600px)" srcSet="/img/brigette-hero-mobile.webp" />
        <img src="/img/brigette-hero-desktop.webp" alt="Brigette Elgie smiling" />
      </picture>
      <div className="hero__copy">
        <h1>Therapy that helps families thrive.</h1>
        <p className="tagline">Child &amp; Teen Therapist in Park City, UT – Trauma-Informed EMDR &amp; ART. Specialised care for anxiety, depression &amp; ADHD.</p>
        <a href="#contact" className="button" onClick={scrollToContact}>Book a free consult</a>
      </div>
    </section>
  );
};

export default Hero;