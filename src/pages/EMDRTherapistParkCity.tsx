import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const EMDRTherapistParkCity = () => {
  const handleBooking = () => {
    window.open("https://headway.co/booking/brigette-elgie", "_blank");
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <section className="py-20 bg-gradient-to-b from-background to-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
              EMDR Therapist in Park City, Utah
            </h1>
            <div className="w-20 h-1 bg-accent rounded-full mb-8"></div>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
                Specialized EMDR (Eye Movement Desensitization and Reprocessing) and ART (Accelerated Resolution Therapy) 
                treatment in Park City, Utah. As a Master Practitioner in ART and EMDR-trained therapist, I provide 
                evidence-based trauma therapy for adults dealing with PTSD, complex trauma, anxiety, and depression.
              </p>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                EMDR and ART are powerful therapeutic approaches that help individuals process traumatic memories and 
                experiences. These techniques allow your brain to heal naturally, reducing the emotional charge of 
                traumatic memories and helping you move forward with greater peace and resilience.
              </p>
              
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Whether you're struggling with childhood trauma, recent traumatic events, anxiety, depression, or PTSD, 
                these evidence-based approaches can provide significant relief. My Park City practice offers both 
                in-person and telehealth EMDR/ART sessions, making healing accessible and convenient for your schedule.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <Button 
                variant="cta" 
                size="lg" 
                onClick={handleBooking}
                className="text-lg px-8 py-6"
              >
                Book EMDR/ART Appointment
              </Button>
              <Button 
                variant="soft" 
                size="lg" 
                onClick={() => window.location.href = "/#contact"}
                className="text-lg px-8 py-6"
              >
                Contact for Questions
              </Button>
            </div>

            <div className="mt-8 p-6 bg-card rounded-lg border border-primary/10 shadow-soft">
              <h3 className="text-xl font-semibold text-primary mb-4">EMDR & ART Therapy Services Include:</h3>
              <ul className="space-y-2">
                <li className="flex items-center text-muted-foreground">
                  <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                  EMDR therapy for trauma and PTSD
                </li>
                <li className="flex items-center text-muted-foreground">
                  <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                  ART Master Practitioner services
                </li>
                <li className="flex items-center text-muted-foreground">
                  <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                  Complex trauma treatment
                </li>
                <li className="flex items-center text-muted-foreground">
                  <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                  Anxiety and depression therapy
                </li>
                <li className="flex items-center text-muted-foreground">
                  <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                  Trauma-focused CBT
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default EMDRTherapistParkCity;