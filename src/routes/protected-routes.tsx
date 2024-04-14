import { useAuth } from "../context/auth-context";
import Dashboard from "../pages/dashboard";
import StudentRegistrationPage from "../pages/student/register";
import { AuthContextType } from "../types/auth/login.types";
import { Navigate, Outlet } from "react-router-dom";
import CourseRegistrationPage from "../pages/course/register";
import PaymentPage from "../pages/course/payment";

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
        element: <StudentRegistrationPage />,
      },
      {
        path: "/course-register",
        element: <CourseRegistrationPage />,
      },

      {
        path: "/course-payment",
        element: <PaymentPage />,
      },
    ],
  },
];
