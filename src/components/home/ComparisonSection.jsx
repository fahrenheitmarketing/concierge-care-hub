import { Check, X } from "lucide-react";
import SectionHeading from "../SectionHeading";

const rows = [
  { label: "Same-day sick visits", traditional: false, concierge: true },
  { label: "Direct access to your doctor (text/call)", traditional: false, concierge: true },
  { label: "House calls available", traditional: false, concierge: true },
  { label: "After-hours support", traditional: false, concierge: true },
  { label: "Unhurried, extended appointments", traditional: false, concierge: true },
  { label: "Limited patient base", traditional: false, concierge: true },
  { label: "Your doctor knows your child by name", traditional: false, concierge: true },
  { label: "Personalized care plans", traditional: false, concierge: true },
  { label: "Average wait time", traditional: "45+ min", concierge: "0 min" },
  { label: "Average visit length", traditional: "10 min", concierge: "60 min" },
];

export default function ComparisonSection() {
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="See the Difference"
          title="Traditional Care vs. Concierge Pediatrics"
          description="Here's why families are making the switch."
        />

        <div className="rounded-2xl border border-border overflow-hidden bg-card">
          <div className="grid grid-cols-3 bg-muted/50">
            <div className="p-4 lg:p-6 text-sm font-medium text-muted-foreground">
              Feature
            </div>
            <div className="p-4 lg:p-6 text-sm font-medium text-muted-foreground text-center border-l border-border">
              Traditional
            </div>
            <div className="p-4 lg:p-6 text-sm font-medium text-primary text-center border-l border-border bg-primary/5">
              Concierge
            </div>
          </div>

          {rows.map((row, i) => (
            <div
              key={i}
              className="grid grid-cols-3 border-t border-border"
            >
              <div className="p-4 lg:p-5 text-sm text-foreground">
                {row.label}
              </div>
              <div className="p-4 lg:p-5 flex items-center justify-center border-l border-border">
                {typeof row.traditional === "boolean" ? (
                  row.traditional ? (
                    <Check className="w-5 h-5 text-primary" />
                  ) : (
                    <X className="w-5 h-5 text-muted-foreground/40" />
                  )
                ) : (
                  <span className="text-sm text-muted-foreground">
                    {row.traditional}
                  </span>
                )}
              </div>
              <div className="p-4 lg:p-5 flex items-center justify-center border-l border-border bg-primary/5">
                {typeof row.concierge === "boolean" ? (
                  row.concierge ? (
                    <Check className="w-5 h-5 text-primary" />
                  ) : (
                    <X className="w-5 h-5 text-muted-foreground/40" />
                  )
                ) : (
                  <span className="text-sm font-semibold text-primary">
                    {row.concierge}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}