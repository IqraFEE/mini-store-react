import { useState } from "react";

function Products({ addToCart }) {
  // Search text
  const [search, setSearch] = useState("");

  // Category selected
  const [category, setCategory] =
    useState("All");

  // Products data
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

  // Filtered products
  const filteredProducts =
    products.filter((product) => {
      const matchSearch =
        product.name
          .toLowerCase()
          .includes(
            search.toLowerCase()
          );

      const matchCategory =
        category === "All" ||
        product.category === category;

      return (
        matchSearch &&
        matchCategory
      );
    });

  return (
    <section className="products">
      <h1>Products</h1>

      {/* Search */}
      <input
        type="text"
        placeholder="Search product..."
        value={search}
        onChange={(e) =>
          setSearch(e.target.value)
        }
        style={{
          padding: "10px",
          width: "100%",
          marginBottom: "15px"
        }}
      />

      {/* Dropdown */}
      <select
        value={category}
        onChange={(e) =>
          setCategory(e.target.value)
        }
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

      {/* Products */}
      <div className="grid">

        {filteredProducts.map(
          (product, index) => (
            <div
              className="card"
              key={index}
            >
              <h3>{product.name}</h3>

              <p>${product.price}</p>

              <p>
                {product.category}
              </p>

              <button
                onClick={() =>
                  addToCart(product)
                }
              >
                Add to Cart
              </button>
            </div>
          )
        )}

      </div>
    </section>
  );
}

export default Products;