import { Button } from "@/components/ui/button";

const FeesInsurance = () => {
  const handleConsultation = () => {
    window.open("https://savvycal.com/brigettemft/15-minute-consultation", "_blank");
  };

  return (
    <section id="fees" className="py-20 bg-gradient-to-b from-secondary/30 to-background scroll-mt-20">
      <div className="container mx-auto" style={{ paddingInline: 'clamp(16px, 4vw, 24px)' }}>
        <div className="text-center mb-16">
          <h2 style={{ fontSize: 'clamp(28px, 6vw, 36px)' }} className="font-bold text-foreground mb-4">
            Fees & Insurance
          </h2>
          <div className="w-20 h-1 bg-accent rounded-full mx-auto mb-6"></div>
        </div>

        <div className="space-y-6 lg:space-y-8">
          {/* Free Consultation - Featured First */}
          <div className="bg-gradient-to-br from-primary-light/40 to-accent-light/30 border-2 border-primary/20 p-6 lg:p-8 rounded-2xl shadow-floating hover:shadow-xl transition-all duration-300">
            <div className="text-center max-w-2xl mx-auto">
              <h3 style={{ fontSize: 'clamp(24px, 5vw, 32px)' }} className="font-bold text-primary mb-4">Free 15-Minute Consultation</h3>
              <p style={{ fontSize: 'clamp(16px, 3vw, 18px)' }} className="text-muted-foreground mb-6 leading-relaxed">
                Get to know each other and see if we're a good fit
              </p>
              <Button 
                variant="secondary" 
                size="lg" 
                onClick={handleConsultation}
                className="w-full sm:w-auto bg-green-600 hover:bg-green-700 text-white border-none shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-200 font-bold"
                style={{ fontSize: 'clamp(16px, 3vw, 20px)', padding: 'clamp(12px, 3vw, 24px) clamp(24px, 6vw, 48px)', minHeight: '48px' }}
              >
                Schedule Free Consultation
              </Button>
              
              <p className="text-sm text-muted-foreground mt-4">
                HIPAA-Compliant • Licensed in Utah, California, Washington, New Hampshire
              </p>
            </div>
          </div>

          {/* Grid for other sections */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Standard Session */}
            <div className="bg-card p-6 lg:p-8 rounded-xl shadow-card">
              <div className="border-l-4 border-accent pl-6">
                <h4 className="font-semibold text-foreground mb-2">Standard 50-min Session</h4>
                <p className="text-2xl font-bold text-primary mb-2">$180</p>
              </div>
            </div>

            {/* Insurance */}
            <div className="bg-card p-6 lg:p-8 rounded-xl shadow-card">
              <h3 style={{ fontSize: 'clamp(20px, 4vw, 24px)' }} className="font-semibold text-primary mb-6">
                Insurance Accepted
              </h3>
              <div className="grid grid-cols-2 gap-3 mb-6">
                <div className="text-center p-3 bg-background rounded-lg border border-primary/10">
                  <div className="text-sm font-medium text-muted-foreground">Optum</div>
                </div>
                <div className="text-center p-3 bg-background rounded-lg border border-primary/10">
                  <div className="text-sm font-medium text-muted-foreground">Aetna</div>
                </div>
                <div className="text-center p-3 bg-background rounded-lg border border-primary/10">
                  <div className="text-sm font-medium text-muted-foreground">Cigna</div>
                </div>
                <div className="text-center p-3 bg-background rounded-lg border border-primary/10">
                  <div className="text-sm font-medium text-muted-foreground">SelectHealth</div>
                </div>
                <div className="col-span-2 text-center p-3 bg-background rounded-lg border border-primary/10">
                  <div className="text-sm font-medium text-muted-foreground">And many others.</div>
                </div>
              </div>
              <p className="text-sm text-muted-foreground mb-4">
                I work with Headway to provide in-network therapy services, making therapy more accessible and affordable.
              </p>
              <div className="text-center">
                <Button variant="cta" size="lg" asChild className="w-full sm:w-auto" style={{ minHeight: '48px', fontSize: 'clamp(14px, 3vw, 16px)' }}>
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
            <div className="bg-card p-6 lg:p-8 rounded-xl shadow-card">
              <h3 style={{ fontSize: 'clamp(20px, 4vw, 24px)' }} className="font-semibold text-primary mb-6">
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