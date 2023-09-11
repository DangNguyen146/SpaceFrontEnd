import * as ActionType from "./constant";
import Axios from "axios";
import { urlImagApi } from "../../../../../config/api";

export const actCreatePublicUserApi = (datas) => {
  let access_token = JSON.parse(localStorage.getItem("access_token"));
  return (dispatch) => {
    dispatch(actCreatePublicUserApiRequest());
    Axios({
      url: urlImagApi + "/userviews/create_publicuser/",
      headers: {
        "content-type": "multipart/form-data",
        Authorization: "Bearer " + access_token,
      },
      method: "POST",
      data: datas ,
    })
      .then((result) => {
        if (result.data)
          dispatch(actCreatePublicUserApiSuccess(result.data[0]));
      })
      .catch((err) => {
        dispatch(actCreatePublicUserApiFailed(err));
      });
  };
};

const actCreatePublicUserApiRequest = () => {
  return {
    type: ActionType.CREATE_USER_PUBLIC_REQUEST,
  };
};

const actCreatePublicUserApiSuccess = (data) => {
  return {
    type: ActionType.CREATE_USER_PUBLIC_SUCCESS,
    payload: data,
  };
};

const actCreatePublicUserApiFailed = (err) => {
  return {
    type: ActionType.CREATE_USER_PUBLIC_FAILED,
    payload: err,
  };
};
