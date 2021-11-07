import { combineReducers } from "redux";

import userLoginReducer from "./../../container/HomeTemplate/AccUser/Login/modules/reducer";
import userCreateReducer from "./../../container/HomeTemplate/AccUser/CreateAcc/modules/reducer";
import listCardReducer from "./../../container/HomeTemplate/SlideSanPham/modules/reducer";
import listCategoryReducer from "./../../container/HomeTemplate/CategorySanPham/modulesCategory/reducer";
import detailCardReducer from "./../../container/HomeTemplate/DetailPage/modules/reducer";
import viewCardReducer from "./../../container/HomeTemplate/DetailPage/modules/reducervie";
import searchCardReducer from "./../../container/HomeTemplate/SearchPage/modules/reducer";
import datHangReducer from "../../components/CardItem/Modules/reducer";
import listOrderReducer from "../../container/HomeTemplate/DonHangDaDat/modules/reducer";

const rootReducer = combineReducers({
  userCreateReducer,
  userLoginReducer,
  listCardReducer,
  listCategoryReducer,
  detailCardReducer,
  viewCardReducer,
  searchCardReducer,
  datHangReducer,
  listOrderReducer,
});

export default rootReducer;
