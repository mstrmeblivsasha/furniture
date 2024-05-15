"use client";
import { createContext, useState, Dispatch, SetStateAction } from "react";

export type CustomizationProps = {
  isMobileMenu: boolean;
  setIsMobileMenu: (vals: boolean) => void;
  isModalOpen: boolean;
  setModalOpen: Dispatch<SetStateAction<boolean>>;
  isSubmited: boolean;
  setSubmited: Dispatch<SetStateAction<boolean>>;
  hash: string;
  setHash: any;
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
  isModalOpen: false,
  setModalOpen: () => {},
  isSubmited: false,
  setSubmited: () => {},
  hash: "",
  setHash: () => {},
  // user: any,
  // error: any,
  // logout: () => {},
  // login: () => {},
  // register: () => {},
  // checkUserLoggedIn : () => {}
};

export const SiteContext = createContext<CustomizationProps>(initialState);

export const SiteProvider = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const [isMobileMenu, setIsMobileMenu] = useState(false);
  const [isModalOpen, setModalOpen] = useState(false);
  const [isSubmited, setSubmited] = useState(false);
  const [hash, setHash] = useState("");

  return (
    <SiteContext.Provider
      value={{
        isMobileMenu,
        setIsMobileMenu,
        isModalOpen,
        setModalOpen,
        isSubmited,
        setSubmited,
        hash,
        setHash,
      }}
    >
      {children}
    </SiteContext.Provider>
  );
};
