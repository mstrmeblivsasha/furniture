"use client";

import React, { useContext } from "react";
import styles from "./BurgerBtn.module.scss";
import { SiteContext } from "@/context/SiteContext";

const BurgerBtn = () => {
  const { isMobileMenu, setIsMobileMenu } = useContext(SiteContext);
  // console.log("isMobileMenu", isMobileMenu);

  return (
    <button
      className={styles.burgerBtn}
      onClick={() => {
        setIsMobileMenu(!isMobileMenu);
      }}
    >
      {isMobileMenu ? (
        <svg>
          <use href="./sprite.svg#icon-burgerclose"></use>
        </svg>
      ) : (
        <svg>
          <use href="./sprite.svg#icon-burger"></use>
        </svg>
      )}
    </button>
  );
};

export default BurgerBtn;
