import CoursePage from "../pages/course";
import HomePage from "../pages/home";

export const routesForPublic = [
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/about-us",
    element: <div>About Us</div>,
  },
  {
    path: "/courses",
    element: <CoursePage />,
  },
];
