import { Button } from "@/components/ui/button";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const handleBookNow = () => {
    window.open("https://care.headway.co/providers/brigette-elgie?utm_source=site&utm_medium=footer_cta&utm_campaign=142417", "_blank");
  };

  const handleContactCTA = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    } else {
      window.location.href = "/#contact";
    }
  };

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto" style={{ paddingInline: 'clamp(16px, 4vw, 24px)' }}>
        {/* Main Footer Content */}
        <div className="py-12">
          {/* Mobile: Single Column, Tablet+: Multi-column */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            
            {/* Business Info & CTA */}
            <div className="space-y-6">
              <div>
                <h2 className="text-xl font-semibold mb-4">Brigette Elgie, LMFT</h2>
                <p className="text-primary-foreground/80 text-sm leading-relaxed mb-4">
                  Providing compassionate, evidence-based therapy for healing, growth, and resilience.
                </p>
              </div>
              
              <div>
                <Button
                  variant="cta"
                  onClick={handleBookNow}
                  className="w-full sm:w-auto"
                  style={{ minHeight: '48px', minWidth: '48px' }}
                  aria-label="Book a therapy session now"
                >
                  Book Now
                </Button>
                <p className="text-xs text-primary-foreground/70 mt-2">
                  HIPAA-Compliant • Licensed in Utah
                </p>
              </div>
            </div>

            {/* Services Navigation */}
            <div>
              <nav aria-label="Footer Services">
                <h3 className="font-semibold mb-4">Services</h3>
                <ul className="space-y-3 text-sm">
                  <li>
                    <a 
                      href="/anxiety-therapy-park-city"
                      className="text-primary-foreground/80 hover:text-primary-foreground transition-colors focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-primary"
                      style={{ minHeight: '24px', display: 'inline-block', paddingTop: '4px', paddingBottom: '4px' }}
                    >
                      Anxiety & Depression
                    </a>
                  </li>
                  <li>
                    <a 
                      href="/child-therapist-park-city"
                      className="text-primary-foreground/80 hover:text-primary-foreground transition-colors focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-primary"
                      style={{ minHeight: '24px', display: 'inline-block', paddingTop: '4px', paddingBottom: '4px' }}
                    >
                      Child Therapy
                    </a>
                  </li>
                  <li>
                    <a 
                      href="/teen-therapist-park-city"
                      className="text-primary-foreground/80 hover:text-primary-foreground transition-colors focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-primary"
                      style={{ minHeight: '24px', display: 'inline-block', paddingTop: '4px', paddingBottom: '4px' }}
                    >
                      Teen Therapy
                    </a>
                  </li>
                  <li>
                    <a 
                      href="/emdr-therapist-park-city"
                      className="text-primary-foreground/80 hover:text-primary-foreground transition-colors focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-primary"
                      style={{ minHeight: '24px', display: 'inline-block', paddingTop: '4px', paddingBottom: '4px' }}
                    >
                      EMDR & ART
                    </a>
                  </li>
                  <li>
                    <a 
                      href="/insurance-fees"
                      className="text-primary-foreground/80 hover:text-primary-foreground transition-colors focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-primary"
                      style={{ minHeight: '24px', display: 'inline-block', paddingTop: '4px', paddingBottom: '4px' }}
                    >
                      Insurance & Fees
                    </a>
                  </li>
                  <li>
                    <button 
                      onClick={handleContactCTA}
                      className="text-primary-foreground/80 hover:text-primary-foreground transition-colors focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-primary text-left"
                      style={{ minHeight: '24px', paddingTop: '4px', paddingBottom: '4px' }}
                    >
                      Contact
                    </button>
                  </li>
                </ul>
              </nav>
            </div>

            {/* Contact Information (NAP) */}
            <div>
              <h3 className="font-semibold mb-4">Contact Information</h3>
              <address className="not-italic space-y-3 text-sm text-primary-foreground/80">
                <div>
                  <strong className="text-primary-foreground">Brigette Elgie, MFT, PLLC</strong>
                </div>
                <div>
                  <a
                    href="https://www.google.com/maps?q=3080+Pinebrook+Road,+Suite+1100,+Park+City,+UT+84098"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary-foreground transition-colors focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-primary"
                    aria-label="Get directions to our office"
                    style={{ minHeight: '48px', display: 'inline-block', paddingTop: '12px', paddingBottom: '12px' }}
                  >
                    3080 Pinebrook Road, Suite 1100<br />
                    Park City, UT 84098<br />
                    <span className="text-xs underline">Get directions →</span>
                  </a>
                </div>
                <div>
                  <a 
                    href="tel:+19496487004" 
                    className="hover:text-primary-foreground transition-colors focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-primary"
                    style={{ minHeight: '48px', display: 'inline-block', paddingTop: '12px', paddingBottom: '12px' }}
                    aria-label="Call Brigette Elgie at (949) 648-7004"
                  >
                    (949) 648-7004
                  </a>
                </div>
              </address>
              
              <div className="mt-6">
                <h4 className="font-medium mb-2 text-sm text-primary-foreground">Licensed In</h4>
                <ul className="text-xs text-primary-foreground/70 space-y-1">
                  <li>Utah</li>
                  <li>California</li>
                  <li>Washington</li>
                  <li>New Hampshire</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Legal Links & Copyright */}
        <div className="border-t border-primary-foreground/20 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-center md:text-left">
              <p className="text-sm text-primary-foreground/60">
                © {currentYear} Brigette Elgie, MFT, PLLC. All rights reserved.
              </p>
            </div>
            
            <nav aria-label="Footer Legal">
              <ul className="flex flex-wrap justify-center md:justify-end gap-4 text-xs">
                <li>
                  <a 
                    href="/privacy-policy"
                    className="text-primary-foreground/60 hover:text-primary-foreground transition-colors focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-primary"
                    style={{ minHeight: '32px', display: 'inline-block', paddingTop: '8px', paddingBottom: '8px' }}
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a 
                    href="/terms"
                    className="text-primary-foreground/60 hover:text-primary-foreground transition-colors focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-primary"
                    style={{ minHeight: '32px', display: 'inline-block', paddingTop: '8px', paddingBottom: '8px' }}
                  >
                    Terms
                  </a>
                </li>
                <li>
                  <a 
                    href="/notice-of-privacy-practices"
                    className="text-primary-foreground/60 hover:text-primary-foreground transition-colors focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-primary"
                    style={{ minHeight: '32px', display: 'inline-block', paddingTop: '8px', paddingBottom: '8px' }}
                  >
                    Notice of Privacy Practices
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>

      {/* Schema.org LocalBusiness - Keep existing structure */}
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
              "streetAddress": "3080 Pinebrook Road, Suite 1100",
              "addressLocality": "Park City",
              "addressRegion": "UT",
              "postalCode": "84098",
              "addressCountry": "US"
            },
            "url": typeof window !== 'undefined' ? window.location.origin : 'https://elgietherapy.com'
          })
        }}
      />
    </footer>
  );
};

export default Footer;
