"use client";

interface FeatureItem {
  title: string;
  tagline: string;
  icon?: React.ReactNode;
  href?: string;
}

interface FeatureGridProps {
  title: string;
  subtitle?: string;
  features: FeatureItem[];
  bgClassName?: string;
}

export default function FeatureGrid({
  title,
  subtitle,
  features,
  bgClassName = "bg-canvas",
}: FeatureGridProps) {
  return (
    <section className={`${bgClassName} w-full`}>
      <div className="px-4 py-section max-w-[1200px] mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-display text-display-lg text-ink">{title}</h2>
          {subtitle && (
            <p className="text-lead text-ink-muted-48 mt-2">{subtitle}</p>
          )}
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {features.map((feature, idx) => (
            <a
              key={idx}
              href={feature.href || "#"}
              className="bg-canvas-parchment rounded-lg p-5 text-center hover:bg-surface-pearl transition-colors group"
            >
              {feature.icon && (
                <div className="text-primary mb-3">{feature.icon}</div>
              )}
              <h3 className="text-body-strong text-ink">{feature.title}</h3>
              <p className="text-caption text-ink-muted-48 mt-1">
                {feature.tagline}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
