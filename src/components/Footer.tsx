import { Button } from "@/components/ui/button";

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const siteUrl = typeof window !== 'undefined' ? window.location.origin : 'https://elgie-therapy-oasis.com';

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
                  onClick={() => window.location.href = "/anxiety-therapy-park-city"}
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
            <h4 className="font-semibold mb-4">Contact</h4>
            <div className="space-y-2 text-sm text-primary-foreground/80">
              <div>
                <strong>Brigette Elgie, MFT, PLLC</strong>
              </div>
              <div>
                <a
                  href="https://www.google.com/maps?q=3080+Pinebrook+Road,+Suite+1100,+Park+City,+UT+84098"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary-foreground transition-colors"
                >
                  3080 Pinebrook Road, Suite 1100<br />
                  Park City, UT 84098
                </a>
              </div>
              <div>
                <a href="tel:+19496487004" className="hover:text-primary-foreground transition-colors">
                  (949) 648-7004
                </a>
              </div>
              <div>
                <button
                  data-contact-cta="true"
                  className="hover:text-primary-foreground transition-colors underline underline-offset-4"
                >
                  Contact for Questions
                </button>
              </div>
            </div>
            <div className="mt-4">
              <h5 className="font-medium mb-2 text-sm">Licensed In</h5>
              <ul className="space-y-1 text-xs text-primary-foreground/70">
                <li>Utah</li>
                <li>California</li>
                <li>Washington</li>
                <li>New Hampshire</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-8 flex justify-center">
          <Button
            data-contact-cta="true"
            variant="cta"
            size="lg"
            aria-label="Book a session now"
          >
            Book now
          </Button>
        </div>
        
        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-sm text-primary-foreground/60">
            © 2024 Brigette Elgie, LMFT. All rights reserved. | Licensed Marriage and Family Therapist
          </p>
        </div>
      </div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Brigette Elgie, MFT, PLLC",
            "telephone": "+1-949-648-7004",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "3080 Pinebrook Rd Suite 1100",
              "addressLocality": "Park City",
              "addressRegion": "UT",
              "postalCode": "84098",
              "addressCountry": "US"
            },
            "url": siteUrl
          })
        }}
      />
    </footer>
  );
};

export default Footer;
