import CourseRegistrationForm from "../../components/course/forms/course-registration";

export default function CourseRegistrationPage() {
  return (
    <div className="flex flex-col gap-4 items-center p-5">
      <h1 className="text-3xl font-bold text-primary">Course registration</h1>
      <CourseRegistrationForm />
    </div>
  );
}
