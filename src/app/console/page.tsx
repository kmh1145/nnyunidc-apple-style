import GlobalNav from "@/components/GlobalNav";
import SubNav from "@/components/SubNav";
import ServerSVG from "@/components/ServerSVG";
import {
  Activity,
  ArrowDownUp,
  Bell,
  Cpu,
  Database,
  HardDrive,
  LockKeyhole,
  Network,
  Plus,
  Power,
  RotateCw,
  Search,
  ShieldCheck,
  TerminalSquare,
} from "lucide-react";

const overview = [
  { label: "运行实例", value: "128", detail: "12 台待扩容", icon: Cpu },
  { label: "月度用量", value: "¥42,680", detail: "较上月 -8.4%", icon: Database },
  { label: "可用率", value: "99.99%", detail: "SLA 正常", icon: ShieldCheck },
  { label: "公网流量", value: "18.6 TB", detail: "峰值 72 Gbps", icon: ArrowDownUp },
];

const instances = [
  {
    name: "hk-core-01",
    plan: "VPS M4 · 8C / 32GB",
    region: "香港一区",
    ip: "103.28.12.48",
    cpu: "42%",
    memory: "61%",
    status: "运行中",
  },
  {
    name: "us-ai-train-04",
    plan: "GPU G4 · H100",
    region: "美国西部",
    ip: "154.39.8.112",
    cpu: "78%",
    memory: "74%",
    status: "高负载",
  },
  {
    name: "sg-edge-02",
    plan: "VPS S2 · 4C / 16GB",
    region: "新加坡",
    ip: "45.124.21.6",
    cpu: "18%",
    memory: "39%",
    status: "运行中",
  },
  {
    name: "jp-storage-01",
    plan: "Storage Pro · 96TB",
    region: "东京",
    ip: "160.16.44.90",
    cpu: "24%",
    memory: "44%",
    status: "备份中",
  },
];

const regions = [
  { name: "香港一区", latency: "6 ms", load: "68%", nodes: "42 / 48" },
  { name: "美国西部", latency: "129 ms", load: "74%", nodes: "31 / 40" },
  { name: "新加坡", latency: "38 ms", load: "52%", nodes: "22 / 32" },
  { name: "东京", latency: "54 ms", load: "47%", nodes: "18 / 24" },
];

const events = [
  "hk-core-01 已完成安全补丁重启",
  "us-ai-train-04 GPU 利用率连续 20 分钟高于 75%",
  "东京存储池完成 02:00 增量备份",
  "新加坡边缘节点证书将在 18 天后续期",
];

const barHeights = ["38%", "52%", "47%", "72%", "66%", "81%", "58%", "44%"];

function Card({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section
      className={`rounded-lg border border-hairline bg-canvas p-6 ${className}`}
    >
      {children}
    </section>
  );
}

function IconButton({
  children,
  label,
}: {
  children: React.ReactNode;
  label: string;
}) {
  return (
    <button
      aria-label={label}
      title={label}
      className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-surface-chip-translucent/60 text-ink btn-active-scale transition-colors hover:bg-surface-chip-translucent"
    >
      {children}
    </button>
  );
}

