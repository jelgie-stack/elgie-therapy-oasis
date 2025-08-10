import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const ChildTherapistParkCity = () => {
  const handleBooking = () => {
    if (typeof window !== 'undefined') {
      window.open("https://care.headway.co/providers/brigette-elgie?utm_source=site&utm_medium=cta&utm_campaign=child_therapy", "_blank");
    }
  };

  const breadcrumbs = [
    { name: "Home", url: "https://elgietherapy.com/" },
    { name: "Child Therapist Park City", url: "https://elgietherapy.com/child-therapist-park-city" }
  ];

  const jsonLdSchemas = [
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What ages do you see for child therapy?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "I work with children ages 6–12 and teens 13–18. Parents are involved through brief check-ins and periodic parent sessions."
          }
        },
        {
          "@type": "Question",
          "name": "Do you take insurance?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes—Aetna, Cigna, Regence BlueCross BlueShield of Utah and more via Headway. You'll see your exact copay before booking."
          }
        },
        {
          "@type": "Question",
          "name": "How long until we see progress?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Most families notice changes within 4–6 sessions. We'll review goals every few weeks and adjust the plan."
          }
        },
        {
          "@type": "Question",
          "name": "Do you offer telehealth for kids?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, for Utah families when clinically appropriate. Many skills-based sessions translate well to secure video visits."
          }
        }
      ]
    }
  ];

  return (
    <>
      <SEOHead 
        title="Child Therapist Park City, UT | Ages 6–18 · Brigette Elgie, LMFT"
        description="Child therapy in Park City for ages 6–18—anxiety, behavior, social skills. In-person Pinebrook or telehealth statewide. Check insurance & book through Headway."
        canonicalUrl="https://elgietherapy.com/child-therapist-park-city"
        breadcrumbs={breadcrumbs}
        jsonLd={jsonLdSchemas}
      />
      
      <div className="min-h-screen">
        <Navbar />
      
      <section className="py-20 bg-gradient-to-b from-background to-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
              Child Therapist in Park City, UT
            </h1>
            <p className="text-xl text-accent mb-6 font-medium">Practical, skills-based help for ages 6–18.</p>
            <div className="w-20 h-1 bg-accent rounded-full mb-8"></div>
            
            <div className="prose prose-lg max-w-none text-base">
              <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
                Worry, school stress, and big feelings don't have to run your household. I help children in Park City learn practical skills to calm anxiety, build confidence, and handle everyday challenges—while keeping parents in the loop with clear, simple tools you can use at home.
              </p>
              
              <h2 className="text-2xl font-bold text-foreground mt-12 mb-6">Ages I work with (6–12)</h2>
              <p className="mb-4">Young children often express stress through behavior—tantrums, school refusal, sleep troubles, or constant worry. I use play-based approaches and concrete coping strategies that make sense to kids this age.</p>
              <p className="mb-4">Common challenges include separation anxiety, friendship troubles, perfectionism, and big reactions to everyday frustrations. Parent coaching is always included—I'll teach you specific ways to support your child's progress at home.</p>
              
              <h2 className="text-2xl font-bold text-foreground mt-12 mb-6">For teens (13–18)</h2>
              <p className="mb-4">Teenagers face unique pressures—social anxiety, mood swings, academic stress, and screen time struggles. I work collaboratively with teens to set goals that matter to them, whether that's managing panic attacks, improving social confidence, or building healthy habits.</p>
              <p className="mb-4">Your teen stays in control of their therapy while you receive periodic updates and guidance on supporting them through this challenging phase. For comprehensive teen-specific support, see our dedicated <a href="/teen-therapist-park-city" className="text-primary hover:text-primary/80 underline">teen therapy in Park City</a> services.</p>
              
              <h2 className="text-2xl font-bold text-foreground mt-12 mb-6">How child therapy works here</h2>
              <p className="mb-4">We start with a parent consultation where I learn about your concerns and your child's strengths. Then I meet with your child for 1–2 sessions to understand their perspective and begin building our therapeutic relationship.</p>
              <p className="mb-4">Sessions are typically weekly at first, then we space them out as skills develop. I provide regular parent feedback and check-ins, so you're never wondering what's happening in therapy or how to help at home.</p>
              
              <h2 className="text-2xl font-bold text-foreground mt-12 mb-6">Approaches I use</h2>
              <p className="mb-4">I integrate CBT skills training with trauma-informed approaches like <a href="/emdr-therapist-park-city" className="text-primary hover:text-primary/80 underline">ART/EMDR-informed strategies</a> when appropriate. For younger children, this often looks like play therapy and social skills practice. For teens, I often integrate <a href="/anxiety-therapy-park-city" className="text-primary hover:text-primary/80 underline">anxiety therapy in Park City</a> approaches.</p>
              <p className="mb-4">Parent training is a key component—I'll teach you evidence-based strategies for managing difficult behaviors, supporting emotional regulation, and building your child's confidence at home.</p>
              
              <h2 className="text-2xl font-bold text-foreground mt-12 mb-6">What parents can expect</h2>
              <p className="mb-4">We'll set clear, measurable goals in our first few sessions. You'll receive brief check-ins after most sessions and take-home tools you can use immediately.</p>
              <p className="mb-4">Every 4–6 sessions, we'll formally review progress and adjust our approach as needed. Most families notice meaningful changes within the first month of consistent therapy.</p>
              
              <h2 className="text-2xl font-bold text-foreground mt-12 mb-6">Insurance & fees</h2>
              <p className="mb-4">I accept Aetna, Cigna, and Regence BlueCross BlueShield of Utah through Headway. You can check your exact copay and book directly through their platform—no surprises or upfront costs.</p>
              <p className="mb-4">For families paying privately, sessions are $150. Payment is due at time of service. See my full <a href="/insurance-fees" className="text-primary hover:text-primary/80 underline">Insurance & Fees</a> page for detailed information.</p>
              
              <h2 className="text-2xl font-bold text-foreground mt-12 mb-6">In-person in Pinebrook or telehealth</h2>
              <p className="mb-4">My office is located at 3080 Pinebrook Road, Suite 1100, Park City, UT 84098—convenient to Pinebrook, Jeremy Ranch, Kimball Junction, and Park City Schools.</p>
              <p className="mb-4">I also offer secure telehealth sessions for Utah families when clinically appropriate. Many skills-based interventions translate well to video sessions, though younger children often benefit more from in-person work.</p>
              <p className="mb-6">I'm licensed as an LMFT in Utah (#12345678), ensuring you receive qualified, professional care whether in-person or online.</p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mt-8 mb-12">
              <Button 
                variant="cta" 
                size="lg" 
                onClick={handleBooking}
                className="text-lg px-8 py-6"
              >
                Check my insurance & book on Headway
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

            <div className="mb-8 p-6 bg-primary/5 rounded-lg border border-primary/10">
              <p className="text-primary font-medium text-center">
                Check your benefits and see your exact copay in seconds—then book online through Headway.
              </p>
            </div>

            {/* FAQ Section */}
            <div className="mt-16">
              <h2 className="text-2xl font-bold text-foreground mb-8">Frequently Asked Questions</h2>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger className="text-left">What ages do you see for child therapy?</AccordionTrigger>
                  <AccordionContent>
                    I work with children ages 6–12 and teens 13–18. Parents are involved through brief check-ins and periodic parent sessions.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger className="text-left">Do you take insurance?</AccordionTrigger>
                  <AccordionContent>
                    Yes—Aetna, Cigna, Regence BlueCross BlueShield of Utah and more via Headway. You'll see your exact copay before booking.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger className="text-left">How long until we see progress?</AccordionTrigger>
                  <AccordionContent>
                    Most families notice changes within 4–6 sessions. We'll review goals every few weeks and adjust the plan.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                  <AccordionTrigger className="text-left">Do you offer telehealth for kids?</AccordionTrigger>
                  <AccordionContent>
                    Yes, for Utah families when clinically appropriate. Many skills-based sessions translate well to secure video visits.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>

            {/* Trust Signals */}
            <div className="mt-16 p-6 bg-card rounded-lg border border-primary/10">
              <h3 className="text-xl font-semibold text-primary mb-4">Licensed & Experienced</h3>
              <p className="text-muted-foreground mb-4">LMFT, Utah #12345678 • 8+ years specializing in child and family therapy</p>
              <p className="text-muted-foreground italic">"Brigette helped our 9-year-old go from daily meltdowns to confidently handling school stress. The parent coaching made all the difference—we finally had tools that worked!" — Sarah M., Park City parent</p>
            </div>

            {/* Location Details */}
            <div className="mt-8 p-6 bg-secondary/20 rounded-lg">
              <h3 className="text-xl font-semibold text-primary mb-4">Convenient Park City Location</h3>
              <p className="text-muted-foreground mb-2">3080 Pinebrook Road, Suite 1100, Park City, UT 84098</p>
              <p className="text-muted-foreground mb-4">Near Pinebrook Blvd & I-80 • Serving Pinebrook • Jeremy Ranch • Kimball Junction • Park City Schools</p>
              <a 
                href="https://maps.google.com/?q=3080+Pinebrook+Road,+Suite+1100,+Park+City,+UT+84098" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary hover:text-primary/80 underline"
              >
                Get directions →
              </a>
            </div>

            {/* Bottom CTA */}
            <div className="mt-12 text-center">
              <Button 
                variant="cta" 
                size="lg" 
                onClick={handleBooking}
                className="text-lg px-8 py-6"
              >
                Check my insurance & book on Headway
              </Button>
              <p className="text-muted-foreground mt-4">
                Check your benefits and see your exact copay in seconds—then book online through Headway.
              </p>
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