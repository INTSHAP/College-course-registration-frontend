import { CourseType } from "./index.types";

export interface CourseRegistrationFormData {
  courses: string[];
  fee: number;
}

export interface CourseRegistrationData extends CourseRegistrationFormData {}

export interface RegisteredCoursesGroup {
  courses: CourseType[];
  fee: number;
  level: number;
  semester: number;
  student: string;
}
export interface CourseRegistrationResponseType {
  registeredCourses: RegisteredCoursesGroup[];
}
export interface CourseContextType {
  courses: CourseType[];
  totalFee: number;
  totalCreditUnits: number;
  setCourses: (newCourses: CourseType[]) => void;
  setTotalFee: (newTotalFee: number) => void;
  setTotalCreditUnits: (newTotalCreditUnits: number) => void;
}
