"use client";

import StoreCard from "./StoreCard";
import { STORE_CARDS } from "@/lib/constants";

export default function StoreGrid() {
  return (
    <section className="bg-canvas-parchment w-full">
      <div className="px-4 py-section max-w-[1440px] mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-display text-display-lg text-ink">
            选购你的服务器。
          </h2>
          <p className="text-lead text-ink-muted-48 mt-2">
            配置并订购最适合你工作负载的解决方案。
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {STORE_CARDS.map((card) => (
            <StoreCard
              key={card.name}
              name={card.name}
              spec={card.spec}
              price={card.price}
              svgType={card.svgType}
              href={card.href}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
