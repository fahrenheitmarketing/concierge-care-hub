import { Link } from "react-router-dom";
import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function MobileCTA() {
  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-md border-t border-border p-3 flex items-center gap-2">
      <a href="tel:3052393119" className="flex-shrink-0">
        <Button
          variant="outline"
          size="icon"
          className="rounded-full h-11 w-11"
        >
          <Phone className="w-4 h-4" />
        </Button>
      </a>
      <Link to="/contact" className="flex-1">
        <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground rounded-full h-11 font-medium">
          Schedule a Consultation
        </Button>
      </Link>
    </div>
  );
}