import { Link } from "react-router-dom";
import SignupForm from "../components/auth/forms/signup";

const SignupPage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col gap-5 items-center justify-center">
      <h1 className="text-3xl font-bold text-primary">Signup</h1>
      <SignupForm />
      <p>
        Have an account?
        <Link to={"/login"} className="ml-2 text-blue-700 ">
          Login
        </Link>
      </p>
    </div>
  );
};

export default SignupPage;
