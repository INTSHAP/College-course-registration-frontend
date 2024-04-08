import LoginPage from "../pages/login";
import SignupPage from "../pages/signup.";

export const routesForNotAuthenticatedOnly = [
  {
    path: "/signup",
    element: <SignupPage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
];
