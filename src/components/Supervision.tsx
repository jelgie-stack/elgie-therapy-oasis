import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import SupervisionApplicationModal from "@/components/SupervisionApplicationModal";

const Supervision = () => {
  const [isApplicationModalOpen, setIsApplicationModalOpen] = useState(false);

  const handleInfoSession = () => {
    window.open("https://headway.co/booking/brigette-elgie-intern", "_blank");
  };

  const benefits = [
    {
      icon: "👥",
      title: "Weekly 1:1 + Group Supervision",
      description: "In-person & telehealth options available"
    },
    {
      icon: "🎯",
      title: "Child & Adolescent Focus",
      description: "Gain pediatric hours and techniques"
    },
    {
      icon: "🧠",
      title: "Evidence-Based Modalities",
      description: "ART · EMDR · CBT training & practice"
    },
    {
      icon: "📋",
      title: "Compliant Documentation",
      description: "Hour tracking & BBS/DOPL requirements"
    },
    {
      icon: "💰",
      title: "Flexible Compensation",
      description: "Optional stipend or sliding-scale fee-split"
    },
    {
      icon: "🏔️",
      title: "Park City Office",
      description: "Free parking & stunning mountain views"
    }
  ];

  return (
    <section id="supervision" className="section bg-gradient-to-b from-background to-secondary/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
            Grow into the{" "}
            <span className="text-primary">Therapist</span>{" "}
            You're Meant to Be
          </h2>
          <div className="w-20 h-1 bg-accent rounded-full mx-auto mb-6"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            <strong>Brigette Elgie, LMFT</strong> · AAMFT-Approved Supervisor · Licensed in <strong>UT | CA | WA | NH</strong>
          </p>
        </div>

        {/* Intro Paragraph */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <p className="text-lg text-muted-foreground leading-relaxed">
            With 18 years of clinical experience and specialized training in trauma-informed care including ART and EMDR, 
            Brigette brings deep expertise and genuine passion for mentoring the next generation of therapists. Her supervision 
            approach combines evidence-based practices with collaborative, growth-oriented support to help supervisees develop 
            their unique therapeutic style while building confidence and competence.
          </p>
        </div>

        {/* Urgency Banner */}
        <div className="max-w-2xl mx-auto mb-16">
          <Card className="bg-accent border-none shadow-card">
            <CardContent className="p-6 text-center">
              <div className="text-2xl mb-2">⏳</div>
              <h3 className="text-xl font-semibold text-accent-foreground mb-2">
                2 Associate Spots Open for Fall 2025
              </h3>
              <p className="text-accent-foreground">Apply by August 15th</p>
            </CardContent>
          </Card>
        </div>

        {/* Benefits Grid */}
        <div className="mb-16">
          <h3 className="text-3xl font-semibold text-center text-primary mb-12">
            What You'll Gain
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="shadow-card hover:shadow-floating transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-4">{benefit.icon}</div>
                  <h4 className="text-lg font-semibold text-primary mb-3">
                    {benefit.title}
                  </h4>
                  <p className="text-muted-foreground">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="text-center mb-16">
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-lg mx-auto">
            <Button 
              variant="cta" 
              size="lg" 
              onClick={handleInfoSession}
              className="text-lg px-8 py-6"
            >
              Book an Info-Session
            </Button>
            <Button 
              variant="soft" 
              size="lg" 
              onClick={() => setIsApplicationModalOpen(true)}
              className="text-lg px-8 py-6"
            >
              Quick Apply
            </Button>
          </div>
        </div>

        {/* Values Statement */}
        <div className="max-w-4xl mx-auto text-center">
          <blockquote className="text-lg text-muted-foreground italic leading-relaxed">
            "Supervision in our practice is collaborative, anti-oppressive, and growth-oriented. 
            We welcome supervisees of all identities and backgrounds, fostering an environment 
            where authentic therapeutic relationships can flourish."
          </blockquote>
        </div>
      </div>

      <SupervisionApplicationModal 
        isOpen={isApplicationModalOpen} 
        onClose={() => setIsApplicationModalOpen(false)} 
      />
    </section>
  );
};

export default Supervision;