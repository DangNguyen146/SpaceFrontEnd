import * as ActionType from "./constant";
import Axios from "axios";
import { urlApi } from "../../../../config/api";

export const actPreviewCardApi = (id, data) => {
  let access_token = JSON.parse(localStorage.getItem("access_token"));
  return (dispatch) => {
    dispatch(actPreviewCardRequest());
    Axios({
      url: urlApi + "cards/" + id + "/preview_card/",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + access_token,
      },
      method: "POST",
      data,
    })
      .then((result) => {
        dispatch(actPreviewCardSuccess(result.data));
      })
      .catch((err) => {
        dispatch(actPreviewCardFailed(err));
      });
  };
};

const actPreviewCardRequest = () => {
  return {
    type: ActionType.PREVIEW_CARD_REQUEST,
  };
};

const actPreviewCardSuccess = (data) => {
  return {
    type: ActionType.PREVIEW_CARD_SUCCESS,
    payload: data,
  };
};

const actPreviewCardFailed = (err) => {
  return {
    type: ActionType.PREVIEW_CARD_FAILED,
    payload: err,
  };
};
