import Link from "next/link";

export default function ArtPage() {
  return (
    <main style={{ padding: "60px", textAlign: "center" }}>
      <h1 style={{ fontSize: "42px", marginBottom: "10px" }}>
        Art
      </h1>

      <p style={{ marginBottom: "40px", color: "#555" }}>
        Choose a category to continue
      </p>

      <div style={grid}>
        <Link href="/art/canvas">
          <div style={card}>
            <div style={imageBox}>Canvas</div>
            <h3>Canvas</h3>
            <p style={desc}>Ideas brought to surface.</p>
          </div>
        </Link>

        <Link href="/art/paintings">
          <div style={card}>
            <div style={imageBox}>Paintings</div>
            <h3>Paintings</h3>
            <p style={desc}>Emotion in color and form.</p>
          </div>
        </Link>

        <Link href="/art/quotes">
          <div style={card}>
            <div style={imageBox}>Quotes</div>
            <h3>Quotes</h3>
            <p style={desc}>Words that stay.</p>
          </div>
        </Link>
      </div>
    </main>
  );
}

const grid = {
  display: "flex",
  justifyContent: "center",
  gap: "30px",
  flexWrap: "wrap" as const,
};

const card = {
  width: "260px",
  padding: "30px",
  border: "1px solid #ccc",
  borderRadius: "20px",
  cursor: "pointer",
  textAlign: "center" as const,
};

const imageBox = {
  height: "180px",
  borderRadius: "14px",
  background: "linear-gradient(135deg, #ececec, #f8f8f8)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "20px",
  fontWeight: "600",
  color: "#555",
  marginBottom: "15px",
};

const desc = {
  fontSize: "14px",
  color: "#666",
};
