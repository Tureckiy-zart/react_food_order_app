import mealsImg from "../../assets/meals.jpg";
import styles from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";
const Header = ({ onCartShownHandler }) => {
  return (
    <>
      <header className={styles.header}>
        <h1>React Meals</h1>
        <HeaderCartButton onClick={onCartShownHandler} />
      </header>
      <div className={styles["main-image"]}>
        <img src={mealsImg} alt="Food table" />
      </div>
    </>
  );
};

export default Header;
