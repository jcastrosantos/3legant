import styles from "./Headline.module.css";
import { GoArrowRight } from "react-icons/go";

export function Headline({tittle, btnName}){
    return(
        <>
            <div className={styles.headline}>
                <h3>{tittle}</h3>
                <button className={styles.ShowMore}>{btnName} <GoArrowRight/></button>
            </div>
        </>
    )
}