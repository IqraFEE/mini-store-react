function Cart({ cart, removeFromCart }) {
  const total = cart.reduce(
    (sum, item) => sum + item.price,
    0
  );

  return (
    <section className="products">
      <h1>Your Cart</h1>

      {cart.length === 0 ? (
        <p>Cart is empty</p>
      ) : (
        <div>

          {cart.map((item, index) => (
            <div className="card" key={index}>
              <h3>{item.name}</h3>

              <p>${item.price}</p>

              <button
                onClick={() =>
                  removeFromCart(index)
                }
              >
                Remove
              </button>
            </div>
          ))}

          <h2 style={{ marginTop: "20px" }}>
            Total: ${total}
          </h2>

        </div>
      )}
    </section>
  );
}

export default Cart;