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

const ParentCoachingParkCity = () => {
  const handleBooking = () => {
    if (typeof window !== 'undefined') {
      window.open("https://care.headway.co/providers/brigette-elgie?utm_source=pem&utm_medium=direct_link&utm_campaign=142417", "_blank");
    }
  };

  const faqs = [
    {
      question: "What is parent coaching and how does it help?",
      answer: "Parent coaching provides evidence-based strategies and support for managing behavioral challenges, improving family communication, and creating positive family dynamics. It's focused on practical skills you can implement at home."
    },
    {
      question: "Do I need to bring my child to parent coaching sessions?",
      answer: "Parent coaching sessions typically focus on you as the parent, though I may recommend family sessions or individual child therapy as complementary support depending on your family's needs."
    }
  ];

  return (
    <div className="min-h-screen">
      <SEOHead 
        title="Parent Coaching in Park City, Utah | Brigette Elgie, LMFT"
        description="Evidence-based parent coaching in Park City. Learn effective strategies for behavioral challenges, family communication & positive parenting techniques."
      />
      <Navbar />
      
      <section className="py-20 bg-gradient-to-b from-background to-secondary/30" style={{ marginTop: '80px' }}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
              Parent Coaching in Park City, Utah
            </h1>
            <div className="w-20 h-1 bg-accent rounded-full mb-8"></div>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
                Evidence-based parent coaching and support in Park City, Utah. Learn effective strategies for 
                managing behavioral challenges, improving family communication, and creating positive family 
                dynamics that support your child's growth and development.
              </p>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Parenting can be challenging, especially when dealing with behavioral issues, family conflicts, 
                or navigating your child's emotional needs. My Park City parent coaching practice provides you 
                with practical, research-backed strategies tailored to your family's unique situation.
              </p>
              
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Whether you're dealing with tantrums, defiance, anxiety, or simply want to strengthen your 
                relationship with your child, parent coaching helps you develop confidence and skills for 
                effective, compassionate parenting. Available in-person and via telehealth.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <Button 
                variant="cta" 
                size="lg" 
                onClick={handleBooking}
                className="text-lg px-8 py-6"
              >
                Book Parent Coaching Session
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
              <h3 className="text-xl font-semibold text-primary mb-4">Parent Coaching Services Include:</h3>
              <ul className="space-y-2">
                <li className="flex items-center text-muted-foreground">
                  <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                  Behavioral management strategies
                </li>
                <li className="flex items-center text-muted-foreground">
                  <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                  Communication skills development
                </li>
                <li className="flex items-center text-muted-foreground">
                  <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                  Family systems approach
                </li>
                <li className="flex items-center text-muted-foreground">
                  <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                  Positive discipline techniques
                </li>
                <li className="flex items-center text-muted-foreground">
                  <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                  Emotional regulation support
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

export default ParentCoachingParkCity;