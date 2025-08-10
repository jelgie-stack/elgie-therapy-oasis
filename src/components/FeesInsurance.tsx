import { Button } from "@/components/ui/button";

const FeesInsurance = () => {
  const handleConsultation = () => {
    window.open("https://savvycal.com/brigettemft/15-minute-consultation", "_blank");
  };

  return (
    <section id="fees" className="py-20 bg-gradient-to-b from-secondary/30 to-background scroll-mt-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Fees & Insurance
          </h2>
          <div className="w-20 h-1 bg-accent rounded-full mx-auto mb-6"></div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Free Consultation - Featured First on Desktop */}
          <div className="order-2 lg:order-1 lg:col-span-3 mt-6 lg:mt-0 mb-4 lg:mb-8">
            <div className="bg-gradient-to-br from-primary-light/40 to-accent-light/30 border-2 border-primary/20 p-8 rounded-2xl shadow-floating hover:shadow-xl hover:scale-[1.02] transition-all duration-300 focus-within:ring-2 focus-within:ring-primary/30 focus-within:ring-offset-2">
              <div className="text-center max-w-2xl mx-auto">
                <h3 className="text-3xl lg:text-4xl font-bold text-primary mb-4">Free 15-Minute Consultation</h3>
                <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                  Get to know each other and see if we're a good fit
                </p>
                <Button 
                  variant="cta" 
                  size="lg" 
                  onClick={handleConsultation}
                  className="text-lg px-8 py-4 hover:scale-105 transition-transform duration-200"
                >
                  Schedule Consultation
                </Button>
              </div>
            </div>
          </div>

          {/* Standard Session */}
          <div className="order-1 lg:order-2 bg-card p-8 rounded-xl shadow-card">
            <div className="border-l-4 border-accent pl-6">
              <h4 className="font-semibold text-foreground mb-2">Standard 50-min Session</h4>
              <p className="text-2xl font-bold text-primary mb-2">$180</p>
              
            </div>
          </div>

          {/* Insurance */}
          <div className="order-3 lg:order-3 bg-card p-8 rounded-xl shadow-card">
            <h3 className="text-2xl font-semibold text-primary mb-6">
              Insurance Accepted
            </h3>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="text-center p-4 bg-background rounded-lg border border-primary/10">
                <div className="text-sm font-medium text-muted-foreground">Optum</div>
              </div>
              <div className="text-center p-4 bg-background rounded-lg border border-primary/10">
                <div className="text-sm font-medium text-muted-foreground">Aetna</div>
              </div>
              <div className="text-center p-4 bg-background rounded-lg border border-primary/10">
                <div className="text-sm font-medium text-muted-foreground">Cigna</div>
              </div>
              <div className="text-center p-4 bg-background rounded-lg border border-primary/10">
                <div className="text-sm font-medium text-muted-foreground">SelectHealth</div>
              </div>
              <div className="text-center p-4 bg-background rounded-lg border border-primary/10">
                <div className="text-sm font-medium text-muted-foreground">And many others.</div>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">
              I work with Headway to provide in-network therapy services, making therapy more accessible and affordable.{' '}
              <a 
                href="https://care.headway.co/providers/brigette-elgie?utm_source=pem&utm_medium=direct_link&utm_campaign=142417"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary underline-offset-4 hover:underline"
              >
                Check my insurance and book now.
              </a>
            </p>
            <div className="mt-4">
              <Button variant="cta" asChild>
                <a 
                  href="https://care.headway.co/providers/brigette-elgie?utm_source=pem&utm_medium=direct_link&utm_campaign=142417"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Check my insurance and book now
                </a>
              </Button>
            </div>
          </div>

          {/* Session Options */}
          <div className="order-4 lg:order-4 bg-card p-8 rounded-xl shadow-card">
            <h3 className="text-2xl font-semibold text-primary mb-6">
              Session Options
            </h3>
            <div className="space-y-6">
              <div className="border-l-4 border-accent pl-6">
                <h4 className="font-semibold text-foreground mb-2">Individual Therapy</h4>
                <p className="text-muted-foreground text-sm">50-minute sessions</p>
                <p className="text-muted-foreground text-sm">In-person (Park City) or Telehealth</p>
              </div>
              <div className="border-l-4 border-accent pl-6">
                <h4 className="font-semibold text-foreground mb-2">Parent Coaching</h4>
                <p className="text-muted-foreground text-sm">50-minute sessions</p>
                <p className="text-muted-foreground text-sm">Evidence-based strategies for home</p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground">
            Questions about insurance coverage or fees? Let's discuss during your free consultation.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FeesInsurance;