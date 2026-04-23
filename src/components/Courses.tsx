import { Cloud, Palette, Code2, Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const courses = [
  {
    icon: Cloud,
    title: "DevOps",
    description:
      "Learn CI/CD, cloud infrastructure, Docker, Kubernetes, and automation tools.",
    duration: "8 Weeks",
    level: "Intermediate",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description:
      "Master user research, wireframing, prototyping, and design systems.",
    duration: "6 Weeks",
    level: "Beginner",
  },
  {
    icon: Code2,
    title: "Full Stack Development",
    description:
      "Become a full stack developer using modern frontend and backend technologies.",
    duration: "10 Weeks",
    level: "All Levels",
  },
];

export const Courses = () => {
  return (
    <section id="courses" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16 animate-fade-in-up">
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">
            Our Courses
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mt-3 mb-4">
            Programs designed to <span className="text-gradient">level you up</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Choose a learning track and gain real-world skills with mentorship
            every step of the way.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, idx) => (
            <Card
              key={course.title}
              className="group p-8 bg-gradient-card border-border/60 shadow-soft hover:shadow-glow hover:-translate-y-2 transition-smooth animate-fade-in-up"
              style={{ animationDelay: `${idx * 120}ms` }}
            >
              <div className="grid place-items-center h-14 w-14 rounded-2xl bg-gradient-primary mb-6 group-hover:scale-110 transition-smooth">
                <course.icon className="h-7 w-7 text-primary-foreground" />
              </div>

              <h3 className="text-2xl font-bold mb-3">{course.title}</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {course.description}
              </p>

              <div className="flex items-center gap-4 mb-6 text-sm">
                <div className="flex items-center gap-1.5 text-muted-foreground">
                  <Clock className="h-4 w-4 text-primary" />
                  <span>{course.duration}</span>
                </div>
                <span className="px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-xs font-medium">
                  {course.level}
                </span>
              </div>

              <Button variant="hero" className="w-full group/btn">
                Enroll Now
                <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-smooth" />
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
