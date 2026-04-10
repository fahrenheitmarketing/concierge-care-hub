import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen, Baby, Shield, Brain, Apple, Moon } from "lucide-react";
import SectionHeading from "../components/SectionHeading";
import { motion } from "framer-motion";

const resources = [
  {
    icon: Baby,
    title: "Newborn Essentials: What to Expect in the First 30 Days",
    category: "Newborn Care",
    excerpt: "From feeding schedules to sleep patterns, here's your guide to navigating the beautiful chaos of your baby's first month.",
    readTime: "5 min read",
  },
  {
    icon: Shield,
    title: "Understanding Childhood Vaccinations: A Parent's Guide",
    category: "Vaccinations",
    excerpt: "Evidence-based answers to your most common vaccine questions. Written in plain language, backed by science.",
    readTime: "7 min read",
  },
  {
    icon: Brain,
    title: "Developmental Milestones: Ages 0–5",
    category: "Development",
    excerpt: "When should your child crawl? Walk? Talk? A clear timeline of milestones and when to talk to your pediatrician.",
    readTime: "6 min read",
  },
  {
    icon: Moon,
    title: "Sleep Training Without the Tears: A Gentle Approach",
    category: "Sleep",
    excerpt: "Practical, compassionate strategies to help your little one (and you) get the rest you need.",
    readTime: "4 min read",
  },
  {
    icon: Apple,
    title: "Nutrition Basics for Growing Kids",
    category: "Nutrition",
    excerpt: "From introducing solids to handling picky eaters — simple, science-backed nutrition guidance for every stage.",
    readTime: "5 min read",
  },
  {
    icon: BookOpen,
    title: "When to Call Your Pediatrician vs. When to Go to the ER",
    category: "Emergency Guide",
    excerpt: "A practical guide to help you make the right call when your child is sick or injured.",
    readTime: "4 min read",
  },
];

export default function Resources() {
  return (
    <>
      <section className="pt-32 pb-20 lg:pt-40 lg:pb-28 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Resources for Parents"
            title="Expert Guidance for Every Stage"
            description="Written by our pediatricians, designed for real parents. Clear, practical advice you can trust."
          />
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {resources.map((resource, i) => {
              const Icon = resource.icon;
              return (
                <motion.article
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="bg-card rounded-2xl border border-border overflow-hidden hover:shadow-lg transition-shadow group cursor-pointer"
                >
                  <div className="p-8">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                        <Icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <span className="text-xs font-semibold text-accent block">
                          {resource.category}
                        </span>
                        <span className="text-xs text-muted-foreground">
                          {resource.readTime}
                        </span>
                      </div>
                    </div>
                    <h3 className="font-heading text-xl text-foreground mb-3 group-hover:text-primary transition-colors">
                      {resource.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {resource.excerpt}
                    </p>
                  </div>
                </motion.article>
              );
            })}
          </div>

          <div className="text-center mt-12">
            <p className="text-muted-foreground text-sm mb-4">
              More resources are coming soon. As a member, you'll get early
              access to all new content.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-primary text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl sm:text-4xl text-primary-foreground mb-6">
            Want Personalized Guidance for Your Child?
          </h2>
          <p className="text-lg text-primary-foreground/75 mb-10">
            Our members get direct access to ask questions anytime. Schedule a
            consultation to learn more.
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