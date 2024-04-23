import { NavLink } from "react-router-dom";
import cn from "../../../libs/styles";
import { useDrawer } from "../../../context/nav-context";
import { NavDawerContextType } from "../../../types/nav/drawer.types";

interface LinkProps {
  href: string;
  name: string;
}

const CustomNavLink: React.FC<LinkProps> = ({ href, name }: LinkProps) => {
  const { closeDrawer } = useDrawer() as NavDawerContextType;
  if (name)
    return (
      <NavLink
        onClick={closeDrawer}
        to={href}
        className={({ isActive }) =>
          cn(
            "p-2 px-4 rounded-full shadow-sm bg-slate-200 text-primary w-full shadow-black capitalize hover:scale-95 duration-100 transition-all",
            {
              "bg-primary/30 text-white": isActive,
            },
          )
        }
      >
        {name}
      </NavLink>
    );
};

export default CustomNavLink;
