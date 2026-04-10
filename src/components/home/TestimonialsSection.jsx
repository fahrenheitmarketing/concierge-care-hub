import { Star } from "lucide-react";
import SectionHeading from "../SectionHeading";
import { motion } from "framer-motion";

const testimonials = [
  {
    quote: "Our daughter had a fever at 11 PM. I texted Dr. Saper and got a response in minutes. We avoided the ER completely. This is what healthcare should be.",
    author: "Sarah M.",
    detail: "Mother of two, Miami Beach",
  },
  {
    quote: "The difference is night and day. Our last pediatrician spent 8 minutes with us. Here, it's an hour of undivided attention. My kids actually look forward to their checkups.",
    author: "David & Jessica R.",
    detail: "Parents of three, Surfside",
  },
  {
    quote: "Having house calls with a newborn changed everything. No dragging a 2-week-old to a waiting room full of sick kids. Just calm, personal care at home.",
    author: "Amanda L.",
    detail: "First-time mom, Bal Harbour",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="py-20 lg:py-28 bg-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="From Our Families"
          title="Parents Who Made the Switch"
          description="Real families. Real peace of mind."
          light
        />

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-background/5 backdrop-blur-sm rounded-2xl p-8 border border-background/10"
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star
                    key={j}
                    className="w-4 h-4 text-accent fill-accent"
                  />
                ))}
              </div>
              <p className="text-background/85 leading-relaxed mb-6 text-sm">
                "{t.quote}"
              </p>
              <div>
                <p className="text-background font-medium text-sm">
                  {t.author}
                </p>
                <p className="text-background/50 text-xs">{t.detail}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}