import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import SectionHeading from "../components/SectionHeading";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqCategories = [
  {
    category: "About Concierge Pediatrics",
    faqs: [
      {
        q: "What is concierge pediatrics?",
        a: "Concierge pediatrics is a membership-based model where your family pays an annual fee for enhanced, personalized pediatric care. Instead of seeing 25+ patients a day, your doctor sees a small number of families — giving each child more time, attention, and access than any traditional practice can offer.",
      },
      {
        q: "How is this different from a regular pediatrician?",
        a: "In a traditional practice, you might wait weeks for an appointment and get 10 minutes with the doctor. With concierge pediatrics, you get same-day access, hour-long visits, house calls, after-hours messaging, and a doctor who truly knows your child. It's pediatric care the way it should be.",
      },
      {
        q: "Is Dr. Saper board certified?",
        a: "Yes. Dr. Saper is board certified by the American Board of Pediatrics with over 15 years of experience caring for children in South Florida.",
      },
    ],
  },
  {
    category: "Access & Availability",
    faqs: [
      {
        q: "Can I text my pediatrician?",
        a: "Yes! Members have direct access to their pediatrician via our HIPAA-compliant messaging platform. You can text photos, describe symptoms, and ask questions anytime — day or night. We respond promptly, even after hours.",
      },
      {
        q: "What happens after hours?",
        a: "You still have access to your pediatrician. Unlike traditional practices that route you to an answering service or on-call nurse, our members text or call their actual doctor. That's the concierge difference.",
      },
      {
        q: "Do you offer house calls?",
        a: "Yes. Every membership includes two house calls per family per month. For newborns under two months, we provide up to four complimentary in-home visits. Additional house calls are available for an extra fee.",
      },
      {
        q: "Can I get a same-day appointment?",
        a: "Absolutely. We guarantee same-day or next-day availability for sick visits. You'll never wait weeks to see your pediatrician.",
      },
    ],
  },
  {
    category: "Membership & Cost",
    faqs: [
      {
        q: "How much does membership cost?",
        a: "Membership is $5,000/year ($416/month) for a single child, or $6,000/year ($500/month) for multiple children — all children in the family included. There are no copays, surprise bills, or hidden fees.",
      },
      {
        q: "Is this covered by insurance?",
        a: "Our membership fee is not covered by insurance. However, we recommend keeping your health insurance for hospital visits, specialist care, and prescriptions. Many families with HSA/FSA accounts can use those funds toward membership. We're happy to provide documentation for reimbursement requests.",
      },
      {
        q: "Do I still need a regular pediatrician?",
        a: "No — we ARE your child's pediatrician. We provide all routine well-child checkups, sick visits, vaccinations, developmental screenings, and more. You won't need another pediatrician.",
      },
      {
        q: "What if my child needs a specialist?",
        a: "We have relationships with top pediatric specialists in South Florida and beyond. We coordinate all referrals, provide detailed medical histories to the specialist, and stay involved throughout the process so you're never navigating the system alone.",
      },
    ],
  },
  {
    category: "Getting Started",
    faqs: [
      {
        q: "How do I sign up?",
        a: "Start by scheduling a free consultation. We'll learn about your family, answer all your questions, and explain exactly how our membership works. If it's a good fit, we'll get you set up right away.",
      },
      {
        q: "Is there a waitlist?",
        a: "We intentionally limit our practice to ensure every family gets exceptional care. While we do accept new members regularly, spots fill quickly. We recommend scheduling your consultation soon.",
      },
      {
        q: "Can I try it before committing?",
        a: "Your initial consultation is completely free and no-obligation. It's a chance for us to get to know each other and for you to experience the concierge approach firsthand.",
      },
    ],
  },
];

export default function FAQs() {
  return (
    <>
      <section className="pt-32 pb-20 lg:pt-40 lg:pb-28 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Frequently Asked Questions"
            title="Answers to Your Most Common Questions"
            description="We know switching to concierge pediatrics is a big decision. Here's everything you need to know."
          />
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-background">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {faqCategories.map((cat, ci) => (
              <div key={ci}>
                <h2 className="font-heading text-2xl text-foreground mb-6">
                  {cat.category}
                </h2>
                <Accordion type="single" collapsible className="space-y-3">
                  {cat.faqs.map((faq, fi) => (
                    <AccordionItem
                      key={fi}
                      value={`${ci}-${fi}`}
                      className="bg-card border border-border rounded-xl px-6 data-[state=open]:shadow-sm"
                    >
                      <AccordionTrigger className="text-left text-sm font-medium text-foreground hover:no-underline py-5">
                        {faq.q}
                      </AccordionTrigger>
                      <AccordionContent className="text-sm text-muted-foreground leading-relaxed pb-5">
                        {faq.a}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-primary text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl sm:text-4xl text-primary-foreground mb-6">
            Still Have Questions?
          </h2>
          <p className="text-lg text-primary-foreground/75 mb-10">
            We'd love to chat. Schedule a free consultation and we'll answer
            every question in person.
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