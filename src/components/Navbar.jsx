import { useCart } from "../context/CartContext";

/*
  🧠 NAVBAR COMPONENT (CONTEXT VERSION)

  Changes:
  - Removed props (cart)
  - Now uses global CartContext
  - No duplicate logic anymore
*/

function Navbar() {
  // Get cart data from global context
  const { cart, total, toast } = useCart();

  // Total number of items in cart
  const count = cart.reduce(
    (sum, item) => sum + item.qty,
    0
  );

  return (
  <nav className="navbar">

    <h2>Mini Store 🛒</h2>

    <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>

      {/* Cart Count Badge */}
      <div style={{ position: "relative" }}>
        <span style={{ fontSize: "18px" }}>
          🛒 Cart
        </span>

        <span
          style={{
            position: "absolute",
            top: "-8px",
            right: "-12px",
            background: "#ef4444",
            color: "white",
            borderRadius: "50%",
            padding: "2px 6px",
            fontSize: "12px"
          }}
        >
          {count}
        </span>
      </div>

      {/* Total */}
      <p style={{ margin: 0 }}>
        ${total}
      </p>

    </div>
    {toast && (
  <div className="toast">
    {toast}
  </div>
)}
  </nav>
);

}

export default Navbar;

/*
  📌 NOTES (READ THIS LATER)

  1. Navbar no longer receives props
  2. It reads global cart state directly
  3. Total is shared from CartContext (no duplication)
  4. This completes full Context migration
*/