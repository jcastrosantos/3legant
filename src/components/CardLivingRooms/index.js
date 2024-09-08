import styles from "./CardLivingRooms.module.css";
import livingRoom from "../../images/860.jpeg";
import { ButtonShopNow } from "../ButtonShopNow";

export function CardLivingRooms({ tittle, id }) {
  return (
    <>
      <div className={styles.livingRoom} id="livingRoom">
        <h2 className="tittle">{tittle}</h2>
        <ButtonShopNow />
        <img src={livingRoom} alt="gray armchair"/>
      </div>
    </>
  );
}
