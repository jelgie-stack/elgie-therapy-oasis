const portraitUrl = "/lovable-uploads/8b9bb41a-7d3d-4a40-b9a9-a71278293db1.png";

const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-background to-secondary/30">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Portrait */}
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden shadow-card">
              <img
                src={portraitUrl}
                alt="Brigette Elgie, LMFT"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 bg-primary text-primary-foreground px-6 py-2 rounded-full text-sm font-medium shadow-lg">
              20+ Years Licensed
            </div>
          </div>

          {/* Content */}
          <div className="space-y-6">
            <div>
              <h2 className="text-4xl font-bold text-foreground mb-4">
                About Brigette
              </h2>
              <div className="w-20 h-1 bg-accent rounded-full mb-6"></div>
            </div>

            <div className="space-y-4">
              <div className="bg-card p-6 rounded-lg shadow-soft border border-primary/10">
                <h3 className="font-semibold text-primary mb-2">Education & Experience</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• <strong>20 years</strong> licensed Marriage and Family Therapist</li>
                  <li>• <strong>BA Psychology</strong> – Smith College</li>
                  <li>• <strong>MA Counseling Psychology</strong> – Santa Clara University</li>
                </ul>
              </div>

              <div className="bg-card p-6 rounded-lg shadow-soft border border-primary/10">
                <h3 className="font-semibold text-primary mb-2">Specialized Training</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• <strong>Master Practitioner in ART</strong> (Accelerated Resolution Therapy)</li>
                  <li>• <strong>EMDR Trained</strong> (Eye Movement Desensitization and Reprocessing)</li>
                  <li>• <strong>Trauma-Informed Care</strong> specialist</li>
                </ul>
              </div>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed">
              I believe in providing trauma-informed, evidence-based therapy with a warm, 
              compassionate approach. Whether working with individuals, couples, or families, 
              I create a safe space for healing and growth through play-based and traditional 
              therapeutic methods.
            </p>

            <div className="flex flex-wrap gap-3">
              <span className="bg-primary-light text-primary px-4 py-2 rounded-full text-sm font-medium">
                Trauma Therapy
              </span>
              <span className="bg-primary-light text-primary px-4 py-2 rounded-full text-sm font-medium">
                Family Therapy
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