import Modal from "../UI/Modal";
import classes from "./Cart.module.css";
import CartContext from "../../store/cart-context";
import { useContext } from "react";
import CartItem from "./CartItem";

const Cart = ({ onClose }) => {
  const { items, totalAmount, addItem, removeItem } = useContext(CartContext);

  const cartItemAddHandler = (item) => addItem({ ...item, totalAmount: 1 });
  const cartItemRemoveHandler = (id) => removeItem(id);

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {items.map((i) => (
        <CartItem
          key={i.id}
          {...i}
          onAddItem={cartItemAddHandler.bind(null, i)}
          onRemoveItem={cartItemRemoveHandler.bind(null, i)}
        />
      ))}
    </ul>
  );

  const totalAmountEdited = `$${totalAmount.toFixed(2)}`;
  const hasItems = items.length > 0;



  const orderHandler = () => {

    //!!! finfish order part
    onClose();
  };

  return (
    <Modal onClose={onClose}>
      <div>{cartItems}</div>
      <div className={classes.total}>
        <span>Total amount</span>
        <span>{totalAmountEdited} </span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={onClose}>
          Close
        </button>
        {hasItems && (
          <button className={classes.button} onClick={orderHandler}>
            Order
          </button>
        )}
      </div>
    </Modal>
  );
};

export default Cart;
