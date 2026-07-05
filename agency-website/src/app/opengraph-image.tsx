import { ImageResponse } from "next/og";

export const alt = "RI Software — a software studio for products that ship";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Required for `output: export` — render the card once at build time.
export const dynamic = "force-static";

// Editorial share card, rendered at build time. No external assets.
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px",
          background: "#f4f0e9",
          color: "#191510",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontFamily: "monospace",
            fontSize: 22,
            letterSpacing: 4,
            textTransform: "uppercase",
            color: "#5f574b",
          }}
        >
          <span>RI Software</span>
          <span>Est. 2019</span>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: 84,
              lineHeight: 1.02,
              letterSpacing: -2,
              fontWeight: 600,
              maxWidth: 900,
            }}
          >
            We build the software your business actually runs on.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            borderTop: "2px solid #d8cfbe",
            paddingTop: 28,
            fontSize: 26,
            color: "#5f574b",
          }}
        >
          <span>Web platforms · Mobile apps · AI automation</span>
          <span style={{ color: "#b4432b", fontWeight: 700 }}>risoftware.agency</span>
        </div>
      </div>
    ),
    { ...size },
  );
}