export default function ConsolePage() {
  return (
    <main className="min-h-screen bg-canvas-parchment text-ink">
      <GlobalNav />
      <SubNav title="云服务器控制台" links={["总览", "实例", "网络", "账单"]} />

      <section className="bg-canvas pt-[96px]">
        <div className="mx-auto max-w-[1440px] px-4 py-8 md:px-6">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="mb-2 text-tagline text-primary">宁宁云 Console</p>
              <h1 className="max-w-[760px] font-display text-[34px] font-semibold leading-[1.12] tracking-[-0.28px] text-ink sm:text-display-lg lg:text-hero-display">
                管理每一台云服务器。
              </h1>
              <p className="mt-4 max-w-[620px] text-body text-ink-muted-80">
                实例、网络、账单与安全事件集中在一个安静的工作台中，适合反复巡检、快速定位与批量操作。
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <button className="inline-flex min-h-11 items-center justify-center gap-2 rounded-pill bg-primary px-[22px] py-[11px] text-body text-on-primary btn-active-scale transition-colors hover:bg-primary-focus">
                <Plus size={18} />
                新建实例
              </button>
              <button className="inline-flex min-h-11 items-center justify-center gap-2 rounded-pill border border-primary px-[22px] py-[11px] text-body text-primary btn-active-scale transition-colors hover:bg-primary hover:text-on-primary">
                <TerminalSquare size={18} />
                打开终端
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1440px] px-4 py-6 md:px-6">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {overview.map((item) => {
            const Icon = item.icon;

            return (
              <Card key={item.label} className="min-h-[150px]">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-caption text-ink-muted-48">
                      {item.label}
                    </p>
                    <p className="mt-3 font-display text-display-md text-ink">
                      {item.value}
                    </p>
                    <p className="mt-2 text-caption text-ink-muted-80">
                      {item.detail}
                    </p>
                  </div>
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-canvas-parchment text-primary">
                    <Icon size={20} />
                  </span>
                </div>
              </Card>
            );
          })}
        </div>

        <div className="mt-5 grid grid-cols-1 gap-5 xl:grid-cols-[1.45fr_0.85fr]">
          <Card>
            <div className="flex flex-col gap-4 border-b border-hairline pb-5 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <h2 className="font-display text-display-lg text-ink">
                  云服务器
                </h2>
                <p className="mt-1 text-caption text-ink-muted-48">
                  最近 5 分钟监控数据 · 自动刷新开启
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <label className="flex h-11 min-w-[240px] items-center gap-2 rounded-pill border border-hairline bg-canvas px-4 text-caption text-ink-muted-48">
                  <Search size={16} />
                  <span>搜索实例、IP 或区域</span>
                </label>
                <IconButton label="刷新">
                  <RotateCw size={18} />
                </IconButton>
                <IconButton label="电源操作">
                  <Power size={18} />
                </IconButton>
              </div>
            </div>

            <div className="mt-2 overflow-x-auto">
              <table className="w-full min-w-[760px] border-collapse">
                <thead>
                  <tr className="border-b border-hairline text-left text-caption-strong text-ink-muted-80">
                    <th className="py-4 pr-4 font-semibold">实例</th>
                    <th className="px-4 py-4 font-semibold">区域</th>
                    <th className="px-4 py-4 font-semibold">公网 IP</th>
                    <th className="px-4 py-4 font-semibold">CPU</th>
                    <th className="px-4 py-4 font-semibold">内存</th>
                    <th className="py-4 pl-4 text-right font-semibold">状态</th>
                  </tr>
                </thead>
                <tbody>
                  {instances.map((instance) => (
                    <tr
                      key={instance.name}
                      className="border-b border-hairline last:border-b-0"
                    >
                      <td className="py-5 pr-4">
                        <div className="flex items-center gap-3">
                          <span className="flex h-10 w-10 items-center justify-center rounded-sm bg-canvas-parchment text-primary">
                            <HardDrive size={18} />
                          </span>
                          <div>
                            <p className="text-body-strong text-ink">
                              {instance.name}
                            </p>
                            <p className="text-caption text-ink-muted-48">
                              {instance.plan}
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="px-4 py-5 text-caption text-ink-muted-80">
                        {instance.region}
                      </td>
                      <td className="px-4 py-5 text-caption text-ink-muted-80">
                        {instance.ip}
                      </td>
                      <td className="px-4 py-5">
                        <Meter value={instance.cpu} />
                      </td>
                      <td className="px-4 py-5">
                        <Meter value={instance.memory} />
                      </td>
                      <td className="py-5 pl-4 text-right">
                        <span className="inline-flex min-h-8 items-center rounded-pill border border-primary px-3 text-caption text-primary">
                          {instance.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>

          <div className="grid grid-cols-1 gap-5">
            <Card className="overflow-hidden">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <h2 className="font-display text-display-lg text-ink">
                    区域容量
                  </h2>
                  <p className="mt-1 text-caption text-ink-muted-48">
                    资源池余量与平均延迟
                  </p>
                </div>
                <Network className="text-primary" size={22} />
              </div>

              <div className="mt-5 space-y-5">
                {regions.map((region) => (
                  <div key={region.name}>
                    <div className="mb-2 flex items-center justify-between gap-3">
                      <div>
                        <p className="text-caption-strong text-ink">
                          {region.name}
                        </p>
                        <p className="text-fine-print text-ink-muted-48">
                          {region.nodes} 节点 · {region.latency}
                        </p>
                      </div>
                      <p className="text-caption text-ink-muted-80">
                        {region.load}
                      </p>
                    </div>
                    <div className="h-2 rounded-pill bg-canvas-parchment">
                      <div
                        className="h-2 rounded-pill bg-primary"
                        style={{ width: region.load }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            <Card className="bg-surface-tile-1 text-on-dark">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <h2 className="font-display text-display-lg">安全态势</h2>
                  <p className="mt-1 text-caption text-body-muted">
                    防火墙、密钥与快照策略
                  </p>
                </div>
                <LockKeyhole className="text-primary-on-dark" size={22} />
              </div>

              <div className="mt-6 grid grid-cols-3 gap-3">
                {["0 高危", "4 待确认", "28 快照"].map((item) => (
                  <div
                    key={item}
                    className="rounded-sm border border-white/10 px-3 py-4 text-center"
                  >
                    <p className="text-caption-strong">{item}</p>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>

        <div className="mt-5 grid grid-cols-1 gap-5 lg:grid-cols-[0.9fr_1.1fr]">
          <Card>
            <div className="flex items-center justify-between">
              <div>
                <h2 className="font-display text-display-lg text-ink">
                  流量趋势
                </h2>
                <p className="mt-1 text-caption text-ink-muted-48">
                  最近 8 小时出入站合计
                </p>
              </div>
              <Activity className="text-primary" size={22} />
            </div>

            <div className="mt-8 flex h-48 items-end gap-3">
              {barHeights.map((height, index) => (
                <div
                  key={`${height}-${index}`}
                  className="flex flex-1 items-end rounded-sm bg-canvas-parchment"
                >
                  <div
                    className="w-full rounded-sm bg-primary"
                    style={{ height }}
                  />
                </div>
              ))}
            </div>
          </Card>

          <Card>
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h2 className="font-display text-display-lg text-ink">
                  操作与提醒
                </h2>
                <p className="mt-1 text-caption text-ink-muted-48">
                  运维事件按时间倒序排列
                </p>
              </div>
              <button className="inline-flex min-h-11 items-center justify-center gap-2 rounded-pill border border-primary px-[18px] py-[10px] text-caption text-primary btn-active-scale transition-colors hover:bg-primary hover:text-on-primary">
                <Bell size={16} />
                全部提醒
              </button>
            </div>

            <div className="mt-5 divide-y divide-hairline">
              {events.map((event) => (
                <div key={event} className="flex items-start gap-3 py-4">
                  <span className="mt-2 h-2 w-2 flex-none rounded-full bg-primary" />
                  <p className="text-body text-ink-muted-80">{event}</p>
                </div>
              ))}
            </div>
          </Card>
        </div>

        <div className="mt-5 overflow-hidden rounded-lg border border-hairline bg-canvas">
          <div className="grid grid-cols-1 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="border-b border-hairline p-6 lg:border-b-0 lg:border-r">
              <p className="text-caption text-ink-muted-48">推荐动作</p>
              <h2 className="mt-2 font-display text-display-lg text-ink">
                将香港核心集群升级到 100GbE。
              </h2>
              <p className="mt-3 text-body text-ink-muted-80">
                当前晚高峰公网出口已达到 72 Gbps。扩容网络规格后，直播、跨境 API 与对象存储回源会获得更稳定的吞吐。
              </p>
              <button className="mt-6 inline-flex min-h-11 items-center justify-center rounded-pill bg-primary px-[22px] py-[11px] text-body text-on-primary btn-active-scale transition-colors hover:bg-primary-focus">
                查看扩容方案
              </button>
            </div>

            <div className="flex min-h-[320px] items-center justify-center bg-canvas-parchment p-8">
              <div className="w-full max-w-[420px] product-shadow">
                <ServerSVG type="rack" className="w-full" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function Meter({ value }: { value: string }) {
  return (
    <div className="flex min-w-[120px] items-center gap-3">
      <div className="h-2 flex-1 rounded-pill bg-canvas-parchment">
        <div className="h-2 rounded-pill bg-primary" style={{ width: value }} />
      </div>
      <span className="w-9 text-right text-caption text-ink-muted-80">
        {value}
      </span>
    </div>
  );
}
