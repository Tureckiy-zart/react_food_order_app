import { useState } from "react";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import CartProvider from "./store/CartProvider";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const cartShownHandler = () => setCartIsShown((p) => !p);
  return (
    <CartProvider>
      {cartIsShown && <Cart onClose={cartShownHandler} />}
      <Header onCartShownHandler={cartShownHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
