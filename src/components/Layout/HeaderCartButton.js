import { useContext, useEffect, useState } from "react";
import CertContext from "../../store/cart-context";
import CartIcon from "./CartIcon";
import styles from "./HeaderCartButton.module.css";

const HeaderCartButton = ({ onClick }) => {
  const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);
  const { items } = useContext(CertContext);
  const numberOfCartItems = items.reduce((acc, i) => {
    return (acc += i.totalAmount);
  }, 0);

  const btnClasses = `${styles.button} ${btnIsHighlighted ? styles.bump : ""}`;

  useEffect(() => {
    if (items.length === 0) return;
    const timer = setTimeout(() => setBtnIsHighlighted((p) => !p), 300);
    setBtnIsHighlighted((p) => !p);

    return () => {
      clearTimeout(timer);
    };
  }, [items]);

  return (
    <button className={btnClasses} onClick={onClick}>
      <span>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={styles.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;
