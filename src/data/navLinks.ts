import { v4 } from "uuid";
// console.log(v4());
export const navlinks = [
  {
    id: v4(),
    title: "Головна",
    href: "/",
  },
  {
    id: v4(),
    title: "Про мене",
    href: "/#about",
  },
  {
    id: v4(),
    title: "Каталог",
    href: "/catalogue",
  },
  {
    id: v4(),
    title: "Контакти",
    href: "/#contacts",
  },
];
