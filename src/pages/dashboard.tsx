import { Link } from "react-router-dom";
import { useAuth } from "../context/auth-context";
import { AuthContextType } from "../types/auth/login.types";
import { useGetStudentRegisteredCourses } from "../services/course/hooks";
import CourseItem from "../components/course/courseItem";
import Info from "../components/ui/dashboard/info";
import clsx from "clsx";
import CourseHeading from "../components/course/courseHeading";
import { Button } from "../components/ui/button";

export default function Dashboard() {
  const { user } = useAuth() as AuthContextType;
  const { data, isLoading, error } = useGetStudentRegisteredCourses();
  const registeredCourses = data?.registeredCourses!; // eslint-disable-line @typescript-eslint/no-non-null-asserted-optional-chain

  if (error) return <h1>Error occured</h1>;
  if (isLoading) return <h1>loading</h1>;

  const RegisteredCourses = registeredCourses[0]?.courses ? (
    <div className="w-full flex flex-col gap-3">
      <CourseHeading
        className="bg-primary text-white"
        children={<h3>Action</h3>}
      />
      {registeredCourses[0].courses.map((course, index) => (
        <CourseItem
          {...course}
          key={course._id}
          className={clsx("bg-slate-200", {
            "bg-black text-white": index % 2 === 0,
          })}
          children={<Button text="Unregister" className="bg-red-500" />}
        />
      ))}
    </div>
  ) : null;

  return (
    <div className="flex flex-col gap-4 items-center p-5">
      <h1 className="text-xl font-semibold">{user?.name}s' Dashboard</h1>
      {user?.registration ? (
        <>
          <div className="bg-slate-50 rounded-md w-full md:w-2/3 grid grid-cols-1 gap-2 text-left">
            <Info title="Faculty" value={user.registration.faculty.name} />
            <Info
              title="Department"
              value={user.registration.department.name}
            />
            <Info title="Level" value={user.registration.level} />
            <Info title="Semester" value={user.registration.semester} />
          </div>
          <div className="bg-slate-50 rounded-md w-full md:w-2/3 grid grid-cols-1 gap-2 text-left">
            <h3>Registered courses</h3>
            {isLoading ? <h1>loading courses</h1> : RegisteredCourses}
          </div>
        </>
      ) : (
        <Link to={"/student"} className="bg-primary px-4 p-2 text-white">
          Register as a student
        </Link>
      )}
    </div>
  );
}
