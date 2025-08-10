import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";

const ChildTherapistParkCity = () => {
  const handleBooking = () => {
    window.open("https://care.headway.co/providers/brigette-elgie?utm_source=pem&utm_medium=direct_link&utm_campaign=142417", "_blank");
  };

  const breadcrumbs = [
    { name: "Home", url: "https://elgietherapy.com/" },
    { name: "Child Therapist Park City", url: "https://elgietherapy.com/child-therapist-park-city" }
  ];

  return (
    <>
      <SEOHead 
        title="Child Therapist Park City, UT | Play-Based Therapy – Brigette Elgie, LMFT"
        description="Child therapist in Park City specializing in play-based therapy for ages 4-12. Treatment for anxiety, ADHD, behavioral issues & trauma. Parent coaching included."
        canonicalUrl="https://elgietherapy.com/child-therapist-park-city"
        breadcrumbs={breadcrumbs}
      />
      
      <div className="min-h-screen">
        <Navbar />
      
      <section className="py-20 bg-gradient-to-b from-background to-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
              Child Therapist in Park City, Utah
            </h1>
            <div className="w-20 h-1 bg-accent rounded-full mb-8"></div>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
                Specialized therapy for children ages 4-12 in Park City, Utah. Using play-based therapy and behavioral interventions, 
                I help young children process emotions, develop coping skills, and navigate childhood challenges including anxiety, 
                depression, ADHD, and trauma.
              </p>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Children communicate naturally through play, and my Park City therapy office provides a safe, nurturing environment 
                where your child can express themselves freely. I work closely with parents to ensure therapeutic progress continues 
                at home, offering parent coaching and behavioral strategies tailored to your family's unique needs.
              </p>
              
              <p className="text-muted-foreground mb-8 leading-relaxed">
                My approach combines evidence-based techniques including play therapy, behavioral interventions, and parent-child 
                interaction therapy. Whether your child is struggling with behavioral issues, emotional regulation, school anxiety, 
                or processing difficult life events, I'm here to support your family's journey toward healing and growth.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <Button 
                variant="cta" 
                size="lg" 
                onClick={handleBooking}
                className="text-lg px-8 py-6"
              >
                Book Child Therapy Appointment
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
              <h3 className="text-xl font-semibold text-primary mb-4">Child Therapy Services Include:</h3>
              <ul className="space-y-2">
                <li className="flex items-center text-muted-foreground">
                  <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                  Play-based therapy sessions
                </li>
                <li className="flex items-center text-muted-foreground">
                  <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                  Behavioral interventions and support
                </li>
                <li className="flex items-center text-muted-foreground">
                  <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                  Parent-child interaction therapy
                </li>
                <li className="flex items-center text-muted-foreground">
                  <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                  Anxiety and depression treatment for children
                </li>
                <li className="flex items-center text-muted-foreground">
                  <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                  ADHD behavioral coaching
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

        <Footer />
      </div>
    </>
  );
};

export default ChildTherapistParkCity;