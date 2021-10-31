import HomePage from "../container/HomeTemplate/HomePage";
import Login from "../container/HomeTemplate/AccUser/Login";
import CreatAcc from "../container/HomeTemplate/AccUser/CreateAcc";
import SPhamPage from "../container/HomeTemplate/SPhamPage";

const routeHome = [
  {
    path: "/",
    component: HomePage,
    exact: true,
  },
  {
    path: "/login",
    component: Login,
    exact: false,
  },
  {
    path: "/signin",
    component: CreatAcc,
    exact: false,
  },
  {
    path: "/sanpham",
    component: SPhamPage,
    exact: false,
  },
];

const routesAdmin = [];

export { routeHome, routesAdmin };
