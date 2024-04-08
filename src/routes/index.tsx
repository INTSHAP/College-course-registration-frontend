import { useAuth } from "../context/auth-context";
import { AuthContextType } from "../types/auth/login.types";
import { routesForAuthenticatedOnly } from "./protected-routes";
import { routesForPublic } from "./public-routes";
import { routesForNotAuthenticatedOnly } from "./unthenticated-only-routes";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Combine and conditionally include routes based on authentication status
const Routes = () => {
  const { token } = useAuth() as AuthContextType;

  // merge all routes
  const router = createBrowserRouter([
    ...routesForPublic,
    ...(!token ? routesForNotAuthenticatedOnly : []),
    ...routesForAuthenticatedOnly,
  ]);

  // Provide the router configuration using RouterProvider
  return <RouterProvider router={router} />;
};

export default Routes;
