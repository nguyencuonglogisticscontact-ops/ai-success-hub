import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const services = [
  { emoji: "❄️", name: "Air Conditioning", desc: "Installation, repair & maintenance" },
  { emoji: "🏍️", name: "Motorbike Repair", desc: "Engine, brakes, tires & more" },
  { emoji: "⚡", name: "Electrical", desc: "Wiring, outlets, switches & panels" },
  { emoji: "🏠", name: "Home Appliances", desc: "Washing machines, fridges & more" },
  { emoji: "🔑", name: "Locksmith", desc: "Lock changes, key cutting & security" },
  { emoji: "🔧", name: "Plumbing", desc: "Pipes, faucets & water heaters" },
];

const ServicesSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="services" className="section-padding bg-card" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">Our Services</h2>
          <p className="mt-3 text-muted-foreground">Professional help for every need around your home.</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {services.map((s, i) => (
            <div
              key={s.name}
              className={`group p-6 rounded-2xl border border-border bg-background text-center hover:shadow-lg hover:border-primary/30 transition-all duration-300 cursor-pointer ${isVisible ? `fade-in-up stagger-${(i % 4) + 1}` : "opacity-0"}`}
            >
              <span className="text-4xl block mb-3">{s.emoji}</span>
              <h3 className="font-semibold text-foreground mb-1">{s.name}</h3>
              <p className="text-xs text-muted-foreground">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
