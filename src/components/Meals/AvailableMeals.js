import DUMMY_MEALS from "./dummy_meals";
import styles from "./AvailableMeals.module.css";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";

const AvailableMeals = () => {
  return (
    <section className={styles.meals}>
      <Card>
        <ul>
          {DUMMY_MEALS.map((i) => (
            <MealItem key={i.id} {...i} />
          ))}
        </ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
