import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";
import { useGetStudentFunctions } from "./api";
import { StudentRegistrationResponseType } from "../../types/student/registration.types";

export const useRegisterStudent = () => {
  const navigate = useNavigate();
  const { registerStudent } = useGetStudentFunctions();

  return useMutation({
    mutationFn: registerStudent,
    onSuccess: (data: StudentRegistrationResponseType) => {
      toast.success("Successfully registered ");
      navigate("/dashboard");
      return data;
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
};
