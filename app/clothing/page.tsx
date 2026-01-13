import Link from "next/link";

export default function ClothingPage() {
  return (
    <main style={{ padding: 50, fontFamily: "Arial" }}>
      <h1>Clothing</h1>
      <p>Select who this clothing is for</p>

      <div style={{ display: "flex", gap: 20, marginTop: 30 }}>
        <Link href="/customize/clothing/male">Male</Link>
        <Link href="/customize/clothing/female">Female</Link>
        <Link href="/customize/clothing/kids">Kids</Link>
        <Link href="/customize/clothing/unisex">Unisex</Link>
      </div>
    </main>
  );
}
