const Specialties = () => {
  const specialties = [
    {
      title: "Trauma Therapy",
      description: "Evidence-based treatment for PTSD, complex trauma, and childhood trauma using ART and EMDR.",
      techniques: ["ART (Accelerated Resolution Therapy)", "EMDR", "Trauma-Focused CBT"]
    },
    {
      title: "Family Therapy",
      description: "Healing family relationships and improving communication patterns for all family members.",
      techniques: ["Structural Family Therapy", "Play-Based Approaches", "Family Systems"]
    },
    {
      title: "Couples Therapy",
      description: "Strengthening relationships, improving communication, and rebuilding trust and intimacy.",
      techniques: ["Gottman Method", "Emotionally Focused Therapy", "Communication Skills"]
    },
    {
      title: "Individual Therapy",
      description: "Personal growth, anxiety, depression, life transitions, and self-discovery in a safe space.",
      techniques: ["Cognitive Behavioral Therapy", "Mindfulness-Based Approaches", "Solution-Focused Therapy"]
    }
  ];

  return (
    <section id="specialties" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Areas of Specialty
          </h2>
          <div className="w-20 h-1 bg-accent rounded-full mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive, evidence-based therapy services tailored to your unique needs and goals.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {specialties.map((specialty, index) => (
            <div
              key={index}
              className="bg-card p-8 rounded-xl shadow-card border border-primary/10 hover:shadow-floating transition-all duration-300"
            >
              <h3 className="text-2xl font-semibold text-primary mb-4">
                {specialty.title}
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {specialty.description}
              </p>
              <div className="space-y-2">
                <h4 className="font-medium text-foreground">Techniques Used:</h4>
                <ul className="space-y-1">
                  {specialty.techniques.map((technique, idx) => (
                    <li key={idx} className="text-sm text-muted-foreground flex items-center">
                      <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                      {technique}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Specialties;