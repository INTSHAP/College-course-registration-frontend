"use client";

import { useForm } from "react-hook-form";
import { FormInputField } from "../../ui/form-components/form-field";
import { Button } from "../../ui/button";
import { LoginData } from "../../../types/auth/login.types";
import { login_validation_schema } from "../../../schemas/authentication/login.schema";
import Form from "../../ui/form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useLoginUser } from "../../../services/auth.hooks";

export default function LoginForm() {
  const { mutate, isPending } = useLoginUser();
  const {
    formState: { errors, isValid },
    register,
    handleSubmit,
  } = useForm<LoginData>({
    resolver: yupResolver(login_validation_schema),
  });

  const onSubmit = async (data: LoginData) => {
    mutate(data);
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
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
      <Button
        text="Login"
        type="submit"
        variant={!isValid ? "secondary" : "default"}
        className="w-full"
        disabled={isPending}
      />
    </Form>
  );
}
