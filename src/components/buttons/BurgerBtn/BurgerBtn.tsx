"use client";

import React, { useContext, useEffect } from "react";
import styles from "./BurgerBtn.module.scss";
import { SiteContext } from "@/context/SiteContext";
// import { useWindowResize } from "@/hooks/windowResize";

const BurgerBtn = () => {
  const { isMobileMenu, setIsMobileMenu } = useContext(SiteContext);
  // const { isMobile, isTablet, isLaptop, isDesktop } = useWindowResize();

  useEffect(() => {
    const handleBodyClass = () => {
      const mainEl = document.querySelector("main");

      // if (mainEl) {
      if (isMobileMenu) {
        mainEl?.classList.add("bluredBody");
        document.body.style.overflow = "hidden";
      } else {
        mainEl?.classList.remove("bluredBody");
        document.body.style.overflow = "auto";
      }
      // }
    };

    handleBodyClass();

    return () => {
      // Видалення обробника подій при видаленні компонента
      const mainEl = document.querySelector("main");
      // if (mainEl) {
      mainEl?.classList.remove("bluredBody");
      // }
    };
  }, [isMobileMenu]);

  return (
    <button
      className={styles.burgerBtn}
      onClick={() => {
        setIsMobileMenu(!isMobileMenu);
      }}
    >
      {isMobileMenu ? (
        <svg>
          <use href="/sprite.svg#icon-burgerclose"></use>
        </svg>
      ) : (
        <svg>
          <use href="/sprite.svg#icon-burger"></use>
        </svg>
      )}
    </button>
  );
};

export default BurgerBtn;
