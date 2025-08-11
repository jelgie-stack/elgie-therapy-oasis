import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const SupervisionCard = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-primary/5 to-accent/5">
      <div className="container mx-auto px-4">
        <Card className="max-w-4xl mx-auto shadow-card hover:shadow-floating transition-all duration-300">
          <CardContent className="p-8 md:p-12">
            <div className="text-center">
              <div className="text-4xl mb-4">🌱</div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Grow into the <span className="text-primary">Therapist</span> You're Meant to Be
              </h2>
              <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
                Expert clinical supervision for associate therapists specializing in child, teen & trauma therapy. 
                EMDR and ART training available.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <div className="bg-green-600 rounded-lg px-4 py-2">
                  <span className="text-black font-medium">⏳ 2 spots open for Fall 2025</span>
                </div>
                
                <Button 
                  variant="cta" 
                  size="lg"
                  onClick={() => window.location.href = '/supervision-consulting'}
                  className="group"
                >
                  Learn More 
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default SupervisionCard;