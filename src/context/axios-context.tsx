import axios, { AxiosError } from "axios";
import { ReactNode, createContext, useContext, useMemo } from "react";
import { AxiosContextType } from "../types/axios/index.types";
import { useAuth } from "./auth-context";
import { AuthContextType } from "../types/auth/login.types";

// const NODE_ENV = import.meta.env.NODE_ENV;

// const base_api_url_dev = "http://localhost:3000/v1";
const base_api_url_pro = "https://college-course-reg-system.onrender.com/v1";

// export const LOGIN_URL = base_api_url + "/login";
// export const SIGNUP_URL = base_api_url + "/signup";

export const API_BASE_URL = base_api_url_pro;
// NODE_ENV === "production" ? base_api_url_pro : base_api_url_dev;

const AxiosContext = createContext<AxiosContextType | null>(null);

const AxiosProvider = ({ children }: { children: ReactNode }) => {
  const { token, setToken } = useAuth() as AuthContextType;
  const axiosPublicInstance = axios.create({ baseURL: API_BASE_URL });
  const axiosProtectedInstance = axios.create({ baseURL: API_BASE_URL });

  // add Bearer token to Authorization header
  axiosProtectedInstance.interceptors.request.use(
    function (config) {
      if (!config.headers["Authorization"]) {
        config.headers["Authorization"] = `Bearer ${token}`;
      }
      return config;
    },
    function (error) {
      return Promise.reject(error);
    },
  );

  axiosProtectedInstance.interceptors.response.use(
    function (config) {
      return config;
    },
    function (error: AxiosError) {
      console.log("error: ", error.response?.status);
      if (error.response?.status === 401) {
        setToken("");
        // navigate("/login");
        // navigate to login
      }
      return Promise.reject(error);
    },
  );

  const contextValue = useMemo(
    () => ({
      axiosProtectedInstance,
      axiosPublicInstance,
    }),
    [axiosProtectedInstance, axiosPublicInstance],
  );
  return (
    <AxiosContext.Provider value={contextValue}>
      {children}
    </AxiosContext.Provider>
  );
};

export const useAxios = () => useContext(AxiosContext);
export default AxiosProvider;
