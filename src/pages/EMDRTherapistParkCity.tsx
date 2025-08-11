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

const EMDRTherapistParkCity = () => {
  const handleBooking = () => {
    if (typeof window !== 'undefined') {
      window.open("https://care.headway.co/providers/brigette-elgie?utm_source=site&utm_medium=footer_cta&utm_campaign=142417", "_blank");
    }
  };

  const breadcrumbs = [
    { name: "Home", url: "https://elgietherapy.com/" },
    { name: "EMDR & ART Therapist in Park City", url: "https://elgietherapy.com/emdr-therapist-park-city" }
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
          "item": "https://elgietherapy.com/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "EMDR & ART Therapist in Park City",
          "item": "https://elgietherapy.com/emdr-therapist-park-city"
        }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What's the difference between EMDR and ART?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Both are evidence-informed trauma therapies that help the brain process distressing memories. EMDR follows an 8-phase protocol using bilateral stimulation; ART uses guided imagery and rapid eye movements to reduce the emotional charge. I'll recommend one or blend elements based on your goals and comfort."
          }
        },
        {
          "@type": "Question",
          "name": "How many sessions will I need?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Length varies with your history and goals. After an initial assessment, we'll set a plan and check progress every few sessions."
          }
        },
        {
          "@type": "Question",
          "name": "Can EMDR or ART be done online?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, when clinically appropriate. We use secure video and adapted bilateral stimulation methods for remote sessions in Utah."
          }
        },
        {
          "@type": "Question",
          "name": "Do you take insurance?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes—Aetna, Cigna, Regence BlueCross BlueShield of Utah and others via Headway. You'll see your exact copay before booking."
          }
        }
      ]
    }
  ];

  return (
    <>
      <SEOHead 
        title="EMDR & ART Therapist Park City, UT | Trauma Therapy – Brigette Elgie, LMFT"
        description="EMDR and Accelerated Resolution Therapy (ART) in Park City for trauma, anxiety, and distressing memories. In-person Pinebrook or telehealth in Utah. Check insurance & book via Headway."
        canonicalUrl="https://elgietherapy.com/emdr-therapist-park-city"
        breadcrumbs={breadcrumbs}
        jsonLd={jsonLdSchemas}
      />
      
      <div className="min-h-screen">
        <Navbar />
      
      <section className="py-20 bg-gradient-to-b from-background to-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
              EMDR & ART Therapist in Park City, UT
            </h1>
            <p className="text-xl text-accent mb-6 font-medium">Trauma-informed care using EMDR and Accelerated Resolution Therapy (ART)</p>
            <div className="w-20 h-1 bg-accent rounded-full mb-8"></div>
            
            <div className="prose prose-lg max-w-none text-base">
              <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
                Distressing memories, images, and body sensations can linger long after an event. I use EMDR and Accelerated Resolution Therapy (ART) to help your brain reprocess what's stuck so you can think about the past with less anxiety and more control—at a pace that feels safe.
              </p>
              
              <h2 className="text-2xl font-bold text-foreground mt-12 mb-6">What are EMDR and ART?</h2>
              <p className="mb-4">EMDR (Eye Movement Desensitization and Reprocessing) uses structured sets of eye movements or bilateral stimulation to help the brain reprocess stuck memories. The goal is to reduce the emotional distress when you think about difficult experiences.</p>
              <p className="mb-4">ART (Accelerated Resolution Therapy) uses guided imagery and rapid eye movements to reduce the emotional charge around distressing images and sensations. It can help improve your functioning and reduce distress related to traumatic memories.</p>
              <p className="mb-4">Both approaches work with your brain's natural healing ability—no detailed retelling of trauma is required to make progress. These evidence-informed therapies can help you move forward with less anxiety and more control over your responses.</p>
              
              <h2 className="text-2xl font-bold text-foreground mt-12 mb-6">Is this a fit for me?</h2>
              <p className="mb-4">EMDR and ART can be helpful for people dealing with:</p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-accent rounded-full mr-3 mt-2.5"></div>
                  <span>Single-incident trauma (accidents, medical procedures, losses)</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-accent rounded-full mr-3 mt-2.5"></div>
                  <span>Chronic stress and overwhelming life experiences</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-accent rounded-full mr-3 mt-2.5"></div>
                  <span>Panic episodes and anxiety attacks</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-accent rounded-full mr-3 mt-2.5"></div>
                  <span>Nightmares and intrusive memories</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-accent rounded-full mr-3 mt-2.5"></div>
                  <span>Grief and complicated loss</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-accent rounded-full mr-3 mt-2.5"></div>
                  <span>Phobias and persistent fears</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-accent rounded-full mr-3 mt-2.5"></div>
                  <span>Medical or accident-related memories</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-accent rounded-full mr-3 mt-2.5"></div>
                  <span>First-responder and occupational stress</span>
                </li>
              </ul>
              <p className="mb-4">I screen for readiness and tailor the approach to your specific needs and comfort level. These approaches can often be integrated with <a href="/anxiety-therapy-park-city" className="text-primary hover:text-primary/80 underline">anxiety therapy in Park City</a> and other therapeutic approaches.</p>
              
              <h2 className="text-2xl font-bold text-foreground mt-12 mb-6">How EMDR/ART works here</h2>
              <p className="mb-4"><strong>Consultation & Assessment:</strong> We start with understanding your history, current goals, and developing a safety plan. I'll explain how these approaches work and answer your questions.</p>
              <p className="mb-4"><strong>Preparation:</strong> You'll learn grounding skills, resourcing techniques, and understand the session structure. This ensures you feel stable and prepared before we begin processing work.</p>
              <p className="mb-4"><strong>Processing Sessions:</strong> We'll use EMDR or ART (or elements of both) depending on your needs and preferences. You'll stay in charge of the process—no detailed retelling is required to make progress.</p>
              <p className="mb-4"><strong>Review & Stabilization:</strong> We regularly measure progress and add coping tools as needed. A focused course often spans several sessions; pace varies by person.</p>
              <p className="mb-4">For families needing additional support, I also provide <a href="/child-therapist-park-city" className="text-primary hover:text-primary/80 underline">child therapist in Park City</a> and <a href="/teen-therapist-park-city" className="text-primary hover:text-primary/80 underline">teen therapy in Park City</a> services.</p>
              
              <h2 className="text-2xl font-bold text-foreground mt-12 mb-6">EMDR vs. ART—how I choose</h2>
              <p className="mb-4">I consider your preference, symptom profile (such as intrusive images versus somatic sensations), and how you respond in early sessions. Some people benefit from EMDR's structured 8-phase protocol, while others prefer ART's imagery-focused approach. Both can be blended with CBT and skills work to provide comprehensive support tailored to your healing journey.</p>
              
              <h2 className="text-2xl font-bold text-foreground mt-12 mb-6">In-person in Pinebrook or telehealth in Utah</h2>
              <p className="mb-4">My office is located at 3080 Pinebrook Road, Suite 1100, Park City, UT 84098—convenient to Pinebrook, Jeremy Ranch, Kimball Junction, and Park City area.</p>
              <p className="mb-4">Remote EMDR and ART sessions are available anywhere in Utah with adapted bilateral stimulation methods when clinically appropriate. We use secure video platforms and specialized techniques designed for telehealth trauma therapy.</p>
              <p className="mb-6">I'm licensed as an LMFT in Utah (#9463019-3902), ensuring you receive qualified, professional trauma therapy whether in-person or online.</p>
              
              <h2 className="text-2xl font-bold text-foreground mt-12 mb-6">Insurance & fees</h2>
              <p className="mb-4">I accept Aetna, Cigna, and Regence BlueCross BlueShield of Utah (and others) through Headway. You can check your exact copay and book directly through their platform—no surprises or upfront costs.</p>
              <p className="mb-6">For those paying privately, sessions are $150. Payment is due at time of service. See my full <a href="/insurance-fees" className="text-primary hover:text-primary/80 underline">Insurance & Fees</a> page for detailed information.</p>
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
                  <AccordionTrigger className="text-left">What's the difference between EMDR and ART?</AccordionTrigger>
                  <AccordionContent>
                    Both are evidence-informed trauma therapies that help the brain process distressing memories. EMDR follows an 8-phase protocol using bilateral stimulation; ART uses guided imagery and rapid eye movements to reduce the emotional charge. I'll recommend one or blend elements based on your goals and comfort.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger className="text-left">How many sessions will I need?</AccordionTrigger>
                  <AccordionContent>
                    Length varies with your history and goals. After an initial assessment, we'll set a plan and check progress every few sessions.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger className="text-left">Can EMDR or ART be done online?</AccordionTrigger>
                  <AccordionContent>
                    Yes, when clinically appropriate. We use secure video and adapted bilateral stimulation methods for remote sessions in Utah.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                  <AccordionTrigger className="text-left">Do you take insurance?</AccordionTrigger>
                  <AccordionContent>
                    Yes—Aetna, Cigna, Regence BlueCross BlueShield of Utah and others via Headway. You'll see your exact copay before booking.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>

            {/* Trust Signals */}
            <div className="mt-16 p-6 bg-card rounded-lg border border-primary/10">
              <h3 className="text-xl font-semibold text-primary mb-4">Licensed & Experienced</h3>
              <p className="text-muted-foreground mb-4">LMFT, Utah #9463019-3902 • 20+ years specializing in trauma therapy • EMDR and ART trained</p>
              <p className="text-muted-foreground italic">For client privacy and ethical guidelines, we don't publish client reviews. If you have questions about fit or approach, please <a href="/#contact" className="underline text-primary hover:text-primary/80">reach out through our contact form</a>.</p>
            </div>

            {/* Location Details */}
            <div className="mt-8 p-6 bg-secondary/20 rounded-lg">
              <h3 className="text-xl font-semibold text-primary mb-4">Convenient Park City Location</h3>
              <p className="text-muted-foreground mb-2">3080 Pinebrook Road, Suite 1100, Park City, UT 84098</p>
              <p className="text-muted-foreground mb-4">Near Pinebrook Blvd & I-80 • Serving Pinebrook • Jeremy Ranch • Kimball Junction • Park City area</p>
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

export default EMDRTherapistParkCity;