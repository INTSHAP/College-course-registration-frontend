import StudentRegistrationForm from "../../components/student/forms/student-registration";
import studentImage from "../../images/course-hero-img.png";

export default function StudentRegisterationPage() {
  return (
    <div className="flex flex-col gap-4 items-center p-5">
      <h1 className="text-3xl font-bold text-primary">Student registration</h1>
      <div className="flex justify-center gap-10 items-start w-full my-5">
        <StudentRegistrationForm />
        <img
          src={studentImage}
          className="hidden md:block object-cover"
          height={400}
          width={400}
        />
      </div>
    </div>
  );
}
