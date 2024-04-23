import { useAuth } from "../../../context/auth-context";
import { AuthContextType } from "../../../types/auth/login.types";
import { LiaTimesSolid } from "react-icons/lia";
import { useCreateNavLinks } from "./nav.hooks";
import CustomNavLink from "./nav-link";
import { Button } from "../button";
import { FaPowerOff } from "react-icons/fa6";
import { useDrawer } from "../../../context/nav-context";
import { NavDawerContextType } from "../../../types/nav/drawer.types";

const NavDrawer: React.FC = () => {
  const { user, logout } = useAuth() as AuthContextType;
  const navlinks = useCreateNavLinks();
  const { closeDrawer } = useDrawer() as NavDawerContextType;

  // const closeDrawer = () => {
  //   setToggleDrawer(false);
  // };

  return (
    <div className="flex flex-col fixed top-0 left-0 md:right-0 z-20 w-4/5 md:w-2/6 min-h-screen bg-primary rounded-md p-10">
      <LiaTimesSolid
        className="top-3 right-3 text-white text-3xl absolute hover:scale-110 duration-100 transition-all"
        onClick={closeDrawer}
      />
      {user && (
        <div className="bg-primary rounded-md p-5 text-white">
          <h1>Hi, {user?.name}</h1>
        </div>
      )}
      <nav className="min-h-full w-full flex flex-col gap-3 p-5">
        {navlinks?.map((link, index) => (
          <CustomNavLink href={link.href} name={link.name} key={index} />
        ))}
      </nav>

      {user && (
        <Button
          text="Log out"
          className="flex gap-3 justify-center items-center mx-auto w-1/3 mt-auto rounded-full"
          variant={"dark"}
          onClick={logout}
        >
          <FaPowerOff className="text-primary" />
        </Button>
      )}
    </div>
  );
};

export default NavDrawer;
