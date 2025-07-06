import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleBooking = () => {
    window.open("https://headway.co/booking/brigette-elgie", "_blank");
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 h-20 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-md"
          : "bg-transparent"
      }`}
      style={{ height: '80px' }}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <button
            onClick={() => scrollToSection("hero")}
            className="text-xl font-bold text-primary hover:text-primary/80 transition-colors"
          >
            Brigette Elgie, LMFT
          </button>

          <div className="hidden md:flex items-center space-x-6">
            <button
              onClick={() => scrollToSection("hero")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => window.location.href = "/child-therapist-park-city"}
              className="text-foreground hover:text-primary transition-colors"
            >
              Child
            </button>
            <button
              onClick={() => window.location.href = "/teen-therapist-park-city"}
              className="text-foreground hover:text-primary transition-colors"
            >
              Teen
            </button>
            <button
              onClick={() => window.location.href = "/emdr-therapist-park-city"}
              className="text-foreground hover:text-primary transition-colors"
            >
              EMDR
            </button>
            <button
              onClick={() => scrollToSection("fees")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Fees
            </button>
            <button
              onClick={() => scrollToSection("reviews")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Reviews
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Contact
            </button>
            <Button variant="cta" onClick={handleBooking}>
              Book
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button size="sm" variant="cta" onClick={handleBooking}>
              Book
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;