import styles from "./Login.module.css";
import bg from "./ce147d8554c2cda7530244569e9d8515.jpeg";
import { BlackButton, MyInput, Title } from "../../components";


function SingIn() {
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
              <Title>Sing In</Title>
              <p>
              Don't have an account yet?{" "} 
                <a className={styles.linkSing} href="http://localhost:3000/singUp">
                  Sing up
                </a>
              </p>
              <div className={styles.signUp}>
                <MyInput placeholder="User name or Email address" type="text"/>
                <MyInput placeholder="Password" type="password"/>
                <label className={styles.checkboxLabel}>
                  <MyInput type="checkbox" className={styles.checkbox} />
                  <p>Remember me</p>
                  
                </label>
                <BlackButton>Sing In</BlackButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default SingIn;
