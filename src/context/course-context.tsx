import { ReactNode, createContext, useContext, useMemo, useState } from "react";
import { CourseContextType } from "../types/course/registration.types";
import { CourseType } from "../types/course/index.types";

const CourseContext = createContext<CourseContextType | null>(null);

export const CourseProvider = ({ children }: { children: ReactNode }) => {
  const [courses, setCourses_] = useState<CourseType[]>([]);
  const [totalFee, setTotalFee_] = useState(0);
  const [totalCreditUnits, setTotalCreditUnits_] = useState(0);

  const setCourses = (newCourses: CourseType[]) => {
    setCourses_(newCourses);
  };
  const setTotalFee = (newFee: number) => {
    setTotalFee_(newFee);
  };

  const setTotalCreditUnits = (newTotalCreditUnits: number) => {
    setTotalCreditUnits_(newTotalCreditUnits);
  };

  const contextValues = useMemo(() => {
    return {
      totalFee,
      courses,
      setCourses,
      setTotalFee,
      totalCreditUnits,
      setTotalCreditUnits,
    };
  }, [courses, totalFee, totalCreditUnits]);
  return (
    <CourseContext.Provider value={contextValues}>
      {children}
    </CourseContext.Provider>
  );
};

export const useCourse = () => useContext(CourseContext);

export default CourseProvider;
