import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Contact = () => {
  const handleBooking = () => {
    window.open("https://care.headway.co/providers/brigette-elgie?utm_source=pem&utm_medium=direct_link&utm_campaign=142417", "_blank");
  };

  const handleConsultation = () => {
    window.open("https://headway.co/booking/brigette-elgie", "_blank");
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-secondary/30 to-primary-light/20 scroll-mt-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Ready to Begin Your Journey?
          </h2>
          <div className="w-20 h-1 bg-accent rounded-full mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Taking the first step toward healing takes courage. I'm here to support you every step of the way.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* CTA Section - Featured First on Desktop */}
          <div className="order-2 lg:order-1 lg:col-span-2 xl:col-span-1 mb-8 lg:mb-0 text-center lg:text-left space-y-6">
            <div className="bg-gradient-to-br from-primary-light/30 to-accent-light/20 border border-primary/10 p-8 rounded-2xl shadow-floating hover:shadow-xl hover:scale-[1.02] transition-all duration-300 focus-within:ring-2 focus-within:ring-primary/20 focus-within:ring-offset-2">
              <h3 className="text-3xl lg:text-4xl font-bold text-primary mb-6">
                Start Your Healing Journey Today
              </h3>
              <p className="text-muted-foreground mb-8 leading-relaxed text-lg">
                Whether you're dealing with trauma, relationship challenges, or seeking personal growth, 
                I'm here to help. Book your appointment or start with a free consultation to see if we're a good fit.
              </p>
              
              <div className="space-y-4">
                <Button 
                  variant="cta" 
                  size="lg" 
                  onClick={handleBooking}
                  className="w-full text-lg py-6 hover:scale-105 transition-transform duration-200"
                >
                  Book an Appointment
                </Button>
                <Button 
                  variant="soft" 
                  size="lg" 
                  onClick={handleConsultation}
                  className="w-full text-lg py-6 hover:scale-105 transition-transform duration-200"
                >
                  Free 15-min Consultation
                </Button>
              </div>

              <p className="text-sm text-muted-foreground mt-6">
                All appointments are scheduled through Headway for your convenience and insurance coordination.
              </p>
            </div>
          </div>

          {/* Contact Info */}
          <div className="order-1 lg:order-2 space-y-8">
            <Card className="p-6">
              <CardContent className="p-0">
                <h3 className="text-xl font-semibold text-primary mb-4">
                  Office Location
                </h3>
                <div className="space-y-2 text-muted-foreground">
                  <p>3080 West Pinebrook Road</p>
                  <p>Suite 1100</p>
                  <p>Park City, UT 84098</p>
                </div>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardContent className="p-0">
                <h3 className="text-xl font-semibold text-primary mb-4">
                  Telehealth Services
                </h3>
                <div className="space-y-2 text-muted-foreground">
                  <p>Licensed in:</p>
                  <ul className="space-y-1 ml-4">
                    <li>• Utah</li>
                    <li>• California</li>
                    <li>• Washington</li>
                    <li>• New Hampshire</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardContent className="p-0">
                <h3 className="text-xl font-semibold text-primary mb-4">
                  Session Hours
                </h3>
                <div className="space-y-2 text-muted-foreground">
                  <p>Tuesdays & Thursdays: 9:00 AM - 6:00 PM</p>
                  <p>Saturdays: 10:00 AM - 2:00 PM</p>
                  <p className="text-sm">Evening appointments available upon request</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;