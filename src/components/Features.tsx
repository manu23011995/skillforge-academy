import { BookOpen, Wrench, Users, Briefcase } from "lucide-react";
import { Card } from "@/components/ui/card";

const features = [
  {
    icon: BookOpen,
    title: "Industry-relevant curriculum",
    description:
      "Curated by experts and updated regularly to match real industry needs.",
  },
  {
    icon: Wrench,
    title: "Hands-on projects",
    description:
      "Build a portfolio with real-world projects you can showcase to employers.",
  },
  {
    icon: Users,
    title: "Mentor support",
    description:
      "1:1 guidance from senior engineers and designers throughout your journey.",
  },
  {
    icon: Briefcase,
    title: "Career guidance",
    description:
      "Resume reviews, interview prep, and job placement support included.",
  },
];

export const Features = () => {
  return (
    <section id="features" className="py-20 md:py-28 bg-gradient-hero relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] bg-primary/10 blur-3xl rounded-full" />

      <div className="container mx-auto relative">
        <div className="text-center max-w-2xl mx-auto mb-16 animate-fade-in-up">
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">
            Why Choose Us
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mt-3 mb-4">
            Everything you need to <span className="text-gradient">succeed</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, idx) => (
            <Card
              key={feature.title}
              className="p-6 bg-card/80 backdrop-blur border-border/50 shadow-soft hover:shadow-card hover:-translate-y-1 transition-smooth animate-fade-in-up"
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              <div className="grid place-items-center h-12 w-12 rounded-xl bg-gradient-primary mb-4">
                <feature.icon className="h-6 w-6 text-primary-foreground" />
              </div>
              <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
