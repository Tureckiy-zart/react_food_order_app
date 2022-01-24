import { useContext } from "react";
import CertContext from "../../store/cart-context";
import CartIcon from "./CartIcon";
import styles from "./HeaderCartButton.module.css";

const HeaderCartButton = ({ onClick }) => {
  const { items } = useContext(CertContext);
  const numberOfCartItems = items.reduce((acc, i) => {
    return (acc += i.totalAmount);
  }, 0);
  return (
    <button className={styles.button} onClick={onClick}>
      <span>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={styles.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;
