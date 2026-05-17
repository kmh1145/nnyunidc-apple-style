import {
  Cloud,
  Server,
  HardDrive,
  Shield,
  Zap,
  Globe,
  Cpu,
  MemoryStick,
  Network,
  Lock,
  Gauge,
  BarChart3,
  Workflow,
  Headphones,
  Clock,
  Settings,
  Database,
  Layers,
  Activity,
  RefreshCw,
} from "lucide-react";

// ==================== VPS Data ====================
export const VPS_HERO = {
  badge: "全新推出",
  title: "VPS 云服务器",
  subtitle: "灵活弹性的云端算力。",
  tagline: "按需分配、秒级扩容、全球节点，为你提供企业级虚拟化计算资源。",
  ctaPrimary: { label: "立即选购", href: "/configure" },
  ctaSecondary: { label: "查看所有方案", href: "#plans" },
};

export const VPS_FEATURES = [
  {
    title: "秒级部署",
    tagline: "开通即用，无需等待。",
    icon: Zap,
    href: "#deploy",
  },
  {
    title: "弹性扩容",
    tagline: "CPU、内存、存储随需调整。",
    icon: RefreshCw,
    href: "#scale",
  },
  {
    title: "全球节点",
    tagline: "覆盖亚太、欧美主要城市。",
    icon: Globe,
    href: "#global",
  },
  {
    title: "99.99% 可用性",
    tagline: "企业级 SLA 保障。",
    icon: Shield,
    href: "#sla",
  },
];

export const VPS_PLANS = [
  {
    badge: "入门之选",
    name: "VPS 基础版",
    tagline: "适合个人开发者和小型项目。",
    price: "¥49/月起",
    specs: "1 vCPU · 1GB 内存 · 25GB SSD · 1TB 流量",
  },
  {
    badge: "热门推荐",
    name: "VPS 进阶版",
    tagline: "适合中小型应用和测试环境。",
    price: "¥149/月起",
    specs: "2 vCPU · 4GB 内存 · 80GB SSD · 3TB 流量",
  },
  {
    badge: "企业之选",
    name: "VPS 专业版",
    tagline: "适合生产环境和高并发业务。",
    price: "¥399/月起",
    specs: "4 vCPU · 8GB 内存 · 160GB SSD · 5TB 流量",
  },
  {
    badge: "旗舰性能",
    name: "VPS 旗舰版",
    tagline: "适合大型应用和数据库服务。",
    price: "¥799/月起",
    specs: "8 vCPU · 16GB 内存 · 320GB SSD · 10TB 流量",
  },
];

export const VPS_HIGHLIGHTS = [
  {
    eyebrow: "虚拟化技术",
    title: "KVM 全虚拟化，\n性能零损耗。",
    description:
      "采用业界领先的 KVM 虚拟化技术，每个 VPS 实例独享内核资源，IO 性能媲美物理服务器。支持自定义内核模块和系统配置。",
    cta: { label: "了解技术架构", href: "#tech" },
  },
  {
    eyebrow: "网络架构",
    title: "BGP 多线接入，\n极速访问体验。",
    description:
      "自建 BGP 多线网络，自动选择最优路由路径。单实例默认 200Mbps 带宽，可升级至 1Gbps。内置 DDoS 基础防护。",
    cta: { label: "查看网络拓扑", href: "#network" },
    reverse: true,
  },
  {
    eyebrow: "数据安全",
    title: "自动快照，\n数据无忧。",
    description:
      "支持定时自动快照，最多保留 30 个快照副本。数据采用三副本冗余存储，单盘可靠性达 99.9999999%。支持跨区域备份。",
    cta: { label: "了解数据保护", href: "#backup" },
  },
];

export const VPS_BENEFITS = [
  {
    icon: Workflow,
    title: "一键部署",
    description: "预置 50+ 应用镜像，WordPress、Node.js、Docker 等一键安装。",
  },
  {
    icon: Settings,
    title: "完全控制",
    description: "Root 权限，自由安装软件、配置环境、管理防火墙规则。",
  },
  {
    icon: Headphones,
    title: "7×24 技术支持",
    description: "专业工程师全天候在线，工单平均响应时间 < 15 分钟。",
  },
  {
    icon: Lock,
    title: "免费 SSL",
    description: "自动签发 Let's Encrypt 证书，HTTPS 一键开启。",
  },
  {
    icon: Clock,
    title: "按小时计费",
    description: "灵活计费模式，按需付费，不用随时释放。",
  },
  {
    icon: BarChart3,
    title: "实时监控",
    description: "CPU、内存、带宽、磁盘 IO 实时图表，异常自动告警。",
  },
];

