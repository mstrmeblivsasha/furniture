"use client";

import { navlinks } from "@/data/navLinks";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { MouseEvent, useEffect, useState } from "react"; // імпортуємо тип MouseEvent
import styles from "./NavLinks.module.scss";

type navProps = {
  className?: string;
  onClick?: (event: MouseEvent<HTMLAnchorElement>) => void; // Тип для onClick
};

type elProps = {
  id: string;
  href: string;
  title: string;
};

type prevEl = {
  prev: string;
};

const NavLinks = ({ className, onClick }: navProps) => {
  const isClient = typeof window !== "undefined";
  const pathName = usePathname();
  // isClient && console.log("window.location.hash ", window.location.hash);
  const [hash, setHash] = useState<string>("");

  useEffect(() => {
    if (
      isClient &&
      (window.location.hash === "" || window.location.hash === "#hero")
    ) {
      setHash("#hero");
    } else {
      setHash(window.location.hash);
    }
  }, [isClient, setHash]);

  return (
    <nav className={`${styles.nav} ${className}`}>
      {navlinks.map((el: elProps) => {
        const homeLinkClassName: any = () => {
          if (isClient && hash === el.href.slice(1)) {
            return `${styles.link}  activeLink`;
          } else {
            return `${styles.link} hoverLink`;
          }
        };

        const pageLinkClassName: any = () => {
          if (
            (isClient && pathName === el.href) ||
            pathName.includes(el.href)
          ) {
            return `${styles.link}  activeLink`;
          } else {
            return `${styles.link} hoverLink`;
          }
        };

        return (
          <Link
            key={el.id}
            href={el.href}
            className={
              pathName === "/" ? homeLinkClassName() : pageLinkClassName()
            }
            onClick={(event) => {
              // Оновлюємо хеш при кліці на посилання
              setHash((prev): any => {
                prev === window.location.hash;
              });

              if (onClick) {
                onClick(event);
              }
            }}
          >
            {el.title}
          </Link>
        );
      })}
    </nav>
  );
};

export default NavLinks;
