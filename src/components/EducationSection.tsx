import { GraduationCap } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const education = [
  {
    title: "Diploma in Computer Science",
    description: "Comprehensive study of networking, programming, and computer systems with hands-on lab experience.",
    school: "TAITA TAVETA NATIONAL POLYTECHNIC",
    status: "completed" as const,
  },
  {
    title: "Cisco Certified Network Associate (CCNA)",
    description: "Industry-standard certification covering routing, switching, and network security fundamentals.",
    school: "Cisco Networking Academy",
    status: "ongoing" as const,
  },
  
];

const EducationSection = () => (
  <section id="education" className="py-20 bg-card/30">
    <div className="container max-w-5xl">
      <p className="font-mono text-primary text-sm mb-2 text-glow">education_</p>
      <h2 className="text-3xl md:text-4xl font-bold mb-2 font-display">My Learning Path</h2>
      <div className="h-1 w-20 bg-gradient-to-r from-primary to-transparent rounded mb-12" />

      <div className="space-y-6">
        {education.map((edu, i) => (
          <div
            key={i}
            className="relative border border-border rounded-lg p-6 bg-background/60 backdrop-blur-sm hover:border-primary/50 transition-colors group"
          >
            <div className="flex items-start justify-between gap-4 flex-wrap">
              <div className="flex items-start gap-4">
                <div className="mt-1 p-2 rounded-md bg-primary/10 text-primary shrink-0">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-foreground group-hover:text-primary transition-colors">
                    {edu.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mt-1">{edu.description}</p>
                  <p className="text-xs font-mono text-primary/70 mt-2">{edu.school}</p>
                </div>
              </div>
              <Badge
                variant={edu.status === "ongoing" ? "default" : "secondary"}
                className={
                  edu.status === "ongoing"
                    ? "bg-primary/20 text-primary border-primary/30 shrink-0"
                    : "bg-muted text-muted-foreground border-border shrink-0"
                }
              >
                {edu.status === "ongoing" ? "🟢 Ongoing" : "Completed"}
              </Badge>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default EducationSection;
