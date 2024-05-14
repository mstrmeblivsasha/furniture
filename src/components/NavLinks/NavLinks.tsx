"use client";

import { navlinks } from "@/data/navLinks";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
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
  const isClient = typeof window !== "undefined";
  const pathName = usePathname();

  const [active, setActive] = useState<boolean>(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      if (window.location.hash === "") {
        setActive(true);
      } else {
        setActive(false);
      }
      // window.location.hash === "" ? setActive(true) : setActive(false);
    }
  }, []);
  active && window.location.hash === "#hero";

  const isCataloguePage: any = pathName.startsWith("/catalogue");

  return (
    <nav className={`${styles.nav} ${className}`}>
      {navlinks.map((el: elProps) => {
        // console.log("pathName", pathName);
        // console.log("el.href", el.href);
        // console.log("el.href.slice(1)", el.href.slice(1));
        // isClient && console.log("window.location.href", window.location.href);
        // isClient && console.log("window.location.hash", window.location.hash);

        const homeLinkClassName: any = () => {
          if (isClient && el.href.slice(1) === window.location.hash) {
            return `${styles.link}  activeLink`;
          } else {
            return `${styles.link} hoverLink`;
          }
        };
        const pageLinkClassName: any = () => {
          if (isClient && pathName === el.href) {
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
            // className={
            //   isCataloguePage ? pageLinkClassName() : homeLinkClassName()
            // }
            onClick={onClick}
          >
            {el.title}
          </Link>
        );
      })}
    </nav>
  );
};

export default NavLinks;
