import styles from "./Login.module.css";
import bg from "./ce147d8554c2cda7530244569e9d8515.jpeg";
import eyeOn from "../../images/eye-on.svg"
import eyeOff from "../../images/eye-off.svg"
import { BlackButton, MyInput, Title, Logo } from "../../components";
import { useState } from "react";

function SingIn() {
  const [show, setShow] = useState(true)
  const [imgPassword, setImgPassword] = useState("eye-off.svg");

  const togglePasswordVisibility = () => {
    setShow((prevState) => !prevState);
    setImgPassword(show ? "eye-on.svg" : "eye-off.svg");
  };
  const alterEye = () => {
    setShow(!show);
    setImgPassword(show ? eyeOn : eyeOff)

  }

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
              <Title>Sing In</Title>
              <p>
              Don't have an account yet?{" "} 
                <a className={styles.linkSing} href="http://localhost:3000/singup">
                  Sing up
                </a>
              </p>
              <div className={styles.signUp}>
                <MyInput placeholder="User name or Email address" type="text"/>
                
                <div className={styles.password_toggle}>
                  <MyInput placeholder="Password" type={show ? "password" : "text"} />
                  
                  <button className={styles.btn} type="button" onClick={() => togglePasswordVisibility()} >
                  <img src={eyeOn} alt={"show or hidden"} ></img>
                    
                  </button>

    
                </div>

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
