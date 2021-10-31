import { combineReducers } from "redux";

import userLoginReducer from "./../../container/HomeTemplate/AccUser/Login/modules/reducer";
import userCreateReducer from "./../../container/HomeTemplate/AccUser/CreateAcc/modules/reducer";
import listCardReducer from "./../../container/HomeTemplate/SlideSanPham/modules/reducer";
import listCategoryReducer from "./../../container/HomeTemplate/CategorySanPham/modulesCategory/reducer";

const rootReducer = combineReducers({
  userCreateReducer,
  userLoginReducer,
  listCardReducer,
  listCategoryReducer,
});

export default rootReducer;
