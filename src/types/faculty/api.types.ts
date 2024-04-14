import { CourseType } from "../course/index.types";

export interface FacultyType {
  name: string;
  createdAt: string;
  updatedAt: string;
  _id: string;
  __v: number;
  departments: Department[];
  courses: CourseType[];
}

export interface Department {
  _id: string;
  name: string;
  courses?: CourseType[];
}

export interface FacultyResponseType {
  faculties: FacultyType[];
  totalPages: number;
}
