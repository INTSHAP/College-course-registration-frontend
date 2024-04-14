import { Link } from "react-router-dom";
import { useGetFaculties } from "../../services/faculty/hooks";
import Jumbotron from "../../components/ui/Jumbotron";
import CourseItem from "../../components/course/courseItem";

export default function CoursePage() {
  const { data, isLoading, error } = useGetFaculties();
  if (isLoading) return <h1>loading courses</h1>;
  if (error) return <h1>{error.message}</h1>;
  console.log(data?.faculties[0].courses);

  const getDepartments = (facultyId: string) => {
    const filterFaculty = data?.faculties.filter(
      (item) => item._id === facultyId,
    )[0];
    return filterFaculty?.departments;
  };

  const Faculties = data?.faculties.map((faculty) => (
    <Jumbotron
      text={
        <div className="flex justify-between mr-5">
          <h1 className="text-primary font-bold text-xl">{`${faculty.name}`}</h1>
          <p>
            {`Department(${faculty.departments.length}) & Courses (${faculty.courses.length})`}
          </p>
        </div>
      }
    >
      {getDepartments(faculty._id)?.map((department) => (
        <>
          <h1 className="font-semibold">{department.name}</h1>
          {faculty?.courses?.map((course) => (
            <CourseItem {...course} key={course._id} className="bg-slate-200" />
          ))}
        </>
      ))}
    </Jumbotron>
  ));
  return (
    <div className="flex flex-col gap-4 items-center p-5 w-full md:w-2/3 mx-auto">
      <h1 className="text-xl text-primary font-semibold">Courses</h1>
      {data?.faculties?.length! > 0 ? ( // eslint-disable-line @typescript-eslint/no-non-null-asserted-optional-chain
        Faculties
      ) : (
        <Link
          to={"/course-register"}
          className="bg-primary px-4 p-2 text-white"
        >
          Register your courses
        </Link>
      )}
    </div>
  );
}
