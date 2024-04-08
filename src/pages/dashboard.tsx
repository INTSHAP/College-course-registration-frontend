import { useAuth } from "../context/auth-context";
import { AuthContextType } from "../types/auth/login.types";

export default function Dashboard() {
  const { user, setToken } = useAuth() as AuthContextType;
  return (
    <div className="flex flex-col gap-4 items-center p-5">
      <div className="rounded-md bg-primary text-white p-5">
        <h1>Hi {user?.name}</h1>
      </div>
      <hr />
      <button
        onClick={() => {
          setToken("");
        }}
      >
        Logout
      </button>
    </div>
  );
}
