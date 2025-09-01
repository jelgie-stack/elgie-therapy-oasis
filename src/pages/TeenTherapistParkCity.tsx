import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { normalizeUrl } from "@/utils/normalizeUrl";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const TeenTherapistParkCity = () => {
  const handleBooking = () => {
    if (typeof window !== 'undefined') {
      window.open("https://care.headway.co/providers/brigette-elgie?utm_source=site&utm_medium=footer_cta&utm_campaign=142417", "_blank");
    }
  };

  const breadcrumbs = [
    { name: "Home", url: normalizeUrl("https://www.elgietherapy.com/") },
    { name: "Teen Therapist in Park City", url: normalizeUrl("https://www.elgietherapy.com/teen-therapist-park-city") }
  ];

  const jsonLdSchemas = [
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.elgietherapy.com/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Teen Therapist in Park City",
          "item": "https://www.elgietherapy.com/teen-therapist-park-city"
        }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What ages do you see for teen therapy?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Ages 13–18. We'll set goals together and include brief parent updates while preserving your teen's privacy."
          }
        },
        {
          "@type": "Question",
          "name": "Do you take insurance?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes—Aetna, Cigna, Regence BCBS of Utah and others via Headway. You'll see your exact copay before booking."
          }
        },
        {
          "@type": "Question",
          "name": "How soon do teens usually feel better?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Many notice changes within 4–6 sessions, especially with consistent skills practice between sessions."
          }
        },
        {
          "@type": "Question",
          "name": "Can sessions be online?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Telehealth is available anywhere in Utah when clinically appropriate."
          }
        }
      ]
    }
  ];

  return (
    <>
      <SEOHead 
        title="Teen Therapist Park City, UT | Ages 13–18 · Brigette Elgie, LMFT"
        description="Teen therapy in Park City for ages 13–18—anxiety, depression, school stress, social anxiety, and perfectionism. In-person Pinebrook or telehealth in Utah. Check insurance & book via Headway."
        breadcrumbs={breadcrumbs}
        jsonLd={jsonLdSchemas}
      />
      
      <div className="min-h-screen">
        <Navbar />
      
      <section className="py-20 bg-gradient-to-b from-background to-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
              Teen Therapist in Park City, UT
            </h1>
            <p className="text-xl text-accent mb-6 font-medium">Practical, skills-based support for ages 13–18</p>
            <div className="w-20 h-1 bg-accent rounded-full mb-8"></div>
            
            <div className="prose prose-lg max-w-none text-base">
              <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
                Teen stress, anxiety, and big emotions don't have to control your household. I help teenagers in Park City develop practical skills to manage worry, build confidence, and navigate the challenges of adolescence—while keeping parents informed with clear strategies to support their teen at home.
              </p>
              
              <h2 className="text-2xl font-bold text-foreground mt-12 mb-6">Common reasons teens come to therapy</h2>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-accent rounded-full mr-3 mt-2.5"></div>
                  <span>Social anxiety and peer relationship challenges</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-accent rounded-full mr-3 mt-2.5"></div>
                  <span>Low mood and depression</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-accent rounded-full mr-3 mt-2.5"></div>
                  <span>School avoidance and academic stress</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-accent rounded-full mr-3 mt-2.5"></div>
                  <span>Perfectionism and pressure</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-accent rounded-full mr-3 mt-2.5"></div>
                  <span>Sleep issues and screen time stress</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-accent rounded-full mr-3 mt-2.5"></div>
                  <span>Panic attacks and overwhelming worry</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-accent rounded-full mr-3 mt-2.5"></div>
                  <span>Grief and major life transitions</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-accent rounded-full mr-3 mt-2.5"></div>
                  <span>ADHD support (organization and executive skills)</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-accent rounded-full mr-3 mt-2.5"></div>
                  <span>Sports and performance anxiety</span>
                </li>
              </ul>
              
              <h2 className="text-2xl font-bold text-foreground mt-12 mb-6">How teen therapy works here</h2>
              <p className="mb-4">We start with a parent consultation (15–20 minutes) to align on goals and understand your concerns. This helps me enter the therapeutic relationship with your teen from an informed perspective.</p>
              <p className="mb-4">I then meet with your teen for 1–2 sessions to build rapport, assess their needs, and begin developing our therapeutic relationship. Sessions are typically weekly at first, then we gradually taper as skills develop and goals are met.</p>
              <p className="mb-4">Throughout treatment, I provide brief parent check-ins as appropriate while preserving your teen's privacy and autonomy. You'll understand the work we're doing without compromising their trust.</p>
              
              <h2 className="text-2xl font-bold text-foreground mt-12 mb-6">Approaches I use</h2>
              <p className="mb-4">I integrate evidence-based approaches tailored to each teen's needs. CBT skills help teens understand the connection between thoughts, feelings, and actions. For teens who have experienced trauma or have stuck stress responses, I use ART/EMDR-informed strategies.</p>
              <p className="mb-4">Mindfulness and breathing techniques are particularly effective for panic attacks and overwhelming emotions. For teens struggling with low mood, I use behavioral activation to help them re-engage with meaningful activities.</p>
              <p className="mb-4">For teens dealing with avoidance, I use exposure-with-compassion approaches that gradually build confidence. I also provide executive-skills coaching for organization, time management, and planning—particularly helpful for teens with ADHD.</p>
              <p className="mb-4">For comprehensive <a href={normalizeUrl("/anxiety-therapy-park-city")} className="text-primary hover:text-primary/80 underline">anxiety therapy in Park City</a> support, I often integrate these approaches. If your teen also needs support for younger siblings, I also provide <a href={normalizeUrl("/child-therapist-park-city")} className="text-primary hover:text-primary/80 underline">child therapist in Park City</a> services for the whole family.</p>
              
              <h2 className="text-2xl font-bold text-foreground mt-12 mb-6">What families can expect</h2>
              <p className="mb-4">You can expect a warm, judgment-free space where your teen feels heard and respected. Every week, your teen will leave with actionable tools they can use immediately to manage stress, anxiety, or whatever brought them to therapy.</p>
              <p className="mb-4">We conduct progress reviews every 4–6 sessions to ensure we're on track and adjust our approach as needed. I collaborate with schools and primary care providers (with appropriate consent) to ensure comprehensive support.</p>
              <p className="mb-4">Most teens notice meaningful improvements within 4–6 sessions, especially when they practice skills between sessions. The goal is always to build their independence and confidence in managing life's challenges.</p>
              
              <h2 className="text-2xl font-bold text-foreground mt-12 mb-6">Insurance & fees</h2>
              <p className="mb-4">I accept Aetna, Cigna, and Regence BlueCross BlueShield of Utah (and others) through Headway. You can check your exact copay and book directly through their platform—no surprises or upfront costs.</p>
              <p className="mb-4">For families paying privately, sessions are $150. Payment is due at time of service. See my full <a href={normalizeUrl("/insurance-fees")} className="text-primary hover:text-primary/80 underline">Insurance & Fees</a> page for detailed information.</p>
              
              <h2 className="text-2xl font-bold text-foreground mt-12 mb-6">In-person in Pinebrook or telehealth in Utah</h2>
              <p className="mb-4">My office is located at 3080 Pinebrook Road, Suite 1100, Park City, UT 84098—convenient to Pinebrook, Jeremy Ranch, Kimball Junction, and Park City Schools. After-school appointment times are available.</p>
              <p className="mb-4">I also offer secure telehealth sessions anywhere in Utah when clinically appropriate. Many skills-based interventions work well through video sessions, giving teens flexibility in how they access support.</p>
              <p className="mb-6">I'm licensed as an LMFT in Utah (#9463019-3902), ensuring you receive qualified, professional care whether in-person or online.</p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mt-8 mb-12">
              <Button 
                variant="cta" 
                size="lg" 
                onClick={handleBooking}
                style={{ fontSize: 'clamp(16px, 3vw, 18px)', minHeight: '48px', padding: 'clamp(12px, 3vw, 24px)' }}
              >
                Check my benefits & book on Headway
              </Button>
              <Button 
                variant="soft" 
                size="lg" 
                 onClick={() => {
                   if (typeof window !== 'undefined') {
                     window.location.href = normalizeUrl("/#contact");
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
                  <AccordionTrigger className="text-left">What ages do you see for teen therapy?</AccordionTrigger>
                  <AccordionContent>
                    Ages 13–18. We'll set goals together and include brief parent updates while preserving your teen's privacy.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger className="text-left">Do you take insurance?</AccordionTrigger>
                  <AccordionContent>
                    Yes—Aetna, Cigna, Regence BCBS of Utah and others via Headway. You'll see your exact copay before booking.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger className="text-left">How soon do teens usually feel better?</AccordionTrigger>
                  <AccordionContent>
                    Many notice changes within 4–6 sessions, especially with consistent skills practice between sessions.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                  <AccordionTrigger className="text-left">Can sessions be online?</AccordionTrigger>
                  <AccordionContent>
                    Yes. Telehealth is available anywhere in Utah when clinically appropriate.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>

            {/* Trust Signals */}
            <div className="mt-16 p-6 bg-card rounded-lg border border-primary/10">
              <h3 className="text-xl font-semibold text-primary mb-4">Licensed & Experienced</h3>
              <p className="text-muted-foreground mb-4">LMFT, Utah #9463019-3902 • 20+ years specializing in teen and family therapy</p>
              <p className="text-muted-foreground italic">For client privacy and ethical guidelines, we don't publish client reviews. If you have questions about fit or approach, please <a href={normalizeUrl("/#contact")} className="underline text-primary hover:text-primary/80">reach out through our contact form</a>.</p>
            </div>

            {/* Location Details */}
            <div className="mt-8 p-6 bg-secondary/20 rounded-lg">
              <h3 className="text-xl font-semibold text-primary mb-4">Convenient Park City Location</h3>
              <p className="text-muted-foreground mb-2">3080 Pinebrook Road, Suite 1100, Park City, UT 84098</p>
              <p className="text-muted-foreground mb-4">Near Pinebrook Blvd & I-80 • Serving Pinebrook • Jeremy Ranch • Kimball Junction • Park City Schools • After-school times available</p>
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
                style={{ fontSize: 'clamp(16px, 3vw, 18px)', minHeight: '48px', padding: 'clamp(12px, 3vw, 24px) clamp(24px, 6vw, 32px)' }}
              >
                Check my benefits & book on Headway
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

export default TeenTherapistParkCity;