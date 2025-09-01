import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { normalizeUrl } from "@/utils/normalizeUrl";

const AnxietyTherapyParkCity = () => {
  const handleBooking = () => {
    if (typeof window !== 'undefined') {
      window.open("https://care.headway.co/providers/brigette-elgie?utm_source=pem&utm_medium=direct_link&utm_campaign=142417", "_blank");
    }
  };

  const breadcrumbs = [
    { name: "Home", url: normalizeUrl("https://www.elgietherapy.com/") },
    { name: "Anxiety Therapy in Park City", url: normalizeUrl("https://www.elgietherapy.com/anxiety-therapy-park-city") }
  ];

  return (
    <>
      <SEOHead 
        title="Anxiety Therapist Park City, UT | Evidence-Based Care – Brigette Elgie, LMFT"
        description="Evidence-based anxiety treatment in Park City, UT – therapy for panic, social anxiety & chronic worry with Brigette Elgie, LMFT. In-person or telehealth. Free 15-min consult."
        breadcrumbs={breadcrumbs}
      />

      <div className="min-h-screen">
        <Navbar />
        
        {/* Hero Section */}
        <section className="pt-24 pb-16 bg-gradient-to-b from-secondary/30 to-background">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
                Anxiety Therapy in Park City
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed italic">
                Compassionate, evidence-based care for worry, panic & overwhelm
              </p>
              <Button 
                variant="cta" 
                size="lg" 
                onClick={handleBooking}
                className="text-lg px-8 py-4 hover:scale-105 transition-transform duration-200"
              >
                Check my insurance & book now
              </Button>
            </div>
          </div>
        </section>

        {/* Do these feelings sound familiar? */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
              Do these feelings sound familiar?
            </h2>
            
            <Card className="max-w-4xl mx-auto mb-8">
              <CardContent className="p-8">
                <ul className="space-y-4 text-muted-foreground">
                  <li>• Constant "what-ifs" that keep you awake long after the mountain town quiets down</li>
                  <li>• A racing heart on the drive up SR-224, even when there's no traffic</li>
                  <li>• Canceling ski days or social plans because you "just can't"</li>
                  <li>• Tight chest, short breath, or GI issues before work or school</li>
                  <li>• Intrusive thoughts that whisper, <em>"Something bad is about to happen."</em></li>
                </ul>
                
                <p className="text-muted-foreground mt-6">
                  If so, you're not alone. Roughly <strong>1 in 5 Utahns</strong> will experience an anxiety disorder this year—and many never reach out for help. Working with a trained <strong>anxiety therapist in Park City</strong> can change that.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Why choose Brigette Elgie */}
        <section className="py-16 bg-secondary/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
              Why choose Brigette Elgie, LMFT?
            </h2>
            
            <Card className="max-w-4xl mx-auto">
              <CardContent className="p-8">
                <ul className="space-y-4 text-muted-foreground">
                  <li>• <strong>20+ years of clinical experience</strong> specializing in anxiety, trauma, and family dynamics</li>
                  <li>• Certified in <strong>Cognitive-Behavioral Therapy (CBT)</strong>, <strong>Accelerated Resolution Therapy (ART)</strong>, and <strong>mindfulness-based</strong> interventions</li>
                  <li>• <strong>Licensed in Utah, Washington & New Hampshire</strong> – see Brigette in her Pinebrook office <em>or</em> via secure telehealth anywhere in these states</li>
                  <li>• <strong>Headway</strong> handles your insurance & billing so you know your exact copay before the first session</li>
                  <li>• Warm, down-to-earth style that blends professional expertise with genuine empathy</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* How anxiety therapy works */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
              How anxiety therapy works here
            </h2>
            
            <Card className="max-w-4xl mx-auto">
              <CardContent className="p-8">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold text-primary mb-3">1. Free 15-minute consultation</h3>
                    <p className="text-muted-foreground">Ask questions, share your goals, and ensure we're a good fit. <em>(Book instantly through Headway.)</em></p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold text-primary mb-3">2. Comprehensive assessment</h3>
                    <p className="text-muted-foreground">We'll explore symptoms, triggers, medical history, and lifestyle factors unique to life in Summit County—think altitude, seasonal shifts, and high-performance culture.</p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold text-primary mb-3">3. Tailored treatment plan</h3>
                    <ul className="space-y-2 text-muted-foreground ml-4">
                      <li>• <strong>CBT</strong> – identify and reframe anxious thought loops</li>
                      <li>• <strong>ART / EMDR-informed techniques</strong> – resolve stored fear responses</li>
                      <li>• <strong>Mind-body skills</strong> – breath work, grounding, and progressive muscle relaxation</li>
                      <li>• <strong>Exposure-with-compassion</strong> – gentle, structured steps to rebuild confidence</li>
                      <li>• <strong>Family or parent sessions</strong> (when working with teens)</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold text-primary mb-3">4. Ongoing sessions (50 minutes)</h3>
                    <p className="text-muted-foreground">Most clients notice measurable relief within 6–8 sessions; we'll adjust frequency as symptoms improve.</p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold text-primary mb-3">5. Tools for life</h3>
                    <p className="text-muted-foreground">You'll leave with a personalized "Anxiety Toolkit" PDF: quick exercises, app suggestions, and Park City-specific resources (from mindfulness trails to community groups).</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Common anxiety issues table */}
        <section className="py-16 bg-secondary/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
              Common anxiety issues I treat
            </h2>
            
            <Card className="max-w-4xl mx-auto">
              <CardContent className="p-8">
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse min-w-[600px]">
                    <thead>
                      <tr className="border-b border-border">
                        <th className="text-left py-3 px-4 font-semibold text-foreground">Concern</th>
                        <th className="text-left py-3 px-4 font-semibold text-foreground">How it may show up</th>
                        <th className="text-left py-3 px-4 font-semibold text-foreground">Therapy focus</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-border">
                        <td className="py-3 px-4 font-semibold">Generalized Anxiety (GAD)</td>
                        <td className="py-3 px-4">chronic worry, restlessness, muscle tension</td>
                        <td className="py-3 px-4">CBT, journaling homework, sleep hygiene</td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-3 px-4 font-semibold">Panic Disorder</td>
                        <td className="py-3 px-4">sudden attacks, fear of future attacks</td>
                        <td className="py-3 px-4">interoceptive exposure, breathing retraining</td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-3 px-4 font-semibold">Social Anxiety</td>
                        <td className="py-3 px-4">fear of judgment in social or work settings</td>
                        <td className="py-3 px-4">cognitive restructuring, gradual exposure</td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-3 px-4 font-semibold">Performance Anxiety</td>
                        <td className="py-3 px-4">athletes, presenters, performers</td>
                        <td className="py-3 px-4">visualization, acceptance & commitment strategies</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4 font-semibold">Health Anxiety</td>
                        <td className="py-3 px-4">excessive health fears, frequent doctor visits</td>
                        <td className="py-3 px-4">psychoeducation, mindfulness, internet-trigger management</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-sm text-muted-foreground mt-4">
                  (Table is horizontally scrollable on screens &lt; 600 px.)
                </p>
              </CardContent>
            </Card>
          </div>
        </section>


        {/* Fees & Insurance */}
        <section className="py-16 bg-secondary/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
              Fees & insurance
            </h2>
            
            <Card className="max-w-4xl mx-auto">
              <CardContent className="p-8">
                <p className="text-muted-foreground text-center">
                  Brigette is <strong>in-network</strong> with Aetna, Cigna, Regence BCBS of Utah, and more—see full list on our <a href={normalizeUrl("/insurance-fees")} className="text-primary hover:underline">Insurance & Fees</a> page. Private-pay rate is <strong>$165 per 50-minute session</strong>. Headway verifies your benefits in seconds so there are no billing surprises.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
              Frequently Asked Questions
            </h2>
            
            <div className="max-w-4xl mx-auto">
              <Accordion type="single" collapsible className="space-y-4">
                <AccordionItem value="therapy-length" className="bg-card border border-border rounded-lg px-6">
                  <AccordionTrigger className="text-left font-semibold">
                    How long will therapy take?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    While every client differs, many anxiety-specific treatment plans run <strong>8–16 sessions</strong>. We'll review progress every four sessions and adapt as needed.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="telehealth-travel" className="bg-card border border-border rounded-lg px-6">
                  <AccordionTrigger className="text-left font-semibold">
                    Can I switch to telehealth if I'm traveling?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Yes, as long as you're physically located in Utah, WA, or NH at session time. Headway's video platform is HIPAA-secure.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="medication" className="bg-card border border-border rounded-lg px-6">
                  <AccordionTrigger className="text-left font-semibold">
                    Do you prescribe medication?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    No, but I collaborate with primary-care doctors and psychiatrists in Park City if medication could enhance your therapy results.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="psychiatrist-collaboration" className="bg-card border border-border rounded-lg px-6">
                  <AccordionTrigger className="text-left font-semibold">
                    What if I'm already seeing a psychiatrist?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Great—integrated care often speeds recovery. With your permission, I'll coordinate to align goals and reduce overlap.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
          
          {/* FAQ Schema */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "FAQPage",
                "mainEntity": [
                  {
                    "@type": "Question",
                    "name": "How long will therapy take?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "While every client differs, many anxiety-specific treatment plans run 8–16 sessions. We'll review progress every four sessions and adapt as needed."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Can I switch to telehealth if I'm traveling?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Yes, as long as you're physically located in Utah, WA, or NH at session time. Headway's video platform is HIPAA-secure."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Do you prescribe medication?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "No, but I collaborate with primary-care doctors and psychiatrists in Park City if medication could enhance your therapy results."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "What if I'm already seeing a psychiatrist?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Great—integrated care often speeds recovery. With your permission, I'll coordinate to align goals and reduce overlap."
                    }
                  }
                ]
              })
            }}
          />
        </section>

        {/* Closing section */}
        <section className="py-16 bg-gradient-to-b from-secondary/30 to-background">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-foreground mb-6">
                Ready to calm the storm?
              </h2>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Mountains are meant for exploring, not for watching from the safety of your couch. Let's get you back out there—steady, confident, and present.
              </p>
              <Button 
                variant="cta" 
                size="lg" 
                onClick={handleBooking}
                className="text-lg px-8 py-4 hover:scale-105 transition-transform duration-200 mb-8"
              >
                Check my insurance & book now
              </Button>
              
              <div className="text-center text-muted-foreground">
                <p className="font-semibold">Brigette Elgie, MFT, PLLC</p>
                <p>3080 Pinebrook Road, Suite 1100, Park City, UT 84098</p>
                <p>(949) 648-7004 | In-person & telehealth | Monday–Friday, 9 am–5 pm MT</p>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default AnxietyTherapyParkCity;