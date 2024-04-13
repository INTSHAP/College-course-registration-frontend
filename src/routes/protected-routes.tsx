import { useAuth } from "../context/auth-context";
import Dashboard from "../pages/dashboard";
import StudentRegisterationPage from "../pages/student/register";
import { AuthContextType } from "../types/auth/login.types";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => {
  const { token } = useAuth() as AuthContextType;

  if (!token) {
    return <Navigate to="/login" />;
  }

  // If authenticated, render the child routes
  return <Outlet />;
};

export const routesForAuthenticatedOnly = [
  {
    path: "/",
    element: <ProtectedRoute />,
    children: [
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/student",
        element: <StudentRegisterationPage />,
      },
    ],
  },
];
