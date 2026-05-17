"use client";

import { FOOTER_LINKS } from "@/lib/constants";

export default function Footer() {
  const columns = [
    { title: "产品", links: FOOTER_LINKS.products },
    { title: "解决方案", links: FOOTER_LINKS.solutions },
    { title: "技术支持", links: FOOTER_LINKS.support },
    { title: "关于", links: FOOTER_LINKS.company },
  ];

  return (
    <footer className="bg-canvas-parchment w-full">
      <div className="px-4 py-[64px] max-w-[980px] mx-auto">
        {/* Link columns */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {columns.map((col) => (
            <div key={col.title}>
              <h4 className="text-caption-strong text-ink-muted-80 mb-2">
                {col.title}
              </h4>
              <ul className="dense-link">
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-fine-print text-ink-muted-80 hover:text-ink transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-hairline mt-8 pt-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <p className="text-fine-print text-ink-muted-48">
              Copyright &copy; 2026 Apple IDC. 保留所有权利。
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#"
                className="text-fine-print text-ink-muted-48 hover:text-ink transition-colors"
              >
                隐私政策
              </a>
              <a
                href="#"
                className="text-fine-print text-ink-muted-48 hover:text-ink transition-colors"
              >
                使用条款
              </a>
              <a
                href="#"
                className="text-fine-print text-ink-muted-48 hover:text-ink transition-colors"
              >
                Cookie 设置
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
