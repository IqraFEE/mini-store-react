import { useState } from "react";
import { useCart } from "../context/CartContext";

/*
  🧠 PRODUCTS COMPONENT (CONTEXT VERSION)

  Changes from before:
  - Removed props (no more addToCart prop)
  - Using global CartContext instead
  - Cleaner + scalable architecture
*/

function Products() {
  // Get addToCart from global context
  const { addToCart } = useCart();

  // Search state
  const [search, setSearch] = useState("");

  // Category state
  const [category, setCategory] = useState("All");

  // Products data (static for now)
  const products = [
    {
      name: "Wireless Headphones",
      price: 99,
      category: "Electronics"
    },
    {
      name: "Smart Watch",
      price: 149,
      category: "Electronics"
    },
    {
      name: "Gaming Mouse",
      price: 59,
      category: "Accessories"
    },
    {
      name: "Laptop Stand",
      price: 39,
      category: "Accessories"
    }
  ];

  // Filter logic (search + category)
  const filteredProducts = products.filter((product) => {
    const matchSearch = product.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchCategory =
      category === "All" ||
      product.category === category;

    return matchSearch && matchCategory;
  });

  return (
    <section className="products">
      <h1>Products</h1>

      {/* SEARCH INPUT */}
      <input
        type="text"
        placeholder="Search product..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{
          padding: "10px",
          width: "100%",
          marginBottom: "15px"
        }}
      />

      {/* CATEGORY FILTER */}
      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        style={{
          padding: "10px",
          width: "100%",
          marginBottom: "20px"
        }}
      >
        <option>All</option>
        <option>Electronics</option>
        <option>Accessories</option>
      </select>

      {/* PRODUCTS GRID */}
      <div className="grid">
        {filteredProducts.map((product, index) => (
          <div className="card" key={index}>
            <h3>{product.name}</h3>
            <p>${product.price}</p>
            <p>{product.category}</p>

            {/* ADD TO CART (NOW FROM CONTEXT) */}
            <button onClick={() => addToCart(product)}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Products;

/*
  📌 NOTES (READ THIS LATER)

  1. No props needed anymore (clean architecture)
  2. addToCart comes from CartContext
  3. Component is now reusable anywhere
  4. This is "context-driven state management"
*/