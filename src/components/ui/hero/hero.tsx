import heroImage from "../../../images/course-hero-img.png";
import { Link } from "react-router-dom";

const Hero: React.FC = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row gap-10 justify-evenly items-center w-full md:min-h-screen">
      <div className="m-full md:w-1/3 leading-9 flex flex-col gap-10">
        <h1 className="text-3xl md:text-5xl text-primary font-bold text-center md:text-left leading-[2rem]">
          With CourseReg, your course registration is easier than ever.
        </h1>
        <Link
          className="bg-primary text-white rounded-md p-2 px-4"
          to={"/course-register"}
        >
          Get Started
        </Link>
      </div>
      <img
        src={heroImage}
        alt="hero"
        height={400}
        width={450}
        className="object-cover"
      />
    </div>
  );
};

export default Hero;
