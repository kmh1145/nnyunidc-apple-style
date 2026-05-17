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
  DEDICATED_HERO,
  DEDICATED_FEATURES,
  DEDICATED_MODELS,
  DEDICATED_HIGHLIGHTS,
  DEDICATED_BENEFITS,
} from "@/lib/product-pages-data";

export default function DedicatedPage() {
  return (
    <main>
      <GlobalNav />
      <SubNav
        title="独立服务器"
        links={["概览", "机型", "硬件", "数据中心"]}
      />

      {/* Hero */}
      <ProductHero
        badge={DEDICATED_HERO.badge}
        title={DEDICATED_HERO.title}
        subtitle={DEDICATED_HERO.subtitle}
        tagline={DEDICATED_HERO.tagline}
        ctaPrimary={DEDICATED_HERO.ctaPrimary}
        ctaSecondary={DEDICATED_HERO.ctaSecondary}
      >
        <ServerSVG type="rack" className="w-full max-w-[500px] mx-auto" />
      </ProductHero>

      {/* Feature Grid */}
      <FeatureGrid
        title="独立服务器的核心优势。"
        subtitle="独享、可控、高性能、高可靠。"
        features={DEDICATED_FEATURES.map((f) => ({
          ...f,
          icon: <f.icon size={32} />,
        }))}
        bgClassName="bg-canvas-parchment"
      />

      {/* Highlight Sections */}
      {DEDICATED_HIGHLIGHTS.map((highlight, idx) => (
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
            type={idx === 0 ? "rack" : idx === 1 ? "blade" : "rack"}
            className="w-full"
          />
        </FeatureHighlight>
      ))}

      {/* Product Models */}
      <section className="bg-canvas w-full" id="models">
        <div className="px-4 py-section max-w-[1200px] mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-display text-display-lg text-ink">
              选择你的机型。
            </h2>
            <p className="text-lead text-ink-muted-48 mt-2">
              从入门到旗舰，满足各种业务场景。
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {DEDICATED_MODELS.map((model) => (
              <ProductCard
                key={model.name}
                badge={model.badge}
                name={model.name}
                tagline={`${model.tagline}\n${model.specs}`}
                price={model.price}
                href="#"
                buyHref="/configure"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <BenefitGrid
        title="全方位服务保障。"
        benefits={DEDICATED_BENEFITS.map((b) => ({
          ...b,
          icon: <b.icon size={28} />,
        }))}
      />

      {/* CTA */}
      <section className="bg-surface-tile-1 w-full">
        <div className="flex flex-col items-center text-center px-4 py-section max-w-[980px] mx-auto">
          <h2 className="font-display text-display-lg text-on-dark">
            释放全部硬件潜力。
          </h2>
          <p className="text-lead text-body-muted mt-2 max-w-[500px]">
            专属客户经理一对一服务，48 小时内完成交付。
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
              预约参观数据中心 &rsaquo;
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
