import Link from "next/link";

export default function MugsPage() {
  return (
    <main style={{ padding: "60px", textAlign: "center" }}>
      <h1 style={{ fontSize: "40px", marginBottom: "10px" }}>
        Choose Your Mug
      </h1>

      <p style={{ marginBottom: "40px", fontSize: "16px" }}>
        Select a mug style to continue
      </p>

      <div style={grid}>
        <Link href="/mugs/classic">
          <div style={card}>Classic Mug</div>
        </Link>

        <Link href="/mugs/journey">
          <div style={card}>Journey Mug</div>
        </Link>

        <Link href="/mugs/decorative">
          <div style={card}>Decorative Mug</div>
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
  width: "220px",
  padding: "50px 30px",
  border: "1px solid #ccc",
  borderRadius: "16px",
  fontSize: "18px",
  cursor: "pointer",
  transition: "0.2s",
};
