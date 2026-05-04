import { useParams } from "react-router-dom";

/*
  🧠 PRODUCT DETAILS PAGE

  This page shows ONE product based on URL id
*/

function ProductDetails() {
  const { id } = useParams();

  return (
    <div style={{ padding: "40px" }}>
      <h1>Product Details</h1>

      <p>Product ID: {id}</p>

      {/* Later we will fetch real product data here */}
    </div>
  );
}

export default ProductDetails;

/*
  📌 NOTES (READ THIS LATER)

  1. useParams() reads URL values
     Example: /product/5 → id = 5

  2. This is how dynamic pages work in React Router

  3. Later we will connect this to real product data
*/