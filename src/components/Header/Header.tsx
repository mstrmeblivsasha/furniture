import BurgerBtn from "../BurgerBtn/BurgerBtn";
import Logo from "../Logo/Logo";
import styles from "./Header.module.scss";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={`container ${styles.container}`}>
        <BurgerBtn />
        <Logo className={styles.logo} />
      </div>
    </header>
  );
};

export default Header;
