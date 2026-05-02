import { useState } from "react";

import Navbar from "./components/Navbar";
import Products from "./components/Products";
import Cart from "./components/Cart";

function App() {
  const [cart, setCart] = useState([]);

  // Add item
  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  // Remove item by index
  const removeFromCart = (indexToRemove) => {
    const updatedCart = cart.filter(
      (_, index) => index !== indexToRemove
    );

    setCart(updatedCart);
  };

  return (
    <div>
      <Navbar cart={cart} />

      <Products addToCart={addToCart} />

      <Cart
        cart={cart}
        removeFromCart={removeFromCart}
      />
    </div>
  );
}

export default App;