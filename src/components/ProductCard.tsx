"use client";

interface ProductCardProps {
  badge?: string;
  name: string;
  tagline: string;
  price: string;
  image?: React.ReactNode;
  href?: string;
  buyHref?: string;
}

export default function ProductCard({
  badge,
  name,
  tagline,
  price,
  image,
  href = "#",
  buyHref = "/configure",
}: ProductCardProps) {
  return (
    <div className="bg-canvas-parchment rounded-lg overflow-hidden flex flex-col items-center text-center p-6 group cursor-pointer hover:shadow-lg transition-shadow duration-300">
      {badge && (
        <span className="text-primary text-caption-strong">{badge}</span>
      )}
      <h3 className="font-display text-display-md text-ink mt-1">{name}</h3>
      <p className="text-body text-ink-muted-48 mt-2 max-w-[300px]">
        {tagline}
      </p>
      <p className="text-body-strong text-ink mt-2">{price}</p>
      {image && <div className="mt-6 w-full">{image}</div>}
      <div className="flex gap-4 mt-6">
        <a
          href={href}
          className="text-primary text-body hover:underline"
        >
          进一步了解 &rsaquo;
        </a>
        <a
          href={buyHref}
          className="text-primary text-body hover:underline"
        >
          购买 &rsaquo;
        </a>
      </div>
    </div>
  );
}
