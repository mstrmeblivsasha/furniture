"use client"
import { useEffect } from 'react'
import { useFormState } from 'react-dom'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { register } from '@/auth/action'
import styles from './DashboardRegisterForm.module.scss'


const DashboardRegisterForm = ({ session }) => {
    // содержит информацию об ошибках
    const [state, formAction] = useFormState(register, undefined);

    const router = useRouter();

    useEffect(() => {
        state?.success && router.push("/dashboard");
    }, [state?.success, router]);

    return (
        <>
            {!session?.user
                ? <form className={styles.form} action={formAction}>
                    <h2>Форма реєстрації</h2>
                    <input type="email" placeholder="email" name="email" />
                    <input type="password" placeholder="password" name="password" />
                    <button>Зареєструватись</button>

                    {state?.error && <p className={styles.errMessage} >{state.error}</p>}

                    <p className={styles.text}>Вже зареєстровані? <Link className={styles.link} href='/dashboard'>Вхід</Link> </p>
                </form>
                : null}
        </>
    )
}


export default DashboardRegisterForm