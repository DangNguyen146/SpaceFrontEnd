import * as ActionType from "./constant";
import Axios from "axios";
import { urlApi } from "../../../../config/api";

export const actDetailCardApi = (id) => {
  return (dispatch) => {
    dispatch(actDetailCardRequest());
    Axios({
      url: urlApi + "cards/" + id + "/",
      method: "GET",
    })
      .then((result) => {
        dispatch(actDetailCardSuccess(result.data));
      })
      .catch((err) => {
        dispatch(actDetailCardFailed(err));
      });
  };
};
export const actViewCardApi = (id) => {
  return (dispatch) => {
    dispatch(actViewCardRequest());
    Axios({
      url: urlApi + "cards/" + id + "/views/",
      method: "GET",
    })
      .then((result) => {
        dispatch(actViewCardSuccess(result.data));
      })
      .catch((err) => {
        dispatch(actViewCardFailed(err));
      });
  };
};

const actDetailCardRequest = () => {
  return {
    type: ActionType.DETAIL_CARD_REQUEST,
  };
};

const actDetailCardSuccess = (data) => {
  return {
    type: ActionType.DETAIL_CARD_SUCCESS,
    payload: data,
  };
};

const actDetailCardFailed = (err) => {
  return {
    type: ActionType.DETAIL_CARD_FAILED,
    payload: err,
  };
};

const actViewCardRequest = () => {
  return {
    type: ActionType.VIEW_CARD_REQUEST,
  };
};

const actViewCardSuccess = (data) => {
  return {
    type: ActionType.VIEW_CARD_SUCCESS,
    payload: data,
  };
};

const actViewCardFailed = (err) => {
  return {
    type: ActionType.VIEW_CARD_FAILED,
    payload: err,
  };
};
