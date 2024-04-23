import { useQuery } from "@tanstack/react-query";
import { useGetFacultyFunctions } from "./api";

export const useGetFaculties = () => {
  const { getFaculties } = useGetFacultyFunctions();
  return useQuery({
    queryFn: getFaculties,
    refetchOnWindowFocus: false,
    queryKey: ["faculties"],
  });
};
