import * as yup from "yup";

export const course_registration_validation_schema = yup.object({
  courses: yup.array().required(),
  fee: yup.number().required().min(0, "Invalid course fee"),
});
