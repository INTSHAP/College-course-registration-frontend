import { CourseType } from "../types/course/index.types";

export const computeCoursesTotalFeeAndCreditUnits = (courses: CourseType[]) => {
  let fees: number[] = [];
  let creditUnits: number[] = [];
  if (courses.length > 0) {
    fees = courses.map((course) => course?.fee);
    creditUnits = courses.map((course) => course?.creditUnit);
  }
  const totalFee = fees.reduce(
    (totalValue, currentValue) => totalValue + currentValue,
    0,
  );

  const totalCreditUnit = creditUnits.reduce(
    (totalValue, currentValue) => totalValue + currentValue,
    0,
  );
  return { totalFee, totalCreditUnit };
};
