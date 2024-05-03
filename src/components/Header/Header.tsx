"use client";

import { SiteContext } from "@/context/SiteContext";
import { useWindowResize } from "@/hooks/windowResize";
import { useCallback, useContext, useEffect, useRef } from "react";
import BurgerBtn from "../buttons/BurgerBtn/BurgerBtn";
import Logo from "../Logo/Logo";
import NavLinks from "../NavLinks/NavLinks";
import styles from "./Header.module.scss";

type NavLinksStylesFunction = () => string;
type clickType = {
  click: () => {};
};

const Header = () => {
  const { isMobileMenu, setIsMobileMenu } = useContext(SiteContext);
  const { isMobile, isTablet, isDesktop } = useWindowResize();

  const navlinksStyles: NavLinksStylesFunction = () => {
    if (!isDesktop && isMobileMenu) {
      return `${styles.navLinks}`;
    } else if (!isDesktop && !isMobileMenu) {
      return `${styles.navLinks} ${styles.navLinksHidden}`;
    } else {
      return `${styles.navLinks}`;
    }
  };

  // const navlinksStyles: NavLinksStylesFunction = useCallback(() => {
  //   if (!isDesktop && isMobileMenu) {
  //     return `${styles.navLinks}`;
  //   } else if (!isDesktop && !isMobileMenu) {
  //     return `${styles.navLinks} ${styles.navLinksHidden}`;
  //   } else {
  //     return `${styles.navLinks}`;
  //   }
  // }, [isDesktop, isMobileMenu]);

  // const handleClickOutside = (event: MouseEvent) => {
  //   const target = event.target as HTMLElement;
  //   if (!target.className.includes("navLinks")) {
  //     setIsMobileMenu(false);
  //   }
  // };

  const handleClickOutside = useCallback(
    (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.className.includes("navLinks")) {
        setIsMobileMenu(false);
      }
    },
    [setIsMobileMenu]
  );

  useEffect(() => {
    if (isMobileMenu) {
      document?.addEventListener("click", handleClickOutside);
    }

    return () => {
      document?.removeEventListener("click", handleClickOutside);
    };
  }, [isMobileMenu, handleClickOutside]);

  return (
    <header className={styles.header}>
      <div className={`container ${styles.container}`}>
        {!isDesktop && <BurgerBtn />}
        {(!isMobile || !isTablet) && (
          <a href="tel:+380973988008" className={`${styles.tell} hoverLink`}>
            +380-97-398-80-08
          </a>
        )}

        <Logo className={`${styles.logo} hoverLink`} />

        <NavLinks
          className={navlinksStyles()}
          onClick={() => {
            setIsMobileMenu(false);
          }}
        />
      </div>
    </header>
  );
};

export default Header;
