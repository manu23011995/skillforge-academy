import { Quote } from "lucide-react";
import { Card } from "@/components/ui/card";

const testimonials = [
  {
    name: "Aarav Mehta",
    role: "DevOps Engineer @ Cloudly",
    initials: "AM",
    quote:
      "The DevOps track was hands-on from day one. I landed a role within weeks of completing the program — the mentor support made all the difference.",
  },
  {
    name: "Sofia Rodriguez",
    role: "Product Designer @ Lumen",
    initials: "SR",
    quote:
      "SkillForge's UI/UX course helped me transition from marketing into design. The portfolio I built got me three offers in a single month.",
  },
  {
    name: "Jamal Carter",
    role: "Full Stack Developer @ Nexa",
    initials: "JC",
    quote:
      "Every project felt like real work. By the end, I had shipped four full applications and felt completely ready for production.",
  },
];

export const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16 animate-fade-in-up">
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mt-3 mb-4">
            Loved by <span className="text-gradient">learners worldwide</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <Card
              key={t.name}
              className="p-8 bg-gradient-card border-border/60 shadow-soft hover:shadow-card transition-smooth animate-fade-in-up relative"
              style={{ animationDelay: `${idx * 120}ms` }}
            >
              <Quote className="absolute top-6 right-6 h-8 w-8 text-primary/20" />
              <p className="text-foreground/90 leading-relaxed mb-6">
                "{t.quote}"
              </p>
              <div className="flex items-center gap-3">
                <div className="grid place-items-center h-12 w-12 rounded-full bg-gradient-primary text-primary-foreground font-semibold">
                  {t.initials}
                </div>
                <div>
                  <div className="font-semibold">{t.name}</div>
                  <div className="text-sm text-muted-foreground">{t.role}</div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