// ==================== Dedicated Servers Data ====================
export const DEDICATED_HERO = {
  badge: "裸金属性能",
  title: "独立服务器",
  subtitle: "独享全部硬件资源。",
  tagline: "100% 物理资源独占，零虚拟化开销，为高负载业务提供极致性能。",
  ctaPrimary: { label: "立即选购", href: "/configure" },
  ctaSecondary: { label: "查看所有机型", href: "#models" },
};

export const DEDICATED_FEATURES = [
  {
    title: "独享资源",
    tagline: "100% CPU、内存、磁盘独占。",
    icon: Cpu,
    href: "#exclusive",
  },
  {
    title: "定制配置",
    tagline: "CPU、内存、硬盘自由搭配。",
    icon: Settings,
    href: "#custom",
  },
  {
    title: "高性能网络",
    tagline: "1Gbps~10Gbps 独享带宽。",
    icon: Network,
    href: "#network",
  },
  {
    title: "RAID 阵列",
    tagline: "多种 RAID 方案保障数据安全。",
    icon: HardDrive,
    href: "#raid",
  },
];

export const DEDICATED_MODELS = [
  {
    badge: "入门级",
    name: "单路入门型",
    tagline: "适合中小型网站和应用。",
    price: "¥899/月起",
    specs: "Xeon E-2388G · 32GB DDR4 · 2×1TB NVMe · 1Gbps",
  },
  {
    badge: "主力机型",
    name: "单路性能型",
    tagline: "适合高并发 Web 服务和缓存。",
    price: "¥1,599/月起",
    specs: "Xeon 6 32C · 64GB DDR5 · 2×2TB NVMe · 1Gbps",
  },
  {
    badge: "旗舰级",
    name: "双路旗舰型",
    tagline: "适合数据库、虚拟化和大数据。",
    price: "¥3,999/月起",
    specs: "2×Xeon 6 64C · 256GB DDR5 · 4×2TB NVMe · 10Gbps",
  },
  {
    badge: "GPU 加速",
    name: "GPU 计算型",
    tagline: "适合 AI 训练和推理任务。",
    price: "¥8,999/月起",
    specs: "Xeon 6 128C · 512GB DDR5 · 4×H100 · 10Gbps",
  },
];

export const DEDICATED_HIGHLIGHTS = [
  {
    eyebrow: "硬件品质",
    title: "企业级硬件，\n坚如磐石。",
    description:
      "全部采用 Intel Xeon 处理器、Samsung/SK 海力士企业级内存、Intel/Samsung NVMe 固态硬盘。服务器 Supermicro/Inspur 品牌，通过 72 小时烧机测试。",
    cta: { label: "查看硬件详情", href: "#hardware" },
  },
  {
    eyebrow: "数据中心",
    title: "Tier 3+ 数据中心，\n电力与网络双重保障。",
    description:
      "服务器部署在 Tier 3+ 级别数据中心，双路市电 + 柴油发电机 + UPS 三重供电保障。BGP 多线网络接入，保证 99.99% 网络可用性。",
    cta: { label: "参观数据中心", href: "#datacenter" },
    reverse: true,
  },
  {
    eyebrow: "运维服务",
    title: "专业 IDC 运维，\n7×24 全程守护。",
    description:
      "提供 KVM over IP 远程管理、硬件故障 4 小时免费更换、系统安装与基础配置、7×24 现场技术支持。让你专注于业务，无后顾之忧。",
    cta: { label: "了解服务等级", href: "#sla" },
  },
];

export const DEDICATED_BENEFITS = [
  {
    icon: Shield,
    title: "独享带宽",
    description: "1Gbps~10Gbps 独享带宽，不限流量，保证网络稳定性。",
  },
  {
    icon: MemoryStick,
    title: "大内存支持",
    description: "最高支持 2TB DDR5 ECC 内存，满足内存密集型应用需求。",
  },
  {
    icon: Database,
    title: "存储扩展",
    description: "支持最多 12 个 NVMe/SATA 盘位，可配置 RAID 0/1/5/10。",
  },
  {
    icon: Layers,
    title: "虚拟化就绪",
    description: "支持 VMware、KVM、Hyper-V 等主流虚拟化平台。",
  },
  {
    icon: Activity,
    title: "IPMI 远程管理",
    description: "独立管理接口，支持远程开关机、装系统、硬件监控。",
  },
  {
    icon: Headphones,
    title: "专属客户经理",
    description: "大客户配备专属客户经理，一对一技术支持与方案咨询。",
  },
];

