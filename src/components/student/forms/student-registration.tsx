"use client";

import { useForm } from "react-hook-form";
import { Button } from "../../ui/button";
import { yupResolver } from "@hookform/resolvers/yup";
import { StudentRegistrationFormData } from "../../../types/student/registration.types";
import Form from "../../ui/form";
import { student_registration_validation_schema } from "../../../schemas/student/registration.schema";
import { useRegisterStudent } from "../../../services/student/hooks";
import { FormSelectInputField } from "../../ui/form-components/form-field";
import { useGetFaculties } from "../../../services/faculty/hooks";
import { FacultyType } from "../../../types/faculty/api.types";
import { useCallback } from "react";
import { levels, semesters } from "../../../data/drop-down";

export default function StudentRegistrationForm() {
  const { mutate, isPending } = useRegisterStudent();
  const { data } = useGetFaculties();
  const {
    formState: { errors, isValid },
    register,
    handleSubmit,
    watch,
  } = useForm<StudentRegistrationFormData>({
    resolver: yupResolver(student_registration_validation_schema),
  });

  const onSubmit = async (data: StudentRegistrationFormData) => {
    mutate({
      faculty: data.faculty,
      department: data.department,
      level: data.level,
      semester: data.semester,
    });
  };

  const getFacultyOptions = useCallback((faculties: FacultyType[]) => {
    if (faculties) {
      return faculties.map(({ name, _id }) => {
        return { label: name, value: _id };
      });
    }
    return [];
  }, []);

  const getDepartmentOptions = useCallback(
    (faculties: FacultyType[]) => {
      let selectedF = null;
      if (faculties) {
        selectedF = faculties.find(
          (faculty) => faculty._id === watch("faculty"),
        );
        if (selectedF) {
          return selectedF.departments.map(({ name, _id }) => {
            return { label: name, value: _id };
          });
        } else {
          selectedF = faculties[0];
          return selectedF.departments.map(({ name, _id }) => {
            return { label: name, value: _id };
          });
        }
      }
      return [];
    },
    [watch],
  );

  if (!data) return <h1>Invalid faculty data</h1>;
  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormSelectInputField
        name="faculty"
        label="Faculty"
        register={register}
        placeholder="Select your faculty"
        error={errors.faculty!}
        defaultValue={data?.faculties[0].name}
        options={getFacultyOptions(data?.faculties)}
      />
      <FormSelectInputField
        name="department"
        label="Department"
        register={register}
        placeholder="Select your department"
        error={errors.department!}
        defaultValue={data.faculties[0].departments[0].name}
        options={getDepartmentOptions(data?.faculties)}
      />
      <FormSelectInputField
        name="level"
        label="Level"
        register={register}
        placeholder="Select your level"
        error={errors.level!}
        defaultValue={200}
        options={levels}
      />
      <FormSelectInputField
        name="semester"
        label="Semester"
        register={register}
        placeholder="Select your semester"
        error={errors.semester!}
        defaultValue={1}
        options={semesters}
      />

      <Button
        text="Submit"
        type="submit"
        variant={!isValid ? "secondary" : "default"}
        className="w-full"
        disabled={isPending}
      />
    </Form>
  );
}
