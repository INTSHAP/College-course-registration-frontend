import { Link } from "react-router-dom";

const Brand: React.FC = () => {
  return (
    <Link className="border-b-8 pb-2 border-black rounded-md" to={"/"}>
      <h1 className="text-primary text-3xl font-bold">CourseReg</h1>
    </Link>
  );
};

export default Brand;
