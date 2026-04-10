import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Phone, Mail, MapPin, Clock, ArrowRight, CheckCircle } from "lucide-react";
import SectionHeading from "../components/SectionHeading";
import TrustBadges from "../components/TrustBadges";
import { motion } from "framer-motion";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    interest: "",
    children: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <section className="pt-32 pb-20 lg:pt-40 lg:pb-28 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Get in Touch"
            title="Schedule Your Free Consultation"
            description="No obligation. No pressure. Just a conversation about what's best for your family."
          />
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
            <div className="lg:col-span-3">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-card rounded-2xl border border-border p-12 text-center"
                >
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-heading text-2xl text-foreground mb-3">
                    Thank You!
                  </h3>
                  <p className="text-muted-foreground leading-relaxed max-w-md mx-auto">
                    We've received your request and will reach out within 24
                    hours to schedule your consultation. We're looking forward
                    to meeting your family.
                  </p>
                </motion.div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="bg-card rounded-2xl border border-border p-8 lg:p-10 space-y-6"
                >
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input
                        id="firstName"
                        placeholder="Your first name"
                        value={formData.firstName}
                        onChange={(e) =>
                          setFormData({ ...formData, firstName: e.target.value })
                        }
                        required
                        className="rounded-xl h-12"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input
                        id="lastName"
                        placeholder="Your last name"
                        value={formData.lastName}
                        onChange={(e) =>
                          setFormData({ ...formData, lastName: e.target.value })
                        }
                        required
                        className="rounded-xl h-12"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="you@email.com"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        required
                        className="rounded-xl h-12"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone</Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="(305) 555-0100"
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        required
                        className="rounded-xl h-12"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label>I'm Interested In</Label>
                      <Select
                        onValueChange={(v) =>
                          setFormData({ ...formData, interest: v })
                        }
                      >
                        <SelectTrigger className="rounded-xl h-12">
                          <SelectValue placeholder="Select one" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="membership">
                            Becoming a Member
                          </SelectItem>
                          <SelectItem value="consultation">
                            Free Consultation
                          </SelectItem>
                          <SelectItem value="prenatal">
                            Prenatal Consultation
                          </SelectItem>
                          <SelectItem value="info">
                            General Information
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label>Number of Children</Label>
                      <Select
                        onValueChange={(v) =>
                          setFormData({ ...formData, children: v })
                        }
                      >
                        <SelectTrigger className="rounded-xl h-12">
                          <SelectValue placeholder="Select" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="expecting">
                            Expecting
                          </SelectItem>
                          <SelectItem value="1">1</SelectItem>
                          <SelectItem value="2">2</SelectItem>
                          <SelectItem value="3">3</SelectItem>
                          <SelectItem value="4+">4+</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">
                      Anything else you'd like us to know?
                    </Label>
                    <Textarea
                      id="message"
                      placeholder="Tell us about your family..."
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      className="rounded-xl min-h-[120px] resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-accent hover:bg-accent/90 text-accent-foreground rounded-full h-14 text-base font-medium gap-2"
                  >
                    Request a Consultation
                    <ArrowRight className="w-4 h-4" />
                  </Button>

                  <p className="text-xs text-muted-foreground text-center">
                    We'll respond within 24 hours. Your information is kept
                    private and secure.
                  </p>
                </form>
              )}
            </div>

            <div className="lg:col-span-2 space-y-8">
              <div>
                <h3 className="font-heading text-xl text-foreground mb-6">
                  Contact Information
                </h3>
                <div className="space-y-5">
                  <a
                    href="tel:3052393119"
                    className="flex items-start gap-3 group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                        (305) 239-3119
                      </p>
                      <p className="text-xs text-muted-foreground">
                        Call or text us anytime
                      </p>
                    </div>
                  </a>
                  <a
                    href="mailto:info@conciergepediatricsfl.com"
                    className="flex items-start gap-3 group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                        info@conciergepediatricsfl.com
                      </p>
                      <p className="text-xs text-muted-foreground">
                        We reply within 24 hours
                      </p>
                    </div>
                  </a>
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-foreground">
                        Miami Beach, Florida
                      </p>
                      <p className="text-xs text-muted-foreground">
                        Plus in-home visits throughout South Florida
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Clock className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-foreground">
                        Mon – Fri: 9 AM – 5 PM
                      </p>
                      <p className="text-xs text-muted-foreground">
                        Members have 24/7 access
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-secondary rounded-2xl p-6 border border-border">
                <h4 className="font-heading text-lg text-foreground mb-3">
                  What to Expect
                </h4>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-accent font-bold mt-0.5">1.</span>
                    <span>We'll call you to learn about your family</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent font-bold mt-0.5">2.</span>
                    <span>We'll answer all your questions honestly</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent font-bold mt-0.5">3.</span>
                    <span>No pressure — only join if it's the right fit</span>
                  </li>
                </ul>
              </div>

              <TrustBadges />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}