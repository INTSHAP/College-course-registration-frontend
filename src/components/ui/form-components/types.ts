import { FieldError, UseFormRegister } from "react-hook-form";

export type FormData = {
  email: string;
  password: string;
  firstname: string;
  lastname: string;
  confirmPassword: string;
};

export type LoginFormData = {
  email: string;
  password: string;
  firstname: string;
  lastname: string;
  confirmPassword: string;
};

export interface FormFieldProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  name: ValidFieldNames;
  type: ValidFieldTypes;
  valueAsNumber?: boolean;
  register: UseFormRegister<any>; // eslint-disable-line @typescript-eslint/no-explicit-any
  error: FieldError;
  placeholder: string;
  label: string;
}

export type ValidFieldNames =
  | "email"
  | "password"
  | "firstname"
  | "lastname"
  | "confirmPassword";

export type ValidFieldTypes = "text" | "number" | "password";
