import { useContext } from "react";
import styles from "./MealItem.module.css";
import MealItemForm from "./MealItemForm/MealItemForm";
import CartContext from "../../../store/cart-context";
const MealItem = ({ id, name, description, price }) => {
  const { addItem } = useContext(CartContext);
  const formattedPrice = `$${price.toFixed(2)}`;
  const addToCardHandler = (amount) =>
    addItem({ id, name, totalAmount: amount, price });
  return (
    <li className={styles.meal}>
      <div>
        <h3>{name}</h3>
        <p className={styles.description}>{description}</p>
        <p className={styles.price}>{formattedPrice}</p>
      </div>
      <div>
        <MealItemForm onAddToCart={addToCardHandler} />
      </div>
    </li>
  );
};

export default MealItem;
