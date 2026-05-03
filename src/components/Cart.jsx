function Cart({
  cart,
  increaseQty,
  decreaseQty
}) {
  const total = cart.reduce(
    (sum, item) =>
      sum + item.price * item.qty,
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

              <p>
                ${item.price} x {item.qty}
              </p>

              <button
                onClick={() =>
                  decreaseQty(item.name)
                }
              >
                -
              </button>

              <span
                style={{
                  margin: "0 10px"
                }}
              >
                {item.qty}
              </span>

              <button
                onClick={() =>
                  increaseQty(item.name)
                }
              >
                +
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