import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const InsuranceFees = () => {
  const handleBooking = () => {
    if (typeof window !== 'undefined') {
      window.open("https://care.headway.co/providers/brigette-elgie?utm_source=pem&utm_medium=direct_link&utm_campaign=142417", "_blank");
    }
  };

  return (
    <>
      {/* SEO Meta Tags */}
      <head>
        <title>Insurance & Fees | Brigette Elgie, LMFT – Park City, UT</title>
        <meta 
          name="description" 
          content="See which insurance plans Brigette Elgie, LMFT accepts (Aetna, Regence BCBS of Utah, Cigna, and more) plus transparent self-pay rates for therapy in Park City or online anywhere in Utah." 
        />
        <link rel="canonical" href="https://brigetteelgie.com/insurance-fees" />
      </head>

      <div className="min-h-screen">
        <Navbar />
        
        {/* Hero Section */}
        <section className="pt-24 pb-16 bg-gradient-to-b from-secondary/30 to-background">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
                Clear, upfront pricing & in-network insurance
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Booking through Headway means you'll see your exact co-pay (or full session fee) before you schedule—no surprises.
              </p>
              <Button 
                variant="cta" 
                size="lg" 
                onClick={handleBooking}
                className="text-lg px-8 py-4 hover:scale-105 transition-transform duration-200"
              >
                Check my benefits & book
              </Button>
            </div>
          </div>
        </section>

        {/* In-Network Insurance */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
              Insurance plans I'm in-network with
            </h2>
            
            <Card className="max-w-4xl mx-auto mb-8">
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  <p><strong>Aetna</strong> – <em>Aetna therapist Park City</em></p>
                  <p><strong>Cigna</strong> – <em>Cigna counseling Utah</em></p>
                  <p><strong>Regence BlueCross BlueShield of Utah</strong></p>
                  <p><strong>Horizon Blue Cross Blue Shield (Virtual Network)</strong></p>
                  <p><strong>Independence Blue Cross (Virtual Network)</strong></p>
                  <p><strong>Blue Cross Blue Shield of Massachusetts (Virtual Network)</strong></p>
                  <p><strong>Quest Behavioral Health</strong></p>
                  <p><strong>Anthem EAP</strong></p>
                  <p><strong>Carelon Behavioral Health</strong></p>
                  <p><strong>SelectHealth</strong> – Utah</p>
                  <p><strong>Anthem Blue Cross & Blue Shield NH</strong></p>
                </div>
                
                <blockquote className="bg-accent-light/50 border-l-4 border-accent p-4 rounded-r-lg mb-6">
                  <p className="text-foreground">
                    <strong>Tip:</strong> Many national and PPO plans use the BlueCard® network. If your member ID starts with "XZH, XQE, etc." you're likely covered—Headway will verify instantly.
                  </p>
                </blockquote>

                <h3 className="text-xl font-semibold text-primary mb-4">Coming soon</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• UnitedHealthcare / Optum (Oscar, Oxford)</li>
                  <li>• Magellan</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* How Headway Works */}
        <section className="py-16 bg-secondary/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
              How Headway Works
            </h2>
            
            <Card className="max-w-4xl mx-auto">
              <CardContent className="p-8">
                <ol className="space-y-4 mb-6">
                  <li className="flex items-start">
                    <span className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1 flex-shrink-0">1</span>
                    <span>Click "Check my benefits & book."</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1 flex-shrink-0">2</span>
                    <span>Enter your insurance info. Headway pings your plan and shows your co-pay, deductible, or co-insurance in seconds.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1 flex-shrink-0">3</span>
                    <span>Book a time. Choose in-person at Pinebrook Road in Park City or secure telehealth (HIPAA-compliant).</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1 flex-shrink-0">4</span>
                    <span>Pay any co-pay automatically. Headway bills your insurer directly; you'll get an emailed receipt after each session.</span>
                  </li>
                </ol>
                
                <p className="text-muted-foreground text-center">
                  <strong>Need help?</strong> Headway's client support: support@headway.co or (917) 960-2740
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Private-Pay Fees */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
              Private-Pay Fees
            </h2>
            
            <Card className="max-w-4xl mx-auto">
              <CardContent className="p-8">
                <div className="overflow-x-auto mb-6">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="border-b border-border">
                        <th className="text-left py-3 px-4 font-semibold text-foreground">Service</th>
                        <th className="text-left py-3 px-4 font-semibold text-foreground">Length</th>
                        <th className="text-left py-3 px-4 font-semibold text-foreground">Fee</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-border">
                        <td className="py-3 px-4">Initial evaluation</td>
                        <td className="py-3 px-4">50 min</td>
                        <td className="py-3 px-4 font-semibold text-primary">$195</td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-3 px-4">Standard follow-up</td>
                        <td className="py-3 px-4">50 min</td>
                        <td className="py-3 px-4 font-semibold text-primary">$165</td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-3 px-4">Extended session</td>
                        <td className="py-3 px-4">80 min</td>
                        <td className="py-3 px-4 font-semibold text-primary">$240</td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-3 px-4">15-min phone consultation</td>
                        <td className="py-3 px-4">—</td>
                        <td className="py-3 px-4 font-semibold text-accent">Free</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4">Reports / letters</td>
                        <td className="py-3 px-4">per 15 min</td>
                        <td className="py-3 px-4 font-semibold text-primary">$40</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="space-y-3 text-muted-foreground">
                  <p>• HSA/FSA cards accepted through Headway.</p>
                  <p>• A limited number of sliding-scale slots are available—please ask.</p>
                </div>

                <div className="mt-8 p-4 bg-accent-light/30 rounded-lg">
                  <h3 className="font-semibold text-foreground mb-2">Good-Faith Estimate</h3>
                  <p className="text-muted-foreground">
                    Under the No Surprises Act you're entitled to a written estimate of costs if you don't have insurance or choose self-pay. Request it anytime.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Out-of-Network & Superbills */}
        <section className="py-16 bg-secondary/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
              Out-of-Network & Superbills
            </h2>
            
            <Card className="max-w-4xl mx-auto">
              <CardContent className="p-8">
                <p className="text-muted-foreground mb-4">If your plan is out-of-network:</p>
                
                <ol className="space-y-4">
                  <li className="flex items-start">
                    <span className="bg-accent text-accent-foreground rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1 flex-shrink-0">1</span>
                    <span>Pay the private-pay rate at booking.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-accent text-accent-foreground rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1 flex-shrink-0">2</span>
                    <span>Download a monthly superbill from your Headway portal.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-accent text-accent-foreground rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1 flex-shrink-0">3</span>
                    <span>Submit it to your insurer for possible reimbursement (many PPO plans reimburse 40-80%).</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-accent text-accent-foreground rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1 flex-shrink-0">4</span>
                    <span>Headway makes the superbill for you—no extra paperwork.</span>
                  </li>
                </ol>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Late-Cancellation & No-Show Policy */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
              Late-Cancellation & No-Show Policy
            </h2>
            
            <Card className="max-w-4xl mx-auto">
              <CardContent className="p-8">
                <div className="space-y-4 text-muted-foreground">
                  <p>• Cancelling &lt; 24 hours before your appointment or missing the session: $100 fee (not billable to insurance).</p>
                  <p>• You'll get SMS & email reminders 48 hrs in advance.</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-16 bg-secondary/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
              Frequently Asked Questions
            </h2>
            
            <div className="max-w-4xl mx-auto">
              <Accordion type="single" collapsible className="space-y-4">
                <AccordionItem value="medicare-medicaid" className="bg-card border border-border rounded-lg px-6">
                  <AccordionTrigger className="text-left font-semibold">
                    Do you accept Medicare or Medicaid?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Not at this time. We're happy to provide a referral list.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="authorization" className="bg-card border border-border rounded-lg px-6">
                  <AccordionTrigger className="text-left font-semibold">
                    What if Headway says I need authorization?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Contact the 800-number on your card and request outpatient behavioral health, CPT 90837 authorization. Upload the approval to Headway and you're set.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="telehealth-travel" className="bg-card border border-border rounded-lg px-6">
                  <AccordionTrigger className="text-left font-semibold">
                    Can I use telehealth if I'm traveling?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Brigette can only see clients located in Utah, Washington, or New Hampshire at the time of the session due to licensure rules.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="family-therapy" className="bg-card border border-border rounded-lg px-6">
                  <AccordionTrigger className="text-left font-semibold">
                    Is family therapy covered?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Yes—codes 90846/47 are typically covered just like individual sessions, but deductibles may differ. Headway will show the rate.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default InsuranceFees;