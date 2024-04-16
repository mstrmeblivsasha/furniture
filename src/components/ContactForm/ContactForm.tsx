"use client";

import { useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactsSchema } from "@/zodShemas/contactsShema";
import { TypeContactsSchema } from "@/zodShemas/contactsShema";

import styles from "./ContactForm.module.scss";

const ContactForm = () => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isSubmitSuccessful, isSubmitting },
    } = useForm<TypeContactsSchema>({
        resolver: zodResolver(contactsSchema),
        // reValidateMode: "onChange",
    });

    useEffect(() => {
        if (isSubmitSuccessful) {
            reset();
        }
    }, [isSubmitSuccessful, reset]);

    const onSubmit: SubmitHandler<TypeContactsSchema> = (data) => {
        console.log("data:", data);
    };

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className={styles.form}
            noValidate
        >
            <div className={styles.inputWrap}>
                <label htmlFor='userName' className={styles.label}>
                    Ім’я
                </label>

                <input
                    type='text'
                    id='userName'
                    maxLength={40}
                    {...register("userName")}
                    placeholder='Ваше Ім’я'
                    className={styles.input}
                />
                <p className={styles.error}>{errors.userName?.message}</p>
            </div>
            <div className={styles.inputWrap}>
                <label htmlFor='phone' className={styles.label}>
                    Телефон
                </label>

                <input
                    type='text'
                    id='phone'
                    maxLength={13}
                    {...register("phone")}
                    placeholder='+ 380_________'
                    className={styles.input}
                />
                <p className={styles.error}>{errors.phone?.message}</p>
            </div>
            <div className={styles.inputWrap}>
                <label htmlFor='message' className={styles.label}>
                    Повідомлення
                </label>

                <input
                    type='text'
                    id='message'
                    maxLength={240}
                    {...register("message")}
                    placeholder='Ваше замовлення'
                    className={styles.input}
                />
                <p className={styles.error}>{errors.message?.message}</p>
            </div>
            <button
                type='submit'
                className={styles.btn}
                disabled={isSubmitting}
            >
                Чекаю дзвінок
            </button>
        </form>
    );
};

export default ContactForm;
