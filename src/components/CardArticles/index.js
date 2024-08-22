import styles from "./cardArticles.module.css";
import { GoArrowRight } from "react-icons/go";

export function CardArticles({image, title, btnName, alt}){
    return(
        <>
            <div className={styles.CardArticles}>
                <img src={image} alt={alt} className={styles.imgCard}></img>
                <h2 className={styles.h2Card}>{title}</h2>
                <button>{btnName} <GoArrowRight/></button>
            </div>
        </>
    )
}