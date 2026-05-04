import { useParams, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import products from "../data/products";

/*
  🧠 PRODUCT DETAILS PAGE (FULL UPGRADE)

  This page:
  ✔ finds product by ID
  ✔ shows full details
  ✔ allows adding to cart
*/

function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();

  // Find product by ID from shared data
  const product = products.find(
    (p) => p.id === parseInt(id)
  );

  // If product not found
  if (!product) {
    return (
      <div style={{ padding: "40px" }}>
        <h2>Product not found</h2>
        <button onClick={() => navigate("/")}>
          Go Back
        </button>
      </div>
    );
  }

  return (
    <div style={{ padding: "40px", maxWidth: "600px", margin: "auto" }}>
      {/* PRODUCT NAME */}
      <h1>{product.name}</h1>

      {/* CATEGORY */}
      <p style={{ color: "gray" }}>
        {product.category}
      </p>

      {/* PRICE */}
      <h2 style={{ margin: "10px 0" }}>
        ${product.price}
      </h2>

      {/* DESCRIPTION */}
      <p style={{ marginBottom: "20px" }}>
        {product.description}
      </p>

      {/* ADD TO CART BUTTON */}
      <button
        onClick={() => addToCart(product)}
        style={{ marginRight: "10px" }}
      >
        Add to Cart
      </button>

      {/* BACK BUTTON */}
      <button onClick={() => navigate(-1)}>
        Go Back
      </button>
    </div>
  );
}

export default ProductDetails;

/*
  📌 NOTES (READ THIS LATER)

  1. useParams() gets URL id (/product/1)
  2. We match it with products array
  3. If product not found → fallback UI
  4. addToCart comes from global context
  5. navigate(-1) goes back to previous page
*/