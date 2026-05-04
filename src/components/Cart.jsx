import { useCart } from "../context/CartContext";

/*
  🧠 CART COMPONENT (CONTEXT VERSION)

  Changes:
  - Removed props (cart, increaseQty, decreaseQty)
  - Now using global CartContext
  - Cleaner + centralized logic
*/

function Cart() {
  // Get everything from context
  const {
    cart,
    increaseQty,
    decreaseQty,
    total
  } = useCart();

  return (
    <section className="products">
      <h1>Your Cart</h1>

      {/* EMPTY CART STATE */}
      {cart.length === 0 ? (
        <p>Cart is empty</p>
      ) : (
        <div>
          {/* CART ITEMS */}
          {cart.map((item, index) => (
            <div className="card" key={index}>
              <h3>{item.name}</h3>

              <p>
                ${item.price} x {item.qty}
              </p>

              {/* DECREASE BUTTON */}
              <button
                onClick={() =>
                  decreaseQty(item.name)
                }
              >
                -
              </button>

              <span
                style={{ margin: "0 10px" }}
              >
                {item.qty}
              </span>

              {/* INCREASE BUTTON */}
              <button
                onClick={() =>
                  increaseQty(item.name)
                }
              >
                +
              </button>
            </div>
          ))}

          {/* TOTAL */}
          <h2 style={{ marginTop: "20px" }}>
            Total: ${total}
          </h2>
        </div>
      )}
    </section>
  );
}

export default Cart;

/*
  📌 NOTES (READ THIS LATER)

  1. Cart state is now global (Context)
  2. No props needed anymore
  3. Total is calculated once in Context
  4. This removes duplicate logic from App/Navbar/Cart
*/