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
                <h2 className={styles.successTitle}>
                    Вітаю! Ваше повідомлення відправлено мені на пошту! Я
                    передзвоню вам найближчим часом!
                </h2>
                <div className={styles.imgWrap}>
                    <Image src='/successMan.webp' fill alt='Picture of man' />
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
