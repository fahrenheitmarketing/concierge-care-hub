export default function SectionHeading({ eyebrow, title, description, center = true, light = false }) {
  return (
    <div className={`max-w-3xl ${center ? "mx-auto text-center" : ""} mb-12 lg:mb-16`}>
      {eyebrow && (
        <span className={`text-xs font-semibold uppercase tracking-[0.2em] ${light ? "text-accent/80" : "text-accent"} mb-3 block`}>
          {eyebrow}
        </span>
      )}
      <h2 className={`font-heading text-3xl sm:text-4xl lg:text-5xl ${light ? "text-background" : "text-foreground"} mb-4`}>
        {title}
      </h2>
      {description && (
        <p className={`text-base sm:text-lg leading-relaxed ${light ? "text-background/70" : "text-muted-foreground"}`}>
          {description}
        </p>
      )}
    </div>
  );
}