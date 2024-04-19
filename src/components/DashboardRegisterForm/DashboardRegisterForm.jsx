import Link from 'next/link'
import styles from './DashboardRegisterForm.module.scss'


const DashboardRegisterForm = () => {
    return (
        <form className={styles.form}>
            <h2>Форма реєстрації</h2>
            <input type="email" placeholder="email" name="email" />
            <input type="password" placeholder="password" name="password" />
            <button>Register</button>

            <p className={styles.text}>Вже зареєстровані? <Link className={styles.link} href='/dashboard'>Login</Link> </p>
        </form>
    )
}


export default DashboardRegisterForm