import * as ActionType from "./constant";
import Axios from "axios";
import { urlImagApi } from "../../../../config/api";

export const actSearchCardApi = (param) => {
  return (dispatch) => {
    dispatch(actSearchCardRequest());
    Axios({
      url: urlImagApi + "/cards/?q=" + param,
      method: "GET",
    })
      .then((result) => {
        dispatch(actSearchCardSuccess(result.data));
      })
      .catch((err) => {
        dispatch(actSearchCardFailed(err));
      });
  };
};

const actSearchCardRequest = () => {
  return {
    type: ActionType.SEARCH_CARD_REQUEST,
  };
};

const actSearchCardSuccess = (data) => {
  return {
    type: ActionType.SEARCH_CARD_SUCCESS,
    payload: data,
  };
};

const actSearchCardFailed = (err) => {
  return {
    type: ActionType.SEARCH_CARD_FAILED,
    payload: err,
  };
};
