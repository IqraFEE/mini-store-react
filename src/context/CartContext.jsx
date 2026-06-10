import { createContext, useContext, useEffect, useState } from "react";

/*
  🧠 CART CONTEXT (GLOBAL STATE MANAGER)

  This file replaces "prop drilling".
  Instead of passing cart through multiple components,
  we store everything in ONE global place.

  Any component can now access:
  - cart
  - addToCart
  - increaseQty
  - decreaseQty
  - total

  without props.
*/

// 1. Create context container
const CartContext = createContext();

// 2. Provider wraps entire app
export function CartProvider({ children }) {

  // Load cart from localStorage
  const [cart, setCart] = useState(() => {
    const saved = localStorage.getItem("cart");
    return saved ? JSON.parse(saved) : [];
  });

  // toast = little message box
const [toast, setToast] = useState("");

  /*
    ➕ ADD TO CART
    If item exists → increase qty
    If not → add new item
  */
  const addToCart = (product) => {
  setCart((prevCart) => {
    const existing = prevCart.find(
      (item) => item.name === product.name
    );

    if (existing) {
      return prevCart.map((item) =>
        item.name === product.name
          ? { ...item, qty: item.qty + 1 }
          : item
      );
    }

    return [...prevCart, { ...product, qty: 1 }];
  });

  showToast("✔ Added to cart");
};

const showToast = (message) => {
  setToast(message);

  setTimeout(() => {
    setToast("");
  }, 1500);
};
  /*
    ➕ INCREASE QUANTITY
  */
  const increaseQty = (name) => {
  setCart((prevCart) =>
    prevCart.map((item) =>
      item.name === name
        ? { ...item, qty: item.qty + 1 }
        : item
    )
  );
};

  /*
    ➖ DECREASE QUANTITY
    If qty becomes 0 → remove item
  */
  const decreaseQty = (name) => {
  setCart((prevCart) =>
    prevCart
      .map((item) =>
        item.name === name
          ? { ...item, qty: item.qty - 1 }
          : item
      )
      .filter((item) => item.qty > 0)
  );
};

  /*
    💾 SAVE CART TO LOCAL STORAGE
    Runs every time cart changes
  */
  useEffect(() => {
    localStorage.setItem(
      "cart",
      JSON.stringify(cart)
    );
  }, [cart]);

  /*
    💰 TOTAL CART VALUE
    We calculate it once here to avoid repeating logic in Navbar & Cart
  */
  const total = cart.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  /*
    📦 EVERYTHING WE WANT TO SHARE GLOBALLY
  */
  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        increaseQty,
        decreaseQty,
        total,
        toast
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

/*
  🧩 CUSTOM HOOK

  Instead of importing useContext everywhere,
  we use this shortcut.
*/
export function useCart() {
  return useContext(CartContext);
}

/*
  📌 NOTES (READ THIS LATER)

  1. CartContext replaces props drilling
  2. All cart logic lives in one place now
  3. Any component can use:
        const { cart, addToCart } = useCart();
  4. This makes app scalable and cleaner
*/