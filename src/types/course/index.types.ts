export interface CourseProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  code: string;
  status: string;
  fee: number;
  creditUnit: number;
  isFormControl?: boolean;
  htmlFor?: string;
}

export interface CourseFooterProps extends React.HTMLAttributes<HTMLElement> {
  totalFee: number;
  totalCreditUnit: number;
}

export interface CourseHeaderProps extends React.HTMLAttributes<HTMLElement> {}

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
