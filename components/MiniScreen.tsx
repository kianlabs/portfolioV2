import type { CSSProperties } from "react";

export type MiniScreenVariant = "brand" | "store" | "dashboard";

type MiniScreenProps = {
  variant: MiniScreenVariant;
  accent: string;
  url: string;
  className?: string;
};

const trafficDots = [
  { color: "#FF5F57" },
  { color: "#FEBC2E" },
  { color: "#28C840" },
];

function BrowserFrame({
  url,
  children,
}: {
  url: string;
  children: React.ReactNode;
}) {
  return (
    <div className="overflow-hidden rounded-t-[22px] border border-black/10 bg-white">
      <div className="flex h-9 items-center gap-2 border-b border-black/5 bg-[#F7F7F7] px-3.5">
        {trafficDots.map((dot) => (
          <span
            key={dot.color}
            className="h-2.5 w-2.5 rounded-full"
            style={{ backgroundColor: dot.color }}
          />
        ))}
        <div className="ml-2 flex h-5 flex-1 items-center rounded-md bg-[#ECEEF1] px-2.5">
          <span className="truncate text-[10px] text-[#8A8E98]">{url}</span>
        </div>
      </div>
      <div className="p-3">{children}</div>
    </div>
  );
}

const brandContentStyle: CSSProperties = {
  fontFamily: "sans-serif",
  color: "#235789",
};

function BrandScreen({ accent }: { accent: string }) {
  return (
    <div style={brandContentStyle}>
      <div className="flex items-center justify-between py-2">
        <div
          className="h-2.5 w-10 rounded-sm"
          style={{ backgroundColor: accent }}
        />
        <div className="flex gap-3">
          <div className="h-1.5 w-6 rounded-sm bg-[#D9DCE2]" />
          <div className="h-1.5 w-6 rounded-sm bg-[#D9DCE2]" />
          <div className="h-1.5 w-7 rounded-sm bg-[#D9DCE2]" />
        </div>
      </div>

      <div className="mt-4 grid grid-cols-[1.1fr_1fr] gap-3">
        <div>
          <div
            className="h-3 w-16 rounded-sm"
            style={{ backgroundColor: accent }}
          />
          <div className="mt-2.5 h-4 w-full rounded-sm bg-[#235789]" />
          <div className="mt-1.5 h-4 w-4/5 rounded-sm bg-[#235789]" />
          <div className="mt-2.5 h-2 w-full rounded-sm bg-[#D9DCE2]" />
          <div className="mt-1 h-2 w-3/4 rounded-sm bg-[#D9DCE2]" />
          <div
            className="mt-3 h-5 w-16 rounded-full"
            style={{ backgroundColor: accent }}
          />
        </div>
        <div
          className="flex h-full min-h-[92px] items-center justify-center rounded-lg opacity-20"
          style={{ backgroundColor: accent }}
        >
          <div className="h-8 w-8 rounded-full bg-white" style={{ opacity: 0.6 }} />
        </div>
      </div>
    </div>
  );
}

function StoreScreen({ accent }: { accent: string }) {
  const products = Array.from({ length: 4 });
  return (
    <div style={brandContentStyle}>
      <div className="flex items-center justify-between py-2">
        <div
          className="h-2.5 w-10 rounded-sm"
          style={{ backgroundColor: accent }}
        />
        <div className="flex gap-3">
          <div className="h-1.5 w-6 rounded-sm bg-[#D9DCE2]" />
          <div className="h-1.5 w-6 rounded-sm bg-[#D9DCE2]" />
        </div>
      </div>

      <div className="mt-3 grid grid-cols-2 gap-2.5">
        {products.map((_, i) => (
          <div key={i} className="rounded-md border border-black/5 p-2">
            <div
              className="flex h-12 items-center justify-center rounded-sm bg-[#F2F3F6]"
              style={{ color: accent }}
            >
              <div
                className="h-4 w-4 rounded-sm"
                style={{ backgroundColor: accent, opacity: 0.35 }}
              />
            </div>
            <div className="mt-1.5 h-1.5 w-3/4 rounded-sm bg-[#235789]" />
            <div
              className="mt-1 h-1.5 w-8 rounded-sm"
              style={{ backgroundColor: accent }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

function Chart({
  accent,
  points,
}: {
  accent: string;
  points: string;
}) {
  return (
    <svg
      viewBox="0 0 100 40"
      preserveAspectRatio="none"
      className="h-10 w-full"
      aria-hidden="true"
    >
      <polyline
        points={points}
        fill="none"
        stroke={accent}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const dashboardStats = [
  { label: "h-2.5 w-10", value: "30" },
  { label: "h-2.5 w-8", value: "70" },
  { label: "h-2.5 w-12", value: "50" },
];

function DashboardScreen({ accent }: { accent: string }) {
  return (
    <div style={brandContentStyle} className="flex gap-2.5">
      <div className="flex w-8 shrink-0 flex-col gap-2 py-1">
        <div
          className="h-2.5 w-5 rounded-sm"
          style={{ backgroundColor: accent }}
        />
        <div className="h-2 w-5 rounded-sm bg-[#D9DCE2]" />
        <div className="h-2 w-5 rounded-sm bg-[#D9DCE2]" />
        <div className="h-2 w-5 rounded-sm bg-[#D9DCE2]" />
        <div className="h-2 w-5 rounded-sm bg-[#D9DCE2]" />
      </div>

      <div className="flex-1">
        <div className="grid grid-cols-3 gap-2">
          {dashboardStats.map((stat, i) => (
            <div key={i} className="rounded-md border border-black/5 p-2">
              <div
                className={`rounded-sm bg-[#EEF0F3] ${stat.label}`}
              />
              <div
                className="mt-1.5 text-sm font-bold"
                style={{ color: accent }}
              >
                {stat.value}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-2.5 rounded-md border border-black/5 p-2">
          <div className="h-1.5 w-12 rounded-sm bg-[#D9DCE2]" />
          <div className="mt-2">
            <Chart accent={accent} points="0,32 20,24 40,27 60,14 80,18 100,6" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function MiniScreen({
  variant,
  accent,
  url,
  className = "",
}: MiniScreenProps) {
  let screen: React.ReactNode;

  if (variant === "brand") {
    screen = <BrandScreen accent={accent} />;
  } else if (variant === "store") {
    screen = <StoreScreen accent={accent} />;
  } else {
    screen = <DashboardScreen accent={accent} />;
  }

  return (
    <div className={`flex flex-col ${className}`}>
      <BrowserFrame url={url}>{screen}</BrowserFrame>
    </div>
  );
}
