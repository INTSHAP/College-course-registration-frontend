import * as yup from "yup";

export const signup_validation_schema = yup.object({
  email: yup.string().email().required("Required"),
  password: yup
    .string()
    .min(8, "Must be at least 8 characters")
    .required("Password required")
    .matches(/[a-z]+/, "Must contain atleast one lowercase character")
    .matches(/[A-Z]+/, "Must contain atleast one uppercase character")
    .matches(/\d+/, "Must contain atleast one digit"),
  confirmPassword: yup
    .string()
    .required("Confirm password required")
    .oneOf([yup.ref("password")], "Passwords must match"),
  firstname: yup.string().required("Required"),
  lastname: yup.string().required("Required"),
});
