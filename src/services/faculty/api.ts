import { AxiosResponse } from "axios";
import { useAxios } from "../../context/axios-context";
import { RequestError } from "../../types/auth/error.types";
import { FacultyResponseType } from "../../types/faculty/api.types";
import { AxiosContextType } from "../../types/axios/index.types";

export const useGetFacultyFunctions = () => {
  const { axiosProtectedInstance: axiosInstance } =
    useAxios() as AxiosContextType;
  return {
    getFaculties: async () => {
      return await axiosInstance
        .get("/faculties")
        .then((res: AxiosResponse<FacultyResponseType>) => res.data)
        .catch((err: RequestError) => {
          console.log(err);
          throw new Error(err.response?.data.message);
        });
    },
  };
};
