import { useNavigate } from "react-router-dom";
import heroImage from "../../images/course-hero-img.png";
import { Button } from "./button";

const Hero: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col-reverse md:flex-row gap-10 justify-evenly items-center w-full md:min-h-screen">
      {/* <LoginForm className="w-full bg-slate-100 hidden md:flex shadow-md" /> */}
      <div className="m-full md:w-1/3 leading-9 flex flex-col gap-10">
        <h1 className="text-3xl md:text-5xl text-primary font-bold text-center md:text-left leading-[2rem]">
          With CourseReg, your course registration is easier than ever.
        </h1>
        <Button
          text="Get Started"
          onClick={() => {
            navigate("course-register");
          }}
        />
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
