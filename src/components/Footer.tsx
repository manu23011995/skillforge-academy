import { GraduationCap, Twitter, Linkedin, Github, Instagram } from "lucide-react";

const linkGroups = [
  {
    title: "Company",
    links: [
      { label: "About", href: "#home" },
      { label: "Courses", href: "#courses" },
      { label: "Contact", href: "#contact" },
    ],
  },
  {
    title: "Programs",
    links: [
      { label: "DevOps", href: "#courses" },
      { label: "UI/UX Design", href: "#courses" },
      { label: "Full Stack", href: "#courses" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Blog", href: "#" },
      { label: "Help Center", href: "#" },
      { label: "Careers", href: "#" },
    ],
  },
];

const socials = [
  { Icon: Twitter, label: "Twitter" },
  { Icon: Linkedin, label: "LinkedIn" },
  { Icon: Github, label: "GitHub" },
  { Icon: Instagram, label: "Instagram" },
];

export const Footer = () => {
  return (
    <footer id="contact" className="bg-secondary/40 border-t border-border">
      <div className="container mx-auto py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          <div className="lg:col-span-2">
            <a href="#home" className="flex items-center gap-2 font-bold text-lg mb-4">
              <span className="grid place-items-center h-9 w-9 rounded-xl bg-gradient-primary shadow-soft">
                <GraduationCap className="h-5 w-5 text-primary-foreground" />
              </span>
              <span className="text-gradient">SkillForge</span>
              <span className="text-foreground">Academy</span>
            </a>
            <p className="text-muted-foreground max-w-sm mb-6">
              Empowering the next generation of tech professionals through
              expert-led, project-based learning.
            </p>
            <div className="flex gap-3">
              {socials.map(({ Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="grid place-items-center h-10 w-10 rounded-full bg-card border border-border text-muted-foreground hover:text-primary-foreground hover:bg-gradient-primary hover:border-transparent transition-smooth shadow-soft"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {linkGroups.map((group) => (
            <div key={group.title}>
              <h4 className="font-semibold mb-4">{group.title}</h4>
              <ul className="space-y-3">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-primary transition-smooth"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} SkillForge Academy. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-primary transition-smooth">Privacy</a>
            <a href="#" className="hover:text-primary transition-smooth">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
