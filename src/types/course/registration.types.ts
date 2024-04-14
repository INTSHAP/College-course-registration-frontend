import { CourseType } from "./index.types";

export interface CourseRegistrationFormData {
  courses: string[];
  fee: number;
}

export interface CourseRegistrationData extends CourseRegistrationFormData {}

export interface CourseRegistrationResponseType {}

export interface CourseContextType {
  courses: CourseType[];
  totalFee: number;
  totalCreditUnits: number;
  setCourses: (newCourses: CourseType[]) => void;
  setTotalFee: (newTotalFee: number) => void;
  setTotalCreditUnits: (newTotalCreditUnits: number) => void;
}
