import { AxiosResponse } from "axios";
import { StudentRegistrationData } from "../../types/student/registration.types";
import { RequestError } from "../../types/auth/error.types";
import { useAxios } from "../../context/axios-context";
import { AxiosContextType } from "../../types/axios/index.types";

export const useGetStudentFunctions = () => {
  const { axiosProtectedInstance: axiosInstance } =
    useAxios() as AxiosContextType;
  return {
    registerStudent: async (data: StudentRegistrationData) => {
      return await axiosInstance
        .post<StudentRegistrationData>("/students", data)
        .then((res: AxiosResponse) => res.data)
        .catch((err: RequestError) => {
          throw new Error(err.response?.data.message);
        });
    },
  };
};
