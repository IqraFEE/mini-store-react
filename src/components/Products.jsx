import { useState } from "react";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";
import products from "../data/products";

/*
  🧠 PRODUCTS PAGE (ROUTER + CONTEXT VERSION)

  What changed:
  ✔ Uses CartContext (no props)
  ✔ Adds React Router navigation
  ✔ Click product → opens detail page
*/

function Products() {
  const { addToCart } = useCart();
  const navigate = useNavigate();

  // Search state
  const [search, setSearch] = useState("");

  // Category state
  const [category, setCategory] = useState("All");

 

  // Filter logic
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

      {/* SEARCH */}
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
          <div
            className="card"
            key={index}
            style={{ cursor: "pointer" }}

            /* 🧠 CLICK → GO TO PRODUCT PAGE */
            onClick={() =>
              navigate(`/product/${index}`)
            }
          >
            <img
              src={product.image}
              alt={product.name}
              className="product-image"
            />
            <h3>{product.name}</h3>
            <p>${product.price}</p>
            <p>{product.category}</p>
            <p>{product.description}</p>

            {/* ADD TO CART BUTTON */}
            <button
              onClick={(e) => {
                // stop card click navigation
                e.stopPropagation();
                addToCart(product);
              }}
            >
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

  1. Product cards are now clickable
  2. Clicking opens /product/:id route
  3. Button uses stopPropagation to avoid navigation
  4. Cart logic comes from global context
  5. This is standard ecommerce UI pattern
*/