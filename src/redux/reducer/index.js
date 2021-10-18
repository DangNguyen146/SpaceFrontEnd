import { combineReducers } from "redux";

import userLoginReducer from "./../../container/HomeTemplate/AccUser/Login/modules/reducer";
import userCreateReducer from "./../../container/HomeTemplate/AccUser/CreateAcc/modules/reducer";

const rootReducer = combineReducers({
  userCreateReducer,
  userLoginReducer,
});

export default rootReducer;
