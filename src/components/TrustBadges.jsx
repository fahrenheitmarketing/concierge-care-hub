import { Shield, Award, Clock, Users } from "lucide-react";

const badges = [
  { icon: Shield, label: "Board Certified" },
  { icon: Award, label: "15+ Years Experience" },
  { icon: Clock, label: "24/7 Access" },
  { icon: Users, label: "Limited Families" },
];

export default function TrustBadges({ variant = "default" }) {
  const isLight = variant === "light";
  return (
    <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
      {badges.map((badge) => {
        const Icon = badge.icon;
        return (
          <div key={badge.label} className="flex items-center gap-2">
            <Icon className={`w-4 h-4 ${isLight ? "text-accent/80" : "text-primary"}`} />
            <span className={`text-xs font-medium tracking-wide ${isLight ? "text-background/70" : "text-muted-foreground"}`}>
              {badge.label}
            </span>
          </div>
        );
      })}
    </div>
  );
}