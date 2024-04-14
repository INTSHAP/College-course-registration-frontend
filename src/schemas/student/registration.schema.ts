import * as yup from "yup";

export const student_registration_validation_schema = yup.object({
  faculty: yup.string().required("Required"),
  department: yup.string().required("Required"),
  level: yup.number().required("Required"),
  semester: yup.number().required("Required"),
});
