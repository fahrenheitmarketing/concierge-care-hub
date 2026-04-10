import { Link } from "react-router-dom";
import { articles } from "../data/articles";
import { Button } from "@/components/ui/button";
import { ArrowRight, Clock } from "lucide-react";
import SectionHeading from "../components/SectionHeading";
import { motion } from "framer-motion";

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
            {articles.map((resource, i) => (
              <Link key={i} to={`/resources/${resource.slug}`}>
                <motion.article
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="bg-card rounded-2xl border border-border overflow-hidden hover:shadow-lg transition-shadow group h-full"
                >
                  <div className="h-48 overflow-hidden">
                    <img
                      src={resource.image}
                      alt={resource.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-xs font-semibold text-accent">{resource.category}</span>
                      <span className="flex items-center gap-1 text-xs text-muted-foreground"><Clock className="w-3 h-3" />{resource.readTime}</span>
                    </div>
                    <h3 className="font-heading text-xl text-foreground mb-2 group-hover:text-primary transition-colors">
                      {resource.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {resource.excerpt}
                    </p>
                  </div>
                </motion.article>
              </Link>
            ))}
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