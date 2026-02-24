import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { messages } from "@/lib/messages";

export const alt = "La Baie | 洗練されたフレンチレストラン";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const PRIMARY = "oklch(0.94 0.02 85)";
const BORDER_PRIMARY_20 = "rgba(250, 248, 242, 0.2)";

export default async function Image() {
  const cwd = process.cwd();
  const [bgJpegBase64, logoSvg] = await Promise.all([
    readFile(join(cwd, "public/images/39.jpg"), "base64"),
    readFile(join(cwd, "public/images/logo-vertical.svg"), "utf-8"),
  ]);
  const bgDataUrl = `data:image/jpeg;base64,${bgJpegBase64}`;
  const logoDataUrl = `data:image/svg+xml;base64,${Buffer.from(logoSvg, "utf-8").toString("base64")}`;
  const subtitle = messages.restaurant.hero.subtitle;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Background */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
          }}
        >
          <img
            src={bgDataUrl}
            alt=""
            width={1200}
            height={630}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </div>
        {/* Gradient overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to bottom, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.35) 50%, rgba(0,0,0,0.5) 100%)",
          }}
        />
        {/* Vignette */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(circle at center, transparent 0%, rgba(0,0,0,0.4) 100%)",
          }}
        />
        {/* Border frame */}
        <div
          style={{
            position: "absolute",
            inset: 32,
            border: `1px solid ${BORDER_PRIMARY_20}`,
          }}
        />
        {/* Content: logo + subtitle */}
        <div
          style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: 32,
            padding: 48,
            textAlign: "center",
          }}
        >
          <img
            src={logoDataUrl}
            alt="La Baie"
            width={300}
            height={300}
            style={{
              width: 300,
              height: 300,
              objectFit: "contain",
            }}
          />
          <p
            style={{
              fontSize: 22,
              color: PRIMARY,
              lineHeight: 1.6,
              maxWidth: 800,
              whiteSpace: "pre-line",
              margin: 0,
              fontWeight: 300,
              letterSpacing: "0.02em",
            }}
          >
            {subtitle}
          </p>
        </div>
      </div>
    ),
    { ...size }
  );
}
