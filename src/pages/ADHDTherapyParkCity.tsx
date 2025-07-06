import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const ADHDTherapyParkCity = () => {
  const handleBooking = () => {
    window.open("https://headway.co/booking/brigette-elgie", "_blank");
  };

  const faqs = [
    {
      question: "How does ADHD coaching differ from traditional therapy?",
      answer: "ADHD coaching focuses specifically on developing executive function skills, organizational strategies, and behavioral management techniques tailored to how ADHD brains work."
    },
    {
      question: "Do you work with adults with ADHD as well as children?",
      answer: "Yes, I provide ADHD behavior coaching for children, teens, and adults. Each age group requires different strategies and approaches based on their developmental needs and life circumstances."
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <section className="py-20 bg-gradient-to-b from-background to-secondary/30" style={{ marginTop: '80px' }}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
              ADHD Behavior Coaching in Park City, Utah
            </h1>
            <div className="w-20 h-1 bg-accent rounded-full mb-8"></div>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
                Specialized ADHD behavior coaching and executive function skills training for children, teens, 
                and adults in Park City, Utah. Helping individuals with ADHD develop practical strategies for 
                attention, organization, and behavioral management.
              </p>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                ADHD affects everyone differently, and successful management requires individualized strategies. 
                My Park City practice focuses on building executive function skills, improving attention and focus, 
                and developing behavioral management techniques that work with your unique ADHD brain.
              </p>
              
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Whether you're struggling with time management, organization, emotional regulation, or attention 
                difficulties, I provide practical, evidence-based coaching that helps you thrive. Sessions available 
                both in-person in Park City and via telehealth.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <Button 
                variant="cta" 
                size="lg" 
                onClick={handleBooking}
                className="text-lg px-8 py-6"
              >
                Book ADHD Coaching Session
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
              <h3 className="text-xl font-semibold text-primary mb-4">ADHD Behavior Coaching Includes:</h3>
              <ul className="space-y-2">
                <li className="flex items-center text-muted-foreground">
                  <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                  Executive function skills development
                </li>
                <li className="flex items-center text-muted-foreground">
                  <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                  Behavioral management strategies
                </li>
                <li className="flex items-center text-muted-foreground">
                  <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                  Attention and focus training
                </li>
                <li className="flex items-center text-muted-foreground">
                  <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                  Time management and organization skills
                </li>
                <li className="flex items-center text-muted-foreground">
                  <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                  Emotional regulation techniques
                </li>
              </ul>
            </div>

            <div className="mt-12">
              <h3 className="text-2xl font-semibold text-foreground mb-6">Frequently Asked Questions</h3>
              <Accordion type="single" collapsible className="space-y-4">
                {faqs.map((faq, index) => (
                  <AccordionItem 
                    key={index} 
                    value={`item-${index}`}
                    className="bg-card rounded-lg px-6 border border-primary/10 shadow-soft"
                  >
                    <AccordionTrigger className="text-left text-lg font-medium text-foreground hover:text-primary">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed pt-2">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      
      {/* FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqs.map(faq => ({
              "@type": "Question",
              "name": faq.question,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
              }
            }))
          })
        }}
      />
    </div>
  );
};

export default ADHDTherapyParkCity;