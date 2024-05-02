// "use client";

import { navlinks } from "@/data/navLinks";
import Link from "next/link";
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
  return (
    <nav className={`${styles.nav} ${className}`}>
      {navlinks.map((el: elProps) => (
        <Link key={el.id} href={el.href} className={`hoverLink ${styles.link}`}>
          {el.title}
        </Link>
      ))}
    </nav>
  );
};

export default NavLinks;
