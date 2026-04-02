import heroBg from "@/assets/hero-bg.jpg";
import brianPortrait from "@/assets/brian-portrait.jpeg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="w-full h-full object-cover opacity-30" width={1920} height={1080} />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
      </div>

      <div className="container relative z-10 flex flex-col lg:flex-row items-center gap-12 py-20">
        {/* Text */}
        <div className="flex-1 space-y-6">
        
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
            <span className="text-foreground">Brian</span>{" "}
            <span className="text-primary text-glow">Ali</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-xl">
            IT Student &amp; Tech Enthusiast specializing in{" "}
            <span className="text-accent">Networking</span>,{" "}
            <span className="text-primary">Computer Repair</span> &amp;{" "}
            <span className="text-accent">Programming</span>.
          </p>
          <div className="flex gap-4 pt-4">
            <a href="#contact" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-md font-semibold hover:opacity-90 transition-opacity">
              Get in Touch
            </a>
            <a href="#projects" className="inline-flex items-center gap-2 border border-primary text-primary px-6 py-3 rounded-md font-semibold hover:bg-primary/10 transition-colors">
              View Work
            </a>
            <a href="/resume-brian-ali.pdf" download className="inline-flex items-center gap-2 border border-accent text-accent px-6 py-3 rounded-md font-semibold hover:bg-accent/10 transition-colors">
              📄 Download CV
            </a>
          </div>
        </div>

        {/* Portrait */}
        <div className="relative">
          <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-2 border-primary border-glow">
            <img src={brianPortrait} alt="Brian Ali" className="w-full h-full object-cover" width={512} height={512} />
          </div>
          <div className="absolute -bottom-2 -right-2 bg-card border border-border rounded-md px-3 py-1 font-mono text-xs text-primary">
            status: available
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
