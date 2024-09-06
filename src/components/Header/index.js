import { Logo } from "../Logo";
import styles from "./Header.module.css";
import { CiSearch, CiUser, CiBag1 } from "react-icons/ci";

export function Header() {
  return (
    <>
      <header>
        <a href="/home">
          <Logo />
        </a>
        <div className={styles.navBar}>
          <a href="/home">Home</a>
          <a href="##">Shop</a>
          <a href="##">Product</a>
          <a href="///">Contact Us</a>
        </div>
        <div className={styles.icons}>
          <CiSearch />
          <CiUser />
          <CiBag1 />
        </div>
      </header>
    </>
  );
}
