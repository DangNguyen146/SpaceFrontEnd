import * as ActionType from "./constant";
import Axios from "axios";
import { urlApi } from "../../../../config/api";

export const actDetailUserApi = (username) => {
  return (dispatch) => {
    dispatch(actDetailUserRequest());
    Axios({
      url: urlApi + "userviews/views/?q=" + username,
      method: "GET",
    })
      .then((result) => {
        dispatch(actDetailUserSuccess(result.data));
      })
      .catch((err) => {
        dispatch(actDetailUserFailed(err));
      });
  };
};

const actDetailUserRequest = () => {
  return {
    type: ActionType.DETAIL_USER_REQUEST,
  };
};

const actDetailUserSuccess = (data) => {
  return {
    type: ActionType.DETAIL_USER_SUCCESS,
    payload: data,
  };
};

const actDetailUserFailed = (err) => {
  return {
    type: ActionType.DETAIL_USER_FAILED,
    payload: err,
  };
};
