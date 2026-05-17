import GlobalNav from "@/components/GlobalNav";
import SubNav from "@/components/SubNav";
import ProductHero from "@/components/ProductHero";
import FeatureGrid from "@/components/FeatureGrid";
import FeatureHighlight from "@/components/FeatureHighlight";
import ProductCard from "@/components/ProductCard";
import BenefitGrid from "@/components/BenefitGrid";
import Footer from "@/components/Footer";
import ServerSVG from "@/components/ServerSVG";
import {
  STORAGE_HERO,
  STORAGE_FEATURES,
  STORAGE_SOLUTIONS,
  STORAGE_HIGHLIGHTS,
  STORAGE_BENEFITS,
} from "@/lib/product-pages-data";

export default function StoragePage() {
  return (
    <main>
      <GlobalNav />
      <SubNav
        title="存储服务器"
        links={["概览", "方案", "架构", "数据保护"]}
      />

      {/* Hero */}
      <ProductHero
        badge={STORAGE_HERO.badge}
        title={STORAGE_HERO.title}
        subtitle={STORAGE_HERO.subtitle}
        tagline={STORAGE_HERO.tagline}
        ctaPrimary={STORAGE_HERO.ctaPrimary}
        ctaSecondary={STORAGE_HERO.ctaSecondary}
      >
        <ServerSVG type="storage" className="w-full max-w-[500px] mx-auto" />
      </ProductHero>

      {/* Feature Grid */}
      <FeatureGrid
        title="存储服务器的核心能力。"
        subtitle="大容量、高可靠、高性能、可扩展。"
        features={STORAGE_FEATURES.map((f) => ({
          ...f,
          icon: <f.icon size={32} />,
        }))}
        bgClassName="bg-canvas-parchment"
      />

      {/* Highlight Sections */}
      {STORAGE_HIGHLIGHTS.map((highlight, idx) => (
        <FeatureHighlight
          key={idx}
          eyebrow={highlight.eyebrow}
          title={highlight.title}
          description={highlight.description}
          cta={highlight.cta}
          reverse={highlight.reverse}
          bgClassName={idx % 2 === 0 ? "bg-canvas" : "bg-canvas-parchment"}
          titleClassName="text-ink"
        >
          <ServerSVG
            type="storage"
            className="w-full"
          />
        </FeatureHighlight>
      ))}

      {/* Solutions */}
      <section className="bg-canvas w-full" id="solutions">
        <div className="px-4 py-section max-w-[1200px] mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-display text-display-lg text-ink">
              选择存储方案。
            </h2>
            <p className="text-lead text-ink-muted-48 mt-2">
              NAS、全闪存、混合存储、归档，覆盖全场景。
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {STORAGE_SOLUTIONS.map((solution) => (
              <ProductCard
                key={solution.name}
                badge={solution.badge}
                name={solution.name}
                tagline={`${solution.tagline}\n${solution.specs}`}
                price={solution.price}
                href="#"
                buyHref="/configure"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <BenefitGrid
        title="专业存储服务。"
        benefits={STORAGE_BENEFITS.map((b) => ({
          ...b,
          icon: <b.icon size={28} />,
        }))}
      />

      {/* CTA */}
      <section className="bg-surface-tile-1 w-full">
        <div className="flex flex-col items-center text-center px-4 py-section max-w-[980px] mx-auto">
          <h2 className="font-display text-display-lg text-on-dark">
            为你的数据找到最佳归宿。
          </h2>
          <p className="text-lead text-body-muted mt-2 max-w-[500px]">
            存储专家免费提供架构咨询，助你构建最优存储方案。
          </p>
          <div className="flex gap-3 mt-6">
            <a
              href="/configure"
              className="inline-flex items-center justify-center bg-primary text-on-primary text-body rounded-pill px-[22px] py-[11px] btn-active-scale hover:bg-primary-focus transition-colors"
            >
              立即选购
            </a>
            <a
              href="#"
              className="inline-flex items-center justify-center text-primary-on-dark text-body hover:underline"
            >
              免费架构咨询 &rsaquo;
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
