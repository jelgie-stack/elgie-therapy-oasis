import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";

const NoticeOfPrivacyPractices = () => {
  return (
    <>
      <SEOHead 
        title="Notice of Privacy Practices | Brigette Elgie, LMFT"
        description="Notice of Privacy Practices for Brigette Elgie, LMFT therapy services in Park City, UT."
        canonicalUrl="https://elgietherapy.com/notice-of-privacy-practices"
      />
      
      <div className="min-h-screen">
        <Navbar />
        
        <section className="py-20 bg-gradient-to-b from-background to-secondary/30">
          <div className="container mx-auto" style={{ paddingInline: 'clamp(16px, 4vw, 24px)' }}>
            <div className="max-w-4xl mx-auto">
              <h1 style={{ fontSize: 'clamp(28px, 6vw, 40px)' }} className="font-bold text-foreground mb-6 leading-tight">
                Notice of Privacy Practices
              </h1>
              <div className="w-20 h-1 bg-accent rounded-full mb-8"></div>
              
              <div className="prose prose-lg max-w-none">
                <p style={{ fontSize: 'clamp(16px, 3vw, 18px)' }} className="text-muted-foreground mb-6 leading-relaxed">
                  Notice of Privacy Practices content will be added here.
                </p>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default NoticeOfPrivacyPractices;