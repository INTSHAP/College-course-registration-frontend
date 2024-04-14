export interface CourseProps {
  title: string;
  code: string;
  status: string;
  fee: number;
  creditUnit: number;
  isFormControl?: boolean;
  htmlFor?: string;
}

export interface CourseFooterProps {
  totalFee: number;
  totalCreditUnit: number;
}

export interface CourseType {
  title: string;
  code: string;
  status: string;
  fee: number;
  creditUnit: number;
  department: string;
  faculty: string;
  _id: string;
}

export interface CourseResponseData {
  courses: CourseType[];
}
