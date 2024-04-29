"use client";

import { useEffect, useContext } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactsSchema } from "@/zodShemas/contactsShema";
import { TypeContactsSchema } from "@/zodShemas/contactsShema";
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
        console.log("submitData:", data);
        setTimeout(() => {
            if (isModalOpen) closeModal();
            setSubmited(false);
        }, 3000);
    };

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
                                    maxLength={40}
                                    {...register("userName")}
                                    placeholder='Ваше Ім’я'
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
                                    maxLength={13}
                                    {...register("phone")}
                                    placeholder='+ 380_________'
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
                                    maxLength={240}
                                    {...register("message")}
                                    placeholder='Ваше замовлення'
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
