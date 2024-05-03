"use client";

import { navlinks } from "@/data/navLinks";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import styles from "./NavLinks.module.scss";
import { MouseEvent } from "react"; // імпортуємо тип MouseEvent

type navProps = {
  className?: string;
  onClick?: (event: MouseEvent<HTMLAnchorElement>) => void; // Тип для onClick
};

type elProps = {
  id: string;
  href: string;
  title: string;
};

const NavLinks = ({ className, onClick }: navProps) => {
  const pathName = usePathname();

  return (
    <nav className={`${styles.nav} ${className}`}>
      {navlinks.map((el: elProps) => (
        <Link
          key={el.id}
          href={el.href}
          className={
            pathName === el.href
              ? `${styles.link}  activeLink`
              : `${styles.link} hoverLink`
          }
          onClick={onClick}
        >
          {el.title}
        </Link>
      ))}
    </nav>
  );
};

export default NavLinks;
