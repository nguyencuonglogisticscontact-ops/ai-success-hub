import { Star, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const technicians = [
  { name: "Minh Tran", specialty: "AC Repair", rating: 4.9, reviews: 127, distance: "0.5 km", price: "200,000đ", available: true },
  { name: "Hoa Nguyen", specialty: "Electrical", rating: 4.8, reviews: 89, distance: "1.2 km", price: "150,000đ", available: true },
  { name: "Duc Pham", specialty: "Motorbike", rating: 4.9, reviews: 203, distance: "0.8 km", price: "180,000đ", available: false },
  { name: "Lan Le", specialty: "Locksmith", rating: 4.7, reviews: 56, distance: "2.1 km", price: "120,000đ", available: true },
];

const TechniciansSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="section-padding" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">Top Technicians</h2>
          <p className="mt-3 text-muted-foreground">Browse verified professionals ready to help.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {technicians.map((t, i) => (
            <div
              key={t.name}
              className={`p-5 rounded-2xl border border-border bg-card hover:shadow-lg transition-all duration-300 ${isVisible ? `fade-in-up stagger-${i + 1}` : "opacity-0"}`}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-lg font-bold text-primary">
                  {t.name[0]}
                </div>
                <div>
                  <p className="font-semibold text-foreground text-sm">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.specialty}</p>
                </div>
              </div>
              <div className="space-y-2 mb-4">
                <div className="flex items-center justify-between text-sm">
                  <span className="flex items-center gap-1 text-muted-foreground">
                    <Star size={14} className="text-accent fill-accent" /> {t.rating} ({t.reviews})
                  </span>
                  <span className="flex items-center gap-1 text-muted-foreground">
                    <MapPin size={14} /> {t.distance}
                  </span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="font-semibold text-foreground">From {t.price}</span>
                  <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${t.available ? "bg-green-100 text-green-700" : "bg-muted text-muted-foreground"}`}>
                    {t.available ? "Available" : "Busy"}
                  </span>
                </div>
              </div>
              <Button size="sm" className="w-full" disabled={!t.available}>
                Book Now
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechniciansSection;
