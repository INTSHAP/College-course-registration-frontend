import { useMutation, useQuery } from "@tanstack/react-query";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";
import { useGetCourseFunctions } from "./api";
import { CourseRegistrationResponseType } from "../../types/course/registration.types";

export const useRegisterCourse = () => {
  const navigate = useNavigate();
  const { registerCourses } = useGetCourseFunctions();

  return useMutation({
    mutationFn: registerCourses,
    onSuccess: (data: CourseRegistrationResponseType) => {
      toast.success("Successfully registered ");
      navigate("/dashboard");
      return data;
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
};

export const useGetLevelSemesterCourses = () => {
  const { getCourses } = useGetCourseFunctions();
  return useQuery({
    queryKey: ["courses"],
    queryFn: getCourses,
    refetchOnWindowFocus: false,
  });
};
