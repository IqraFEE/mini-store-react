function Navbar({ cart }) {
  // Total price calculation
  const total = cart.reduce(
    (sum, item) => sum + item.price,
    0
  );

  return (
    <nav className="navbar">

      <h2>Mini Store 🛒</h2>

      <p>
        Cart: {cart.length} | ${total}
      </p>

    </nav>
  );
}

export default Navbar;