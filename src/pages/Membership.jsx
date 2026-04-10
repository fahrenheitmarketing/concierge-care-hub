import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Check, ArrowRight, Sparkles } from "lucide-react";
import SectionHeading from "../components/SectionHeading";
import { motion } from "framer-motion";

const included = [
  "Unlimited office visits",
  "Same-day and next-day appointments",
  "Extended, unhurried visits (up to 60 min)",
  "Direct access to your pediatrician 24/7",
  "HIPAA-compliant secure messaging",
  "Two house calls per family per month",
  "Newborn house calls (up to 2 months)",
  "In-house labs (Strep, Flu, COVID, Urinalysis)",
  "In-house pharmacy",
  "Telemedicine visits",
  "Prenatal consultations",
  "Complimentary valet parking",
  "Priority specialist referrals",
  "Healthcare forms completed promptly",
];

const objections = [
  {
    question: "Is this worth the cost?",
    answer: "Consider what you save: fewer ER trips ($500–$2,000 each), zero wait times, and a doctor who answers at 11 PM. Most families say membership pays for itself within months — and the peace of mind is priceless.",
  },
  {
    question: "Do I still need insurance?",
    answer: "Yes, we recommend it. Insurance covers hospital stays, specialist visits, and prescriptions. Our membership replaces your need for a traditional pediatrician — and gives you far more than any insurance-based practice ever could.",
  },
  {
    question: "Is this my child's primary pediatrician?",
    answer: "Yes! We serve as your child's primary care pediatrician. We handle everything from well-child checkups and vaccinations to sick visits and developmental guidance. The only difference? We actually have time for your family.",
  },
  {
    question: "What if my child needs a specialist?",
    answer: "We coordinate referrals to top pediatric specialists and stay involved throughout the process. You'll never feel lost navigating the system alone.",
  },
];

export default function Membership() {
  return (
    <>
      <section className="pt-32 pb-20 lg:pt-40 lg:pb-28 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Membership"
            title="Exceptional Care, Simple Membership"
            description="One membership. Everything included. No surprise bills. No copays. Just personalized pediatric care when you need it."
          />

          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6 lg:gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-card rounded-2xl border border-border p-8 lg:p-10"
            >
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent mb-2 block">
                Single Child
              </span>
              <div className="flex items-baseline gap-2 mb-1">
                <span className="font-heading text-5xl text-foreground">$416</span>
                <span className="text-muted-foreground">/month</span>
              </div>
              <p className="text-sm text-muted-foreground mb-8">
                $5,000 per year · billed annually
              </p>
              <Link to="/contact">
                <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground rounded-full h-12 font-medium gap-2">
                  Schedule a Consultation
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-card rounded-2xl border-2 border-accent p-8 lg:p-10 relative"
            >
              <div className="absolute -top-3 right-6 bg-accent text-accent-foreground text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1">
                <Sparkles className="w-3 h-3" />
                Most Popular
              </div>
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent mb-2 block">
                Multiple Children
              </span>
              <div className="flex items-baseline gap-2 mb-1">
                <span className="font-heading text-5xl text-foreground">$500</span>
                <span className="text-muted-foreground">/month</span>
              </div>
              <p className="text-sm text-muted-foreground mb-8">
                $6,000 per year · all children included
              </p>
              <Link to="/contact">
                <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground rounded-full h-12 font-medium gap-2">
                  Become a Member
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-secondary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Everything Included"
            title="What Your Membership Covers"
            description="No hidden fees. No copays. No surprises. Here's everything you get."
          />

          <div className="grid sm:grid-cols-2 gap-4">
            {included.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04 }}
                className="flex items-start gap-3 bg-card rounded-xl p-4 border border-border"
              >
                <div className="flex-shrink-0 w-5 h-5 rounded-full bg-primary/15 flex items-center justify-center mt-0.5">
                  <Check className="w-3 h-3 text-primary" />
                </div>
                <span className="text-sm text-foreground">{item}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-background">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Common Questions"
            title="Thinking It Over? We Understand."
            description="Here are the questions we hear most from families considering membership."
          />

          <div className="space-y-8">
            {objections.map((obj, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
              >
                <h3 className="font-heading text-xl text-foreground mb-2">
                  {obj.question}
                </h3>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  {obj.answer}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 relative overflow-hidden" style={{ backgroundColor: 'hsl(79 58% 35%)' }}>
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url('https://media.base44.com/images/public/69d83c5355efc3ff23bd0660/ccf107776_generated_image.png')`,
            backgroundSize: 'cover',
            backgroundPosition: '80% 20%',
          }}
        />
        <div className="absolute inset-0" style={{ backgroundColor: 'hsl(79 58% 35%)', opacity: 0.55 }} />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-lg">
            <h2 className="font-heading text-3xl sm:text-4xl text-primary-foreground mb-6" style={{ textShadow: '0 2px 10px rgba(0,0,0,0.5)' }}>
              Spots Are Limited by Design
            </h2>
            <p className="text-lg text-primary-foreground/75 mb-10" style={{ textShadow: '0 1px 6px rgba(0,0,0,0.4)' }}>
              We intentionally limit our families so every child gets the
              attention they deserve. Don't wait until spots fill up.
            </p>
            <Link to="/contact">
              <Button
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground rounded-full px-8 h-14 text-base font-medium gap-2"
              >
                Schedule Your Free Consultation
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}