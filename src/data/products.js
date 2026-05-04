const products = [
  {
    id: 0,
    name: "Wireless Headphones",
    price: 99,
    category: "Electronics",
    description:
      "High-quality wireless headphones with noise cancellation."
  },
  {
    id: 1,
    name: "Smart Watch",
    price: 149,
    category: "Electronics",
    description:
      "Track your fitness, notifications, and health metrics."
  },
  {
    id: 2,
    name: "Gaming Mouse",
    price: 59,
    category: "Accessories",
    description:
      "Ergonomic gaming mouse with RGB lighting."
  },
  {
    id: 3,
    name: "Laptop Stand",
    price: 39,
    category: "Accessories",
    description:
      "Adjustable aluminum stand for better posture and cooling."
  }
];

export default products;

/*
  📌 NOTES (READ THIS LATER)

  1. This file is shared data source
  2. Both Products.jsx and ProductDetails.jsx use this
  3. Each product has a unique ID (IMPORTANT for routing)
*/