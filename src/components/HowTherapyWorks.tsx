import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Play } from "lucide-react";

const HowTherapyWorks = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <section className="py-20 bg-gradient-to-b from-background to-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            How Therapy Works
          </h2>
          <div className="w-20 h-1 bg-accent rounded-full mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Understanding the therapeutic process and what to expect during your journey.
          </p>
        </div>

        {/* 3-Step Process */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-lg">
                1
              </div>
              <h3 className="font-semibold text-foreground mb-2">Schedule Consult</h3>
              <p className="text-sm text-muted-foreground">Free 15-minute consultation to discuss your needs</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-lg">
                2
              </div>
              <h3 className="font-semibold text-foreground mb-2">First Session</h3>
              <p className="text-sm text-muted-foreground">Begin your therapeutic journey with personalized care</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-lg">
                3
              </div>
              <h3 className="font-semibold text-foreground mb-2">Start Feeling Better</h3>
              <p className="text-sm text-muted-foreground">Experience positive changes and growth</p>
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-card p-6 rounded-xl shadow-card border border-primary/10">
            <div 
              className="relative w-full max-h-[600px] bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg overflow-hidden cursor-pointer hover:shadow-floating transition-all duration-300 group"
              onClick={() => setIsVideoOpen(true)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  setIsVideoOpen(true);
                }
              }}
              aria-label="Play therapy introduction video"
            >
              {/* Responsive 16:9 container */}
              <div className="aspect-video flex items-center justify-center">
                {/* Video thumbnail background (placeholder) */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary-light/20 to-accent-light/20"></div>
                
                {/* Content overlay */}
                <div className="relative z-10 text-center">
                  {/* Play button */}
                  <div className="w-20 h-20 bg-primary/90 hover:bg-primary rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                    <Play 
                      size={32} 
                      className="text-primary-foreground ml-1"
                      fill="currentColor"
                    />
                  </div>
                  
                  {/* Title and description */}
                  <h3 className="text-2xl font-bold text-foreground mb-3">How Therapy Helps</h3>
                  <p className="text-muted-foreground text-lg max-w-md mx-auto">
                    Learn about the therapeutic process and what makes it effective
                  </p>
                </div>
              </div>
            </div>
            
            {/* Fallback text for accessibility */}
            <div className="sr-only">
              Video: Introduction to how therapy works and its benefits. 
              Click to play the video in a modal dialog.
            </div>
          </div>
        </div>

        <Dialog open={isVideoOpen} onOpenChange={setIsVideoOpen}>
          <DialogContent className="max-w-4xl w-full">
            <DialogHeader>
              <DialogTitle>How Therapy Works - Introduction Video</DialogTitle>
            </DialogHeader>
            <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
              <div className="text-center text-muted-foreground">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Play 
                    size={24} 
                    className="text-primary ml-0.5"
                    fill="currentColor"
                  />
                </div>
                <p className="text-lg font-medium">Video Coming Soon</p>
                <p className="text-sm">Placeholder for therapeutic process explanation video</p>
          </div>
        </div>

        {/* Primary CTA */}
        <div className="text-center mt-12">
          <Button 
            variant="cta" 
            size="lg"
            onClick={() => window.open("https://care.headway.co/providers/brigette-elgie?utm_source=site&utm_medium=process_cta&utm_campaign=142417", "_blank")}
            className="text-lg px-8 py-4 whitespace-nowrap"
          >
            Check Insurance & Book
          </Button>
        </div>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default HowTherapyWorks;