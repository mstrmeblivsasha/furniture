import Link from "next/link";
import React from "react";
import styles from "./Logo.module.scss";
// import { Noto_Serif } from "next/font/google";

// const notoSerif = Noto_Serif({ subsets: ["cyrillic"], weight: ["300"] });

type LogoProps = {
  className?: string;
};

const Logo = ({ className }: LogoProps) => {
  return (
    <>
      {/* <p className={`${notoSerif.className} ${styles.logo} ${className}`}>
        МайстерМеблів
      </p> */}
      <Link href="/" className={`${styles.logo} ${className}`}>
        МайстерМеблів
      </Link>
    </>
  );
};

export default Logo;
