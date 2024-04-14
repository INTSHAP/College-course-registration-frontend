import { LoginResponseUser } from "../auth/login.types";

export interface StudentRegistrationFormData {
  faculty: string;
  department: string;
  semester: number;
  level: number;
}

export interface StudentRegistrationData extends StudentRegistrationFormData {}

export interface StudentRegistrationResponseType {
  user: LoginResponseUser;
}
