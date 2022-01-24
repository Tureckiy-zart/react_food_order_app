import styles from "./Input.module.css";
import React from "react";
const Input = React.forwardRef((props, ref) => {

  return (
    <div className={styles.input}>
      <label className={styles.label} htmlFor={props.input.id}>
        {props.label}
        <input ref={ref} {...props.input} />
      </label>
    </div>
  );
});

export default Input;
