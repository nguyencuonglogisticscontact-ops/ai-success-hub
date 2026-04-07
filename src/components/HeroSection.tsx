import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Clock, Star } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
      <div className="relative max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 fade-in-up">
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
              <Star size={14} className="fill-current" />
              Trusted by 10,000+ users
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-foreground">
              Find Trusted{" "}
              <span className="text-primary">Technicians</span> Near You in{" "}
              <span className="text-accent">Minutes</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-lg">
              Connect with verified professionals for AC repair, electrical work, 
              appliance fixes, and more. Fast, transparent, and reliable.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button size="lg" className="gap-2 text-base">
                Get Started <ArrowRight size={18} />
              </Button>
              <Button size="lg" variant="outline" className="text-base">
                Find a Technician
              </Button>
            </div>
            <div className="flex items-center gap-6 pt-2 text-sm text-muted-foreground">
              <span className="flex items-center gap-1.5"><Shield size={16} className="text-primary" /> Verified Pros</span>
              <span className="flex items-center gap-1.5"><Clock size={16} className="text-primary" /> Under 30 min</span>
              <span className="flex items-center gap-1.5"><Star size={16} className="text-accent" /> 4.9 Rating</span>
            </div>
          </div>

          <div className="fade-in-up stagger-2 flex justify-center">
            <div className="relative w-72 h-[500px] rounded-[2.5rem] bg-foreground/5 border-2 border-border p-3 shadow-lg">
              <div className="w-full h-full rounded-[2rem] bg-card overflow-hidden flex flex-col">
                <div className="bg-primary p-4 text-primary-foreground">
                  <p className="text-xs font-medium opacity-80">Good morning!</p>
                  <p className="text-lg font-bold">What do you need fixed?</p>
                </div>
                <div className="p-4 space-y-3 flex-1">
                  {["🔧 AC Repair", "🏍️ Motorbike", "⚡ Electrical", "🔑 Locksmith"].map((item) => (
                    <div key={item} className="flex items-center gap-3 p-3 rounded-xl bg-secondary hover:bg-secondary/80 transition-colors cursor-pointer">
                      <span className="text-lg">{item.split(" ")[0]}</span>
                      <span className="text-sm font-medium text-foreground">{item.split(" ").slice(1).join(" ")}</span>
                    </div>
                  ))}
                  <div className="mt-4 p-3 rounded-xl border border-primary/20 bg-primary/5">
                    <p className="text-xs text-muted-foreground">Nearest technician</p>
                    <div className="flex items-center justify-between mt-1">
                      <p className="text-sm font-semibold text-foreground">Minh T. - 0.5 km</p>
                      <span className="text-xs font-medium text-primary">⭐ 4.9</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
