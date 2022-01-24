import { useState } from "react";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const cartShownHandler = () => setCartIsShown((p) => !p);
  return (
    <>
      {cartIsShown && <Cart onClose={cartShownHandler} />}
      <Header onCartShownHandler={cartShownHandler} />
      <main>
        <Meals />
      </main>
    </>
  );
}

export default App;
