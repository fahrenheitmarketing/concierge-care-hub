import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Baby,
  Stethoscope,
  Home,
  Video,
  FlaskConical,
  Brain,
  Syringe,
  CalendarCheck,
} from "lucide-react";
import SectionHeading from "../components/SectionHeading";
import { motion } from "framer-motion";

const services = [
  {
    icon: Stethoscope,
    title: "Well-Child Checkups",
    outcome: "Stay ahead of every milestone",
    description: "Comprehensive developmental assessments, growth tracking, and anticipatory guidance — all at a pace that lets us truly understand your child.",
  },
  {
    icon: CalendarCheck,
    title: "Same-Day Sick Visits",
    outcome: "Answers when you need them",
    description: "Your child is sick. You shouldn't have to wait. We guarantee same-day or next-day appointments so you can get peace of mind fast.",
  },
  {
    icon: Home,
    title: "House Calls",
    outcome: "Care comes to you",
    description: "For newborns, sick kids, or when leaving home isn't ideal — your doctor comes to your door. No waiting rooms, no exposure to germs.",
  },
  {
    icon: Video,
    title: "Telemedicine",
    outcome: "Expert care from anywhere",
    description: "Whether you're traveling or just need a quick consult, connect with your pediatrician via secure video — from anywhere in the world.",
  },
  {
    icon: Baby,
    title: "Newborn & Prenatal Care",
    outcome: "Support from the very start",
    description: "Meet your pediatrician before your baby arrives. We offer prenatal consultations and in-home newborn visits for the first weeks of life.",
  },
  {
    icon: Syringe,
    title: "Vaccinations",
    outcome: "Protection on your schedule",
    description: "We follow AAP guidelines and work with your family to create a vaccination schedule that fits your child's needs and your comfort level.",
  },
  {
    icon: FlaskConical,
    title: "In-House Labs",
    outcome: "Results in minutes, not days",
    description: "Rapid Strep, Flu, COVID, Urinalysis, and more — tested right in our office. No outside lab visits. No waiting days for results.",
  },
  {
    icon: Brain,
    title: "Developmental Guidance",
    outcome: "Clarity at every stage",
    description: "From speech and motor milestones to behavioral concerns, we provide in-depth evaluations and connect you with specialists when needed.",
  },
];

export default function Services() {
  return (
    <>
      <section className="pt-32 pb-20 lg:pt-40 lg:pb-28 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Our Services"
            title="Everything Your Child Needs. Nothing They Don't."
            description="We focus on outcomes, not checkboxes. Every service is designed to give your family better health, more confidence, and complete peace of mind."
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, i) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06 }}
                  className="bg-card rounded-2xl p-6 border border-border hover:shadow-lg transition-shadow group"
                >
                  <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/15 group-hover:scale-150 transition-all duration-200">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-heading text-lg text-foreground mb-1">
                    {service.title}
                  </h3>
                  <p className="text-accent text-xs font-semibold mb-3">
                    {service.outcome}
                  </p>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {service.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-accent text-xs font-semibold uppercase tracking-[0.2em] mb-3 block">
                After-Hours Access
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl text-foreground mb-6">
                Your Pediatrician Is Always a Message Away
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Kids don't get sick on a schedule. That's why our members have
                direct, 24/7 access to their pediatrician through our
                HIPAA-compliant messaging platform. Text a photo of a rash.
                Describe symptoms. Get real guidance from someone who knows your
                child — not a random on-call nurse.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                This alone has helped our families avoid countless unnecessary
                ER visits, saving them time, money, and stress.
              </p>
              <Link to="/contact">
                <Button className="bg-accent hover:bg-accent/90 text-accent-foreground rounded-full px-6 gap-2">
                  Learn How It Works
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </div>
            <div>
              <img
                src="https://media.base44.com/images/public/69d83c5355efc3ff23bd0660/646136eb6_generated_f1d8e74e.png"
                alt="Parent texting their pediatrician at night"
                className="rounded-2xl shadow-xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 relative overflow-hidden text-center" style={{ backgroundColor: 'hsl(79 58% 35%)' }}>
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url('https://media.base44.com/images/public/69d83c5355efc3ff23bd0660/3b4d46ad9_generated_image.png')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center 30%',
          }}
        />
        <div className="absolute inset-0" style={{ backgroundColor: 'hsl(79 58% 35%)', opacity: 0.55 }} />
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl sm:text-4xl text-primary-foreground mb-6" style={{ textShadow: '0 2px 10px rgba(0,0,0,0.5)' }}>
            The Care Your Child Deserves Is One Call Away
          </h2>
          <p className="text-lg text-primary-foreground/75 mb-10" style={{ textShadow: '0 1px 6px rgba(0,0,0,0.4)' }}>
            Schedule a free consultation and discover how concierge pediatrics
            can change your family's healthcare experience.
          </p>
          <Link to="/contact">
            <Button
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground rounded-full px-8 h-14 text-base font-medium gap-2"
            >
              Schedule a Free Consultation
              <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </div>
      </section>
    </>
  );
}