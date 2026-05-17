"use client";

import ServerSVG from "./ServerSVG";
import type { ServerType } from "./ServerSVG";

interface ProductTileProps {
  name: string;
  tagline: string;
  description: string;
  price: string;
  svgType: ServerType;
  variant: "light" | "dark" | "dark2" | "parchment";
  href?: string;
  buyHref?: string;
}

export default function ProductTile({
  name,
  tagline,
  description,
  price,
  svgType,
  variant,
  href = "/dedicated",
  buyHref = "/configure",
}: ProductTileProps) {
  const bgMap = {
    light: "bg-canvas text-ink",
    dark: "bg-surface-tile-1 text-on-dark",
    dark2: "bg-surface-tile-2 text-on-dark",
    parchment: "bg-canvas-parchment text-ink",
  };

  const isDark = variant === "dark" || variant === "dark2";

  return (
    <section className={`${bgMap[variant]} w-full`}>
      <div className="flex flex-col items-center text-center px-4 py-section max-w-[1440px] mx-auto">
        <h2 className="font-display text-display-lg">{name}</h2>
        <p
          className={`text-lead mt-2 ${
            isDark ? "text-body-muted" : "text-ink-muted-48"
          }`}
        >
          {tagline}
        </p>
        <p
          className={`text-body mt-3 max-w-[500px] ${
            isDark ? "text-body-muted" : "text-ink-muted-80"
          }`}
        >
          {description}
        </p>
        <p
          className={`text-body-strong mt-2 ${
            isDark ? "text-on-dark" : "text-ink"
          }`}
        >
          起售价 {price}
        </p>
        <div className="flex gap-3 mt-6">
          <a
            href={href}
            className="inline-flex items-center justify-center bg-primary text-on-primary text-body rounded-pill px-[22px] py-[11px] btn-active-scale hover:bg-primary-focus transition-colors"
          >
            了解更多
          </a>
          <a
            href={buyHref}
            className={`inline-flex items-center justify-center text-body rounded-pill px-[22px] py-[11px] btn-active-scale transition-colors ${
              isDark
                ? "text-primary-on-dark border border-primary-on-dark hover:bg-primary-on-dark hover:text-surface-tile-1"
                : "text-primary border border-primary hover:bg-primary hover:text-on-primary"
            }`}
          >
            购买
          </a>
        </div>
        <div className="mt-12 w-full max-w-[500px]">
          <ServerSVG type={svgType} className="w-full" dark={isDark} />
        </div>
      </div>
    </section>
  );
}
