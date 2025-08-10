const portraitUrl = "/lovable-uploads/8b9bb41a-7d3d-4a40-b9a9-a71278293db1.png";

const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-background to-secondary/30 scroll-mt-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
           {/* Content */}
          <div className="space-y-6">
            <div className="flex items-start gap-6">
              <div className="flex-shrink-0">
                <img
                  src={portraitUrl}
                  alt="Brigette Elgie LMFT headshot"
                  className="w-40 h-40 rounded-full object-cover border-4 border-primary/20"
                  loading="lazy"
                />
                <div className="flex justify-center gap-2 mt-4">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="text-xs font-bold text-primary">AAMFT</span>
                  </div>
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="text-xs font-bold text-primary">EMDR</span>
                  </div>
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="text-xs font-bold text-primary">ART</span>
                  </div>
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="text-xs font-bold text-primary">CMI</span>
                  </div>
                </div>
              </div>
              <div className="flex-1">
                <div>
                  <h2 className="text-4xl font-bold text-foreground mb-4">
                    About Brigette
                  </h2>
                  <div className="w-20 h-1 bg-accent rounded-full mb-6"></div>
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Brigette Elgie is a trauma-informed Licensed Marriage & Family Therapist specializing in children, adolescents, and adults. 
                  I believe in providing evidence-based therapy with a warm, compassionate approach, creating a safe space for healing 
                  and growth through play-based and traditional therapeutic methods.
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="bg-card p-6 rounded-lg shadow-soft border border-primary/10">
                <h3 className="font-semibold text-primary mb-2">Education & Experience</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• <strong>20+ years</strong> helping kids & teens thrive</li>
                  <li>• <strong>BA</strong> – Smith College</li>
                  <li>• <strong>MA Counseling Psychology</strong> – Santa Clara University — Emphasis on Marriage and Family Therapy.</li>
                </ul>
              </div>

              <div className="bg-card p-6 rounded-lg shadow-soft border border-primary/10">
                <h3 className="font-semibold text-primary mb-2">Specialized Training</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• <strong>Master Practitioner in ART</strong> (Accelerated Resolution Therapy)</li>
                  <li>• <strong>EMDR Trained</strong> (Eye Movement Desensitization and Reprocessing)</li>
                  <li>• <strong>Trauma-Informed Care</strong> specialist</li>
                  <li>• <strong>Adult Trauma Therapy</strong></li>
                  <li>• <strong>Critical Memory Integration</strong></li>
                </ul>
              </div>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed">
              Serving Park City, Utah and surrounding Summit County communities with compassionate, evidence-based therapy.
            </p>

            <div className="flex flex-wrap gap-3">
              <span className="bg-primary-light text-primary px-4 py-2 rounded-full text-sm font-medium">
                Child Therapy
              </span>
              <span className="bg-primary-light text-primary px-4 py-2 rounded-full text-sm font-medium">
                Teen Therapy
              </span>
              <span className="bg-primary-light text-primary px-4 py-2 rounded-full text-sm font-medium">
                EMDR
              </span>
              <span className="bg-primary-light text-primary px-4 py-2 rounded-full text-sm font-medium">
                ART
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;