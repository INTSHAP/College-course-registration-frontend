import * as yup from "yup";

export const login_validation_schema = yup.object({
  email: yup.string().email().required("Required"),
  password: yup.string().required("Required"),
});
