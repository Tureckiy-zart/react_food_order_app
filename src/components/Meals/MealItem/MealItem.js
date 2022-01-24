import styles from "./MealItem.module.css";
import MealItemForm from "./MealItemForm/MealItemForm";

const MealItem = ({ name, description, price }) => {
  const formattedPrice = `$${price.toFixed(2)}`;
  return (
    <li className={styles.meal}>
      <div>
        <h3>{name}</h3>
        <p className={styles.description}>{description}</p>
        <p className={styles.price}>{formattedPrice}</p>
      </div>
      <div>
        <MealItemForm />
      </div>
    </li>
  );
};

export default MealItem;
