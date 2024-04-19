"use client";
import React, { createContext, useContext, useState } from "react";

export type CustomizationProps = {
  isMobileMenu: boolean;
  setIsMobileMenu: (vals: boolean) => void;
  // user: any,
  // error: any,
  // logout: () => void;
  // login: (vals: object) => void;
  // register: (vals: object) => void;
  // checkUserLoggedIn : () => void;
};

const initialState: CustomizationProps = {
  isMobileMenu: false,
  setIsMobileMenu: () => {},
  // user: any,
  // error: any,
  // logout: () => {},
  // login: () => {},
  // register: () => {},
  // checkUserLoggedIn : () => {}
};

// const SiteContext = createContext<any>(undefined);
export const SiteContext = createContext<CustomizationProps>(initialState);

export const SiteProvider = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const [isMobileMenu, setIsMobileMenu] = useState(false);

  return (
    <SiteContext.Provider value={{ isMobileMenu, setIsMobileMenu }}>
      {children}
    </SiteContext.Provider>
  );
};

// export const useSiteContext = () => {
//   return useContext(SiteContext);
// };
