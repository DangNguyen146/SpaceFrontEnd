import * as ActionType from "./constant";
import Axios from "axios";
import { urlApi } from "../../../../config/api";

export const actLisCardApi = () => {
  return (dispatch) => {
    dispatch(actLisCardApiRequest());
    Axios({
      url: urlApi + "cards/?page=1",
      method: "GET",
    })
      .then((result) => {
        const data = result.data.results;
        if (data) dispatch(actLisCardApiSuccess(result.data.results));
      })
      .catch((err) => {
        dispatch(actLisCardApiFailed(err));
      });
  };
};

const actLisCardApiRequest = () => {
  return {
    type: ActionType.LIST_CARD_REQUEST,
  };
};

const actLisCardApiSuccess = (data) => {
  return {
    type: ActionType.LIST_CARD_SUCCESS,
    payload: data,
  };
};

const actLisCardApiFailed = (err) => {
  return {
    type: ActionType.LIST_CARD_FAILED,
    payload: err,
  };
};
