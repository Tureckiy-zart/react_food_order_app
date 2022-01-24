import { useReducer } from "react";
import CartContext from "./cart-context";

const defaultCartState = {
  items: [],
  totalAmount: 0,
};
const cartReducer = (state, action) => {
  const isExistItemIndex = state.items.findIndex(
    (i) => i.id === action.item.id
  );
  const existingCartItem = state.items[isExistItemIndex];
  let updatedItems;

  switch (action.type) {
    case "ADD":
      if (existingCartItem) {
        const updatedItem = {
          ...existingCartItem,
          totalAmount: existingCartItem.totalAmount + action.item.totalAmount,
        };
        updatedItems = [...state.items];
        updatedItems[isExistItemIndex] = updatedItem;
      } else {
        updatedItems = [...state.items, action.item];
      }
      const updatedTotalAmount =
        state.totalAmount + action.item.price * action.item.totalAmount;
      return { items: updatedItems, totalAmount: updatedTotalAmount };

    case "REMOVE":
      const updatedTotalAmountOnRemove =
        state.totalAmount - existingCartItem.price;
      if (existingCartItem.totalAmount === 1) {
        updatedItems = state.items.filter((i) => i.id !== action.item.id);
      } else {
        const updatedItem = {
          ...existingCartItem,
          totalAmount: existingCartItem.totalAmount - 1,
        };
        updatedItems = [...state.items];
        updatedItems[isExistItemIndex] = updatedItem;
      }
      return { items: updatedItems, totalAmount: updatedTotalAmountOnRemove };
    default:
      return defaultCartState;
  }
};

const CartProvider = ({ children }) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );

  const addItemToCartHandler = (item) => {
    dispatchCartAction({ type: "ADD", item });
  };
  const removeItemFromCartHandler = (item) => {
    dispatchCartAction({ type: "REMOVE", item });
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
