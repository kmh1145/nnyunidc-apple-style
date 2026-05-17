"use client";

import { useState, useMemo } from "react";
import ServerSVG from "./ServerSVG";
import {
  SERVER_CONFIGS,
  calculateTotalPrice,
  formatPrice,
  type ServerType,
} from "@/lib/configurator-data";

const serverTypes: { type: ServerType; label: string }[] = [
  { type: "rack", label: "机架式" },
  { type: "blade", label: "刀片式" },
  { type: "gpu", label: "GPU 加速" },
  { type: "tower", label: "塔式" },
];

export default function Configurator() {
  const [activeType, setActiveType] = useState<ServerType>("rack");
  const [selections, setSelections] = useState<Record<string, string>>({});

  const config = SERVER_CONFIGS[activeType];

  const totalPrice = useMemo(
    () => calculateTotalPrice(activeType, selections),
    [activeType, selections]
  );

  const handleTypeChange = (type: ServerType) => {
    setActiveType(type);
    setSelections({});
  };

  const handleSelect = (categoryId: string, optionId: string) => {
    setSelections((prev) => ({ ...prev, [categoryId]: optionId }));
  };

  const getSelectedLabel = (categoryId: string): string => {
    const selectedId = selections[categoryId];
    if (!selectedId) return "";
    const category = config.categories.find((c) => c.id === categoryId);
    const option = category?.options.find((o) => o.id === selectedId);
    return option?.label || "";
  };

  return (
    <section className="bg-canvas-parchment w-full">
      <div className="max-w-[1440px] mx-auto px-4 py-section">
        {/* Server Type Tabs */}
        <div className="flex justify-center gap-2 mb-12 flex-wrap">
          {serverTypes.map(({ type, label }) => (
            <button
              key={type}
              onClick={() => handleTypeChange(type)}
              className={`px-5 py-2.5 rounded-pill text-body transition-all duration-200 btn-active-scale ${
                activeType === type
                  ? "bg-primary text-on-primary"
                  : "bg-canvas text-ink border border-hairline hover:border-primary"
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-12">
          {/* Left: Configurator Options */}
          <div className="space-y-8">
            {/* Product Header */}
            <div className="bg-canvas rounded-lg p-6 border border-hairline">
              <h2 className="font-display text-display-md text-ink">
                {config.name}
              </h2>
              <p className="text-body text-ink-muted-48 mt-1">
                {config.tagline}
              </p>
              <p className="text-body-strong text-ink mt-2">
                起售价 {formatPrice(config.basePrice)}
              </p>
            </div>

            {/* Config Categories */}
            {config.categories.map((category) => {
              const selectedId = selections[category.id];
              return (
                <div
                  key={category.id}
                  className="bg-canvas rounded-lg p-6 border border-hairline"
                >
                  <h3 className="text-body-strong text-ink">{category.title}</h3>
                  <p className="text-caption text-ink-muted-48 mt-1">
                    {category.description}
                  </p>

                  <div className="mt-4 space-y-2">
                    {category.options.map((option) => {
                      const isSelected =
                        selectedId === option.id ||
                        (!selectedId &&
                          category.options[0].id === option.id);

                      return (
                        <button
                          key={option.id}
                          onClick={() =>
                            handleSelect(category.id, option.id)
                          }
                          className={`w-full flex items-center justify-between p-4 rounded-lg border-2 transition-all duration-200 btn-active-scale text-left ${
                            isSelected
                              ? "border-primary bg-canvas"
                              : "border-hairline bg-canvas hover:border-primary/50"
                          }`}
                        >
                          <div className="flex items-center gap-3">
                            <div
                              className={`w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0 ${
                                isSelected
                                  ? "border-primary"
                                  : "border-hairline"
                              }`}
                            >
                              {isSelected && (
                                <div className="w-2.5 h-2.5 rounded-full bg-primary" />
                              )}
                            </div>
                            <div>
                              <span className="text-body text-ink">
                                {option.label}
                              </span>
                              {option.description && (
                                <p className="text-caption text-ink-muted-48 mt-0.5">
                                  {option.description}
                                </p>
                              )}
                            </div>
                          </div>
                          <span className="text-caption text-ink-muted-80 flex-shrink-0 ml-4">
                            {option.price > 0
                              ? `+${formatPrice(option.price)}`
                              : "包含"}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right: Product Image & Summary (Sticky) */}
          <div className="lg:sticky lg:top-[116px] lg:self-start">
            {/* Product Image */}
            <div className="bg-canvas rounded-lg p-8 border border-hairline mb-6">
              <div className="flex items-center justify-center">
                <ServerSVG
                  type={activeType}
                  className="w-full max-w-[300px]"
                />
              </div>
            </div>

            {/* Config Summary */}
            <div className="bg-canvas rounded-lg p-6 border border-hairline mb-6">
              <h3 className="text-body-strong text-ink mb-4">配置摘要</h3>
              <dl className="space-y-3">
                {config.categories.map((category) => {
                  const selectedLabel = getSelectedLabel(category.id);
                  const defaultLabel = category.options[0].label;
                  return (
                    <div
                      key={category.id}
                      className="flex justify-between gap-4"
                    >
                      <dt className="text-caption text-ink-muted-48 flex-shrink-0">
                        {category.title}
                      </dt>
                      <dd className="text-caption-strong text-ink text-right">
                        {selectedLabel || defaultLabel}
                      </dd>
                    </div>
                  );
                })}
              </dl>
            </div>

            {/* Price Display */}
            <div className="bg-canvas rounded-lg p-6 border border-hairline">
              <div className="flex items-end justify-between">
                <div>
                  <p className="text-caption text-ink-muted-48">总价</p>
                  <p className="font-display text-display-md text-ink">
                    {formatPrice(totalPrice)}
                  </p>
                  <p className="text-fine-print text-ink-muted-48 mt-1">
                    含增值税
                  </p>
                </div>
                <button className="bg-primary text-on-primary text-body rounded-pill px-8 py-3 btn-active-scale hover:bg-primary-focus transition-colors">
                  添加到购物袋
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sticky Bottom Bar */}
      <div className="fixed bottom-0 left-0 right-0 z-50 frosted-glass bg-canvas-parchment/80 border-t border-hairline">
        <div className="max-w-[1440px] mx-auto px-4 md:px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <p className="text-body-strong text-ink hidden sm:block">
              {config.name}
            </p>
            <p className="font-display text-tagline text-ink">
              {formatPrice(totalPrice)}
            </p>
          </div>
          <button className="bg-primary text-on-primary text-button-utility rounded-pill px-6 py-2.5 btn-active-scale hover:bg-primary-focus transition-colors">
            添加到购物袋
          </button>
        </div>
      </div>
    </section>
  );
}
