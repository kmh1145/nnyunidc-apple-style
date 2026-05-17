"use client";

import ServerSVG from "./ServerSVG";
import type { ServerType } from "./ServerSVG";

interface StoreCardProps {
  name: string;
  spec: string;
  price: string;
  svgType: ServerType;
  href?: string;
}

export default function StoreCard({ name, spec, price, svgType, href = "/configure" }: StoreCardProps) {
  return (
    <a href={href} className="block bg-canvas border border-hairline rounded-lg p-6 text-center hover:shadow-lg transition-shadow duration-200 cursor-pointer">
      <div className="w-full aspect-square flex items-center justify-center mb-4">
        <ServerSVG type={svgType} className="w-full max-w-[180px]" />
      </div>
      <h3 className="text-body-strong text-ink">{name}</h3>
      <p className="text-caption text-ink-muted-48 mt-1">{spec}</p>
      <p className="text-body text-ink mt-3">{price}</p>
      <span className="text-primary text-body mt-2 inline-block hover:underline">
        购买 &rsaquo;
      </span>
    </a>
  );
}
