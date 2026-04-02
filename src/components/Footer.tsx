import { Github, Facebook, Linkedin } from "lucide-react";

const socials = [
  { icon: Github, label: "GitHub", href: "https://github.com/brianali" },
  { icon: Facebook, label: "Facebook", href: "https://facebook.com/brianali" },
  { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com/in/brianali" },
];

const Footer = () => (
  <footer className="py-12 border-t border-border">
    <div className="container text-center space-y-6">
      <h3 className="text-xl font-bold">
        <span className="font-mono text-primary text-sm block mb-1">&gt; connect_</span>
        Let's Connect
      </h3>
      <div className="flex items-center justify-center gap-6">
        {socials.map((s) => (
          <a
            key={s.label}
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
          >
            <s.icon className="w-5 h-5 group-hover:text-primary transition-colors" />
            <span className="font-mono text-sm hidden sm:inline">{s.label}</span>
          </a>
        ))}
      </div>
      <div className="h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent max-w-xs mx-auto" />
      <p className="font-mono text-xs text-muted-foreground">
        &copy; {new Date().getFullYear()} Brian Ali. Built with passion for technology.
      </p>
    </div>
  </footer>
);

export default Footer;
