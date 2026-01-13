import Link from "next/link";

export default function HomePage() {
  return (
    <main style={{ padding: "60px", maxWidth: "1100px", margin: "0 auto" }}>
      
      {/* HEADER */}
      <section style={{ textAlign: "center", marginBottom: "80px" }}>
        <h1 style={{ fontSize: "52px", marginBottom: "10px" }}>
          VibeForm
        </h1>

        <p style={{ fontSize: "16px", color: "#555" }}>
          Where imagination becomes real
        </p>
      </section>

      {/* WHO WE ARE */}
      <section style={{ marginBottom: "80px" }}>
        <h2 style={{ fontSize: "28px", marginBottom: "20px" }}>
          Who We Are
        </h2>

        <p style={{ fontSize: "16px", lineHeight: "1.7", color: "#444" }}>
          Custome Shop is built for everyone who feel the urge to create their ideas a place to exist.
          It speaks to those who recognize that imagination is not meant to be trap in your mind,
          but to move outward and take form. The platform offers an art of speaking your mind where
          thoughts and intention becomes visible, simply reflects your true self or simply say what
          cant be said. Each creation carries a sense of authorship, something personal yet shareable,
          inviting conversation and connections to loved ones. Custome Shop is an easy platform where
          you do not required any customizing skill to bring your thoughts into physical form.
          What begins as a private idea in your mind often becomes something worth sharing.
        </p>
      </section>

      {/* PRODUCTS */}
      <section>
        <h2 style={{ fontSize: "28px", marginBottom: "30px" }}>
          Products
        </h2>

        <div style={grid}>
          <Link href="/clothing">
            <div style={card}>
              <div style={imageBox}>Clothing</div>
              <h3>Clothing</h3>
              <p style={desc}>Wear your thoughts</p>
            </div>
          </Link>

          <Link href="/mugs">
            <div style={card}>
              <div style={imageBox}>Mugs</div>
              <h3>Mugs</h3>
              <p style={desc}>Hold your ideas</p>
            </div>
          </Link>

          <Link href="/art">
            <div style={card}>
              <div style={imageBox}>Art</div>
              <h3>Art</h3>
              <p style={desc}>Share your vision</p>
            </div>
          </Link>
        </div>
      </section>

    </main>
  );
}

/* STYLES */

const grid = {
  display: "flex",
  gap: "30px",
  flexWrap: "wrap" as const,
};

const card = {
  width: "280px",
  padding: "30px",
  border: "1px solid #ccc",
  borderRadius: "18px",
  cursor: "pointer",
};

const imageBox = {
  height: "160px",
  borderRadius: "14px",
  background: "linear-gradient(135deg, #ededed, #f7f7f7)",
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
