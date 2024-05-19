"use client";

import { useEffect, useContext } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactsSchema } from "@/zodShemas/contactsShema";
import { TypeContactsSchema } from "@/zodShemas/contactsShema";
import { useLockBodyScroll } from "@/utils/useLockBodyScroll";
import { sendToTelegram } from "@/utils/sendToTelegram";
import { SiteContext } from "@/context/SiteContext";
import SuccessContent from "./SuccessContent";

import styles from "./ContactForm.module.scss";

const ContactForm = () => {
    const { isSubmited, setSubmited, isModalOpen, setModalOpen } =
        useContext(SiteContext);
    const closeModal = () => {
        setModalOpen(false);
    };
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isSubmitSuccessful, isSubmitting },
    } = useForm<TypeContactsSchema>({
        resolver: zodResolver(contactsSchema),
    });

    useEffect(() => {
        if (isSubmitSuccessful) {
            reset();
        }
    }, [isSubmitSuccessful, reset]);

    const onSubmit: SubmitHandler<TypeContactsSchema> = (data) => {
        setSubmited(true);
        sendToTelegram(data);
        setTimeout(() => {
            if (isModalOpen) closeModal();
            setSubmited(false);
        }, 4000);
    };

    useLockBodyScroll(isModalOpen);

    return (
        <>
            {isSubmited ? (
                <SuccessContent />
            ) : (
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className={styles.form}
                    noValidate
                >
                    {isModalOpen && (
                        <button
                            onClick={closeModal}
                            className={styles.closeBtn}
                        >
                            <svg className={styles.iconBtnClose}>
                                <use href='/sprite.svg#icon-close' />
                            </svg>
                        </button>
                    )}
                    <div className={styles.inputsWrap}>
                        <div className={styles.innerBox}>
                            <div className={styles.errorWrap}>
                                <label
                                    htmlFor='userName'
                                    className={styles.label}
                                >
                                    Ім’я
                                </label>

                                <input
                                    type='text'
                                    id='userName'
                                    autoComplete="off"
                                    maxLength={40}
                                    {...register("userName")}
                                    placeholder='Володимир'
                                    className={
                                        errors.userName
                                            ? `${styles.input} ${styles.errorColor}`
                                            : styles.input
                                    }
                                />
                                <p className={styles.error}>
                                    {errors.userName?.message}
                                </p>
                            </div>
                            <div className={styles.errorWrap}>
                                <label htmlFor='phone' className={styles.label}>
                                    Телефон
                                </label>

                                <input
                                    type='text'
                                    id='phone'
                                    autoComplete="off"
                                    maxLength={13}
                                    {...register("phone")}
                                    placeholder='+380981234567'
                                    className={
                                        errors.phone
                                            ? `${styles.input} ${styles.errorColor}`
                                            : styles.input
                                    }
                                />
                                <p className={styles.error}>
                                    {errors.phone?.message}
                                </p>
                            </div>
                        </div>
                        <div className={styles.innerBox}>
                            <div className={styles.textareaWrap}>
                                <label
                                    htmlFor='message'
                                    className={styles.label}
                                >
                                    Повідомлення
                                </label>

                                <textarea
                                    id='message'
                                    autoComplete="off"
                                    maxLength={240}
                                    {...register("message")}
                                    placeholder='Я хочу проконсультуватися з Вами з приводу ...'
                                    className={
                                        errors.message
                                            ? `${styles.input} ${styles.textarea} ${styles.errorColor}`
                                            : `${styles.input} ${styles.textarea}`
                                    }
                                />
                                <p className={styles.error}>
                                    {errors.message?.message}
                                </p>
                            </div>
                        </div>
                    </div>
                    <button
                        type='submit'
                        className={styles.btn}
                        disabled={isSubmitting}
                    >
                        Чекаю дзвінок
                    </button>
                </form>
            )}
        </>
    );
};

export default ContactForm;