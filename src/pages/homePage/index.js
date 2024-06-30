import styles from "./home.module.css";
import {Logo } from "../../components";
import { CiSearch, CiUser, CiBag1 } from "react-icons/ci";


function Home(){

    return(
        <main>
            <div className={styles.container}>
            <header>
                <Logo></Logo>
                <div className={styles.navBar}>
                    <a href="##">Home</a>
                    <a href="##">Shop</a>
                    <a href="##">Product</a>
                    <a href="///">Contact Us</a>
                </div>
                <div className={styles.icons}>
                    <CiSearch/>
                    <CiUser />
                    <CiBag1 />
                </div>
                
            </header>
                <h1>test</h1>
            </div>
        </main>
    )

}

export default Home;