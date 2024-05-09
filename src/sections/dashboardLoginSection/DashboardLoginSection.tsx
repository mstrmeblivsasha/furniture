import { auth } from "@/auth/auth";
import DashboardLoginForm from "@/components/DashboardLoginForm/DashboardLoginForm";
import styles from './DashboardLoginSection.module.scss'


const DashboardLoginSection = async () => {
    const session = await auth();
    const isAdmin = session?.user?.email === process.env.NEXT_PUBLIC_MASTER || session?.user?.email === process.env.NEXT_PUBLIC_DESIGNER || session?.user?.email === process.env.NEXT_PUBLIC_DEVELOPER

    return (
        <section className={styles.container}>
            {!session?.user && <DashboardLoginForm />}

            {session?.user && isAdmin && <h2 className={styles.successTitle}>Вітаємо Вас у адмінці. Оберіть потрібний Вам розділ.</h2>}

            {session?.user && !isAdmin && <h2 className={styles.errorTitle}>У Вас недостатньо повноважень для роботи в адмінці.</h2>
            }
        </section>
    )
}


export default DashboardLoginSection