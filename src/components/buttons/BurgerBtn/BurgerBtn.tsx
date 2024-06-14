"use client";

import React, { useContext, useEffect } from "react";
import styles from "./BurgerBtn.module.scss";
import { SiteContext } from "@/context/SiteContext";

const BurgerBtn = () => {
  const { isMobileMenu, setIsMobileMenu } = useContext(SiteContext);

  useEffect(() => {
    const handleBodyClass = () => {
      const mainEl = document.querySelector("main");

      if (isMobileMenu) {
        mainEl?.classList.add("bluredBody");
        document.body.style.overflowY = "hidden";
      } else {
        mainEl?.classList.remove("bluredBody");
        document.body.style.overflowY = "auto";
        document.body.style.overflowX = "hidden";
      }
    };

    handleBodyClass();

    return () => {
      // Видалення обробника подій при видаленні компонента
      const mainEl = document.querySelector("main");
      mainEl?.classList.remove("bluredBody");
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
