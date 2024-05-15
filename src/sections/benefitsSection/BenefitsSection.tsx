"use client";

import styles from "./BenefitsSection.module.scss";
import { benefits } from "../../data/benefits";

type elProps = {
  id: string;
  title: string;
  text: string;
};

const BenefitsSection = () => {
  return (
    <section className={styles.section}>
      <div className={`container ${styles.container}`}>
        <h2 className="sectionTitle">
          <span>Чому варто обрати мої послуги?</span>
        </h2>
        <ul className={styles.benefitsList}>
          {benefits.map((el: elProps) => {
            return (
              <li key={el.id}>
                <p className={styles.itemNumber}>{el.id}</p>
                <h3>{el.title}</h3>
                <p className={styles.itemText}>{el.text}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default BenefitsSection;
