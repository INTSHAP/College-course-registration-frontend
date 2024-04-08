import { RequestError } from "../types/auth/error.types";
import axios from "axios";
import { User } from "../libs/types";
import { LoginData } from "../types/auth/login.types";
import { AxiosResponse } from "axios";
import { SignupData } from "../types/auth/signup.types";

const API_BASE_URL = "http://localhost:3000/v1";

export const axiosInstance = axios.create({ baseURL: API_BASE_URL });

export const loginUser = async (data: LoginData) => {
  return await axiosInstance
    .post<User>("/auth/login", data)
    .then((res: AxiosResponse) => res.data)
    .catch((err: RequestError) => {
      throw new Error(err.response?.data.message);
    });
};

export const registerUser = async (data: SignupData) => {
  return await axiosInstance
    .post<User>("/auth/register", data)
    .then((res: AxiosResponse) => res.data)
    .catch((err: RequestError) => {
      throw new Error(err.response?.data.message);
    });
};
