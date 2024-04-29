"use client";

import { useState, useContext } from "react";
import { SiteContext } from "@/context/SiteContext";
import ContactForm from "@/components/ContactForm/ContactForm";
import styles from "./ContactUsSection.module.scss";

const ContactUsSection = () => {
  const { isSubmited } = useContext(SiteContext);
  return (
    <section className={styles.section} id="contacts">
      <div className={`container ${styles.container} `}>
        <h2 className={styles.title}>
          {!isSubmited && <span>Маєте питання?</span>}
        </h2>
        <ContactForm />
      </div>
    </section>
  );
};

export default ContactUsSection;
