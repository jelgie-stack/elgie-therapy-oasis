import { Button } from "@/components/ui/button";

const FinalCTA = () => {
  const handleBooking = () => {
    window.open("https://savvycal.com/brigettemft/15-minute-consultation?utm_source=site&utm_medium=final_cta", "_blank");
  };

  return (
    <section className="py-24 bg-gradient-to-br from-primary/10 via-accent/5 to-primary/5">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-white/80 backdrop-blur-sm p-12 md:p-16 rounded-3xl shadow-2xl border border-primary/10">
            <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
              Start Your <span className="text-primary">Healing Journey</span> Today
            </h2>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-6 leading-relaxed">
              Let's talk — you'll leave your free call with a clear plan forward.
            </p>
            
            <div className="mb-8">
              <p className="text-sm text-orange-600 font-medium uppercase tracking-wide">
                ⚡ Limited openings this month
              </p>
            </div>
            
            <Button 
              variant="secondary" 
              size="lg" 
              onClick={handleBooking}
              className="text-2xl px-16 py-8 bg-primary hover:bg-primary/90 text-primary-foreground border-none shadow-2xl hover:shadow-3xl hover:scale-105 transition-all duration-300 font-bold rounded-2xl"
            >
              Book a Consultation
            </Button>
            
            <div className="mt-8 text-sm text-muted-foreground">
              <p>Free 15-minute consultation • No cost, no obligation</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;