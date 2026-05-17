"use client";

import { SPECS } from "@/lib/constants";

export default function SpecSection() {
  const specKeys = [
    { key: "processor", label: "处理器" },
    { key: "memory", label: "内存" },
    { key: "storage", label: "存储" },
    { key: "networking", label: "网络" },
    { key: "gpu", label: "GPU / 扩展" },
    { key: "power", label: "电源" },
  ] as const;

  return (
    <section className="bg-canvas w-full">
      <div className="px-4 py-section max-w-[1440px] mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-display text-display-lg text-ink">
            对比所有型号。
          </h2>
          <p className="text-lead text-ink-muted-48 mt-2">
            技术规格一览。
          </p>
        </div>

        {/* Desktop table */}
        <div className="hidden md:block overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b border-hairline">
                <th className="text-left text-caption-strong text-ink-muted-48 py-4 px-4 w-[140px]">
                  规格
                </th>
                {SPECS.map((spec) => (
                  <th
                    key={spec.label}
                    className="text-center text-body-strong text-ink py-4 px-4"
                  >
                    {spec.label}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {specKeys.map(({ key, label }, idx) => (
                <tr
                  key={key}
                  className={
                    idx % 2 === 0 ? "bg-canvas" : "bg-canvas-parchment"
                  }
                >
                  <td className="text-caption-strong text-ink-muted-80 py-4 px-4">
                    {label}
                  </td>
                  {SPECS.map((spec) => (
                    <td
                      key={spec.label}
                      className="text-center text-caption text-ink-muted-80 py-4 px-4"
                    >
                      {spec[key]}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile cards */}
        <div className="md:hidden flex flex-col gap-4">
          {SPECS.map((spec) => (
            <div
              key={spec.label}
              className="bg-canvas-parchment rounded-lg p-5"
            >
              <h3 className="text-body-strong text-ink mb-3">{spec.label}</h3>
              <dl className="space-y-2">
                {specKeys.map(({ key, label }) => (
                  <div key={key} className="flex justify-between">
                    <dt className="text-caption text-ink-muted-48">{label}</dt>
                    <dd className="text-caption text-ink text-right ml-4">
                      {spec[key]}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
