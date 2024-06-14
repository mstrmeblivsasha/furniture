"use client";

import { SiteContext } from "@/context/SiteContext";
import Link from "next/link";
import React, { useContext } from "react";
import styles from "./Logo.module.scss";

type LogoProps = {
  className?: string;
};

const Logo = ({ className }: LogoProps) => {
  const { hash, setHash } = useContext(SiteContext);

  return (
    <>
      <Link
        href="/"
        className={`${styles.logo} ${className}`}
        onClick={() => {
          setHash("/");
        }}
      >
        МайстерМеблів
      </Link>
    </>
  );
};

export default Logo;
