import Link from "next/link";

export default function JourneyMugPage() {
  return (
    <main style={{ padding: "60px", maxWidth: "900px", margin: "0 auto" }}>
      <h1 style={{ fontSize: "42px", marginBottom: "10px" }}>
        Journey Mug
      </h1>

      <p style={{ marginBottom: "30px", fontSize: "16px", color: "#555" }}>
        Designed for movement, memories, and long days. A mug that travels with you.
      </p>

      {/* Product Preview */}
      <div style={previewBox}>
        <p style={{ color: "#888" }}>[ Journey Mug Preview Image ]</p>
      </div>

      {/* Options */}
      <div style={{ marginTop: "40px" }}>
        <h3 style={{ marginBottom: "15px" }}>Choose an option</h3>

        <div style={buttonRow}>
          <Link href="/checkout">
            <div style={primaryButton}>Buy as it is</div>
          </Link>

          <div style={secondaryButton}>
            Customize
          </div>
        </div>
      </div>

      {/* Info */}
      <div style={{ marginTop: "50px", fontSize: "14px", color: "#666" }}>
        Customization tools will appear here, allowing you to add personal text,
        images, or artwork that travels with you.
      </div>
    </main>
  );
}

const previewBox = {
  height: "300px",
  border: "1px dashed #ccc",
  borderRadius: "16px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  marginBottom: "30px",
};

const buttonRow = {
  display: "flex",
  gap: "20px",
  flexWrap: "wrap" as const,
};

const primaryButton = {
  padding: "16px 28px",
  backgroundColor: "#000",
  color: "#fff",
  borderRadius: "12px",
  cursor: "pointer",
  fontSize: "16px",
};

const secondaryButton = {
  padding: "16px 28px",
  border: "1px solid #000",
  borderRadius: "12px",
  cursor: "pointer",
  fontSize: "16px",
};
