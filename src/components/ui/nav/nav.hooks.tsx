import { useMemo } from "react";
import { useAuth } from "../../../context/auth-context";
import { AuthContextType } from "../../../types/auth/login.types";
import {
  protectedNavLinks,
  publicNavLinks,
  unAuthenticatedOnlyNavLinks,
} from "../../../data/nav-links";

// create dynamic nav-links depending user's authentication
export const useCreateNavLinks = () => {
  const { token } = useAuth() as AuthContextType;
  return useMemo(() => {
    return [
      ...publicNavLinks,
      ...(!token ? unAuthenticatedOnlyNavLinks : []),
      ...protectedNavLinks,
    ];
  }, [token]);
};
