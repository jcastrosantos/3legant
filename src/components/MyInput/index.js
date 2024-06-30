import styles from "./Form.module.css";

export function MyInput(props) {
  return (
    <input
      placeholder={props.placeholder || ""}
      type={props.type || "text"}
      className={styles.input}
    />
  );
}
