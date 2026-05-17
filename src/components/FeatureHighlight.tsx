"use client";

interface FeatureHighlightProps {
  eyebrow?: string;
  title: string;
  description: string;
  cta?: { label: string; href: string };
  reverse?: boolean;
  bgClassName?: string;
  titleClassName?: string;
  children?: React.ReactNode;
}

export default function FeatureHighlight({
  eyebrow,
  title,
  description,
  cta,
  reverse = false,
  bgClassName = "bg-canvas",
  titleClassName = "",
  children,
}: FeatureHighlightProps) {
  return (
    <section className={`${bgClassName} w-full`}>
      <div
        className={`max-w-[1200px] mx-auto px-4 py-section flex flex-col ${
          reverse ? "md:flex-row-reverse" : "md:flex-row"
        } items-center gap-12 md:gap-16`}
      >
        {/* Text */}
        <div className="flex-1 text-center md:text-left">
          {eyebrow && (
            <p className="text-primary text-caption-strong mb-2">{eyebrow}</p>
          )}
          <h2
            className={`font-display text-display-lg ${titleClassName || "text-ink"}`}
          >
            {title}
          </h2>
          <p className="text-lead text-ink-muted-48 mt-3 max-w-[480px] mx-auto md:mx-0">
            {description}
          </p>
          {cta && (
            <a
              href={cta.href}
              className="inline-flex items-center text-primary text-body mt-4 hover:underline"
            >
              {cta.label} &rsaquo;
            </a>
          )}
        </div>

        {/* Visual */}
        {children && <div className="flex-1 w-full max-w-[500px]">{children}</div>}
      </div>
    </section>
  );
}
