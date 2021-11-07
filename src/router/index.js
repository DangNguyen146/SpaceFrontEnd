import HomePage from "../container/HomeTemplate/HomePage";
import Login from "../container/HomeTemplate/AccUser/Login";
import CreatAcc from "../container/HomeTemplate/AccUser/CreateAcc";
import SPhamPage from "../container/HomeTemplate/SPhamPage";
import DetailPage from "../container/HomeTemplate/DetailPage";
import SearchPage from "../container/HomeTemplate/SearchPage";
import QuanLiDonHang from "../container/HomeTemplate/QuanLiDonHang";
import DonHangDaDat from "../container/HomeTemplate/DonHangDaDat";
import ManagerUser from "../container/HomeTemplate/ManagerUser";

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
];

const routesAdmin = [];

export { routeHome, routesAdmin };
