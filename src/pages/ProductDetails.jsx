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
  const {cart, addToCart } = useCart();

  // Find product by ID from shared data
  const product = products.find(
    (p) => p.id === parseInt(id)
  );

  // Checks if product is already in the cart
  const isInCart = cart.some(
    (item) => item.id === product.id
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
  <div className="product-details">
    
    {/* Product container */}
    <div className="product-card">

      {/* Product image */}
      <img
        src={product.image}
        alt={product.name}
        className="detail-image"
      />

      {/* Product info section */}
      <div className="product-info">

        {/* Product name */}
        <h1>{product.name}</h1>

        {/* Product price */}
        <h3 style={{ color: "#3b82f6", marginTop: "10px" }}>
          ${product.price}
        </h3>

        {/* Product description */}
        <p style={{ marginTop: "15px", lineHeight: "1.6" }}>
          {product.description}
        </p>

        {/* Add to cart button */}
        <button
          onClick={() => addToCart(product)}
          disabled={isInCart}
          style={{
            marginTop: "25px",
            // checks if the product is already in cart or not then button behaves accordingly
            background: isInCart ? "#16a34a" : "#3b82f6",
            cursor: isInCart ? "not-allowed" : "pointer"
          }}
        >
          {isInCart ? "✔ Added" : "Add to Cart"}
        </button>

        <button
          onClick={() => navigate("/")}
          style={{
            margin: "20px",
            background: "#6b7280"
          }}
        >
          ← Back to Products
        </button>

      </div>

    </div>
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