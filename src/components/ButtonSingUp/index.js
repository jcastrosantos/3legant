import styles from "./ButtonSingUp.module.css";

export function BlackButton({ children }) {
  return <button className={styles.button}>{ children }</button>;
}