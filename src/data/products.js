const products = [
  {
    id: 0,
    name: "Wireless Headphones",
    price: 99,
    category: "Electronics",
    description:
      "High-quality wireless headphones with noise cancellation.",
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e"
  },
  {
    id: 1,
    name: "Smart Watch",
    price: 149,
    category: "Electronics",
    description:
      "Track your fitness, notifications, and health metrics.",
    image:
      "https://images.unsplash.com/photo-1546868871-7041f2a55e12"
  },
  {
    id: 2,
    name: "Gaming Mouse",
    price: 59,
    category: "Accessories",
    description:
      "Ergonomic gaming mouse with RGB lighting.",
      image:
      "https://images.unsplash.com/photo-1527814050087-3793815479db"
  },
  {
    id: 3,
    name: "Laptop Stand",
    price: 39,
    category: "Accessories",
    description:
      "Adjustable aluminum stand for better posture and cooling.",
      image:
      "https://images.unsplash.com/photo-1623251606108-512c7c4a3507?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  }
];

export default products;

/*
  📌 NOTES (READ THIS LATER)

  1. This file is shared data source
  2. Both Products.jsx and ProductDetails.jsx use this
  3. Each product has a unique ID (IMPORTANT for routing)
*/