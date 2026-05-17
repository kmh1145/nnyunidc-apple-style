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
  VPS_HERO,
  VPS_FEATURES,
  VPS_PLANS,
  VPS_HIGHLIGHTS,
  VPS_BENEFITS,
} from "@/lib/product-pages-data";

export default function VpsPage() {
  return (
    <main>
      <GlobalNav />
      <SubNav title="VPS 云服务器" links={["概览", "方案", "特性", "技术"]} />

      {/* Hero */}
      <ProductHero
        badge={VPS_HERO.badge}
        title={VPS_HERO.title}
        subtitle={VPS_HERO.subtitle}
        tagline={VPS_HERO.tagline}
        ctaPrimary={VPS_HERO.ctaPrimary}
        ctaSecondary={VPS_HERO.ctaSecondary}
      >
        <ServerSVG type="vps" className="w-full max-w-[500px] mx-auto" />
      </ProductHero>

      {/* Feature Grid */}
      <FeatureGrid
        title="VPS 的四大优势。"
        subtitle="灵活、高效、安全、全球可达。"
        features={VPS_FEATURES.map((f) => ({
          ...f,
          icon: <f.icon size={32} />,
        }))}
        bgClassName="bg-canvas-parchment"
      />

      {/* Highlight Sections */}
      {VPS_HIGHLIGHTS.map((highlight, idx) => (
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
            type="vps"
            className="w-full"
            dark={idx % 2 !== 0}
          />
        </FeatureHighlight>
      ))}

      {/* Product Plans */}
      <section className="bg-canvas w-full" id="plans">
        <div className="px-4 py-section max-w-[1200px] mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-display text-display-lg text-ink">
              选择你的方案。
            </h2>
            <p className="text-lead text-ink-muted-48 mt-2">
              从入门到旗舰，总有一款适合你。
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {VPS_PLANS.map((plan) => (
              <ProductCard
                key={plan.name}
                badge={plan.badge}
                name={plan.name}
                tagline={`${plan.tagline}\n${plan.specs}`}
                price={plan.price}
                href="#"
                buyHref="/configure"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <BenefitGrid
        title="更多贴心服务。"
        benefits={VPS_BENEFITS.map((b) => ({
          ...b,
          icon: <b.icon size={28} />,
        }))}
      />

      {/* CTA */}
      <section className="bg-surface-tile-1 w-full">
        <div className="flex flex-col items-center text-center px-4 py-section max-w-[980px] mx-auto">
          <h2 className="font-display text-display-lg text-on-dark">
            开始你的云端之旅。
          </h2>
          <p className="text-lead text-body-muted mt-2 max-w-[500px]">
            30 秒注册，即刻开通，新用户享首月 5 折优惠。
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
              联系销售 &rsaquo;
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
