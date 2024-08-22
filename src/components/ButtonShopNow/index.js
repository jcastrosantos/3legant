import styles from "./ButtonShopNow.module.css";
import { GoArrowRight } from "react-icons/go";

export function ButtonShopNow(){
    return(
        <button className={styles.buttonShopNow}>
          Show Now <GoArrowRight />
        </button>
    )
}