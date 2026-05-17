"use client";

interface ProductHeroProps {
  badge?: string;
  title: string;
  subtitle: string;
  tagline: string;
  ctaPrimary?: { label: string; href: string };
  ctaSecondary?: { label: string; href: string };
  bgClassName?: string;
  children?: React.ReactNode;
}

export default function ProductHero({
  badge,
  title,
  subtitle,
  tagline,
  ctaPrimary,
  ctaSecondary,
  bgClassName = "bg-canvas",
  children,
}: ProductHeroProps) {
  return (
    <section className={`${bgClassName} w-full pt-[96px]`}>
      <div className="flex flex-col items-center text-center px-4 py-section max-w-[980px] mx-auto">
        {badge && (
          <span className="text-primary text-tagline mb-2">{badge}</span>
        )}
        <h1 className="font-display text-hero-display text-ink max-w-[800px]">
          {title}
        </h1>
        <p className="font-display text-display-md text-ink mt-2 max-w-[700px]">
          {subtitle}
        </p>
        <p className="text-lead text-ink-muted-48 mt-4 max-w-[600px]">
          {tagline}
        </p>
        <div className="flex gap-3 mt-6">
          {ctaPrimary && (
            <a
              href={ctaPrimary.href}
              className="inline-flex items-center justify-center bg-primary text-on-primary text-body rounded-pill px-[22px] py-[11px] btn-active-scale hover:bg-primary-focus transition-colors"
            >
              {ctaPrimary.label}
            </a>
          )}
          {ctaSecondary && (
            <a
              href={ctaSecondary.href}
              className="inline-flex items-center justify-center text-primary text-body hover:underline"
            >
              {ctaSecondary.label} &rsaquo;
            </a>
          )}
        </div>
        {children && <div className="mt-12 w-full">{children}</div>}
      </div>
    </section>
  );
}
