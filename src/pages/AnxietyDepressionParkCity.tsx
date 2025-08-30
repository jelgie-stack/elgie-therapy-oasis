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

const AnxietyDepressionParkCity = () => {
  const handleBooking = () => {
    if (typeof window !== 'undefined') {
      window.open("https://care.headway.co/providers/brigette-elgie?utm_source=pem&utm_medium=direct_link&utm_campaign=142417", "_blank");
    }
  };

  const faqs = [
    {
      question: "How do you treat anxiety in children and teens?",
      answer: "I use evidence-based approaches including Cognitive Behavioral Therapy (CBT), mindfulness techniques, and exposure therapy tailored to each child's developmental level and specific needs."
    },
    {
      question: "What are signs my child might need therapy for depression?",
      answer: "Signs include persistent sadness, withdrawal from activities, changes in sleep or appetite, difficulty concentrating, or expressing feelings of hopelessness. Early intervention is key."
    }
  ];

  return (
    <div className="min-h-screen">
      <SEOHead 
        title="Anxiety & Depression Therapy in Park City, Utah | Brigette Elgie, LMFT"
        description="Expert anxiety and depression therapy for children, teens & adults in Park City. CBT, mindfulness & evidence-based treatment. Licensed therapist in Utah."
      />
      <Navbar />
      
      <section className="py-20 bg-gradient-to-b from-background to-secondary/30" style={{ marginTop: '80px' }}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
              Anxiety & Depression Therapy in Park City, Utah
            </h1>
            <div className="w-20 h-1 bg-accent rounded-full mb-8"></div>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
                Expert anxiety and depression treatment for children, teens, and adults in Park City, Utah. 
                Using Cognitive Behavioral Therapy (CBT), mindfulness-based approaches, and evidence-based 
                interventions to help you or your child overcome anxiety and depression.
              </p>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Anxiety and depression can significantly impact daily life, relationships, and overall well-being. 
                My Park City therapy practice specializes in helping individuals of all ages develop healthy 
                coping strategies, challenge negative thought patterns, and build resilience for long-term success.
              </p>
              
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Whether you're dealing with generalized anxiety, social anxiety, panic attacks, or depressive symptoms, 
                I provide personalized treatment plans that address your unique needs. Both in-person and telehealth 
                sessions are available for your convenience.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <Button 
                variant="cta" 
                size="lg" 
                onClick={handleBooking}
                className="text-lg px-8 py-6"
              >
                Book Anxiety/Depression Therapy
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
              <h3 className="text-xl font-semibold text-primary mb-4">Anxiety & Depression Treatment Includes:</h3>
              <ul className="space-y-2">
                <li className="flex items-center text-muted-foreground">
                  <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                  Cognitive Behavioral Therapy (CBT)
                </li>
                <li className="flex items-center text-muted-foreground">
                  <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                  Mindfulness-based approaches
                </li>
                <li className="flex items-center text-muted-foreground">
                  <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                  Exposure therapy for anxiety
                </li>
                <li className="flex items-center text-muted-foreground">
                  <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                  Coping skills development
                </li>
                <li className="flex items-center text-muted-foreground">
                  <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                  Stress management techniques
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

export default AnxietyDepressionParkCity;