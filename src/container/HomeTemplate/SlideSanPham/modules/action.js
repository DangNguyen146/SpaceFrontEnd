import * as ActionType from "./constant";
import Axios from "axios";
import { urlApi } from "../../../../config/api";

export const actLisCardApi = (category_id, page) => {
  let urls = urlApi + "cards/?page=";
  if (page) urls = urlApi + "cards/?page=" + page;
  else urls = urlApi + "cards/?page=1";
  if (category_id) {
    urls = urlApi + "cards/?category_id=" + category_id;
  }
  return (dispatch) => {
    dispatch(actLisCardApiRequest());
    Axios({
      url: urls,
      method: "GET",
    })
      .then((result) => {
        const data = result.data;
        if (data) dispatch(actLisCardApiSuccess(data));
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
