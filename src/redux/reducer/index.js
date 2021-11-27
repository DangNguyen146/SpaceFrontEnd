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
import userPostCommentReducer from "../../container/HomeTemplate/DetailPage/modules3/reducer";
import viewCommentReducer from "../../container/HomeTemplate/DetailPage/CommentComponent/modules/reducer";
import previewCardReducer from "../../container/HomeTemplate/PageReviewCard/modules/reducer";
import listPreviewReducer from "../../container/HomeTemplate/QuanLyPreview/modules/reducer";
import deletePreviewReducer from "../../container/HomeTemplate/QuanLyPreview/modulesDelete/reducer";
import userContactReducer from "../../container/HomeTemplate/Contact/modules/reducer";
import userChangeReducer from "../../container/HomeTemplate/ManagerUser/modules/reducer";
import userChangePasswordReducer from "../../container/HomeTemplate/ManagerUser/modules/reducer2";
import listLinkReducer from "../../container/HomeTemplate/CreateUserPublic/CreateLinhTinh/LinkUser/modules/reducer";
import profileReducer from "../../container/HomeTemplate/CreateUserPublic/CreateLinhTinh/Appearance/Profile/modules/reducer";
import backgroundReducer from "../../container/HomeTemplate/CreateUserPublic/CreateLinhTinh/Appearance/BackGround/modules/reducer";
import listBackgroundReducer from "../../container/HomeTemplate/CreateUserPublic/CreateLinhTinh/Appearance/BackGround/modulesGetBackGroud/reducer";
import detailOrderReducer from "../../container/HomeTemplate/DonHangDaDat/DetailDonHangDaDat/modules/reducer";
import userPublicReducer from "../../container/HomeTemplate/CreateUserPublic/CreateLinhTinh/modules2/reducer";
import detailUserReducer from "../../container/HomeTemplate/PageViewUser/modules/reducer";
import listLogoCreateCardReducer from "../../container/HomeTemplate/TaoCard/Logo/modules/reducer";
import listBackGroundCreateCardReducer from "../../container/HomeTemplate/TaoCard/Background/modules/reducer";
import listTextCreateCardReducer from "../../container/HomeTemplate/TaoCard/Text/modules/reducer";

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
  userPostCommentReducer,
  viewCommentReducer,
  previewCardReducer,
  listPreviewReducer,
  deletePreviewReducer,
  userContactReducer,
  userChangeReducer,
  userChangePasswordReducer,
  listLinkReducer,
  profileReducer,
  backgroundReducer,
  listBackgroundReducer,
  detailOrderReducer,
  userPublicReducer,
  detailUserReducer,
  listLogoCreateCardReducer,
  listBackGroundCreateCardReducer,
  listTextCreateCardReducer,
});

export default rootReducer;
