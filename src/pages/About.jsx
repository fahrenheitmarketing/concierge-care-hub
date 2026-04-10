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
                src="https://conciergepediatricsfl.com/wp-content/uploads/bb-plugin/cache/attachment-square-5a9ffb62bd005a7c6fb2504ceaf4620b-oshvpy8192kd.jpg"
                alt="Dr. Patricia Florentino Pedraza, MD FAAP"
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
            title="Dr. Patricia Florentino Pedraza, MD FAAP"
            description="Board-certified pediatrician dedicated to providing quality, relationship-based care to children and families in South Florida."
          />

          <div className="bg-card rounded-2xl border border-border p-8 lg:p-12">
            <div className="prose prose-sm max-w-none text-muted-foreground leading-relaxed space-y-4">
              <p>
                Dr. Patricia Florentino Pedraza is a South Florida native and a skilled board-certified pediatrician dedicated to providing quality pediatric care. She obtained her medical degree from the Universidad Iberoamericana (UNIBE) in Santo Domingo, Dominican Republic, and completed her pediatric residency at San Juan City Hospital in San Juan, Puerto Rico.
              </p>
              <p>
                She has been awarded the Certificate of Recognition for Excellence in Academic and Clinical Skills in the Neonatal Intensive Care Unit. Dr. Florentino Pedraza has been practicing pediatrics in South Florida since 2021.
              </p>
              <p>
                Dr. Florentino Pedraza is active in the community and has contributed her knowledge to local non-profit organizations in South Florida, spreading awareness in underserved communities about the importance of STEM education. She is passionate about patient education and driven by the bonds she builds with her patients in protecting their wellness over the course of their lives.
              </p>
              <p>
                Dr. Florentino Pedraza is married with three children. She enjoys spending time with family and friends, gardening, biking, and baking in her free time.
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