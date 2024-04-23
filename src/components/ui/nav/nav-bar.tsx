import Brand from "../brand";
import { Button } from "../button";
import { FaBarsStaggered } from "react-icons/fa6";
import NavDrawer from "./nav-drawer";
import { Outlet } from "react-router-dom";
import { useAuth } from "../../../context/auth-context";
import { AuthContextType } from "../../../types/auth/login.types";
import { useDrawer } from "../../../context/nav-context";
import { NavDawerContextType } from "../../../types/nav/drawer.types";

const Navbar: React.FC = () => {
  const { opened, openDrawer } = useDrawer() as NavDawerContextType;
  const { user } = useAuth() as AuthContextType;
  return (
    <header className="p-5 md:px-10 rounded-full bg-slate-300 shadow-md flex justify-between items-center relative">
      <Brand />
      <div className="flex items-center gap-5">
        {!user && <Button text="Login" className="hidden md:inline-flex" />}
        <FaBarsStaggered
          className="text-primary text-xl block"
          onClick={openDrawer}
        />
      </div>
      {opened && <NavDrawer />}
    </header>
  );
};

export const NavbarWrapper = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default Navbar;
