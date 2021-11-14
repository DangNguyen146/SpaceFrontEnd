import HomePage from "../container/HomeTemplate/HomePage";
import Login from "../container/HomeTemplate/AccUser/Login";
import CreatAcc from "../container/HomeTemplate/AccUser/CreateAcc";
import SPhamPage from "../container/HomeTemplate/SPhamPage";
import DetailPage from "../container/HomeTemplate/DetailPage";
import SearchPage from "../container/HomeTemplate/SearchPage";
import QuanLiDonHang from "../container/HomeTemplate/QuanLiDonHang";
import DonHangDaDat from "../container/HomeTemplate/DonHangDaDat";
import ManagerUser from "../container/HomeTemplate/ManagerUser";
import CreateUserPublic from "../container/HomeTemplate/CreateUserPublic";
import PageViewUser from "../container/HomeTemplate/PageViewUser";
import TaoCard from "../container/HomeTemplate/TaoCard";

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
  {
    path: "/detail/:id",
    component: DetailPage,
    exact: false,
  },
  {
    path: "/search/:pagram",
    component: SearchPage,
    exact: false,
  },
  {
    path: "/quanlidonhang",
    component: QuanLiDonHang,
    exact: false,
  },
  {
    path: "/donhangdadat",
    component: DonHangDaDat,
    exact: false,
  },
  {
    path: "/quanlytaikhoan",
    component: ManagerUser,
    exact: false,
  },
  {
    path: "/createuserpublic",
    component: CreateUserPublic,
    exact: false,
  },
  {
    path: "/view/:username",
    component: PageViewUser,
    exact: false,
  },
  {
    path: "/taocard",
    component: TaoCard,
    exact: false,
  },
];

const routesAdmin = [];

export { routeHome, routesAdmin };
