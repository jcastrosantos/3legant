import styles from "./Arrivals.module.css";
import loveseatSofa from "../../images/loveseatSofa.jpeg"

export function Arrivals(){
    return(
        <>
            <div className={styles.carousel}>
                <div className={styles.card}>
                    <div className={styles.carouselProduct}>
                        <img src={loveseatSofa} alt="loveseat Sofa"></img>
                        <button></button>
                    </div>
                    <div className={styles.textPrice}>
                        <span className={styles.rating}>????</span>
                        <span className={styles.productName}>Loveseat Sofa</span>
                        <span className={styles.price}>$199.99</span>
                    </div>
                </div>
            </div>    

        </> 
    )
}