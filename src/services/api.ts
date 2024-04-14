import { RequestError } from "../types/auth/error.types";
import { User } from "../libs/types";
import { LoginData } from "../types/auth/login.types";
import { AxiosResponse } from "axios";
import { SignupData } from "../types/auth/signup.types";
import { useAxios } from "../context/axios-context";
import { AxiosContextType } from "../types/axios/index.types";

export const useAuthFunctions = () => {
  const { axiosPublicInstance: axiosInstance } = useAxios() as AxiosContextType;
  return {
    loginUser: async (data: LoginData) => {
      return await axiosInstance
        .post<User>("/auth/login", data)
        .then((res: AxiosResponse) => res.data)
        .catch((err: RequestError) => {
          throw new Error(err.response?.data.message);
        });
    },
    registerUser: async (data: SignupData) => {
      return await axiosInstance
        .post<User>("/auth/register", data)
        .then((res: AxiosResponse) => res.data)
        .catch((err: RequestError) => {
          throw new Error(err.response?.data.message);
        });
    },
  };
};
