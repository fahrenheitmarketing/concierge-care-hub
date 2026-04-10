import { motion } from "framer-motion";
import { X } from "lucide-react";

const problems = [
  "Waiting weeks just to see your child's doctor",
  "Rushed 10-minute appointments that leave you with more questions",
  "After-hours emergencies with no one to call but the ER",
  "Feeling like a number, not a family",
];

export default function ProblemSection() {
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <span className="text-accent text-xs font-semibold uppercase tracking-[0.2em] mb-3 block">
              Sound Familiar?
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl text-foreground mb-6">
              Traditional Pediatric Care Wasn't Built for Your Family
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              You love your kids more than anything. But the healthcare system
              makes it hard to get the care they deserve. Long waits. Short
              visits. No access after hours. It doesn't have to be this way.
            </p>

            <div className="space-y-4">
              {problems.map((problem, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-destructive/10 flex items-center justify-center mt-0.5">
                    <X className="w-3 h-3 text-destructive" />
                  </div>
                  <span className="text-foreground">{problem}</span>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="relative">
            <img
              src="https://media.base44.com/images/public/69d83c5355efc3ff23bd0660/fb027559f_generated_b9e30b6d.png"
              alt="Happy mother and child"
              className="rounded-2xl shadow-2xl w-full"
            />
            <div className="absolute -bottom-6 -left-6 bg-card rounded-2xl p-6 shadow-xl border border-border max-w-xs hidden lg:block">
              <p className="font-heading text-2xl text-foreground mb-1">
                There's a better way.
              </p>
              <p className="text-sm text-muted-foreground">
                Concierge pediatrics puts your family first — always.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}