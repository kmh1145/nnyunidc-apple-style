"use client";

import Button from "./Button";
import ServerSVG from "./ServerSVG";

export default function HeroSection() {
  return (
    <section className="bg-canvas pt-[96px] md:pt-[96px]">
      <div className="flex flex-col items-center text-center px-4 py-section">
        <p className="text-primary text-tagline mb-2">全新发布</p>
        <h1 className="font-display text-hero-display text-ink max-w-[800px]">
          服务器解决方案
          <br />
          为未来而生。
        </h1>
        <p className="text-lead text-ink-muted-80 mt-4 max-w-[600px]">
          企业级性能，精密工程打造。
          从机架密度到 GPU 加速。
        </p>
        <div className="flex gap-3 mt-8">
          <a
            href="/configure"
            className="inline-flex items-center justify-center bg-primary text-on-primary text-body rounded-pill px-[22px] py-[11px] btn-active-scale hover:bg-primary-focus transition-colors"
          >
            立即配置
          </a>
          <Button variant="secondary">对比型号</Button>
        </div>
        <div className="mt-16 w-full max-w-[600px]">
          <ServerSVG type="rack" className="w-full" />
        </div>
      </div>
    </section>
  );
}
