import * as ActionType from "./constant";
import Axios from "axios";
import { urlApi } from "../../../../config/api";

export const actLisPreviewCardApi = () => {
  let access_token = JSON.parse(localStorage.getItem("access_token"));
  return (dispatch) => {
    dispatch(actLisPreviewCardApiRequest());
    Axios({
      url: urlApi + "cardpreviews/views/",
      headers: {
        Authorization: "Bearer " + access_token,
      },
      method: "GET",
    })
      .then((result) => {
        dispatch(actLisPreviewCardApiSuccess(result.data));
      })
      .catch((err) => {
        dispatch(actLisPreviewCardApiFailed(err));
      });
  };
};

const actLisPreviewCardApiRequest = () => {
  return {
    type: ActionType.LIST_PRIVIEWCARD_REQUEST,
  };
};

const actLisPreviewCardApiSuccess = (data) => {
  return {
    type: ActionType.LIST_PRIVIEWCARD_SUCCESS,
    payload: data,
  };
};

const actLisPreviewCardApiFailed = (err) => {
  return {
    type: ActionType.LIST_PRIVIEWCARD_FAILED,
    payload: err,
  };
};
