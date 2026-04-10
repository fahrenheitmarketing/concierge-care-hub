import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import TrustBadges from "../TrustBadges";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://media.base44.com/images/public/69d83c5355efc3ff23bd0660/7e7563c91_generated_bc4cda69.png"
          alt="Pediatrician caring for a child in a warm, modern office"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 via-foreground/60 to-foreground/20" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 lg:py-40">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <span className="inline-block text-accent text-sm font-semibold uppercase tracking-[0.2em] mb-6">
            Concierge Pediatrics · Miami Beach
          </span>

          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl text-background leading-tight mb-6">
            Never Feel Alone Managing Your Child's Health Again
          </h1>

          <p className="text-lg sm:text-xl text-background/75 leading-relaxed mb-10 max-w-xl">
            Direct access to your pediatrician. Same-day visits. After-hours
            support. Care that fits your life — not the other way around.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Link to="/contact">
              <Button
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground rounded-full px-8 h-14 text-base font-medium gap-2 w-full sm:w-auto"
              >
                Schedule a Consultation
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
            <Link to="/how-it-works">
              <Button
                size="lg"
                variant="outline"
                className="rounded-full px-8 h-14 text-base font-medium border-background/30 text-background hover:bg-background/10 gap-2 w-full sm:w-auto"
              >
                <Play className="w-4 h-4" />
                See How It Works
              </Button>
            </Link>
          </div>

          <TrustBadges variant="light" />
        </motion.div>
      </div>
    </section>
  );
}