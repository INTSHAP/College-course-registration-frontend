import { Link } from "react-router-dom";
import { useAuth } from "../context/auth-context";
import { AuthContextType } from "../types/auth/login.types";

export default function Dashboard() {
  const { user } = useAuth() as AuthContextType;
  return (
    <div className="flex flex-col gap-4 items-center p-5">
      <h1>{user?.name}s' Dashboard</h1>
      {user?.registration ? (
        <div className="bg-slate-100 rounded-md w-full md:w-2/3 grid grid-cols-1 gap-2 text-left">
          <h1 className="text-xl text-primary">Registered</h1>
          <div className="grid grid-cols-2 border-b-2">
            <h3 className="bg-black text-white font-semibold p-5">Level </h3>
            <h3 className="p-5">{user.registration.level}</h3>
          </div>
          <div className="grid grid-cols-2 border-b-2">
            <h3 className="bg-black text-white font-semibold p-5">Semester </h3>
            <h3 className="p-5">{user.registration.semester}</h3>
          </div>
        </div>
      ) : (
        <Link to={"/student"} className="bg-primary px-4 p-2 text-white">
          Register as a student
        </Link>
      )}
    </div>
  );
}
