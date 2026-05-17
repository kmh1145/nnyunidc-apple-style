export type ServerType = "rack" | "blade" | "tower" | "gpu" | "vps" | "storage";

interface ServerSVGProps {
  type: ServerType;
  className?: string;
  dark?: boolean;
}

function RackServer({ dark }: { dark?: boolean }) {
  const fill = dark ? "#3a3a3c" : "#e8e8ed";
  const accent = dark ? "#4a4a4c" : "#d2d2d7";
  const detail = dark ? "#555557" : "#bdbdc2";
  const led = "#00cc66";

  return (
    <svg viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Main chassis */}
      <rect x="40" y="60" width="320" height="180" rx="8" fill={fill} />
      {/* Top panel */}
      <rect x="40" y="60" width="320" height="24" rx="8" fill={accent} />
      <rect x="40" y="76" width="320" height="8" fill={accent} />
      {/* Ventilation grille */}
      {Array.from({ length: 8 }).map((_, i) => (
        <rect
          key={`grille-${i}`}
          x={80 + i * 30}
          y="64"
          width="16"
          height="14"
          rx="2"
          fill={detail}
        />
      ))}
      {/* Drive bays - 3 rows of 4 */}
      {Array.from({ length: 3 }).map((_, row) =>
        Array.from({ length: 4 }).map((_, col) => (
          <g key={`bay-${row}-${col}`}>
            <rect
              x={60 + col * 76}
              y={100 + row * 40}
              width="64"
              height="32"
              rx="4"
              fill={accent}
            />
            <rect
              x={64 + col * 76}
              y={104 + row * 40}
              width="56"
              height="24"
              rx="2"
              fill={detail}
            />
            {/* LED indicator */}
            <circle
              cx={112 + col * 76}
              cy={116 + row * 40}
              r="3"
              fill={led}
              opacity="0.8"
            />
          </g>
        ))
      )}
      {/* Front panel line */}
      <line x1="40" y1="84" x2="360" y2="84" stroke={detail} strokeWidth="1" />
      {/* Power button */}
      <circle cx="340" cy="72" r="6" fill={detail} stroke={dark ? "#666" : "#aaa"} strokeWidth="1" />
    </svg>
  );
}

function BladeServer({ dark }: { dark?: boolean }) {
  const fill = dark ? "#3a3a3c" : "#e8e8ed";
  const accent = dark ? "#4a4a4c" : "#d2d2d7";
  const detail = dark ? "#555557" : "#bdbdc2";
  const led = "#00cc66";
  const nodeFill = dark ? "#2e2e30" : "#f5f5f7";

  return (
    <svg viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Chassis */}
      <rect x="30" y="50" width="340" height="200" rx="8" fill={fill} />
      {/* Chassis top bar */}
      <rect x="30" y="50" width="340" height="20" rx="8" fill={accent} />
      <rect x="30" y="62" width="340" height="8" fill={accent} />
      {/* Blade nodes - 4 per row, 2 rows */}
      {Array.from({ length: 2 }).map((_, row) =>
        Array.from({ length: 4 }).map((_, col) => (
          <g key={`node-${row}-${col}`}>
            <rect
              x={46 + col * 80}
              y={86 + row * 76}
              width="68"
              height="64"
              rx="4"
              fill={nodeFill}
              stroke={detail}
              strokeWidth="1"
            />
            {/* Node face */}
            <rect
              x={50 + col * 80}
              y={90 + row * 76}
              width="60"
              height="56"
              rx="2"
              fill={accent}
            />
            {/* Ventilation slots */}
            {Array.from({ length: 5 }).map((_, s) => (
              <rect
                key={`slot-${s}`}
                x={56 + col * 80}
                y={100 + s * 8 + row * 76}
                width="48"
                height="3"
                rx="1"
                fill={detail}
              />
            ))}
            {/* LED */}
            <circle
              cx={102 + col * 80}
              cy={96 + row * 76}
              r="2.5"
              fill={led}
              opacity="0.9"
            />
            {/* Handle */}
            <rect
              x={54 + col * 80}
              y={94 + row * 76}
              width="24"
              height="4"
              rx="2"
              fill={detail}
            />
          </g>
        ))
      )}
      {/* Backplane indicators */}
      {Array.from({ length: 6 }).map((_, i) => (
        <circle
          key={`bp-${i}`}
          cx={80 + i * 50}
          cy="240"
          r="3"
          fill={i < 4 ? led : detail}
          opacity="0.7"
        />
      ))}
    </svg>
  );
}

