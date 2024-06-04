import styles from "./Login.module.css";
import bg from "./imgLogin_1.jpeg";
import { ButtonSingUp } from "../../components";

function SingUp() {
  return (
    <main>
      <div className={styles.container}>
        <div className={styles.backgroundLogin}>
          <div className={styles.left}>
            <h2 className={styles.logo}>3legant.</h2>
            <img
              src={bg}
              alt="background"
              title="armchair white background"
            ></img>
          </div>

          <div className={styles.right}>
            <div className={styles.title}>
              <h4> Sing in</h4>
              <p>
                Already have an account?{" "}
                <a className={styles.linkSing} href="aaa">
                  Sing in
                </a>
              </p>
              <div className={styles.signUp}>
                <input placeholder="Your name" type="text"></input>
                <input placeholder="User name" type="text"></input>
                <input placeholder="Email address" type="email"></input>
                <input placeholder="Password" type="password"></input>
                <label className={styles.checkboxLabel}>
                  <input type="checkbox" className={styles.checkbox} />
                  <p>
                    I agree with{" "}
                    <a href="aaa" className={styles.linkPT}>
                      Privacy Policy
                    </a>{" "}
                    and{" "}
                    <a href="aaa" className={styles.linkPT}>
                      Terms of Use
                    </a>
                  </p>
                </label>
                <ButtonSingUp>Sign up</ButtonSingUp>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default SingUp;
