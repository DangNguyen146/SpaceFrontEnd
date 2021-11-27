import * as ActionType from "./constant";
import Axios from "axios";
import { urlApi } from "../../../../config/api";

export const actDeletePreviewCardApi = (id) => {
  let access_token = JSON.parse(localStorage.getItem("access_token"));
  return (dispatch) => {
    dispatch(actDeletePreviewCardApiRequest());
    Axios({
      url: urlApi + "cardpreviews/" + id + "/",
      headers: {
        Authorization: "Bearer " + access_token,
      },
      method: "DELETE",
    })
      .then((result) => {
        dispatch(actDeletePreviewCardApiSuccess(result.data));
      })
      .catch((err) => {
        dispatch(actDeletePreviewCardApiFailed(err));
      });
  };
};

const actDeletePreviewCardApiRequest = () => {
  return {
    type: ActionType.DELETE_PRIVIEWCARD_REQUEST,
  };
};

const actDeletePreviewCardApiSuccess = (data) => {
  return {
    type: ActionType.DELETE_PRIVIEWCARD_SUCCESS,
    payload: data,
  };
};

const actDeletePreviewCardApiFailed = (err) => {
  return {
    type: ActionType.DELETE_PRIVIEWCARD_FAILED,
    payload: err,
  };
};
