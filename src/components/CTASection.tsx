import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CTASection = () => {
  return (
    <section className="section-padding">
      <div className="max-w-4xl mx-auto text-center">
        <div className="rounded-3xl bg-primary p-10 md:p-16 space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground">
            Start Using FixNow Today
          </h2>
          <p className="text-primary-foreground/80 max-w-lg mx-auto">
            Join thousands of happy users. Get your first repair booked in minutes — fast, affordable, and trusted.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button size="lg" variant="secondary" className="gap-2 text-base font-semibold">
              Sign Up Free <ArrowRight size={18} />
            </Button>
            <Button size="lg" variant="outline" className="text-base border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
              Download App
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