// ==================== Storage Servers Data ====================
export const STORAGE_HERO = {
  badge: "海量存储",
  title: "存储服务器",
  subtitle: "数据密集型工作负载的理想之选。",
  tagline: "超高存储密度、企业级数据保护、灵活的 NAS/SAN 架构，为海量数据提供可靠支撑。",
  ctaPrimary: { label: "立即选购", href: "/configure" },
  ctaSecondary: { label: "查看所有方案", href: "#solutions" },
};

export const STORAGE_FEATURES = [
  {
    title: "海量容量",
    tagline: "单机最高 720TB 原始容量。",
    icon: HardDrive,
    href: "#capacity",
  },
  {
    title: "数据保护",
    tagline: "RAID + 快照 + 远程备份。",
    icon: Shield,
    href: "#protection",
  },
  {
    title: "高速读写",
    tagline: "NVMe 全闪存加速，IOPS 百万级。",
    icon: Zap,
    href: "#performance",
  },
  {
    title: "弹性扩展",
    tagline: "JBOD 级联，容量按需增长。",
    icon: RefreshCw,
    href: "#expand",
  },
];

export const STORAGE_SOLUTIONS = [
  {
    badge: "NAS 存储",
    name: "NAS 文件存储型",
    tagline: "适合文件共享、备份归档、多媒体存储。",
    price: "¥2,999/月起",
    specs: "Xeon 6 32C · 128GB DDR5 · 12×16TB SATA · RAID 6",
  },
  {
    badge: "全闪存",
    name: "全闪存高性能型",
    tagline: "适合数据库、高频交易、实时分析。",
    price: "¥5,999/月起",
    specs: "Xeon 6 64C · 256GB DDR5 · 8×7.68TB NVMe · RAID 10",
  },
  {
    badge: "混合存储",
    name: "混合存储型",
    tagline: "兼顾容量与性能，冷热数据分层。",
    price: "¥4,499/月起",
    specs: "Xeon 6 64C · 256GB DDR5 · 4×3.84TB NVMe + 8×16TB SATA",
  },
  {
    badge: "归档存储",
    name: "海量归档型",
    tagline: "适合冷数据归档、合规存储、数据湖。",
    price: "¥1,999/月起",
    specs: "Xeon 6 16C · 64GB DDR5 · 24×16TB SATA · RAID 6",
  },
];

export const STORAGE_HIGHLIGHTS = [
  {
    eyebrow: "存储架构",
    title: "分层存储，\n冷热分离。",
    description:
      "支持 NVMe 热层 + SATA 冷层的混合架构，智能数据分层引擎自动将热点数据迁移至高速 NVMe 层，冷数据归档至大容量 SATA 层，兼顾性能与成本。",
    cta: { label: "了解存储架构", href: "#architecture" },
  },
  {
    eyebrow: "数据保护",
    title: "多重保护，\n数据万无一失。",
    description:
      "RAID 5/6/10 多种阵列方案、定时快照与克隆、跨机房异步复制、WORM 一次写入多次读取合规存储。数据可靠性高达 99.999999999%（11 个 9）。",
    cta: { label: "了解数据保护", href: "#protection" },
    reverse: true,
  },
  {
    eyebrow: "协议支持",
    title: "多协议互通，\n无缝对接。",
    description:
      "原生支持 NFS/SMB/CIFS 文件协议、iSCSI/FC 块协议、S3 对象存储协议。一套存储同时服务虚拟机、容器、文件共享和备份归档等多种工作负载。",
    cta: { label: "查看协议详情", href: "#protocols" },
  },
];

export const STORAGE_BENEFITS = [
  {
    icon: Gauge,
    title: "百万级 IOPS",
    description: "NVMe 全闪存配置可提供超过 100 万 IOPS 的随机读写性能。",
  },
  {
    icon: HardDrive,
    title: "720TB 单机容量",
    description: "24 盘位高密度机型，单机最高 720TB 原始存储容量。",
  },
  {
    icon: Shield,
    title: "企业级可靠性",
    description: "企业级硬盘 + 双控冗余 + 双路供电，保障业务连续性。",
  },
  {
    icon: Network,
    title: "25GbE 高速网络",
    description: "标配 2×25GbE，可升级 100GbE，满足高吞吐传输需求。",
  },
  {
    icon: RefreshCw,
    title: "在线扩容",
    description: "支持不停机在线扩容，新增硬盘自动加入存储池。",
  },
  {
    icon: Headphones,
    title: "专业存储运维",
    description: "存储专业团队提供架构设计、数据迁移、性能调优服务。",
  },
];
