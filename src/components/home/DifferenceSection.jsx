import { motion } from "framer-motion";
import { MessageCircle, Clock, Home, Heart, UserCheck, Shield } from "lucide-react";
import SectionHeading from "../SectionHeading";

const features = [
  {
    icon: Clock,
    title: "Same-Day Appointments",
    description: "Your child is sick. You need answers now — not next week. We guarantee same-day or next-day visits.",
  },
  {
    icon: MessageCircle,
    title: "Text Your Pediatrician",
    description: "A rash at 9 PM? A fever before a trip? Text or call your doctor directly. We respond — always.",
  },
  {
    icon: Home,
    title: "House Calls Included",
    description: "We come to you. No waiting rooms. No exposure to germs. Just your doctor, in your home.",
  },
  {
    icon: Heart,
    title: "Unhurried Visits",
    description: "Every appointment lasts as long as it needs to. Every question gets answered. Every concern is heard.",
  },
  {
    icon: UserCheck,
    title: "Your Doctor Knows Your Child",
    description: "With a limited number of families, your pediatrician truly knows your child — their history, personality, and needs.",
  },
  {
    icon: Shield,
    title: "Fewer ER Visits",
    description: "Direct access to your doctor means fewer unnecessary trips to the emergency room. Peace of mind, day or night.",
  },
];

export default function DifferenceSection() {
  return (
    <section className="py-20 lg:py-28 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="The Concierge Difference"
          title="Care That Revolves Around Your Family"
          description="Everything about our practice is designed to give you peace of mind. Here's what makes us different from every other pediatrician."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="bg-card rounded-2xl p-8 border border-border hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-heading text-xl text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}