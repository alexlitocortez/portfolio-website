import { useRoutes } from "react-router-dom";
import Home from "../../pages/Home";
import Blog from "../../pages/Blog";
import SwitchingCareeers from "/Users/l/portfolio-website/src/pages/Blog Pages/HowISwitchedCareers2TimesAndGotADeveloperJob";

export const ROUTES = [
  {
    name: "Home",
    path: "/",
    element: <Home />,
  },
  {
    name: "Blog",
    path: "/blog",
    element: <Blog />,
  },
  {
    name: "Switching Careers",
    path: "/blog/how-i-switched-careers-2-times-and-got-a-developer-job",
    element: <SwitchingCareeers />,
  },
];

export const AppRoutes = () => {
  const routes = useRoutes(ROUTES);
  return routes;
};