function GpuServer({ dark }: { dark?: boolean }) {
  const fill = dark ? "#3a3a3c" : "#e8e8ed";
  const accent = dark ? "#4a4a4c" : "#d2d2d7";
  const detail = dark ? "#555557" : "#bdbdc2";
  const gpuFill = dark ? "#1a6b3c" : "#2d8a4e";
  const gpuAccent = dark ? "#1e7a42" : "#34a058";
  const led = "#00cc66";

  return (
    <svg viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Main chassis */}
      <rect x="30" y="50" width="340" height="200" rx="8" fill={fill} />
      {/* Top bar */}
      <rect x="30" y="50" width="340" height="22" rx="8" fill={accent} />
      <rect x="30" y="64" width="340" height="8" fill={accent} />
      {/* GPU cards - 4 GPUs */}
      {Array.from({ length: 4 }).map((_, i) => (
        <g key={`gpu-${i}`}>
          {/* GPU card */}
          <rect
            x={50 + i * 82}
            y={90}
            width="70"
            height="100"
            rx="4"
            fill={gpuFill}
          />
          {/* GPU shroud */}
          <rect
            x={54 + i * 82}
            y={94}
            width="62"
            height="92"
            rx="2"
            fill={gpuAccent}
          />
          {/* GPU fan */}
          <circle
            cx={85 + i * 82}
            cy={120}
            r="18"
            fill={dark ? "#16603a" : "#268048"}
            stroke={dark ? "#1a7040" : "#30a050"}
            strokeWidth="1"
          />
          <circle
            cx={85 + i * 82}
            cy={120}
            r="8"
            fill={dark ? "#1a6b3c" : "#2d8a4e"}
          />
          {/* GPU connector */}
          <rect
            x={60 + i * 82}
            y={182}
            width="50"
            height="4"
            rx="1"
            fill={detail}
          />
          {/* GPU memory chips */}
          {Array.from({ length: 3 }).map((_, m) => (
            <rect
              key={`mem-${m}`}
              x={58 + i * 82 + m * 18}
              y={152}
              width="14"
              height="8"
              rx="1"
              fill={dark ? "#16603a" : "#268048"}
            />
          ))}
        </g>
      ))}
      {/* Front panel */}
      <rect x="30" y="200" width="340" height="50" rx="0" fill={accent} />
      <rect x="30" y="242" width="340" height="8" rx="0" ry="0" fill={accent} />
      {/* Drive bays in front */}
      {Array.from({ length: 8 }).map((_, i) => (
        <rect
          key={`drive-${i}`}
          x={44 + i * 40}
          y={206}
          width="30"
          height="28"
          rx="3"
          fill={detail}
        />
      ))}
      {/* Status LEDs */}
      {Array.from({ length: 4 }).map((_, i) => (
        <circle
          key={`status-${i}`}
          cx={350}
          cy={100 + i * 25}
          r="3"
          fill={led}
          opacity="0.8"
        />
      ))}
    </svg>
  );
}

function TowerServer({ dark }: { dark?: boolean }) {
  const fill = dark ? "#3a3a3c" : "#e8e8ed";
  const accent = dark ? "#4a4a4c" : "#d2d2d7";
  const detail = dark ? "#555557" : "#bdbdc2";
  const led = "#00cc66";

  return (
    <svg viewBox="0 0 300 400" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Main chassis */}
      <rect x="50" y="30" width="200" height="340" rx="10" fill={fill} />
      {/* Top panel */}
      <rect x="50" y="30" width="200" height="30" rx="10" fill={accent} />
      <rect x="50" y="50" width="200" height="10" fill={accent} />
      {/* Ventilation grille top */}
      {Array.from({ length: 7 }).map((_, i) => (
        <rect
          key={`top-grille-${i}`}
          x={70 + i * 22}
          y="36"
          width="14"
          height="16"
          rx="2"
          fill={detail}
        />
      ))}
      {/* Drive bays */}
      {Array.from({ length: 4 }).map((_, i) => (
        <g key={`bay-${i}`}>
          <rect
            x={70}
            y={80 + i * 44}
            width="160"
            height="36"
            rx="4"
            fill={accent}
          />
          <rect
            x={74}
            y={84 + i * 44}
            width="152"
            height="28"
            rx="2"
            fill={detail}
          />
          <circle
            cx={220}
            cy={98 + i * 44}
            r="3"
            fill={led}
            opacity="0.8"
          />
        </g>
      ))}
      {/* Optical bay */}
      <rect x="70" y="260" width="160" height="20" rx="3" fill={accent} />
      {/* Front USB / IO */}
      <rect x="70" y="296" width="40" height="12" rx="2" fill={detail} />
      <rect x="120" y="296" width="40" height="12" rx="2" fill={detail} />
      {/* Power button */}
      <circle cx="220" cy="302" r="8" fill={detail} stroke={dark ? "#666" : "#aaa"} strokeWidth="1.5" />
      <circle cx="220" cy="302" r="3" fill={led} opacity="0.6" />
      {/* Brand accent line */}
      <rect x="50" y="330" width="200" height="3" fill={dark ? "#0066cc" : "#0066cc"} opacity="0.4" />
    </svg>
  );
}

