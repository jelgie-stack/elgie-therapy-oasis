import { Button } from "@/components/ui/button";

const FinalCTA = () => {
  const handleBooking = () => {
    window.open("https://savvycal.com/brigettemft/15-minute-consultation?utm_source=site&utm_medium=final_cta", "_blank");
  };

  return (
    <section className="py-24 bg-gradient-to-br from-primary/10 via-accent/5 to-primary/5">
      <div className="container mx-auto" style={{ paddingInline: 'clamp(16px, 4vw, 24px)' }}>
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-white/80 backdrop-blur-sm p-8 md:p-16 rounded-3xl shadow-2xl border border-primary/10">
            <h2 style={{ fontSize: 'clamp(32px, 8vw, 56px)' }} className="font-bold text-foreground mb-6 leading-tight">
              Start Your <span className="text-primary">Healing Journey</span> Today
            </h2>
            
            <p style={{ fontSize: 'clamp(18px, 4vw, 24px)' }} className="text-muted-foreground mb-6 leading-relaxed">
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
              className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground border-none shadow-2xl hover:shadow-3xl hover:scale-105 transition-all duration-300 font-bold rounded-2xl"
              style={{ fontSize: 'clamp(18px, 4vw, 24px)', padding: 'clamp(16px, 3vw, 32px) clamp(32px, 6vw, 64px)', minHeight: '48px' }}
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