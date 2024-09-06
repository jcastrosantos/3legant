import styles from "./Footer.module.css";
import { Logo } from "../Logo";
import { SlSocialFacebook, SlSocialInstagram, SlSocialYoutube } from "react-icons/sl";

export function Footer(){
    return(
        <footer>
        <div className={styles.footerContent}>
          <div className={styles.logoSlogan}>
            <a href="/home">
              <Logo />
            </a>
            <p>Gift & Decoration Store</p>
          </div>

          <div className={styles.navBar_2}>
            <a href="/home">Home</a>
            <a href="##">Shop</a>
            <a href="##">Product</a>
            <a href="///">Contact Us</a>
          </div>
        </div>
        <div className={styles.footerBar}>
          <div className={styles.copyright}>
            <p className={styles.copyText}>
              Copyright © 2023 3legant. All rights reserved
            </p>
            <a href="##" className={styles.privacyPolicy}>
              Privacy Policy
            </a>
            <a href="##" className={styles.termsUse}>
              Terms of Use
            </a>
          </div>
          <div className={styles.socialIcons}>
            <a href="/">
              <SlSocialInstagram />
            </a>
            <a href="/">
              <SlSocialFacebook />
            </a>
            <a href="/">
              <SlSocialYoutube />
            </a>
          </div>
        </div>
      </footer>
    )
}