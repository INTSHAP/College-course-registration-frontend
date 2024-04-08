"use client";

import { useForm } from "react-hook-form";
import { FormInputField } from "../../ui/form-components/form-field";
import { Button } from "../../ui/button";
import { signup_validation_schema } from "../../../schemas/authentication/signup.schema";
import { yupResolver } from "@hookform/resolvers/yup";
import { SignupFormData } from "../../../types/auth/signup.types";
import Form from "../../ui/form";
import { useRegisterUser } from "../../../services/auth.hooks";

export default function SignupForm() {
  const { mutate, isPending } = useRegisterUser();
  const {
    formState: { errors, isValid },
    register,
    handleSubmit,
  } = useForm<SignupFormData>({
    resolver: yupResolver(signup_validation_schema),
  });

  const onSubmit = async (data: SignupFormData) => {
    mutate({
      email: data.email,
      password: data.password,
      name: data.firstname + data.lastname,
    });
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormInputField
        name="firstname"
        label="First name"
        register={register}
        placeholder="Enter your first name"
        type="text"
        error={errors.firstname!}
      />
      <FormInputField
        name="lastname"
        label="Last name"
        register={register}
        placeholder="Enter your last name"
        type="text"
        error={errors.lastname!}
      />
      <FormInputField
        name="email"
        label="Email"
        register={register}
        placeholder="Enter your email"
        type="text"
        error={errors.email!}
      />
      <FormInputField
        name="password"
        label="Password"
        register={register}
        placeholder="Enter your password"
        type="password"
        error={errors.password!}
      />
      <FormInputField
        name="confirmPassword"
        label="Confirm password"
        register={register}
        placeholder="Enter your password"
        type="password"
        error={errors.confirmPassword!}
      />
      <Button
        text="Sign up"
        type="submit"
        variant={!isValid ? "secondary" : "default"}
        className="w-full"
        disabled={isPending}
      />
    </Form>
  );
}
