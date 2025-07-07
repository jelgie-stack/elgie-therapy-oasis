const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Brigette Elgie, LMFT</h3>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              Providing compassionate, evidence-based therapy for healing, growth, and resilience.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li>
                <button 
                  onClick={() => window.location.href = "/child-therapist-park-city"}
                  className="hover:text-primary-foreground transition-colors"
                >
                  Child Therapy
                </button>
              </li>
              <li>
                <button 
                  onClick={() => window.location.href = "/teen-therapist-park-city"}
                  className="hover:text-primary-foreground transition-colors"
                >
                  Teen Therapy
                </button>
              </li>
              <li>
                <button 
                  onClick={() => window.location.href = "/emdr-therapist-park-city"}
                  className="hover:text-primary-foreground transition-colors"
                >
                  EMDR & ART Trauma Therapy
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("specialties")}
                  className="hover:text-primary-foreground transition-colors"
                >
                  Anxiety & Depression
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("specialties")}
                  className="hover:text-primary-foreground transition-colors"
                >
                  ADHD Coaching
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("specialties")}
                  className="hover:text-primary-foreground transition-colors"
                >
                  Parent Coaching
                </button>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Licensed In</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li>Utah</li>
              <li>California</li>
              <li>Washington</li>
              <li>New Hampshire</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-sm text-primary-foreground/60">
            © 2024 Brigette Elgie, LMFT. All rights reserved. | Licensed Marriage and Family Therapist
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;