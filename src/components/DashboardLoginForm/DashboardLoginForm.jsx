"use client"
import { useFormState } from 'react-dom'
import Link from "next/link";
import { login } from "@/auth/action";
import styles from "./DashboardLoginForm.module.scss"


const DashboardLoginForm = ({ session }) => {
    // содержит информацию об ошибках
    const [state, formAction] = useFormState(login, undefined);

    return (
        <>
            {!session?.user
                ? <form className={styles.form} action={formAction}>
                    <h2>Форма входу</h2>
                    <input type="email" placeholder="email" name="email" />
                    <input type="password" placeholder="password" name="password" />
                    <button>Увійти</button>

                    {state?.error && <p className={styles.errMessage} >{state.error}</p>}

                    <p className={styles.text}>Ще не маєте акаунта? <Link className={styles.link} href='/dashboard/register'>Реєстрація</Link> </p>
                </form>
                : null}</>
    )
}


export default DashboardLoginForm;