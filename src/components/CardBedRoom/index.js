import styles from "./CardBedRoom.module.css";
import bedRoom from "../../images/bedroom.jpeg";
import { ButtonShopNow } from "../ButtonShopNow";

export function CardBedRoom({ tittle, id }) {
  return (
    <>
      <div className={styles.bedroom} id="bedroom">
        <img src={bedRoom} alt="commode"></img>
        <h2 className="tittle">{tittle}</h2>
        <ButtonShopNow />
      </div>
    </>
  );
}
