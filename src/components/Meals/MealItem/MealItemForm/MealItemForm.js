import { useState } from "react";
import styles from "./MealItemForm.module.css";
import Input from "../../../UI/Input";
import { nanoid } from "nanoid";
const MealItemForm = () => {
  const [first, setfirst] = useState(0);
  const submitFormHandler = () => {};
  const changeHandler = () => {};

  return (
    <form className={styles.form} onSubmit={submitFormHandler}>
      <Input
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
    </form>
  );
};

export default MealItemForm;
