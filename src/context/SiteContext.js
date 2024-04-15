// import React, { useState, createContext, ReactNode } from "react";

// interface SiteContextType {
//   burgerMenu: boolean;
//   setBurgermenu: React.Dispatch<React.SetStateAction<boolean>>;
// }

// export const SiteContext = (createContext < SiteContextType) | (null > null);

// interface SiteProviderProps {
//   children: ReactNode;
// }

// export const SiteProvider = ({ children }: SiteProviderProps) => {
//   const [burgerMenu, setBurgermenu] = useState(false);

//   return (
//     <SiteContext.Provider
//       value={{
//         burgerMenu,
//         setBurgermenu,
//       }}
//     >
//       {children}
//     </SiteContext.Provider>
//   );
// };
