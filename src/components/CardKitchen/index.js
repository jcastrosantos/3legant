import styles from "./CardKitchen.module.css";
import kitchen from "../../images/kitchen.jpeg";
import { ButtonShopNow } from "../ButtonShopNow";

export function CardKitchen({ tittle, id }) {
  return (
    <>
      <div className={styles.kitchen} id="kitchen">
        <div className={styles.tittleAndButton}>
          <h2 className="tittle">{tittle}</h2>
          <ButtonShopNow />
        </div>
        <img src={kitchen} alt="toaster"></img>
      </div>
    </>
  );
}
