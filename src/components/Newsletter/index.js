import styles from "./Newsletter.module.css";
import { CiMail } from "react-icons/ci";

export function Newsletter() {
  return (
    <div className={styles.newsletter}>
      <div className={styles.nsInputs}>
        <h2>Join Our Newsletter</h2>
        <p>Sign up for deals, new products and promotions</p>
        <div className={styles.nsEmail}>
          <CiMail viewBox="2 0 24 17" />
          <input type="email" placeholder="Email address"></input>
          <button>Signup</button>
        </div>
      </div>
    </div>
  );
}
