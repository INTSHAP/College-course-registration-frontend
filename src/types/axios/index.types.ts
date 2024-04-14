import { AxiosInstance } from "axios";

export interface AxiosContextType {
  axiosPublicInstance: AxiosInstance;
  axiosProtectedInstance: AxiosInstance;
}
