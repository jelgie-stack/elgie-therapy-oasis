import { Button } from "@/components/ui/button";

const FeesInsurance = () => {
  const handleConsultation = () => {
    // This would open a different Headway slot for consultations
    window.open("https://headway.co/booking/brigette-elgie", "_blank");
  };

  return (
    <section id="fees" className="section bg-gradient-to-b from-secondary/30 to-background scroll-mt-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Fees & Insurance
          </h2>
          <div className="w-20 h-1 bg-accent rounded-full mx-auto mb-6"></div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Standard Session */}
          <div className="bg-card p-8 rounded-xl shadow-card">
            <div className="border-l-4 border-accent pl-6">
              <h4 className="font-semibold text-foreground mb-2">Standard 50-min Session</h4>
              <p className="text-2xl font-bold text-primary mb-2">$180</p>
              <p className="text-muted-foreground text-sm">Scholarships available for qualifying families</p>
            </div>
          </div>

          {/* Insurance */}
          <div className="bg-card p-8 rounded-xl shadow-card">
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
            </div>
            <p className="text-sm text-muted-foreground">
              I work with Headway to provide in-network therapy services, making therapy more accessible and affordable.
            </p>
          </div>

          {/* Session Options */}
          <div className="bg-card p-8 rounded-xl shadow-card">
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

        {/* Free Consultation - Full width on desktop, normal on mobile */}
        <div className="mt-8">
          <div className="bg-card p-8 rounded-xl shadow-card border-l-4 border-primary bg-primary-light/50">
            <h4 className="font-semibold text-primary mb-2">Free 15-Minute Consultation</h4>
            <p className="text-muted-foreground text-sm mb-4">
              Get to know each other and see if we're a good fit
            </p>
            <Button variant="cta" size="sm" onClick={handleConsultation}>
              Schedule Consultation
            </Button>
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