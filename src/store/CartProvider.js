import { useReducer } from "react";
import CartContext from "./cart-context";

const defaultCartState = {
  items: [],
  totalAmount: 0,
};
const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      const updatedItems = [...state.items, action.item];
      const updatedTotalAmount =
        state.totalAmount + action.item.price * action.item.totalAmount;
      return { items: updatedItems, totalAmount: updatedTotalAmount };
    // break;

    case "REMOVE":
      break;
    default:
      return defaultCartState;
  }
  // return defaultCartState;
};

// const cartReducer = (state, action) => {
//   if (action.type === "ADD") {
//     const updatedItems = state.items.concat(action.item);
//     debugger;
//     console.log("action :>> ", action);
//     console.log("state.totalAmount", state.totalAmount);
//     console.log("action.item.price :>> ", action.item.price);
//     console.log("action.item.amount", action.item.totalAmount);
//     const updatedTotalAmount =
//       state.totalAmount + action.item.price * action.item.totalAmount;
//     return {
//       items: updatedItems,
//       totalAmount: updatedTotalAmount,
//     };
//   }
//   return defaultCartState;
// };

const CartProvider = ({ children }) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );

  const addItemToCartHandler = (item) => {
    dispatchCartAction({ type: "ADD", item });
  };

  const removeItemFromCartHandler = (id) => {
    dispatchCartAction({ type: "REMOVE" }, id);
  };
  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>
  );
};

export default CartProvider;
