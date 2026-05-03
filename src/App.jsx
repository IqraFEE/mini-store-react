import { useState, useEffect } from "react";

import Navbar from "./components/Navbar";
import Products from "./components/Products";
import Cart from "./components/Cart";

function App() {
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  // Add item or increase qty
  const addToCart = (product) => {
    const existing = cart.find(
      (item) => item.name === product.name
    );

    if (existing) {
      const updatedCart = cart.map((item) =>
        item.name === product.name
          ? { ...item, qty: item.qty + 1 }
          : item
      );

      setCart(updatedCart);
    } else {
      setCart([
        ...cart,
        { ...product, qty: 1 }
      ]);
    }
  };

  // Increase qty
  const increaseQty = (name) => {
    const updatedCart = cart.map((item) =>
      item.name === name
        ? { ...item, qty: item.qty + 1 }
        : item
    );

    setCart(updatedCart);
  };

  // Decrease qty
  const decreaseQty = (name) => {
    const updatedCart = cart
      .map((item) =>
        item.name === name
          ? { ...item, qty: item.qty - 1 }
          : item
      )
      .filter((item) => item.qty > 0);

    setCart(updatedCart);
  };

  useEffect(() => {
    localStorage.setItem(
      "cart",
      JSON.stringify(cart)
    );
  }, [cart]);

  return (
    <div>
      <Navbar cart={cart} />

      <Products addToCart={addToCart} />

      <Cart
        cart={cart}
        increaseQty={increaseQty}
        decreaseQty={decreaseQty}
      />
    </div>
  );
}

export default App;



// JSON.parse(savedCart)

// Turns saved text back into real array.

// Because browser stores text only.

// ----------

// JSON.stringify(cart)

// Turns array into text so browser can store it.