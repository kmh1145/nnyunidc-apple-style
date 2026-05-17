"use client";

import { Search, ShoppingBag, Menu } from "lucide-react";
import { NAV_LINKS } from "@/lib/constants";
import { useState } from "react";

const NAV_HREF_MAP: Record<string, string> = {
  VPS: "/vps",
  独立服务器: "/dedicated",
  存储服务器: "/storage",
  控制台: "/console",
  解决方案: "/configure",
  技术支持: "#",
  关于我们: "#",
};

export default function GlobalNav() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-surface-black h-[44px] flex items-center px-4 md:px-6">
      <div className="flex items-center justify-between w-full max-w-[1440px] mx-auto">
        {/* Logo */}
        <a href="/" className="text-on-dark flex-shrink-0">
          <svg width="18" height="18" viewBox="0 0 18 18" fill="currentColor">
            <path d="M15.5 9.5c0-2.1 1.7-3.1 1.8-3.2-1-1.5-2.5-1.7-3-1.7-1.3-.1-2.5.8-3.1.8-.6 0-1.6-.7-2.7-.7-1.4 0-2.6.8-3.4 2-1.4 2.5-.4 6.2 1 8.2.7 1 1.5 2.1 2.6 2.1 1 0 1.4-.7 2.7-.7 1.2 0 1.5.7 2.6.7 1.1 0 1.8-1 2.5-2 .8-1.1 1.1-2.1 1.1-2.2-.1 0-2.1-.8-2.1-3.2zM13.3 4.4c.6-.7 1-1.7.9-2.7-.8 0-1.9.6-2.5 1.2-.5.6-1 1.7-.9 2.6.9.1 1.9-.5 2.5-1.1z" />
          </svg>
        </a>

        {/* Desktop nav links */}
        <div className="hidden md:flex items-center gap-5 flex-1 justify-center">
          {NAV_LINKS.map((link) => (
            <a
              key={link}
              href={NAV_HREF_MAP[link] || "#"}
              className="text-on-dark text-nav-link hover:text-body-muted transition-colors"
            >
              {link}
            </a>
          ))}
        </div>

        {/* Right icons */}
        <div className="flex items-center gap-3">
          <button className="text-on-dark hover:text-body-muted transition-colors p-1">
            <Search size={14} />
          </button>
          <button className="text-on-dark hover:text-body-muted transition-colors p-1">
            <ShoppingBag size={14} />
          </button>
          <button
            className="md:hidden text-on-dark hover:text-body-muted transition-colors p-1"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            <Menu size={14} />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="absolute top-[44px] left-0 right-0 bg-surface-black border-t border-white/10 md:hidden">
          <div className="flex flex-col px-4 py-3">
            {NAV_LINKS.map((link) => (
              <a
                key={link}
                href={NAV_HREF_MAP[link] || "#"}
                className="text-on-dark text-body py-2 hover:text-body-muted transition-colors"
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
