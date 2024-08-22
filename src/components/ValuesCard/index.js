import styles from "./ValuesCard.module.css";

export function ValuesCard({icon, tittle,price} ){
    return(
        <>
            <div className={styles.card}>
                <div className={styles.content}>
                    <p className={styles.icon}>{icon}</p>
                    <h2>{tittle}</h2>
                    <p className={styles.price}>{price}</p>
                </div>

            </div>
        </>

    )
} 