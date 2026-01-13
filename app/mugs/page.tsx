import Link from "next/link";

export default function MugsPage() {
  return (
    <main style={{ padding: "60px", textAlign: "center" }}>
      <h1 style={{ fontSize: "42px", marginBottom: "10px" }}>Mugs</h1>

      <p style={{ marginBottom: "40px", color: "#555" }}>
        Choose a mug style to continue
      </p>

      <div style={grid}>
        <Link href="/mugs/classic">
          <div style={card}>
            <div style={imageBox}>Classic</div>
            <h3>Classic Mug</h3>
            <p style={desc}>Simple. Timeless. Everyday use.</p>
          </div>
        </Link>

        <Link href="/mugs/journey">
          <div style={card}>
            <div style={imageBox}>Journey</div>
            <h3>Journey Mug</h3>
            <p style={desc}>Made for travel and movement.</p>
          </div>
        </Link>

        <Link href="/mugs/decorative">
          <div style={card}>
            <div style={imageBox}>Decorative</div>
            <h3>Decorative Mug</h3>
            <p style={desc}>Expression and visual presence.</p>
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
  background:
    "linear-gradient(135deg, #e5e5e5, #f5f5f5)",
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