function VpsCloud({ dark }: { dark?: boolean }) {
  const fill = dark ? "#3a3a3c" : "#e8e8ed";
  const accent = dark ? "#4a4a4c" : "#d2d2d7";
  const cloudFill = dark ? "#2a5a8a" : "#4a9aea";
  const cloudLight = dark ? "#3a6a9a" : "#6ab0f0";
  const serverFill = dark ? "#2e2e30" : "#f0f0f5";
  const led = "#00cc66";

  return (
    <svg viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Cloud shape */}
      <ellipse cx="200" cy="100" rx="120" ry="60" fill={cloudFill} />
      <ellipse cx="160" cy="90" rx="70" ry="50" fill={cloudLight} />
      <ellipse cx="240" cy="85" rx="60" ry="45" fill={cloudLight} />
      <ellipse cx="200" cy="80" rx="80" ry="40" fill={cloudFill} opacity="0.6" />

      {/* Connection lines */}
      <line x1="160" y1="150" x2="120" y2="200" stroke={accent} strokeWidth="2" strokeDasharray="4 2" />
      <line x1="200" y1="155" x2="200" y2="200" stroke={accent} strokeWidth="2" strokeDasharray="4 2" />
      <line x1="240" y1="150" x2="280" y2="200" stroke={accent} strokeWidth="2" strokeDasharray="4 2" />

      {/* Server nodes */}
      {[100, 180, 260].map((x, i) => (
        <g key={`node-${i}`}>
          <rect x={x} y={200} width="80" height="50" rx="6" fill={serverFill} stroke={accent} strokeWidth="1" />
          <rect x={x + 8} y={208} width="64" height="34" rx="3" fill={fill} />
          <circle cx={x + 68} cy={215} r="3" fill={led} opacity="0.8" />
          {/* Server slots */}
          {Array.from({ length: 3 }).map((_, s) => (
            <rect key={`slot-${s}`} x={x + 14 + s * 18} y={214} width="12" height="20" rx="1" fill={accent} />
          ))}
        </g>
      ))}

      {/* Virtualization indicator */}
      <rect x="140" y="160" width="120" height="24" rx="12" fill={cloudFill} opacity="0.8" />
      <text x="200" y="176" textAnchor="middle" fill="white" fontSize="11" fontWeight="600">VIRTUAL</text>
    </svg>
  );
}

function StorageArray({ dark }: { dark?: boolean }) {
  const fill = dark ? "#3a3a3c" : "#e8e8ed";
  const accent = dark ? "#4a4a4c" : "#d2d2d7";
  const detail = dark ? "#555557" : "#bdbdc2";
  const diskFill = dark ? "#1a4a6a" : "#2a7aaa";
  const diskLight = dark ? "#2a5a7a" : "#3a8aba";
  const led = "#00cc66";
  const ledBlue = "#3399ff";

  return (
    <svg viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Main chassis */}
      <rect x="40" y="40" width="320" height="220" rx="8" fill={fill} />
      {/* Top panel */}
      <rect x="40" y="40" width="320" height="22" rx="8" fill={accent} />
      <rect x="40" y="54" width="320" height="8" fill={accent} />

      {/* Drive bays - 4 rows of 6 */}
      {Array.from({ length: 4 }).map((_, row) =>
        Array.from({ length: 6 }).map((_, col) => (
          <g key={`disk-${row}-${col}`}>
            <rect
              x={56 + col * 50}
              y={76 + row * 44}
              width="40"
              height="36"
              rx="3"
              fill={row < 2 ? diskFill : diskLight}
            />
            {/* Disk face */}
            <rect
              x={60 + col * 50}
              y={80 + row * 44}
              width="32"
              height="28"
              rx="2"
              fill={dark ? "#1a5a7a" : "#2a8aba"}
            />
            {/* Disk handle */}
            <rect
              x={66 + col * 50}
              y={82 + row * 44}
              width="20"
              height="4"
              rx="2"
              fill={detail}
            />
            {/* Activity LED */}
            <circle
              cx={90 + col * 50}
              cy={100 + row * 44}
              r="2"
              fill={row === 0 && col < 3 ? led : ledBlue}
              opacity="0.8"
            />
          </g>
        ))
      )}

      {/* Controller section */}
      <rect x="40" y="252" width="320" height="8" rx="0" fill={accent} />
      {/* Status indicators */}
      {Array.from({ length: 4 }).map((_, i) => (
        <circle
          key={`status-${i}`}
          cx={340}
          cy={48 + i * 6}
          r="2"
          fill={i < 2 ? led : detail}
          opacity="0.7"
        />
      ))}
    </svg>
  );
}

export default function ServerSVG({ type, className = "", dark = false }: ServerSVGProps) {
  const components: Record<ServerType, React.ComponentType<{ dark?: boolean }>> = {
    rack: RackServer,
    blade: BladeServer,
    gpu: GpuServer,
    tower: TowerServer,
    vps: VpsCloud,
    storage: StorageArray,
  };

  const Component = components[type];

  return (
    <div className={`product-shadow ${className}`}>
      <Component dark={dark} />
    </div>
  );
}
