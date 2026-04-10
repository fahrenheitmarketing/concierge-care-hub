import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function CTASection() {
  return (
    <section className="py-20 lg:py-28 relative overflow-hidden" style={{ backgroundColor: '#6b8e23' }}>
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url('https://media.base44.com/images/public/69d83c5355efc3ff23bd0660/494cf7f3c_generated_image.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center right',
        }}
      />
      <div className="absolute inset-0" style={{ backgroundColor: '#6b8e23', opacity: 0.55 }} />


      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl text-primary-foreground mb-6" style={{ textShadow: '0 2px 10px rgba(0,0,0,0.5)' }}>
          Your Child Deserves More Than Average Care
        </h2>
        <p className="text-lg text-primary-foreground/75 leading-relaxed mb-10 max-w-2xl mx-auto" style={{ textShadow: '0 1px 6px rgba(0,0,0,0.4)' }}>
          Membership spots are limited to ensure every family gets the attention
          they deserve. Schedule a free consultation to learn how concierge
          pediatrics can work for your family.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/contact">
            <Button
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground rounded-full px-8 h-14 text-base font-medium gap-2"
            >
              Schedule a Free Consultation
              <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
          <Link to="/membership">
            <Button
              size="lg"
              variant="outline"
              className="rounded-full px-8 h-14 text-base font-medium border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
            >
              View Membership Options
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}