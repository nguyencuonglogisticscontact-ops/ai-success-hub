import { Search, FileText, UserCheck, CheckCircle } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const steps = [
  { icon: Search, num: "01", title: "Select a Service", desc: "Choose from our wide range of repair categories." },
  { icon: FileText, num: "02", title: "Describe the Issue", desc: "Tell us what's wrong so we can find the right expert." },
  { icon: UserCheck, num: "03", title: "Choose a Technician", desc: "Pick from verified pros based on ratings and distance." },
  { icon: CheckCircle, num: "04", title: "Track & Complete", desc: "Follow progress in real-time and pay securely." },
];

const HowItWorksSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="how-it-works" className="section-padding" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">How It Works</h2>
          <p className="mt-3 text-muted-foreground">Get your problem fixed in 4 simple steps.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((s, i) => (
            <div key={s.num} className={`text-center space-y-4 ${isVisible ? `fade-in-up stagger-${i + 1}` : "opacity-0"}`}>
              <div className="mx-auto w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center">
                <s.icon size={28} className="text-primary" />
              </div>
              <span className="text-xs font-bold text-accent uppercase tracking-wider">Step {s.num}</span>
              <h3 className="text-lg font-semibold text-foreground">{s.title}</h3>
              <p className="text-sm text-muted-foreground">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
