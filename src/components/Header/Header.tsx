"use client";

import { SiteContext } from "@/context/SiteContext";
import { useWindowResize } from "@/hooks/windowResize";
import { useCallback, useContext, useEffect, useRef, useState } from "react";
import BurgerBtn from "../buttons/BurgerBtn/BurgerBtn";
import Logo from "../Logo/Logo";
import NavLinks from "../NavLinks/NavLinks";
import styles from "./Header.module.scss";

type NavLinksStylesFunction = () => string;

const Header = () => {
  const { isMobileMenu, setIsMobileMenu } = useContext(SiteContext);
  const { isMobile, isTablet, isDesktop } = useWindowResize();
  const [scrolledWindow, setScrolledWindow] = useState<number>(0);

  const headerRef = useRef<HTMLDivElement>(null);
  const header = headerRef.current;

  const navlinksStyles: NavLinksStylesFunction = () => {
    if (!isDesktop && isMobileMenu) {
      return `${styles.navLinks}`;
    } else if (!isDesktop && !isMobileMenu) {
      return `${styles.navLinks} ${styles.navLinksHidden}`;
    } else {
      return `${styles.navLinks}`;
    }
  };

  const handleClickOutside = useCallback(
    (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.className.includes("navLinks")) {
        setIsMobileMenu(false);
      }
    },
    [setIsMobileMenu]
  );

  const headerScrollClassName: () => void = useCallback(() => {
    if (window?.scrollY <= 80) {
      header?.classList.remove(`${styles.hidden}`);
      header?.classList.add(`${styles.visible}`);
    } else if (window?.scrollY > scrolledWindow) {
      header?.classList.add(`${styles.hidden}`);
      header?.classList.remove(`${styles.visible}`);
    } else if (window?.scrollY < scrolledWindow) {
      header?.classList.remove(`${styles.hidden}`);
      header?.classList.add(`${styles.visible}`);
    }

    setScrolledWindow(window.scrollY);
  }, [scrolledWindow, setScrolledWindow, header?.classList]);

  useEffect(() => {
    if (isMobileMenu) {
      document?.addEventListener("click", handleClickOutside);
    }

    window?.addEventListener("scroll", headerScrollClassName);

    return () => {
      document?.removeEventListener("click", handleClickOutside);
      window?.removeEventListener("scroll", headerScrollClassName);
    };
  }, [isMobileMenu, handleClickOutside, headerScrollClassName]);

  return (
    <header className={`${styles.header}`} ref={headerRef}>
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
