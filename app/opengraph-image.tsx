import { ImageResponse } from "next/og";

export const alt =
  "Kyan Labs — Website & Digital Experiences";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#235789",
          color: "#FDFFFC",
          padding: "72px",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              fontSize: 32,
              fontWeight: 700,
            }}
          >
            Kyan Labs.
          </div>

          <div
            style={{
              width: 18,
              height: 18,
              borderRadius: 999,
              background: "#F1D302",
            }}
          />
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div
            style={{
              fontSize: 24,
              color: "#F1D302",
              marginBottom: 22,
              textTransform: "uppercase",
              letterSpacing: "0.08em",
            }}
          >
            Digital Experience
          </div>

          <div
            style={{
              fontSize: 78,
              lineHeight: 0.95,
              letterSpacing: "-0.05em",
              fontWeight: 700,
              maxWidth: 940,
            }}
          >
            Website & digital products for modern businesses.
          </div>

          <div
            style={{
              marginTop: 34,
              fontSize: 25,
              color: "#B4B6BE",
            }}
          >
            Design · Development · Web Application
          </div>
        </div>

        <div
          style={{
            display: "flex",
            gap: 14,
          }}
        >
          <div
            style={{
              height: 8,
              width: 100,
              borderRadius: 999,
              background: "#C1292E",
            }}
          />

          <div
            style={{
              height: 8,
              width: 70,
              borderRadius: 999,
              background: "#235789",
            }}
          />

          <div
            style={{
              height: 8,
              width: 45,
              borderRadius: 999,
              background: "#F1D302",
            }}
          />
        </div>
      </div>
    ),
    {
      ...size,
    },
  );
}

