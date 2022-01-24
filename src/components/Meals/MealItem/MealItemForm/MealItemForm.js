import { useState, useRef } from "react";
import styles from "./MealItemForm.module.css";
import Input from "../../../UI/Input";
import { nanoid } from "nanoid";
const MealItemForm = ({ onAddToCart }) => {
  const [isInputValid, setIsInputValid] = useState(null);
  const amountInputRef = useRef();
  const submitFormHandler = (e) => {
    e.preventDefault();
    const enteredAmount = +amountInputRef.current.value;
    if (enteredAmount < 0 || enteredAmount > 10) return;
    onAddToCart(enteredAmount);
    setIsInputValid(true);
  };

  return (
    <form className={styles.form} onSubmit={submitFormHandler}>
      <Input
        ref={amountInputRef}
        label="Amount"
        input={{
          id: nanoid(),
          type: "number",
          min: "1",
          max: "10",
          step: "1",
          defaultValue: "1",
        }}
        // onCahnge={changeHandler}
      />
      <button type="submit">+ Add</button>
      {/* {!isInputValid && <p>Please enter a valid amount 1-10</p>} */}
    </form>
  );
};

export default MealItemForm;
