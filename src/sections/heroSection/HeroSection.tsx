"use client";

import OrderBtn from "@/components/buttons/OrderBtn/OrderBtn";
import { SiteContext } from "@/context/SiteContext";
import { useContext } from "react";
import styles from "./HeroSection.module.scss";

const HeroSection = () => {
  const { setModalOpen } = useContext(SiteContext);
  return (
    <section id="/" className={styles.section}>
      <div className={`container ${styles.container} `}>
        <h1 className={styles.heroTitle}>Меблі, які розкажуть Вашу історію</h1>

        <OrderBtn
          title="Замовити"
          className={styles.btn}
          onClick={() => setModalOpen(true)}
        />
      </div>
    </section>
  );
};

export default HeroSection;
