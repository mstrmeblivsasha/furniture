import styles from "./LogoutBtn.module.scss";

type Props = {
    handleLogout: any
}

const LogoutBtn = ({ handleLogout }: Props) => {
    return (
        <form action={handleLogout} className={styles.container}>
            <button className={styles.logoutBtn}>
                <svg className={styles.exitIcon}>
                    <use href="/sprite.svg#icon-exit" />
                </svg>
            </button>
        </form>
    );
};


export default LogoutBtn;