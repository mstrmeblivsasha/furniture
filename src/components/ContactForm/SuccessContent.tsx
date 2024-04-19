import { Dispatch, SetStateAction } from "react";
import Image from "next/image";
import styles from "./ContactForm.module.scss";

type TypeProps = {
    setSubmited: Dispatch<SetStateAction<boolean>>;
};

const SuccessContent = ({ setSubmited }: TypeProps) => {
    return (
        <div className={styles.successWrap}>
            <div className={styles.successInnerBox}>
                <h2 className={styles.successTitle}>
                    Вітаю! Ваше повідомлення відправлено мені на пошту! Я
                    передзвоню вам найближчим часом!
                </h2>
                <div className={styles.imgWrap}>
                    <Image
                        src='/successMan.webp'
                        priority={true}
                        fill
                        alt='Picture of man'
                    />
                </div>
            </div>
            <button
                type='button'
                onClick={() => setSubmited(false)}
                className={`${styles.btn} ${styles.btnOk}`}
            >
                Ок
            </button>
        </div>
    );
};

export default SuccessContent;
