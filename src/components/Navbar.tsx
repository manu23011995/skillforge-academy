import { useState } from "react";
import { Menu, X, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";

const links = [
  { label: "Courses", href: "#courses" },
  { label: "Features", href: "#features" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-lg bg-background/70 border-b border-border/50">
      <nav className="container mx-auto flex items-center justify-between py-4">
        <a href="#home" className="flex items-center gap-2 font-bold text-lg">
          <span className="grid place-items-center h-9 w-9 rounded-xl bg-gradient-primary shadow-soft">
            <GraduationCap className="h-5 w-5 text-primary-foreground" />
          </span>
          <span className="text-gradient">SkillForge</span>
          <span className="text-foreground">Academy</span>
        </a>

        <ul className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-smooth"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          <Button variant="hero" size="sm" asChild>
            <a href="#courses">Get Started</a>
          </Button>
        </div>

        <button
          className="md:hidden p-2"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden border-t border-border/50 bg-background/95 backdrop-blur-lg animate-fade-in">
          <ul className="container mx-auto py-4 flex flex-col gap-4">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block py-2 text-sm font-medium text-muted-foreground hover:text-primary transition-smooth"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              <Button variant="hero" className="w-full" asChild>
                <a href="#courses" onClick={() => setOpen(false)}>Get Started</a>
              </Button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};
