import classes from "./CartItem.module.css";

const CartItem = ({ price, name, totalAmount, onRemoveItem, onAddItem }) => {
  const priceEdited = `$${price.toFixed(2)}`;
  return (
    <li className={classes["cart-item"]}>
      <div>
        <h2>{name}</h2>
        <div className={classes.summary}>
          <span className={classes.price}>{priceEdited}</span>
          <span className={classes.amount}>x {totalAmount}</span>
        </div>
      </div>
      <div className={classes.actions}>
        <button onClick={onRemoveItem}>−</button>
        <button onClick={onAddItem}>+</button>
      </div>
    </li>
  );
};

export default CartItem;
