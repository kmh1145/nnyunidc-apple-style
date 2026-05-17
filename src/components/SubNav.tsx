"use client";

import Button from "./Button";

interface SubNavProps {
  title: string;
  links?: string[];
}

export default function SubNav({ title, links = [] }: SubNavProps) {
  return (
    <nav className="fixed top-[44px] left-0 right-0 z-40 h-[52px] frosted-glass bg-canvas-parchment/80 flex items-center px-4 md:px-6">
      <div className="flex items-center justify-between w-full max-w-[1440px] mx-auto">
        <h2 className="text-ink font-display text-tagline">{title}</h2>

        <div className="flex items-center gap-4">
          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-4">
            {links.map((link) => (
              <a
                key={link}
                href="#"
                className="text-ink text-button-utility hover:text-primary transition-colors"
              >
                {link}
              </a>
            ))}
          </div>

          <a
            href="/configure"
            className="inline-flex items-center justify-center bg-primary text-on-primary text-button-utility rounded-pill px-4 py-2 btn-active-scale hover:bg-primary-focus transition-colors"
          >
            配置
          </a>
        </div>
      </div>
    </nav>
  );
}
