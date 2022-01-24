import CartIcon from "./CartIcon";
import styles from "./HeaderCartButton.module.css";
const HeaderCartButton = ({ onClick, count }) => {
  return (
    <button className={styles.button} onClick={onClick}>
      <span>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={styles.badge}>{count || 0}</span>
    </button>
  );
};

export default HeaderCartButton;
