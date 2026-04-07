import { Zap, DollarSign, ShieldCheck, MapPin, MessageSquare, Star } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const features = [
  { icon: Zap, title: "Real-time Matching", desc: "Get matched with the nearest available technician in seconds." },
  { icon: DollarSign, title: "Transparent Pricing", desc: "See estimated costs upfront. No hidden fees, ever." },
  { icon: ShieldCheck, title: "Verified Technicians", desc: "All pros are background-checked and certified." },
  { icon: MapPin, title: "Live Tracking", desc: "Track your technician's location in real time." },
  { icon: MessageSquare, title: "In-app Chat", desc: "Communicate directly with your technician." },
  { icon: Star, title: "Ratings & Reviews", desc: "Choose the best-rated professionals near you." },
];

const FeaturesSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="features" className="section-padding bg-card" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">Why Choose FixNow?</h2>
          <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">
            Everything you need for a seamless repair experience, right at your fingertips.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <div
              key={f.title}
              className={`group p-6 rounded-2xl border border-border bg-background hover:shadow-lg transition-all duration-300 ${isVisible ? `fade-in-up stagger-${(i % 4) + 1}` : "opacity-0"}`}
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <f.icon size={24} className="text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{f.title}</h3>
              <p className="text-sm text-muted-foreground">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
