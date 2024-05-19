import { useContext } from "react";
import { SiteContext } from "@/context/SiteContext";
import Image from "next/image";
import styles from "./ContactForm.module.scss";

const SuccessContent = () => {
    const { isModalOpen, setModalOpen, setSubmited } = useContext(SiteContext);
    return (
        <div className={styles.successWrap}>
            {isModalOpen && (
                <button
                    onClick={() => setModalOpen(false)}
                    className={styles.closeBtn}
                >
                    <svg className={styles.iconBtnClose}>
                        <use href='/sprite.svg#icon-close' />
                    </svg>
                </button>
            )}
            <div className={styles.successInnerBox}>
                <h2 className={styles.successTitle}>Вітаю! Ваше повідомлення відправлено! Чекайте мого дзвінка найближчим часом!
                </h2>
                <div className={styles.imgWrap}>
                    <Image
                        className={styles.image}
                        src='/successMan.webp'
                        alt='Picture of man'
                        fill
                    />
                </div>
            </div>
            <button
                type='button'
                onClick={() => {
                    setSubmited(false);
                    setModalOpen(false);
                }}
                className={`${styles.btn} ${styles.btnOk}`}
            >
                Ок
            </button>
        </div>
    );
};


export default SuccessContent;