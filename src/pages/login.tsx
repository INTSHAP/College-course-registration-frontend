import LoginForm from "../components/auth/forms/login";
import { Link } from "react-router-dom";

const LoginPage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col gap-5 items-center justify-center">
      <h1 className="text-3xl font-bold text-primary">Login</h1>
      <LoginForm />
      <p>
        Have no account?
        <Link to={"/signup"} className="ml-2 text-blue-700 ">
          Signup
        </Link>
      </p>
    </div>
  );
};

export default LoginPage;
