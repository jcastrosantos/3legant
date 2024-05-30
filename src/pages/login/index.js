import styles from './Login.module.css';
import bg from './imgLogin_1.jpeg'

function Login() {
    return (
        <main>
            <div className={styles.container}>
                <div className={styles.backgroungLogin}>
                    <div className={styles.left}>
                        <h2 className={styles.logo}>3legant</h2>
                        <img src={bg} alt='background' title='poltrona fundo branco'></img>
                    </div>
                    
                    <div className={styles.right}>
                        <div className={styles.title}>
                            <h2> Sing in</h2>
                            <p>Already have an account? <a href="aaa">Sing in</a></p>
                            <div className={styles.signUp}>
                                <input placeholder='Your name' type='text'></input>
                                <input placeholder='User name' type='text'></input>
                                <input placeholder='Email address' type='email'></input>
                                <input placeholder='Password' type='password'></input>
                                <label className={styles.checkboxLabel}>
                                    <input type='checkbox' className={styles.checkbox}/>
                                    <p>I agree with <b>Privacy Policy</b> and <b>Terms of Use</b></p>
                                </label>
                            <button className={styles.button}>Sign Up</button>
                            </div>
                        </div>
                    </div>

                    
                </div>
                
                
            </div>
        </main>
    )
}

export default Login;