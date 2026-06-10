import Navbar from "./components/Navbar";
import Products from "./components/Products";
import Cart from "./components/Cart";
import ProductDetails from "./pages/ProductDetails";

import { Routes, Route } from "react-router-dom";

/*
  🧠 APP NOW CONTROLS PAGES

  Instead of showing everything at once,
  we show different components based on URL
*/

function App() {
  return (
    <div>
      <Navbar />

      <Routes>
        {/* Home page (products list) */}
        <Route path="/" element={
            <>
              <Products />
              <Cart />
            </>
          } />

        {/* Cart page */}
        <Route path="/cart" element={<Cart />} />

        {/* Product detail page */}
        <Route path="/product/:id" element={<ProductDetails />} />
      </Routes>
    </div>
  );
}

export default App;