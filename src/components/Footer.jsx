import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-foreground text-background/80 relative overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `url('https://media.base44.com/images/public/69d83c5355efc3ff23bd0660/17e869947_patterns.png')`,
          backgroundSize: '400px',
          backgroundRepeat: 'repeat',
          filter: 'invert(1)',
          opacity: 0.04,
        }}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <h3 className="font-heading text-xl text-background mb-4">
              Concierge Pediatrics
            </h3>
            <p className="text-sm leading-relaxed text-background/60 mb-6">
              Personalized, relationship-based pediatric care for Miami Beach
              families. Your child's health, on your terms.
            </p>
            <div className="space-y-3">
              <a
                href="tel:3052393119"
                className="flex items-center gap-2 text-sm hover:text-background transition-colors"
              >
                <Phone className="w-4 h-4 text-accent" />
                (305) 239-3119
              </a>
              <a
                href="mailto:info@conciergepediatricsfl.com"
                className="flex items-center gap-2 text-sm hover:text-background transition-colors"
              >
                <Mail className="w-4 h-4 text-accent" />
                info@conciergepediatricsfl.com
              </a>
              <div className="flex items-start gap-2 text-sm">
                <MapPin className="w-4 h-4 text-accent mt-0.5" />
                <span>Miami Beach, Florida</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-medium text-background mb-4 text-sm uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {[
                { label: "How It Works", to: "/how-it-works" },
                { label: "Membership & Pricing", to: "/membership" },
                { label: "Our Services", to: "/services" },
                { label: "About Us", to: "/about" },
                { label: "FAQs", to: "/faqs" },
              ].map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-sm hover:text-background transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-medium text-background mb-4 text-sm uppercase tracking-wider">
              For Parents
            </h4>
            <ul className="space-y-2.5">
              {[
                { label: "Schedule a Consultation", to: "/contact" },
                { label: "Become a Member", to: "/membership" },
                { label: "Resources & Blog", to: "/resources" },
                { label: "Patient Portal", to: "#" },
              ].map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.to}
                    className="text-sm hover:text-background transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-medium text-background mb-4 text-sm uppercase tracking-wider">
              Office Hours
            </h4>
            <ul className="space-y-2 text-sm">
              <li className="flex justify-between">
                <span>Monday – Friday</span>
                <span className="text-background">9 AM – 5 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Saturday</span>
                <span className="text-background">By Appointment</span>
              </li>
              <li className="flex justify-between">
                <span>After Hours</span>
                <span className="text-accent">Always Available</span>
              </li>
            </ul>
            <div className="mt-6 p-4 rounded-xl bg-background/5 border border-background/10">
              <p className="text-xs text-background/60">
                Members have 24/7 access to their pediatrician via our secure
                messaging platform.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-background/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-background/40">
            © {new Date().getFullYear()} Concierge Pediatrics of Florida. All
            rights reserved.
          </p>
          <div className="flex items-center gap-6 text-xs text-background/40">
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
            <span>HIPAA Notice</span>
          </div>
        </div>
      </div>
    </footer>
  );
}