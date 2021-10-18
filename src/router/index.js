import HomeTemplate from "../container/HomeTemplate";

const routeHome = [
  {
    path: "/",
    component: HomeTemplate,
    exact: true,
  },
];

const routesAdmin = [];

export { routeHome, routesAdmin };
