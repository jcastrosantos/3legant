import styles from "./Login.module.css";
import bg from "./imgLogin_1.jpeg";
// import eye from "../../images/eye-on.svg"
import { BlackButton, MyInput, Title, Logo } from "../../components";

function SingUp() {
  return (
    <main>
      <div className={styles.container}>
        <div className={styles.backgroundLogin}>
          <div className={styles.left}>
            <Logo></Logo>
            <img
              src={bg}
              alt="background"
              title="armchair white background"
            ></img>
          </div>

          <div className={styles.right}>
            <div className={styles.title}>
              <Title>Sing Up</Title>
              <p>
                Already have an account?{" "}
                <a
                  className={styles.linkSing}
                  href="http://localhost:3000/singIn"
                >
                  Sing in
                </a>
              </p>
              <div className={styles.signUp}>
                <MyInput placeholder="Your name" type="text" />
                <MyInput placeholder="User name" type="text" />
                <MyInput placeholder="Email address" type="email" />
                <MyInput placeholder="Password" type="password" />
                {/* <img src={eye} alt="eye-on"/> */}

                <label className={styles.checkboxLabel}>
                  <MyInput type="checkbox" className={styles.checkbox} />
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
                <BlackButton>Sing Up</BlackButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default SingUp;
