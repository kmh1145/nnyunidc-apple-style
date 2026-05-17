export type ServerType = "rack" | "blade" | "gpu" | "tower";

export interface ConfigOption {
  id: string;
  label: string;
  description?: string;
  price: number;
  available?: boolean;
}

export interface ConfigCategory {
  id: string;
  title: string;
  description: string;
  options: ConfigOption[];
}

export interface ServerConfig {
  type: ServerType;
  name: string;
  tagline: string;
  basePrice: number;
  categories: ConfigCategory[];
}

export const SERVER_CONFIGS: Record<ServerType, ServerConfig> = {
  rack: {
    type: "rack",
    name: "Rack Server X1",
    tagline: "2U 机架式服务器",
    basePrice: 89999,
    categories: [
      {
        id: "processor",
        title: "处理器",
        description: "选择适合你工作负载的处理器配置",
        options: [
          {
            id: "xeon-6-32c",
            label: "Intel Xeon 6 · 32 核",
            description: "适合中等规模工作负载",
            price: 0,
          },
          {
            id: "xeon-6-64c",
            label: "Intel Xeon 6 · 64 核",
            description: "适合高密度计算任务",
            price: 12000,
          },
          {
            id: "xeon-6-128c",
            label: "Intel Xeon 6 · 128 核",
            description: "适合大规模并行计算",
            price: 28000,
          },
        ],
      },
      {
        id: "dual-cpu",
        title: "双路处理器",
        description: "添加第二个处理器以获得双倍性能",
        options: [
          {
            id: "single",
            label: "单路配置",
            price: 0,
          },
          {
            id: "dual",
            label: "双路配置",
            description: "双处理器，适合虚拟化和数据库",
            price: 35000,
          },
        ],
      },
      {
        id: "memory",
        title: "内存",
        description: "ECC DDR5 内存，支持错误纠正",
        options: [
          { id: "64gb", label: "64GB DDR5 ECC", price: 0 },
          { id: "128gb", label: "128GB DDR5 ECC", price: 4800 },
          { id: "256gb", label: "256GB DDR5 ECC", price: 12000 },
          { id: "512gb", label: "512GB DDR5 ECC", price: 28000 },
          { id: "1tb", label: "1TB DDR5 ECC", price: 62000 },
        ],
      },
      {
        id: "storage",
        title: "存储",
        description: "NVMe U.2 固态硬盘",
        options: [
          { id: "2x1tb", label: "2× 1TB NVMe", price: 0 },
          { id: "4x1tb", label: "4× 1TB NVMe", price: 6000 },
          { id: "4x2tb", label: "4× 2TB NVMe", price: 14000 },
          { id: "8x2tb", label: "8× 2TB NVMe", price: 32000 },
          { id: "8x4tb", label: "8× 4TB NVMe", price: 56000 },
        ],
      },
      {
        id: "network",
        title: "网络",
        description: "高速网络接口",
        options: [
          { id: "2x25gbe", label: "2× 25GbE", price: 0 },
          { id: "2x100gbe", label: "2× 100GbE", price: 8000 },
          { id: "2x100gbe-2x25gbe", label: "2× 100GbE + 2× 25GbE", price: 14000 },
        ],
      },
      {
        id: "power",
        title: "电源",
        description: "冗余电源配置",
        options: [
          { id: "1x1600w", label: "1× 1600W", price: 0 },
          { id: "2x1600w", label: "2× 1600W 冗余", price: 3500 },
        ],
      },
    ],
  },
  blade: {
    type: "blade",
    name: "Blade Server B8",
    tagline: "8 节点刀片服务器",
    basePrice: 169999,
    categories: [
      {
        id: "node-count",
        title: "节点数量",
        description: "选择刀片节点数量",
        options: [
          { id: "4-nodes", label: "4 节点", price: 0 },
          { id: "6-nodes", label: "6 节点", price: 42000 },
          { id: "8-nodes", label: "8 节点", price: 84000 },
        ],
      },
      {
        id: "processor",
        title: "每节点处理器",
        description: "每个刀片节点的处理器配置",
        options: [
          {
            id: "xeon-6-32c",
            label: "Intel Xeon 6 · 32 核",
            price: 0,
          },
          {
            id: "xeon-6-64c",
            label: "Intel Xeon 6 · 64 核",
            price: 8000,
          },
        ],
      },
      {
        id: "memory-per-node",
        title: "每节点内存",
        description: "每个节点的内存容量",
        options: [
          { id: "64gb", label: "64GB DDR5 ECC", price: 0 },
          { id: "128gb", label: "128GB DDR5 ECC", price: 3200 },
          { id: "256gb", label: "256GB DDR5 ECC", price: 8000 },
        ],
      },
      {
        id: "storage-per-node",
        title: "每节点存储",
        description: "每个节点的本地存储",
        options: [
          { id: "1x1tb", label: "1× 1TB NVMe", price: 0 },
          { id: "2x1tb", label: "2× 1TB NVMe", price: 2000 },
          { id: "2x2tb", label: "2× 2TB NVMe", price: 5000 },
        ],
      },
      {
        id: "fabric",
        title: "互联网络",
        description: "节点间高速互联",
        options: [
          { id: "100gbe", label: "100GbE", price: 0 },
          { id: "200gbe", label: "200GbE", price: 18000 },
        ],
      },
      {
        id: "power",
        title: "电源",
        description: "共享电源模块",
        options: [
          { id: "4x3000w", label: "4× 3000W", price: 0 },
          { id: "6x3000w", label: "6× 3000W 冗余", price: 12000 },
        ],
      },
    ],
  },
  gpu: {
    type: "gpu",
    name: "GPU Server G4",
    tagline: "4 GPU 加速服务器",
    basePrice: 249999,
    categories: [
      {
        id: "processor",
        title: "处理器",
        description: "主处理器配置",
        options: [
          {
            id: "xeon-6-64c",
            label: "Intel Xeon 6 · 64 核",
            price: 0,
          },
          {
            id: "xeon-6-128c",
            label: "Intel Xeon 6 · 128 核",
            price: 18000,
          },
        ],
      },
      {
        id: "gpu",
        title: "GPU 加速卡",
        description: "NVIDIA 数据中心 GPU",
        options: [
          {
            id: "4xa100-40gb",
            label: "4× NVIDIA A100 40GB",
            description: "适合推理和中等规模训练",
            price: 0,
          },
          {
            id: "4xa100-80gb",
            label: "4× NVIDIA A100 80GB",
            description: "大模型训练首选",
            price: 48000,
          },
          {
            id: "4xh100-80gb",
            label: "4× NVIDIA H100 80GB",
            description: "最新架构，极致性能",
            price: 120000,
          },
          {
            id: "4xh200-141gb",
            label: "4× NVIDIA H200 141GB",
            description: "超大显存，适合万亿参数模型",
            price: 240000,
          },
        ],
      },
      {
        id: "memory",
        title: "系统内存",
        description: "DDR5 ECC 系统内存",
        options: [
          { id: "256gb", label: "256GB DDR5 ECC", price: 0 },
          { id: "512gb", label: "512GB DDR5 ECC", price: 14000 },
          { id: "1tb", label: "1TB DDR5 ECC", price: 34000 },
          { id: "2tb", label: "2TB DDR5 ECC", price: 78000 },
        ],
      },
      {
        id: "storage",
        title: "存储",
        description: "高速 NVMe 存储",
        options: [
          { id: "4x2tb", label: "4× 2TB NVMe", price: 0 },
          { id: "8x2tb", label: "8× 2TB NVMe", price: 18000 },
          { id: "8x4tb", label: "8× 4TB NVMe", price: 42000 },
        ],
      },
      {
        id: "network",
        title: "网络",
        description: "高速互联网络",
        options: [
          {
            id: "2x100gbe",
            label: "2× 100GbE",
            price: 0,
          },
          {
            id: "4x400gbe-infiniband",
            label: "4× 400GbE InfiniBand",
            description: "GPU 直连高速互联",
            price: 32000,
          },
        ],
      },
      {
        id: "power",
        title: "电源",
        description: "高功率冗余电源",
        options: [
          { id: "4x2400w", label: "4× 2400W", price: 0 },
          { id: "4x3000w", label: "4× 3000W 冗余", price: 8000 },
        ],
      },
    ],
  },
  tower: {
    type: "tower",
    name: "Tower Server T2",
    tagline: "静音塔式服务器",
    basePrice: 59999,
    categories: [
      {
        id: "processor",
        title: "处理器",
        description: "选择处理器配置",
        options: [
          {
            id: "xeon-6-16c",
            label: "Intel Xeon 6 · 16 核",
            price: 0,
          },
          {
            id: "xeon-6-32c",
            label: "Intel Xeon 6 · 32 核",
            price: 6000,
          },
          {
            id: "xeon-6-64c",
            label: "Intel Xeon 6 · 64 核",
            price: 16000,
          },
        ],
      },
      {
        id: "memory",
        title: "内存",
        description: "ECC DDR5 内存",
        options: [
          { id: "32gb", label: "32GB DDR5 ECC", price: 0 },
          { id: "64gb", label: "64GB DDR5 ECC", price: 2400 },
          { id: "128gb", label: "128GB DDR5 ECC", price: 6000 },
          { id: "256gb", label: "256GB DDR5 ECC", price: 14000 },
        ],
      },
      {
        id: "storage",
        title: "存储",
        description: "NVMe 固态硬盘",
        options: [
          { id: "1x1tb", label: "1× 1TB NVMe", price: 0 },
          { id: "2x1tb", label: "2× 1TB NVMe", price: 3000 },
          { id: "2x2tb", label: "2× 2TB NVMe", price: 7000 },
          { id: "4x2tb", label: "4× 2TB NVMe", price: 16000 },
        ],
      },
      {
        id: "network",
        title: "网络",
        description: "网络接口",
        options: [
          { id: "2x10gbe", label: "2× 10GbE", price: 0 },
          { id: "2x25gbe", label: "2× 25GbE", price: 4000 },
        ],
      },
      {
        id: "power",
        title: "电源",
        description: "电源配置",
        options: [
          { id: "1x850w", label: "1× 850W", price: 0 },
          { id: "2x850w", label: "2× 850W 冗余", price: 2500 },
        ],
      },
    ],
  },
};

export function calculateTotalPrice(
  serverType: ServerType,
  selections: Record<string, string>
): number {
  const config = SERVER_CONFIGS[serverType];
  let total = config.basePrice;

  for (const category of config.categories) {
    const selectedId = selections[category.id];
    if (selectedId) {
      const option = category.options.find((o) => o.id === selectedId);
      if (option) {
        total += option.price;
      }
    }
  }

  return total;
}

export function formatPrice(price: number): string {
  return `¥${price.toLocaleString("zh-CN")}`;
}
