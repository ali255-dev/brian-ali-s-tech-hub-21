import { Monitor, Wifi, Code, Wrench, Shield, Database } from "lucide-react";

const skills = [
  {
    icon: Wifi,
    title: "Networking",
    description: "LAN/WAN setup, router & switch configuration, TCP/IP, network troubleshooting, cabling & infrastructure.",
  },
  {
    icon: Monitor,
    title: "Computer Repair",
    description: "Hardware diagnostics, component replacement, system upgrades, data recovery & performance optimization.",
  },
  {
    icon: Code,
    title: "Programming",
    description: "Python, JavaScript, C++, web development, database management, and building automation scripts.",
  },
  {
    icon: Wrench,
    title: "Maintenance",
    description: "Preventive maintenance, OS installation, software updates, virus removal & system security hardening.",
  },
  {
    icon: Shield,
    title: "Cybersecurity",
    description: "Network security fundamentals, firewall configuration, vulnerability assessment & security best practices.",
  },
  {
    icon: Database,
    title: "IT Support",
    description: "Help desk support, user training, documentation, inventory management & technical consultation.",
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 bg-card/50">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-bold mb-2 text-center">
          <span className="font-mono text-primary text-sm block mb-2">&gt; skills_</span>
          What I Do
        </h2>
        <div className="h-px bg-gradient-to-r from-transparent via-primary to-transparent my-6 max-w-md mx-auto" />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {skills.map((skill) => (
            <div
              key={skill.title}
              className="bg-card border border-border rounded-lg p-6 card-hover group"
            >
              <skill.icon className="w-10 h-10 text-primary mb-4 group-hover:text-accent transition-colors" />
              <h3 className="text-lg font-semibold mb-2 text-foreground">{skill.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
