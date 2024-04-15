import ContactForm from "@/components/ContactForm/ContactForm";
import styles from "./ContactUsSection.module.scss";

const ContactUsSection = () => {
    return (
        <section>
            <div className={`container ${styles.container} `}>
                <h2 className={styles.title}>
                    <span>Маєте питання?</span>
                </h2>
                <ContactForm />
            </div>
        </section>
    );
};

export default ContactUsSection;
