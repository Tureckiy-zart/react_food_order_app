import Modal from "../UI/Modal";
import classes from "./Cart.module.css";

const Cart = ({ onClose }) => {
  const cartItems = (
    <ul className={classes["cart-items"]}>
      {[{ id: 1, name: "2222", amount: 34, price: 12.99 }].map((i) => (
        <li id={i.id}>{i.name}</li>
      ))}
    </ul>
  );

  const orderHandler = () => {
    onClose();
  };

  return (
    <Modal onClose={onClose}>
      <div>{cartItems}</div>
      <div className={classes.total}>
        <span>total ammo</span>
        <span>398.55</span>
      </div>
      <div className={classes.actions}>
        actions
        <button className={classes["button--alt"]} onClick={onClose}>
          Close
        </button>
        <button className={classes.button} onClick={orderHandler}>
          Order
        </button>
      </div>
    </Modal>
  );
};

export default Cart;
