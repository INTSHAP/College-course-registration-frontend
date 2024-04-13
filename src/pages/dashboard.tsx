import { Link } from "react-router-dom";
import { useAuth } from "../context/auth-context";
import { AuthContextType } from "../types/auth/login.types";

export default function Dashboard() {
  const { user } = useAuth() as AuthContextType;
  return (
    <div className="flex flex-col gap-4 items-center p-5">
      <h1>{user?.name}s' Dashboard</h1>
      <Link to={"/student"} className="bg-primary px-4 p-2 text-white">
        Register as a student
      </Link>
    </div>
  );
}
