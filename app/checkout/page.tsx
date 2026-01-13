export default function CheckoutPage() {
  return (
    <main style={{ padding: 40 }}>
      <h1>Checkout</h1>

      <p>Product: Custom T-Shirt</p>
      <p>Price: $20</p>

      <h3>Customer Details</h3>

      <input placeholder="Full Name" /><br /><br />
      <input placeholder="Email" /><br /><br />
      <input placeholder="Address" /><br /><br />

      <button style={{ padding: 10 }}>
        Place Order
      </button>
    </main>
  );
}
