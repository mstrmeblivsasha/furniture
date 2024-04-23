import DashboardNavigation from "@/components/DashboardNavigation/DashboardNavigation";
import { auth } from "@/auth/auth";
import { handleLogout } from "@/auth/action";
import styles from './page.module.scss';


export default async function DashboardLayout({ children }) {
    const session = await auth();

    return <div className={styles.layoutContainer}>
        <DashboardNavigation handleLogout={handleLogout} session={session} />
        {children}
    </div>
}