import styles from "./LogoutBtn.module.scss";


const LogoutBtn = ({ handleLogout }) => {
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