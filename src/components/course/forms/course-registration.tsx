import { useForm } from "react-hook-form";
import { Button } from "../../ui/button";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  CourseContextType,
  CourseRegistrationFormData,
} from "../../../types/course/registration.types";
import Form from "../../ui/form";
import { CheckBoxFieldWrapper } from "../../ui/form-components/form-field";
import { useGetFaculties } from "../../../services/faculty/hooks";
import { course_registration_validation_schema } from "../../../schemas/course/registration.schema";
import CourseItem from "../courseItem";
import {
  useGetLevelSemesterCourses,
  useRegisterCourse,
} from "../../../services/course/hooks";
import CourseHeading from "../courseHeading";
import CourseFooter from "../courseFooter";
import { UseQueryResult } from "@tanstack/react-query";
import {
  CourseResponseData,
  CourseType,
} from "../../../types/course/index.types";
import { useCallback, useEffect } from "react";
import { useCourse } from "../../../context/course-context";
import { computeCoursesTotalFeeAndCreditUnits } from "../../../libs/course";
import { useNavigate } from "react-router-dom";

export default function CourseRegistrationForm() {
  const navigate = useNavigate();

  const {
    setCourses,
    setTotalFee,
    setTotalCreditUnits,
    totalFee: tFee,
    totalCreditUnits: tCreditUnit,
    courses: selectedCourses_,
  } = useCourse() as CourseContextType;
  const { mutate, isPending } = useRegisterCourse();
  const { data } = useGetFaculties();
  const {
    formState: { isValid },
    register,
    handleSubmit,
    getValues,
    setValue,
    watch,
  } = useForm<CourseRegistrationFormData>({
    resolver: yupResolver(course_registration_validation_schema),
  });
  const { data: coursesData, isLoading: loadingCourses } =
    useGetLevelSemesterCourses() as UseQueryResult<CourseResponseData>;

  const onSubmit = async (data: CourseRegistrationFormData) => {
    mutate({
      courses: data.courses,
      fee: data.fee,
    });
  };

  const proceedToPayment = () => {
    console.log(selectedCourses_);
    if (!selectedCourses_) return;
    navigate("/course-payment");
  };

  const isChecked = watch("courses");

  const computeTotals = useCallback(() => {
    if (coursesData) {
      const { courses } = coursesData;
      if (!getValues("courses")) {
        setTotalCreditUnits(0);
        setTotalFee(0);
        return;
      }

      const selectedCourses = (courses.filter((course) =>
        getValues("courses").includes(course._id),
      ) || []) as CourseType[];

      setCourses(selectedCourses);

      const { totalCreditUnit, totalFee } =
        computeCoursesTotalFeeAndCreditUnits(selectedCourses);
      setTotalFee(totalFee);

      setTotalCreditUnits(totalCreditUnit);
      setValue("fee", totalCreditUnit);
    }
  }, [
    coursesData,
    getValues,
    setCourses,
    setTotalCreditUnits,
    setTotalFee,
    setValue,
  ]);

  useEffect(() => {
    computeTotals(); // eslint-disable-next-line
  }, [isChecked]);

  if (!data) return <h1>Invalid faculty data</h1>;
  return (
    <Form onSubmit={handleSubmit(onSubmit)} className="w-full md:w-full">
      {loadingCourses ? (
        <h1>Loading courses</h1>
      ) : coursesData?.courses?.length === 0 ? (
        <h1>No courses</h1>
      ) : (
        <div className="w-full flex flex-col gap-3 md:w-2/3">
          <h3>Courses</h3>
          <CourseHeading className="bg-black text-white" />
          {coursesData?.courses?.map((course) => {
            return (
              <CheckBoxFieldWrapper key={course._id}>
                <input
                  id={course._id}
                  value={course._id}
                  type="checkbox"
                  {...register("courses")}
                  className="p-5 h-5 w-5 border-primary border-2 checked:bg-primary"
                />
                <CourseItem {...course} />
              </CheckBoxFieldWrapper>
            );
          })}
          <CourseFooter totalCreditUnit={tCreditUnit} totalFee={tFee} />
        </div>
      )}
      <Button
        text="Submit"
        onClick={proceedToPayment}
        variant={!isValid ? "secondary" : "default"}
        className="w-full md:w-1/5"
        disabled={isPending}
      />
    </Form>
  );
}
