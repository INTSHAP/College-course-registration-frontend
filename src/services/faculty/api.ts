import { AxiosResponse } from "axios";
import { axiosInstance } from "..";
import { RequestError } from "../../types/auth/error.types";
import { FacultyResponseType } from "../../types/faculty/api.types";

export const getFaculties = async () => {
  return await axiosInstance
    .get("/faculties")
    .then((res: AxiosResponse<FacultyResponseType>) => res.data)
    .catch((err: RequestError) => {
      throw new Error(err.response?.data.message);
    });
};
