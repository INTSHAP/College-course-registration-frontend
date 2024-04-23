import { ReactNode, createContext, useContext, useState } from "react";
import { NavDawerContextType } from "../types/nav/drawer.types";

const DrawerContext = createContext<NavDawerContextType | null>(null);

const DrawerProvider = ({ children }: { children: ReactNode }) => {
  const [opened, setToggleDrawer] = useState(false);

  const closeDrawer = () => {
    setToggleDrawer(false);
  };

  const openDrawer = () => {
    setToggleDrawer(true);
  };
  return (
    <DrawerContext.Provider value={{ opened, closeDrawer, openDrawer }}>
      {children}
    </DrawerContext.Provider>
  );
};

export const useDrawer = () => useContext(DrawerContext);

export default DrawerProvider;
