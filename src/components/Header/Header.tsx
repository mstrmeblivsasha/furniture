"use client";

import { SiteContext } from "@/context/SiteContext";
import { useWindowResize } from "@/hooks/windowResize";
import { useContext } from "react";
import BurgerBtn from "../BurgerBtn/BurgerBtn";
import Logo from "../Logo/Logo";
import NavLinks from "../NavLinks/NavLinks";
import styles from "./Header.module.scss";

type NavLinksStylesFunction = () => string | undefined;

const Header = () => {
  const { isMobileMenu } = useContext(SiteContext);
  // console.log(isMobileMenu);
  const { isMobile, isTablet } = useWindowResize();

  const navlinksStyles: NavLinksStylesFunction = () => {
    if ((isMobile || isTablet) && isMobileMenu) {
      return `${styles.navLinks}`;
    } else if ((isMobile || isTablet) && !isMobileMenu) {
      return `${styles.navLinks} ${styles.navLinksHidden}`;
    } else {
      return `${styles.navLinks}`;
    }
  };

  return (
    <header className={styles.header}>
      <div className={`container ${styles.container}`}>
        {isMobile || isTablet ? (
          <BurgerBtn />
        ) : (
          <a href="tel:+380973988008" className={`${styles.tell} hoverLink`}>
            +380-97-398-80-08
          </a>
        )}

        <Logo className={`${styles.logo} hoverLink`} />

        <NavLinks className={navlinksStyles()} />
      </div>
    </header>
  );
};

export default Header;
