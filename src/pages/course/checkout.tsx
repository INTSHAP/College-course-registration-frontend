import { Link, useNavigate } from "react-router-dom";
import CourseFooter from "../../components/course/courseFooter";
import CourseItem from "../../components/course/courseItem";
import { useCourse } from "../../context/course-context";
import { CourseContextType } from "../../types/course/registration.types";
import { Button } from "../../components/ui/button";
import { useEffect } from "react";

export default function CourseRegistrationCheckoutPage() {
  const navigate = useNavigate();
  const { courses, totalFee, totalCreditUnits } =
    useCourse() as CourseContextType;

  console.log(courses);
  useEffect(() => {
    if (courses.length === 0) {
      navigate("/course-register");
    } // eslint-disable-next-line
  }, [courses.length]);
  return (
    <div className="flex flex-col gap-4 items-center p-5">
      <h1 className="text-xl md:text-3xl font-bold text-primary">
        Course Registration Confirmation
      </h1>
      <p>
        You are about to register {courses.length} courses. Kindly confirm your
        selection before proceeding to payment
      </p>
      <div className="w-full flex flex-col gap-3 md:w-2/3 ">
        {courses.map((course) => (
          <CourseItem {...course} key={course._id} />
        ))}
        <CourseFooter totalCreditUnit={totalCreditUnits} totalFee={totalFee} />
        <div className="flex justify-between md:justify-start items-center gap-5">
          <Button
            className="bg-red-600 text-white"
            text="Go back"
            onClick={() => {
              navigate(-1);
            }}
          />
          <Link
            to={"/course-payment"}
            className="bg-primary px-4 py-2 rounded-md text-white"
          >
            Confirm
          </Link>
        </div>
      </div>
    </div>
  );
}
