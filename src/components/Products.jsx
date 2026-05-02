function Products({ addToCart }) {
  return (
    <section className="products">

      <h1>Products</h1>

      <div className="grid">

        <div className="card">
          <h3>Wireless Headphones</h3>
          <p>$99</p>

          <button
            onClick={() =>
              addToCart({
                name: "Wireless Headphones",
                price: 99
              })
            }
          >
            Add to Cart
          </button>
        </div>

        <div className="card">
          <h3>Smart Watch</h3>
          <p>$149</p>

          <button
            onClick={() =>
              addToCart({
                name: "Smart Watch",
                price: 149
              })
            }
          >
            Add to Cart
          </button>
        </div>

        <div className="card">
          <h3>Gaming Mouse</h3>
          <p>$59</p>

          <button
            onClick={() =>
              addToCart({
                name: "Gaming Mouse",
                price: 59
              })
            }
          >
            Add to Cart
          </button>
        </div>

      </div>

    </section>
  );
}

export default Products;