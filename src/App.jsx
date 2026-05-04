import Navbar from "./components/Navbar";
import Products from "./components/Products";
import Cart from "./components/Cart";

/*
  🧠 APP COMPONENT (NOW CLEAN)

  Before:
  - App was managing cart state + logic

  Now:
  - Cart logic moved to CartContext (global state)
  - App only handles layout and rendering components

  This makes App:
  ✔ simpler
  ✔ cleaner
  ✔ scalable
*/

function App() {
  return (
    <div>
      <Navbar />
      <Products />
      <Cart />
    </div>
  );
}

export default App;

/*
  📌 NOTES (READ THIS LATER)

  1. App is now a "layout shell"
  2. No more prop drilling
  3. All cart logic comes from CartContext
  4. Components will now use:
        import { useCart } from "../context/CartContext";

  5. This is how real production React apps are structured


  -------------

  JSON.parse(savedCart)
  Turns saved text back into real array.
  Because browser stores text only.

  ----------

  JSON.stringify(cart)
  Turns array into text so browser can store it.
*/