"use client";

import OrderBtn from "@/components/buttons/OrderBtn/OrderBtn";
// import { useSiteContext } from "@/context/SiteContext";
import styles from "./HeroSection.module.scss";

const HeroSection = () => {
  // const { name, setName } = useSiteContext();
  return (
    <section id="/" className={styles.section}>
      <div className={`container ${styles.container} `}>
        <h1 className={styles.heroTitle}>Меблі, які розкажуть Вашу історію</h1>

        <OrderBtn title="Замовити" className={styles.btn} />

        {/* {name}
        <button
          onClick={() => {
            name === "Vika" ? setName("Natala") : setName("Vika");
          }}
        >
          setName
        </button> */}
      </div>
    </section>
  );
};

export default HeroSection;
