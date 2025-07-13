import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navigateToPage = (url: string) => {
    window.location.href = url;
    setIsMobileMenuOpen(false);
  };

  const handleBooking = () => {
    window.open("https://headway.co/booking/brigette-elgie", "_blank");
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 h-16 bg-background/95 backdrop-blur-md shadow-md transition-all duration-300">
      <div className="container mx-auto px-4 h-full">
        <div className="flex items-center justify-between h-full">
          <a
            href="/"
            className="text-lg font-bold text-primary hover:text-primary/80 transition-colors flex-wrap"
          >
            Brigette Elgie, LMFT
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4 flex-wrap">
            <button
              onClick={() => navigateToPage("/child-therapist-park-city")}
              className="text-sm text-foreground hover:text-primary transition-colors"
            >
              Child Therapy
            </button>
            <button
              onClick={() => navigateToPage("/teen-therapist-park-city")}
              className="text-sm text-foreground hover:text-primary transition-colors"
            >
              Teen Therapy
            </button>
            <button
              onClick={() => navigateToPage("/emdr-therapist-park-city")}
              className="text-sm text-foreground hover:text-primary transition-colors"
            >
              EMDR & ART
            </button>
            <a
              href="/#fees"
              className="text-sm text-foreground hover:text-primary transition-colors"
            >
              Fees
            </a>
            <a
              href="/#reviews"
              className="text-sm text-foreground hover:text-primary transition-colors"
            >
              Reviews
            </a>
            <a
              href="/#contact"
              className="text-sm text-foreground hover:text-primary transition-colors"
            >
              Contact
            </a>
            <Button variant="cta" onClick={handleBooking} size="sm">
              Book
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <Button size="sm" variant="cta" onClick={handleBooking}>
              Book
            </Button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-foreground hover:text-primary transition-colors"
            >
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-background/95 backdrop-blur-md shadow-lg border-t border-border">
            <div className="container mx-auto px-4 py-4 space-y-4">
              <button
                onClick={() => navigateToPage("/child-therapist-park-city")}
                className="block w-full text-left text-foreground hover:text-primary transition-colors"
              >
                Child Therapy
              </button>
              <button
                onClick={() => navigateToPage("/teen-therapist-park-city")}
                className="block w-full text-left text-foreground hover:text-primary transition-colors"
              >
                Teen Therapy
              </button>
              <button
                onClick={() => navigateToPage("/emdr-therapist-park-city")}
                className="block w-full text-left text-foreground hover:text-primary transition-colors"
              >
                EMDR & ART
              </button>
              <a
                href="/#fees"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block w-full text-left text-foreground hover:text-primary transition-colors"
              >
                Fees
              </a>
              <a
                href="/#reviews"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block w-full text-left text-foreground hover:text-primary transition-colors"
              >
                Reviews
              </a>
              <a
                href="/#contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block w-full text-left text-foreground hover:text-primary transition-colors"
              >
                Contact
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;