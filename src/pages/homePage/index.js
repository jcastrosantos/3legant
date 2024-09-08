import sofa from "../../images/0db6128ab1993d65eae0e96498fbd94e.jpeg";
import livingRoom2 from "../../images/LivingRoom2.jpeg";
import salaCard from "../../images/salaCard.jpeg";
import kitchenCard from "../../images/kitchenCard.jpeg";
import bedRoomCard from "../../images/roomCard.jpeg";
import styles from "./home.module.css";
import {
  CiDeliveryTruck,
  CiCreditCard1,
  CiLock,
  CiPhone,
} from "react-icons/ci";
import {
  CardLivingRooms,
  CardBedRoom,
  CardKitchen,
  Headline,
  Arrivals,
  ValuesCard,
  ButtonShopNow,
  CardArticles,
  Header,
  Newsletter,
  Footer,
} from "../../components";

function Home() {
  return (
    <main>
      <div className={styles.container}>
        <Header />
        <div className={styles.sliderSection}>
          <div className={styles.sliderSectionImg}>
            <img src={sofa} alt="Sofa marron " title="Sofa marron"></img>
          </div>
          <div className={styles.header}>
            <h2>
              Simply Unique/<br></br>Simply Better.
            </h2>
            <p>
              <b>3legant</b> is a gift & decorations store based in HCMC,
              <br />
              Vietnam. Est since 2019.{" "}
            </p>
          </div>
        </div>
        <div className={styles.bannerGrid}>
          <CardLivingRooms className={"LivingRoom"} tittle={"Living Room"} />
          <div className={styles.twoCards}>
            <CardKitchen className={"kitchen"} tittle={"Kitchen"} />
            <CardBedRoom className={"BedRoom"} tittle={"Bedroom"} />
          </div>
        </div>
        <div className={styles.newArrivals}>
          <Headline tittle={"New Arrivals"} btnName={"More Product"} />
          <div className={styles.arrivals}>
            <Arrivals />
            <Arrivals />
            <Arrivals />
            <Arrivals />
            <Arrivals />
            <Arrivals />
            <Arrivals />
            <Arrivals />
            <Arrivals />
            <Arrivals />
          </div>
        </div>
        <div className={styles.values}>
          <ValuesCard
            icon={<CiDeliveryTruck />}
            tittle={"Free Shipping"}
            price={"Order above $200"}
          />
          <ValuesCard
            icon={<CiCreditCard1 />}
            tittle={"Money-back"}
            price={"30 days guarantee"}
          />
          <ValuesCard
            icon={<CiLock />}
            tittle={"Secure payments"}
            price={"Secured by Stripe"}
          />
          <ValuesCard
            icon={<CiPhone />}
            tittle={"24/7 Support"}
            price={"Phone and Email support"}
          />
        </div>
        <div className={styles.banner}>
          <div className={styles.backgroundGrid}>
            <img src={livingRoom2} alt="living Room"></img>
          </div>
          <div className={styles.bannerTitle}>
            <p className={styles.sale}>SALE UP TO 35% OFF</p>
            <h2 className={styles.titleSale}>
              HUNDREDS of <br />
              New lower prices!
            </h2>
            <p className={styles.Phosphorescent}>
              It’s more affordable than ever to give every <br />
              room in your home a stylish makeover
            </p>
            <ButtonShopNow />
          </div>
        </div>
        <div className={styles.blogSection}>
          <Headline tittle={"Articles"} btnName={"More Articles"} />
          <div className={styles.articles}>
            <div className={styles.article1}>
              <CardArticles
                image={salaCard}
                title={"7 ways to decor your home"}
                btnName={"Read more"}
              />
            </div>
            <div className={styles.article2}>
              <CardArticles
                image={kitchenCard}
                title={"Kitchen organization"}
                btnName={"Read more"}
              />
            </div>
            <div className={styles.article3}>
              <CardArticles
                image={bedRoomCard}
                title={"Decor your bedroom"}
                btnName={"Read more"}
              />
            </div>
          </div>
        </div>
        <Newsletter />
        <Footer />
      </div>
    </main>
  );
}

export default Home;
