function Navbar({ cart }) {
  const count = cart.reduce(
    (sum, item) => sum + item.qty,
    0
  );

  const total = cart.reduce(
    (sum, item) =>
      sum + item.price * item.qty,
    0
  );

  return (
    <nav className="navbar">
      <h2>Mini Store 🛒</h2>

      <p>
        Cart: {count} | ${total}
      </p>
    </nav>
  );
}

export default Navbar;