"use client";
import Link from 'next/link';
import { usePathname } from "next/navigation";
import LogoutBtn from '../LogoutBtn/LogoutBtn';
import styles from './DashboardNavigation.module.scss';

type Props = {
    handleLogout: any;
    session?: {
        user?: {
            name?: string | null | undefined;
            email?: string | null | undefined;
            image?: string | null | undefined;
        } | undefined
    } | null;
};


const DashboardNavigation = ({ handleLogout, session }: Props) => {
    const pathName = usePathname();
    const isAdmin = session?.user?.email === process.env.NEXT_PUBLIC_MASTER || session?.user?.email === process.env.NEXT_PUBLIC_DESIGNER || session?.user?.email === process.env.NEXT_PUBLIC_TESTER

    return (
        <>
            {session?.user && <div className={styles.container}>
                {isAdmin && <Link className={pathName === "/dashboard/catalogue" ? `${styles.pageLink} ${styles.active}` : `${styles.pageLink}`} href="/dashboard/catalogue">Catalogue</Link>}
                {isAdmin && <a className={styles.pageLink} href="https://squoosh.app/" target="_blank" rel="noopener noreferrer">Squoosh</a>}
                <LogoutBtn handleLogout={handleLogout} />
            </div >}
        </>
    )
}


export default DashboardNavigation