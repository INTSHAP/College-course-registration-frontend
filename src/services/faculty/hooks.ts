import { useQuery } from "@tanstack/react-query";
import { getFaculties } from "./api";

export const useGetFaculties = () => {
  return useQuery({
    queryFn: getFaculties,
    refetchOnWindowFocus: false,
    queryKey: ["faculties"],
  });
};
