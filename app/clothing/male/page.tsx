import Link from "next/link";

export default function MaleClothingPage() {
  return (
    <main style={{ padding: 40, fontFamily: "Arial" }}>
      <h1>Male Clothing</h1>

      <p>Select a category</p>

      <ul>
        <li>
          <Link href="/customize/clothing/male/shirts">Shirts</Link>
        </li>
        <li>
          <Link href="/customize/clothing/male/hoodies">Hoodies</Link>
        </li>
        <li>
          <Link href="/customize/clothing/male/jackets">Jackets</Link>
        </li>
        <li>
          <Link href="/customize/clothing/male/accessories">Accessories</Link>
        </li>
      </ul>
    </main>
  );
}
