import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, PhoneCall, UserCheck, Heart } from "lucide-react";
import SectionHeading from "../components/SectionHeading";
import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    icon: PhoneCall,
    title: "Schedule a Free Consultation",
    description: "Book a no-pressure conversation. We'll learn about your family, answer your questions, and explain how our concierge model works. This call is completely free.",
    action: "Takes about 15 minutes",
  },
  {
    number: "02",
    icon: UserCheck,
    title: "Become a Member",
    description: "Choose the membership that fits your family. You'll get immediate access to your pediatrician, our secure messaging platform, and all member benefits from day one.",
    action: "Start right away",
  },
  {
    number: "03",
    icon: Heart,
    title: "Experience the Difference",
    description: "Enjoy unhurried appointments, house calls, after-hours access, and a pediatrician who truly knows your child. This is what healthcare was meant to be.",
    action: "Peace of mind, every day",
  },
];

export default function HowItWorks() {
  return (
    <>
      <section className="pt-32 pb-20 lg:pt-40 lg:pb-28 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Getting Started"
            title="How Concierge Pediatrics Works"
            description="Getting started is simple. No complicated forms. No insurance headaches. Just three easy steps to better care for your child."
          />

          <div className="max-w-4xl mx-auto space-y-8 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-12">
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                  className="text-center"
                >
                  <div className="relative inline-flex items-center justify-center mb-6">
                    <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center">
                      <Icon className="w-9 h-9 text-primary" />
                    </div>
                    <span className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-accent text-accent-foreground text-xs font-bold flex items-center justify-center">
                      {step.number}
                    </span>
                  </div>
                  <h3 className="font-heading text-2xl text-foreground mb-3">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-3 text-sm">
                    {step.description}
                  </p>
                  <span className="text-xs font-medium text-primary">
                    {step.action}
                  </span>
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
              <img
                src="https://media.base44.com/images/public/69d83c5355efc3ff23bd0660/dd80c5bc3_generated_image.png"
                alt="Doctor during a house call visit"
                className="rounded-2xl shadow-xl w-full"
              />
            </div>
            <div>
              <span className="text-accent text-xs font-semibold uppercase tracking-[0.2em] mb-3 block">
                What to Expect
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl text-foreground mb-6">
                A Pediatric Experience Unlike Any Other
              </h2>
              <div className="space-y-6">
                {[
                  {
                    q: "What happens after I join?",
                    a: "You'll receive a welcome packet and access to our secure communication platform. We'll schedule your first in-depth consultation — either at home or in our office.",
                  },
                  {
                    q: "Can I reach my doctor at night?",
                    a: "Yes. Members have direct access to their pediatrician via our HIPAA-compliant messaging system. Day, night, weekends — we're here.",
                  },
                  {
                    q: "Do I still need insurance?",
                    a: "We recommend keeping your insurance for hospital visits, specialists, and medications. Our membership covers all routine pediatric care directly.",
                  },
                ].map((item, i) => (
                  <div key={i}>
                    <h4 className="font-medium text-foreground mb-1">
                      {item.q}
                    </h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {item.a}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 text-center relative overflow-hidden" style={{ backgroundColor: 'hsl(79 58% 35%)' }}>
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url('https://media.base44.com/images/public/69d83c5355efc3ff23bd0660/1a4e4043a_generated_image.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'top center',
        }}
      />
      <div className="absolute inset-0" style={{ backgroundColor: 'hsl(79 58% 35%)', opacity: 0.55 }} />
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-heading text-3xl sm:text-4xl text-primary-foreground mb-6">
          Ready to See the Difference?
          </h2>
          <p className="text-lg text-primary-foreground/75 mb-10">
            Your free consultation is just a click away. No commitment. Just a
            conversation about what's best for your child.
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
      </section>
    </>
  );
}