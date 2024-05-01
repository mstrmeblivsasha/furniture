"use client";

import styles from "./BenefitsSection.module.scss";
import { benefits } from "../../data/benefits";
import { useEffect } from "react";

type elProps = {
  id: number;
  title: string;
  text: string;
};

const BenefitsSection = () => {
  //   useEffect(() => {
  //     const itemClassname = () => {
  //       if (typeof document !== "undefined") {
  //         const listItems: NodeListOf<HTMLLIElement> =
  //           document.querySelectorAll(".benefitsList li");
  //         listItems.forEach((item: HTMLLIElement) => {
  //           console.log("item", item);
  //           const width: number = item.offsetWidth;
  //           item.style.height = `${width}px`;
  //         });
  //       }
  //     };
  //     itemClassname(); // Викликаємо функцію після монтажу компонента
  //   }, []);

  return (
    <section className={styles.section}>
      <div className={`container ${styles.container}`}>
        <h2 className={`sectionTitle ${styles.sectionTitle}`}>
          <span>Чому варто обрати мої послуги?</span>
        </h2>
        <ul className={styles.benefitsList}>
          {benefits.map((el: elProps) => {
            return (
              <li key={el.id}>
                <div className={styles.itemNumber}>{el.id}</div>
                <h3>{el.title}</h3>
                <p>{el.text}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default BenefitsSection;
