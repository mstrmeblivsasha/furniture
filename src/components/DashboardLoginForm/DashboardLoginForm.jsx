import Link from "next/link";
import styles from "./DashboardLoginForm.module.scss"


const DashboardLoginForm = () => {
    return (
        <form className={styles.form}>
            <h2>Форма входу</h2>
            <input type="email" placeholder="email" name="email" />
            <input type="password" placeholder="password" name="password" />
            <button>Login</button>

            <p className={styles.text}>Ще не маєте акаунта? <Link className={styles.link} href='/dashboard/register'>Register</Link> </p>
        </form>
    )
}


export default DashboardLoginForm;