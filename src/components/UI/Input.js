import styles from "./Input.module.css";

const Input = ({ label, input }) => {
  return (
    <div className={styles.input}>
      <label className={styles.label} htmlFor={input.id}>
        {label}
        <input {...input} />
      </label>
    </div>
  );
};

export default Input;
