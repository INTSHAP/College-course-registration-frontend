import { AxiosError, AxiosResponse } from "axios";

export interface RequestError extends AxiosError<AxiosResponse> {
  response: AxiosResponse & {
    code: number;
    message: string;
  };
}
