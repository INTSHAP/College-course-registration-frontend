import { Link } from "react-router-dom";

export default function Course() {
  return (
    <div className="flex flex-col gap-4 items-center p-5">
      <h1>Courses</h1>
      <Link to={"/course-register"} className="bg-primary px-4 p-2 text-white">
        Register your courses
      </Link>
    </div>
  );
}
