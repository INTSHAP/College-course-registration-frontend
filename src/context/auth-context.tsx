import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { LoginResponseUser, AuthContextType } from "../types/auth/login.types";
import {
  getTokenCookie,
  getUserCookie,
  removeTokenCookie,
  removeUserCookie,
  setTokenCookie,
  setUserCookie,
} from "../libs/cookies";

const AuthContext = createContext<AuthContextType | null>(null);

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  // State to hold the authentication token
  const [token, setToken_] = useState(getTokenCookie());
  const [user, setUser_] = useState(getUserCookie());
  const [expires, setExpires_] = useState("");

  // Function to set the authentication token
  const setToken = (newToken: string) => {
    setToken_(newToken);
  };
  // Function to set the authentication user
  const setUser = (newUser: LoginResponseUser | null) => {
    setUser_(newUser);
  };

  const setExpires = (newExpires: string) => {
    setExpires_(newExpires);
  };

  // clear user, token
  const logout = useCallback(() => {
    setToken("");
    setUser(null);
    removeTokenCookie();
    removeUserCookie();
  }, []);

  useEffect(() => {
    if (token) {
      // set cookies
      setTokenCookie(token, expires);
      setUserCookie(user, expires);
    } else {
      removeTokenCookie();
      removeUserCookie();
    }
  }, [token, expires, user, logout]);

  // Memoized value of the authentication context
  const contextValue = useMemo(
    () => ({
      token,
      user,
      setToken,
      setUser,
      setExpires,
      logout,
    }),
    [token, user, logout],
  );

  // Provide the authentication context to the children components
  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};

export default AuthProvider;
