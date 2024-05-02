"use client";

import { navlinks } from "@/data/navLinks";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import styles from "./NavLinks.module.scss";

type navProps = {
  className?: string;
};

type elProps = {
  id: string;
  href: string;
  title: string;
};

const NavLinks = ({ className }: navProps) => {
  // const NavLinks = (className) => {
  const pathName = usePathname();

  return (
    <nav className={`${styles.nav} ${className}`}>
      {navlinks.map((el: elProps) => (
        // <Link key={el.id} href={el.href} className={`hoverLink ${styles.link}`}>
        <Link
          key={el.id}
          href={el.href}
          className={
            pathName === el.href
              ? `${styles.link}  activeLink`
              : `${styles.link} hoverLink`
          }
        >
          {el.title}
        </Link>
      ))}
    </nav>
  );
};

export default NavLinks;
