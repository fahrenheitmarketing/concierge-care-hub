import { Link, useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowLeft, Clock, Tag } from "lucide-react";
import { motion } from "framer-motion";
import { getArticleBySlug, getRelatedArticles } from "../data/articles";

export default function Article() {
  const { slug } = useParams();
  const article = getArticleBySlug(slug);

  if (!article) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-20">
        <div className="text-center">
          <h1 className="font-heading text-3xl text-foreground mb-4">Article Not Found</h1>
          <Link to="/resources">
            <Button variant="outline">Back to Resources</Button>
          </Link>
        </div>
      </div>
    );
  }

  const related = getRelatedArticles(article.relatedSlugs);

  return (
    <>
      {/* Hero Image */}
      <div className="relative h-72 sm:h-96 lg:h-[480px] overflow-hidden">
        <img
          src={article.image}
          alt={article.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-foreground/60" />
        <div className="absolute inset-0 flex items-end">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-10 w-full">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <div className="flex items-center gap-4 mb-4">
                <span className="text-xs font-semibold uppercase tracking-widest text-accent bg-accent/10 border border-accent/20 rounded-full px-3 py-1">
                  {article.category}
                </span>
                <span className="flex items-center gap-1 text-xs text-background/60">
                  <Clock className="w-3 h-3" />
                  {article.readTime}
                </span>
              </div>
              <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl text-background leading-tight">
                {article.title}
              </h1>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Article Body */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            to="/resources"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-10"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Resources
          </Link>

          <p className="text-lg text-muted-foreground leading-relaxed mb-12 border-l-4 border-accent pl-5 italic">
            {article.excerpt}
          </p>

          <div className="space-y-10">
            {article.content.map((section, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
              >
                <h2 className="font-heading text-2xl text-foreground mb-3">
                  {section.heading}
                </h2>
                <p className="text-muted-foreground leading-relaxed text-base">
                  {section.body}
                </p>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-16 p-8 bg-secondary rounded-2xl border border-border text-center">
            <h3 className="font-heading text-2xl text-foreground mb-3">
              Have Questions About Your Child?
            </h3>
            <p className="text-muted-foreground text-sm mb-6">
              As a member, you can reach us directly — anytime. Schedule a free consultation to learn more.
            </p>
            <Link to="/contact">
              <Button className="bg-accent hover:bg-accent/90 text-accent-foreground rounded-full px-6 gap-2">
                Schedule a Consultation
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      {related.length > 0 && (
        <section className="py-16 lg:py-24 bg-secondary">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-heading text-2xl text-foreground mb-8">Related Articles</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {related.map((rel, i) => (
                <Link key={i} to={`/resources/${rel.slug}`}>
                  <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 }}
                    className="bg-card rounded-2xl border border-border overflow-hidden hover:shadow-lg transition-shadow group h-full"
                  >
                    <div className="h-40 overflow-hidden">
                      <img
                        src={rel.image}
                        alt={rel.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-5">
                      <span className="text-xs font-semibold text-accent block mb-2">
                        {rel.category}
                      </span>
                      <h3 className="font-heading text-base text-foreground group-hover:text-primary transition-colors leading-snug">
                        {rel.title}
                      </h3>
                    </div>
                  </motion.div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}