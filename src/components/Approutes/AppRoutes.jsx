import { useRoutes } from "react-router-dom";
import Home from "../../pages/Home";
import Blog from "../../pages/Blog";

export const ROUTES = [
  {
    name: "Home",
    path: "/",
    element: <Home />,
  },
  {
    name: "Blog",
    path: "blog",
    // element: <Blog />,
    children: [
      {
        name: "Switching Careers",
        path: "switching-careers",
        // element: <SwitchingCareers />,
      },
      {
        name: "React Breadcrumbs",
        path: "react-breadcrumbs",
        // element: <ReactBreadcrumbs />,
      },
    ],
  },
];

export const AppRoutes = () => {
  const newRoutes = useRoutes(ROUTES);
  return newRoutes;
};
