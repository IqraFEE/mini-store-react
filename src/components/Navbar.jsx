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
  const { cart, total } = useCart();

  // Total number of items in cart
  const count = cart.reduce(
    (sum, item) => sum + item.qty,
    0
  );

  return (
    <nav className="navbar">
      <h2>Mini Store 🛒</h2>

      {/* CART SUMMARY */}
      <p>
        Cart: {count} | ${total}
      </p>
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