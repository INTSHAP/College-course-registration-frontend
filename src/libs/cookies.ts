import Cookies from "js-cookie";
import { LoginResponseUser } from "../types/auth/login.types";

export const setTokenCookie = (newCookie: string, expiresIn: string) => {
  Cookies.set("token", newCookie, { expires: new Date(expiresIn) });
};

export const removeTokenCookie = () => {
  Cookies.remove("token");
};

export const getUserCookie = () => {
  const userOjb = Cookies.get("user");
  if (userOjb) return JSON.parse(userOjb);
  return null;
};

export const setUserCookie = (value: LoginResponseUser, expiresIn: string) => {
  Cookies.set("user", JSON.stringify(value), { expires: new Date(expiresIn) });
};

export const removeUserCookie = () => {
  Cookies.remove("user");
};

export const getTokenCookie = () => {
  return Cookies.get("token") || null;
};
