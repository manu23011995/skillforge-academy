import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-illustration.png";

export const Hero = () => {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-gradient-hero pt-32 pb-20 md:pt-40 md:pb-28"
    >
      {/* Decorative blobs */}
      <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-primary/20 blur-3xl" />
      <div className="absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-accent/20 blur-3xl" />

      <div className="container mx-auto relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-card border border-border shadow-soft mb-6">
              <Sparkles className="h-4 w-4 text-primary" />
              <span className="text-xs font-medium text-foreground">
                New cohorts opening this month
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
              Build Your <span className="text-gradient">Future</span> in Tech
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-xl mb-8">
              Master in-demand skills with expert-led courses designed to launch
              and accelerate your tech career.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg" asChild>
                <a href="#courses">
                  Explore Courses <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="#features">Why SkillForge?</a>
              </Button>
            </div>

            <div className="mt-12 flex items-center gap-8">
              <div>
                <div className="text-2xl md:text-3xl font-bold text-gradient">
                  10k+
                </div>
                <div className="text-sm text-muted-foreground">Students</div>
              </div>
              <div className="h-10 w-px bg-border" />
              <div>
                <div className="text-2xl md:text-3xl font-bold text-gradient">
                  95%
                </div>
                <div className="text-sm text-muted-foreground">Job placement</div>
              </div>
              <div className="h-10 w-px bg-border" />
              <div>
                <div className="text-2xl md:text-3xl font-bold text-gradient">
                  4.9★
                </div>
                <div className="text-sm text-muted-foreground">Rating</div>
              </div>
            </div>
          </div>

          <div className="relative animate-fade-in">
            <div className="absolute inset-0 bg-gradient-primary opacity-20 blur-3xl rounded-full" />
            <img
              src={heroImage}
              alt="Tech learning illustration with floating code blocks and devices"
              width={1024}
              height={1024}
              className="relative w-full h-auto animate-float"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
