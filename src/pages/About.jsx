import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, GraduationCap, Heart, Stethoscope } from "lucide-react";
import SectionHeading from "../components/SectionHeading";
import TrustBadges from "../components/TrustBadges";
import { motion } from "framer-motion";

const values = [
  {
    icon: Heart,
    title: "Relationships Over Transactions",
    description: "We limit our practice so we can truly know every child and family. Your pediatrician remembers your child's name, their fears, their favorite toy.",
  },
  {
    icon: Stethoscope,
    title: "Excellence Without Compromise",
    description: "Board-certified, continuously trained, and committed to evidence-based medicine. We hold ourselves to the highest clinical standards.",
  },
  {
    icon: GraduationCap,
    title: "Parents as Partners",
    description: "We believe informed parents raise healthier kids. Every visit includes thorough education so you always understand the 'why' behind our guidance.",
  },
];

export default function About() {
  return (
    <>
      <section className="pt-32 pb-20 lg:pt-40 lg:pb-28 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <span className="text-accent text-xs font-semibold uppercase tracking-[0.2em] mb-3 block">
                About Us
              </span>
              <h1 className="font-heading text-4xl sm:text-5xl text-foreground mb-6">
                Pediatric Care Built on Trust, Not Volume
              </h1>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                Concierge Pediatrics of Florida was founded on a simple belief:
                every child deserves a pediatrician who has time for them.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                In traditional practices, doctors see 25–30 patients a day.
                Visits last 10 minutes. Parents leave with unanswered questions.
                Kids become chart numbers. We knew there had to be a better way.
                So we built one.
              </p>
              <TrustBadges />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
            >
              <img
                src="https://media.base44.com/images/public/69d83c5355efc3ff23bd0660/8678719b7_generated_8ace77b2.png"
                alt="Dr. Saper - Board Certified Pediatrician"
                className="rounded-2xl shadow-xl w-full"
              />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Meet Your Pediatrician"
            title="Dr. Saper"
            description="Board-certified pediatrician with over 15 years of experience caring for children in South Florida."
          />

          <div className="bg-card rounded-2xl border border-border p-8 lg:p-12">
            <div className="prose prose-sm max-w-none text-muted-foreground leading-relaxed space-y-4">
              <p>
                Dr. Saper founded Concierge Pediatrics of Florida with a
                mission to restore the doctor-patient relationship that modern
                medicine has lost. After years in traditional practice, he saw
                firsthand how the system failed families — rushed appointments,
                overwhelmed staff, and children who deserved more.
              </p>
              <p>
                Today, Dr. Saper limits his practice to a small number of
                families, giving each one the time, attention, and access they
                deserve. He believes that when a pediatrician truly knows a
                child — their personality, their history, their family — the
                quality of care is transformed.
              </p>
              <p>
                Dr. Saper is board-certified by the American Board of
                Pediatrics and holds hospital privileges at leading Miami
                healthcare facilities. He is committed to evidence-based
                medicine, continuous education, and providing the kind of care
                he would want for his own family.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Our Philosophy"
            title="What We Stand For"
            description="Our values guide every interaction, every visit, and every decision we make."
          />

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, i) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-5">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="font-heading text-xl text-foreground mb-3">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://media.base44.com/images/public/69d83c5355efc3ff23bd0660/e70bf6621_generated_3cd41e75.png"
            alt="Modern pediatric office"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-foreground/75" />
        </div>
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-3xl sm:text-4xl text-background mb-6">
            Ready to Meet Your New Pediatrician?
          </h2>
          <p className="text-lg text-background/75 mb-10">
            Schedule a free consultation and discover what it's like to have a
            pediatrician who truly puts your family first.
          </p>
          <Link to="/contact">
            <Button
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground rounded-full px-8 h-14 text-base font-medium gap-2"
            >
              Schedule a Consultation
              <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </div>
      </section>
    </>
  );
}