import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export const CallToAction = () => {
  return (
    <section className="py-20 md:py-28">
      <div className="container mx-auto">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-cta p-10 md:p-16 text-center shadow-glow animate-fade-in-up">
          <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
          <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-white/10 blur-3xl" />

          <div className="relative max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold text-primary-foreground mb-4">
              Start Your Learning Journey Today
            </h2>
            <p className="text-lg text-primary-foreground/90 mb-8">
              Join thousands of learners building real skills and real careers
              with SkillForge Academy.
            </p>
            <Button variant="secondary" size="lg" className="font-semibold" asChild>
              <a href="#courses">
                Get Started <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
