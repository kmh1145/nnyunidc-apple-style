"use client";

interface Benefit {
  icon: React.ReactNode;
  title: string;
  description: string;
  cta?: { label: string; href: string };
}

interface BenefitGridProps {
  title: string;
  benefits: Benefit[];
}

export default function BenefitGrid({ title, benefits }: BenefitGridProps) {
  return (
    <section className="bg-canvas-parchment w-full">
      <div className="px-4 py-section max-w-[1200px] mx-auto">
        <h2 className="font-display text-display-lg text-ink text-center mb-12">
          {title}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, idx) => (
            <div
              key={idx}
              className="bg-canvas rounded-lg p-6 border border-hairline"
            >
              <div className="text-primary mb-3">{benefit.icon}</div>
              <h3 className="text-body-strong text-ink">{benefit.title}</h3>
              <p className="text-caption text-ink-muted-48 mt-1">
                {benefit.description}
              </p>
              {benefit.cta && (
                <a
                  href={benefit.cta.href}
                  className="text-primary text-caption mt-2 inline-block hover:underline"
                >
                  {benefit.cta.label} &rsaquo;
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
