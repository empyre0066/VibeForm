export default function Hero() {
  return (
    <div style={{ padding: "100px", textAlign: "center" }}>
      <h1 style={{ fontSize: "40px", fontWeight: "bold" }}>
        Design Products Your Way
      </h1>

      <p style={{ marginTop: "20px", color: "#555" }}>
        Customize products with text, images, and colors.
      </p>

      <button
        style={{
          marginTop: "30px",
          padding: "12px 24px",
          backgroundColor: "#4f46e5",
          color: "white",
          borderRadius: "10px",
          border: "none",
          cursor: "pointer",
        }}
      >
        Start Customizing
      </button>
    </div>
  );
}
