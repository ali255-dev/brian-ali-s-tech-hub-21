import { Mail, Phone, MapPin } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 bg-card/50">
      <div className="container max-w-2xl text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-2">
          <span className="font-mono text-primary text-sm block mb-2">&gt; contact_</span>
          Let's Connect
        </h2>
        <div className="h-px bg-gradient-to-r from-transparent via-primary to-transparent my-6 max-w-md mx-auto" />
        <p className="text-muted-foreground mb-10">
          Interested in working together or have a question? Reach out and let's talk tech.
        </p>

        <div className="grid sm:grid-cols-3 gap-6">
          {[
            { icon: Mail, label: "Email", value: "brian.ali@email.com" },
            { icon: Phone, label: "Phone", value: "+254 700 000 000" },
            { icon: MapPin, label: "Location", value: "Nairobi, Kenya" },
          ].map((item) => (
            <div key={item.label} className="bg-card border border-border rounded-lg p-6 card-hover">
              <item.icon className="w-8 h-8 text-primary mx-auto mb-3" />
              <p className="font-mono text-xs text-muted-foreground mb-1">{item.label}</p>
              <p className="text-sm text-foreground font-medium">{item.value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
