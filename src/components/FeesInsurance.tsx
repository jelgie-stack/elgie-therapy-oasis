import { Button } from "@/components/ui/button";

const FeesInsurance = () => {
  const handleConsultation = () => {
    // This would open a different Headway slot for consultations
    window.open("https://headway.co/booking/brigette-elgie", "_blank");
  };

  return (
    <section id="fees" className="py-20 bg-gradient-to-b from-secondary/30 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Fees & Insurance
          </h2>
          <div className="w-20 h-1 bg-accent rounded-full mx-auto mb-6"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Insurance */}
          <div className="bg-card p-8 rounded-xl shadow-card">
            <h3 className="text-2xl font-semibold text-primary mb-6">
              Insurance Accepted
            </h3>
            <div className="space-y-4 mb-6">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-accent rounded-full"></div>
                <span className="text-muted-foreground">Blue Cross Blue Shield</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-accent rounded-full"></div>
                <span className="text-muted-foreground">Aetna</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-accent rounded-full"></div>
                <span className="text-muted-foreground">Cigna</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-accent rounded-full"></div>
                <span className="text-muted-foreground">UnitedHealthcare</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-accent rounded-full"></div>
                <span className="text-muted-foreground">And many others through Headway</span>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">
              I work with Headway to provide in-network therapy services, making therapy more accessible and affordable.
            </p>
          </div>

          {/* Fees & Options */}
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
                <h4 className="font-semibold text-foreground mb-2">Couples/Family Therapy</h4>
                <p className="text-muted-foreground text-sm">75-minute sessions</p>
                <p className="text-muted-foreground text-sm">In-person or Telehealth available</p>
              </div>
              <div className="border-l-4 border-primary pl-6 bg-primary-light/50 -ml-6 pl-6 py-4 rounded-r-lg">
                <h4 className="font-semibold text-primary mb-2">Free 15-Minute Consultation</h4>
                <p className="text-muted-foreground text-sm mb-4">
                  Get to know each other and see if we're a good fit
                </p>
                <Button variant="cta" size="sm" onClick={handleConsultation}>
                  Schedule Consultation
                </Button>
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