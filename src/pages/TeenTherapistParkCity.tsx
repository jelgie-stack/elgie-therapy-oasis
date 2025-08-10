import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";

const TeenTherapistParkCity = () => {
  const handleBooking = () => {
    if (typeof window !== 'undefined') {
      window.open("https://care.headway.co/providers/brigette-elgie?utm_source=pem&utm_medium=direct_link&utm_campaign=142417", "_blank");
    }
  };

  return (
    <div className="min-h-screen">
      <SEOHead 
        title="Teen Therapist Park City, UT | Adolescent Counseling – Brigette Elgie, LMFT"
        description="Therapy for teens 13–18 in Park City: anxiety, depression, ADHD, identity, school stress. In-person Pinebrook or telehealth statewide. Book via Headway."
        canonicalUrl="https://elgietherapy.com/teen-therapist-park-city"
        breadcrumbs={[
          { name: 'Home', url: 'https://elgietherapy.com/' },
          { name: 'Teen Therapist in Park City', url: 'https://elgietherapy.com/teen-therapist-park-city' }
        ]}
      />
      <Navbar />
      
      <section className="py-20 bg-gradient-to-b from-background to-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
              Teen Therapist in Park City, Utah
            </h1>
            <div className="w-20 h-1 bg-accent rounded-full mb-8"></div>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
                Specialized therapy for teenagers ages 13-18 in Park City, Utah. I support adolescents through anxiety, 
                identity development, school stress, depression, ADHD, and life transitions using evidence-based approaches 
                including Cognitive Behavioral Therapy and mindfulness skills.
              </p>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                The teenage years bring unique challenges, from academic pressure and social anxiety to identity exploration 
                and family conflicts. My Park City therapy practice provides a safe, non-judgmental space where teens can 
                explore their thoughts and feelings while developing healthy coping strategies.
              </p>
              
              <p className="text-muted-foreground mb-8 leading-relaxed">
                I work collaboratively with teenagers and their families, respecting adolescent autonomy while providing 
                parents with guidance and support. Whether your teen is struggling with depression, anxiety, ADHD, trauma, 
                or general life stresses, I'm here to help them build resilience and confidence during this critical 
                developmental period.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <Button 
                variant="cta" 
                size="lg" 
                onClick={handleBooking}
                className="text-lg px-8 py-6"
              >
                Book Teen Therapy Appointment
              </Button>
              <Button 
                variant="soft" 
                size="lg" 
                 onClick={() => {
                   if (typeof window !== 'undefined') {
                     window.location.href = "/#contact";
                   }
                 }}
                className="text-lg px-8 py-6"
              >
                Contact for Questions
              </Button>
            </div>

            <div className="mt-8 p-6 bg-card rounded-lg border border-primary/10 shadow-soft">
              <h3 className="text-xl font-semibold text-primary mb-4">Teen Therapy Services Include:</h3>
              <ul className="space-y-2">
                <li className="flex items-center text-muted-foreground">
                  <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                  Cognitive Behavioral Therapy (CBT)
                </li>
                <li className="flex items-center text-muted-foreground">
                  <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                  Mindfulness and stress reduction skills
                </li>
                <li className="flex items-center text-muted-foreground">
                  <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                  Identity exploration and self-esteem building
                </li>
                <li className="flex items-center text-muted-foreground">
                  <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                  Anxiety and depression treatment
                </li>
                <li className="flex items-center text-muted-foreground">
                  <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                  ADHD coaching and executive function skills
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

export default TeenTherapistParkCity;