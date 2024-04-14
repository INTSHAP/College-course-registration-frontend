import { AxiosResponse } from "axios";
import { RequestError } from "../../types/auth/error.types";
import { useAxios } from "../../context/axios-context";
import { AxiosContextType } from "../../types/axios/index.types";
import {
  CourseRegistrationResponseType,
  CourseRegistrationData,
} from "../../types/course/registration.types";
import { useAuth } from "../../context/auth-context";
import { AuthContextType } from "../../types/auth/login.types";
import { CourseResponseData } from "../../types/course/index.types";

export const useGetCourseFunctions = () => {
  const { user } = useAuth() as AuthContextType;
  const { axiosProtectedInstance: axiosInstance } =
    useAxios() as AxiosContextType;
  return {
    registerCourses: async (data: CourseRegistrationData) => {
      return await axiosInstance
        .post<CourseRegistrationResponseType>(
          `/course-registrations/${user?.id}`,
          data,
        )
        .then((res: AxiosResponse) => res.data)
        .catch((err: RequestError) => {
          throw new Error(err.response?.data.message);
        });
    },
    // fetch courses belonging to semester of a given level
    getCourses: async () => {
      return await axiosInstance
        .get(`/courses/student/courses`)
        .then((res: AxiosResponse<CourseResponseData>) => res.data)
        .catch((err: RequestError) => {
          throw new Error(err.response?.data.message);
        });
    },
    getRegisteredCourses: async () => {
      return await axiosInstance
        .get(`/course-registrations/${user?.registration._id}`)
        .then((res: AxiosResponse<CourseRegistrationResponseType>) => {
          console.log(res.data.registeredCourses);
          return res.data;
        })
        .catch((err: RequestError) => {
          throw new Error(err.response?.data.message);
        });
    },
  };
};
