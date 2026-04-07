import { Star } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const testimonials = [
  { name: "Thu Ha", role: "Homeowner", text: "My AC was fixed in under an hour! The technician was professional and the pricing was exactly as quoted. Highly recommend FixNow.", rating: 5 },
  { name: "Quang Minh", role: "Business Owner", text: "I use FixNow for all my office maintenance needs. The live tracking feature gives me peace of mind every time.", rating: 5 },
  { name: "Mai Anh", role: "Apartment Renter", text: "Finally a service I can trust! The verified technicians and transparent pricing make all the difference.", rating: 5 },
];

const TestimonialsSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="reviews" className="section-padding bg-card" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">What Our Users Say</h2>
          <p className="mt-3 text-muted-foreground">Join thousands of satisfied customers.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className={`p-6 rounded-2xl border border-border bg-background ${isVisible ? `fade-in-up stagger-${i + 1}` : "opacity-0"}`}
            >
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} size={16} className="text-accent fill-accent" />
                ))}
              </div>
              <p className="text-sm text-foreground mb-4 leading-relaxed">"{t.text}"</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-sm font-bold text-primary">
                  {t.name[0]}
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
