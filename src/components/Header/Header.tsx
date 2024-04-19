"use client";

import { SiteContext } from "@/context/SiteContext";
import { useContext } from "react";
import BurgerBtn from "../BurgerBtn/BurgerBtn";
import Logo from "../Logo/Logo";
import NavLinks from "../NavLinks/NavLinks";
import styles from "./Header.module.scss";

const Header = () => {
  const { isMobileMenu } = useContext(SiteContext);
  // console.log(isMobileMenu);

  return (
    <header className={styles.header}>
      <div className={`container ${styles.container}`}>
        <BurgerBtn />
        <Logo className={styles.logo} />
        <NavLinks
          className={
            isMobileMenu
              ? styles.mobileLinks
              : `${styles.mobileLinks} ${styles.mobileLinksHidden}`
          }
        />
      </div>
      {/* {isMobileMenu && (
        <div className={styles.mobileLinksFrame}>
          <div
            className={
              isMobileMenu
                ? styles.mobileLinksBackdropVisible
                : styles.mobileLinksBackdrop
            }
          >
            <NavLinks className={styles.mobileLinks} />
          </div>
        </div>
      )} */}
    </header>
  );
};

export default Header;
