const AboutSection = () => {
  return (
    <section id="about" className="py-24">
      <div className="container max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-2">
          <span className="font-mono text-primary text-sm block mb-2">&gt; about_me</span>
          Who I Am
        </h2>
        <div className="h-px bg-gradient-to-r from-primary via-accent to-transparent my-6" />
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              I'm Brian Ali, a passionate IT student with hands-on experience in computer networking, 
              hardware repair &amp; maintenance, and software programming. I thrive on solving technical 
              challenges and building solutions that make a difference.
            </p>
            <p>
              My journey in technology started with dismantling and reassembling computers, which 
              evolved into a deep understanding of both hardware and software systems. Today, I combine 
              these skills to deliver comprehensive IT solutions.
            </p>
          </div>
          <div className="space-y-4">
            {[
              { label: "Networking", value: 90 },
              { label: "Computer Repair", value: 85 },
              { label: "Programming", value: 80 },
              { label: "Troubleshooting", value: 92 },
            ].map((skill) => (
              <div key={skill.label}>
                <div className="flex justify-between mb-1 text-sm">
                  <span className="font-mono text-foreground">{skill.label}</span>
                  <span className="text-primary">{skill.value}%</span>
                </div>
                <div className="h-2 bg-secondary rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-primary to-accent rounded-full transition-all duration-1000"
                    style={{ width: `${skill.value}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
