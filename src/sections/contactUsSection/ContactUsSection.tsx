"use client";

import { useState } from "react";
import ContactForm from "@/components/ContactForm/ContactForm";
import styles from "./ContactUsSection.module.scss";

const ContactUsSection = () => {
    const [isSubmited, setSubmited] = useState(false);
    return (
        <section>
            <div className={`container ${styles.container} `}>
                <h2 className={styles.title}>
                    {!isSubmited && <span>Маєте питання?</span>}
                </h2>
                <ContactForm
                    isSubmited={isSubmited}
                    setSubmited={setSubmited}
                />
            </div>
        </section>
    );
};

export default ContactUsSection;
