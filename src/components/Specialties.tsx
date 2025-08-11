const Specialties = () => {
  const specialties = [
    {
      title: "Child Therapy (4-12)",
      description: "Play-based therapy and behavioral interventions to help young children process emotions and develop coping skills.",
      techniques: ["Play Therapy", "Behavioral Interventions", "Parent-Child Interaction"],
      anchor: "child-therapist-park-city",
      route: "/child-therapist-park-city"
    },
    {
      title: "Teen Therapy (13-18)",
      description: "Supporting adolescents through anxiety, identity development, school stress, and life transitions.",
      techniques: ["Cognitive Behavioral Therapy", "Mindfulness Skills", "Identity Exploration"],
      anchor: "teen-therapist-park-city",
      route: "/teen-therapist-park-city"
    },
    {
      title: "Adult Trauma Therapy (EMDR & ART)",
      description: "Individual therapy for trauma, grief, life transitions, and personal growth using advanced therapeutic modalities.",
      techniques: ["ART (Accelerated Resolution Therapy)", "EMDR", "Trauma-Focused CBT"],
      anchor: "emdr-therapist-park-city",
      route: "/emdr-therapist-park-city"
    },
    {
      title: "Anxiety & Depression",
      description: "CBT and skills-based interventions for managing anxiety and depression across all ages.",
      techniques: ["Cognitive Behavioral Therapy", "Mindfulness-Based Approaches", "Exposure Therapy"],
      anchor: "anxiety-depression-therapy-park-city",
      route: "#specialties"
    },
    {
      title: "ADHD Behaviour Coaching",
      description: "Executive function skills and behavioral strategies for children, teens, and adults with ADHD.",
      techniques: ["Executive Function Skills", "Behavioral Management", "Attention Training"],
      anchor: "adhd-therapy-park-city",
      route: "#specialties"
    },
    {
      title: "Parent Coaching",
      description: "Evidence-based strategies and support for parents navigating behavioral challenges and family dynamics.",
      techniques: ["Behavioral Management", "Communication Skills", "Family Systems"],
      anchor: "parent-coaching-park-city",
      route: "#specialties"
    }
  ];

  return (
    <section id="specialties" className="py-20 bg-background scroll-mt-20">
      <div className="container mx-auto" style={{ paddingInline: 'clamp(16px, 4vw, 24px)' }}>
        <div className="text-center mb-16">
          <h2 style={{ fontSize: 'clamp(28px, 6vw, 36px)' }} className="font-bold text-foreground mb-4">
            Areas of Specialty
          </h2>
          <div className="w-20 h-1 bg-accent rounded-full mx-auto mb-6"></div>
          <p style={{ fontSize: 'clamp(16px, 3vw, 18px)' }} className="text-muted-foreground max-w-2xl mx-auto">
            Comprehensive, evidence-based therapy services tailored to your unique needs and goals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {specialties.map((specialty, index) => (
            <div
              key={index}
              id={specialty.anchor}
              className="bg-card p-6 md:p-8 rounded-xl shadow-card border border-primary/10 hover:shadow-floating transition-all duration-300 cursor-pointer"
              onClick={() => window.location.href = specialty.route}
            >
              <h3 style={{ fontSize: 'clamp(20px, 4vw, 24px)' }} className="font-semibold text-primary mb-4">
                {specialty.title}
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed" style={{ fontSize: 'clamp(14px, 3vw, 16px)' }}>
                {specialty.description}
              </p>
              <div className="space-y-2">
                <h4 className="font-medium text-foreground">Techniques Used:</h4>
                <ul className="space-y-1">
                  {specialty.techniques.map((technique, idx) => (
                    <li key={idx} className="text-sm text-muted-foreground flex items-center">
                      <div className="w-2 h-2 bg-accent rounded-full mr-3 flex-shrink-0"></div>
                      <span className="min-w-0">{technique}</span>
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