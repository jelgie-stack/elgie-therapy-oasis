import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "What ages do you work with in Park City?",
      answer: "I specialize in working with children ages 4-12, teenagers 13-18, and adults. My practice focuses on trauma-informed care across all age groups, with specialized techniques appropriate for each developmental stage."
    },
    {
      question: "Do you accept insurance for therapy in Park City?",
      answer: "Yes, I accept several major insurance plans and also offer telehealth sessions for clients throughout Utah, California, Washington, and New Hampshire. Please contact my office to verify your specific insurance coverage."
    },
    {
      question: "What happens after I click \"Book Now\"?",
      answer: "You'll be guided through Headway to check your benefits and see your exact copay. Then you can choose a time that works and book online."
    },
    {
      question: "Do you offer evening or weekend sessions?",
      answer: "Yes—limited evening and Saturday availability. If you don't see a time that works, message us and we'll try to accommodate."
    },
    {
      question: "What is EMDR and ART therapy?",
      answer: "EMDR (Eye Movement Desensitization and Reprocessing) and ART (Accelerated Resolution Therapy) are evidence-based treatments for trauma and PTSD. As a Master Practitioner in ART and EMDR-trained therapist, I use these techniques to help clients process traumatic experiences effectively."
    },
    {
      question: "How do I book an appointment in Park City?",
      answer: "You can easily book an appointment through my Headway booking system online, or contact my office directly. I offer both in-person sessions in Park City and telehealth options for your convenience."
    },
    {
      question: "What should I expect in the first therapy session?",
      answer: "The first session involves getting to know you and your concerns, discussing your goals for therapy, and creating a treatment plan. For children, I often use play-based approaches, while teen and adult sessions focus on building rapport and understanding your unique needs."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background to-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Frequently Asked Questions
          </h2>
          <div className="w-20 h-1 bg-accent rounded-full mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Common questions about therapy services in Park City and telehealth options.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
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
    </section>
  );
};

export default FAQ;