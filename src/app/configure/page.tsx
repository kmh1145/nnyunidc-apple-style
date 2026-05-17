import GlobalNav from "@/components/GlobalNav";
import SubNav from "@/components/SubNav";
import Configurator from "@/components/Configurator";
import Footer from "@/components/Footer";

export default function ConfigurePage() {
  return (
    <main>
      <GlobalNav />
      <SubNav title="服务器配置" links={["机架式", "刀片式", "GPU", "塔式"]} />

      <section className="bg-canvas pt-[96px] md:pt-[96px]">
        <div className="max-w-[1440px] mx-auto px-4 py-8">
          <h1 className="font-display text-hero-display text-ink text-center">
            配置你的服务器
          </h1>
          <p className="text-lead text-ink-muted-48 text-center mt-2">
            选择最适合你工作负载的配置方案。
          </p>
        </div>
      </section>

      <Configurator />

      <Footer />
    </main>
  );
}
