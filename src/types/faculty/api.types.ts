export interface FacultyType {
  name: string;
  createdAt: string;
  updatedAt: string;
  _id: string;
  __v: number;
  departments: Department[];
}

interface Department {
  _id: string;
  name: string;
}

export interface FacultyResponseType {
  faculties: FacultyType[];
  totalPages: number;
}
