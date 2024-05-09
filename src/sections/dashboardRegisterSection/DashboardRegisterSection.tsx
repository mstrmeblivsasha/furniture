import { auth } from "@/auth/auth";
import DashboardRegisterForm from "@/components/DashboardRegisterForm/DashboardRegisterForm";
import styles from './DashboardRegisterSection.module.scss'


const DashboardRegisterSection = async () => {
    const session = await auth();

    return (
        <section className={styles.container}>
            {!session?.user && <DashboardRegisterForm />}
        </section>
    )
}


export default DashboardRegisterSection