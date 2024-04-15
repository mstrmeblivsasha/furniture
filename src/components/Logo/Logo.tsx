import React from "react";
import styles from "./Logo.module.scss";
import { Noto_Serif } from "next/font/google";

const notoSerif = Noto_Serif({ subsets: ["cyrillic"], weight: ["300"] });
interface LogoProps {
  className?: string; // Опційний className
}

const Logo = ({ className }: LogoProps) => {
  return (
    <>
      <p className={`${notoSerif.className} ${styles.logo} ${className}`}>
        МайстерМеблів
      </p>
    </>
  );
};

export default Logo;
