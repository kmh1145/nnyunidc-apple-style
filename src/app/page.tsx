import GlobalNav from "@/components/GlobalNav";
import SubNav from "@/components/SubNav";
import HeroSection from "@/components/HeroSection";
import ProductTile from "@/components/ProductTile";
import StoreGrid from "@/components/StoreGrid";
import SpecSection from "@/components/SpecSection";
import Footer from "@/components/Footer";
import { SERVER_PRODUCTS } from "@/lib/constants";

export default function Home() {
  const subNavLinks = ["概览", "香港", "美国", "ISP属性", "大带宽"];

  const variantMap: Record<
    string,
    "light" | "dark" | "dark2" | "parchment"
  > = {
    light: "light",
    dark: "dark",
    dark2: "dark2",
    parchment: "parchment",
  };

  return (
    <main>
      <GlobalNav />
      <SubNav title="宁宁云" links={subNavLinks} />

      <HeroSection />

      {SERVER_PRODUCTS.map((product) => (
        <ProductTile
          key={product.id}
          name={product.name}
          tagline={product.tagline}
          description={product.description}
          price={product.price}
          svgType={product.svgType}
          variant={variantMap[product.tileVariant]}
          href={product.href}
        />
      ))}

      <StoreGrid />
      <SpecSection />

      {/* CTA Section */}
      <section className="bg-surface-tile-1 w-full">
        <div className="flex flex-col items-center text-center px-4 py-section max-w-[980px] mx-auto">
          <h2 className="font-display text-display-lg text-on-dark">
            准备好了吗？
          </h2>
          <p className="text-lead text-body-muted mt-2 max-w-[500px]">
            我们可以为您定制专用服务器
          </p>
          <div className="flex gap-3 mt-6">
            <a
              href="/configure"
              className="inline-flex items-center justify-center bg-primary text-on-primary text-body rounded-pill px-[22px] py-[11px] btn-active-scale hover:bg-primary-focus transition-colors"
            >
              立即配置
            </a>
            <a
              href="#"
              className="inline-flex items-center justify-center bg-transparent text-primary-on-dark text-body rounded-pill px-[22px] py-[11px] border border-primary-on-dark btn-active-scale hover:bg-primary-on-dark hover:text-surface-tile-1 transition-colors"
            >
              联系销售
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
