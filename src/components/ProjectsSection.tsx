const projects = [
  {
    title: "Campus Network Setup",
    category: "Networking",
    description: "Designed and configured a LAN for a campus computer lab with 30+ workstations, including VLAN segmentation and DHCP.",
    tech: ["Cisco", "TCP/IP", "VLAN"],
  },
  {
    title: "PC Repair Workshop",
    category: "Hardware",
    description: "Led a workshop on diagnosing and repairing common PC hardware issues — motherboard faults, PSU testing, and data recovery.",
    tech: ["Diagnostics", "Soldering", "Data Recovery"],
  },
  {
    title: "Student Portal Web App",
    category: "Programming",
    description: "Built a full-stack student portal for managing assignments, grades, and communication between students and lecturers.",
    tech: ["Python", "JavaScript", "SQL"],
  },
  {
    title: "Network Monitoring Tool",
    category: "Networking",
    description: "Developed a lightweight network monitoring script that tracks uptime, bandwidth usage, and sends alerts on anomalies.",
    tech: ["Python", "SNMP", "Automation"],
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-bold mb-2 text-center">
          <span className="font-mono text-primary text-sm block mb-2">&gt; projects_</span>
          Featured Work
        </h2>
        <div className="h-px bg-gradient-to-r from-transparent via-primary to-transparent my-6 max-w-md mx-auto" />

        <div className="grid md:grid-cols-2 gap-6 mt-12 max-w-5xl mx-auto">
          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-card border border-border rounded-lg overflow-hidden card-hover group"
            >
              <div className="p-6">
                <span className="font-mono text-xs text-accent uppercase tracking-wider">
                  {project.category}
                </span>
                <h3 className="text-xl font-semibold mt-2 mb-3 text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="font-mono text-xs bg-secondary text-secondary-foreground px-2 py-1 rounded"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
