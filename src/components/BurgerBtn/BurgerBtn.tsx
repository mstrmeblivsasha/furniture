import React, { useContext } from "react";
import styles from "./BurgerBtn.module.scss";

const BurgerBtn = () => {
  // const {   burgerMenu,
  //   setBurgermenu}  =   useContext(SiteContext);
  return (
    <button className={styles.burgerBtn}>
      <svg>
        <use href="./sprite.svg#icon-burger"></use>
      </svg>
    </button>
  );
};

export default BurgerBtn;
