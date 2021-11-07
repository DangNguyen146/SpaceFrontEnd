import * as ActionType from "./constant";
import Axios from "axios";
import { urlApi } from "../../../../config/api";

export const actOrderApi = () => {
  let access_token = JSON.parse(localStorage.getItem("access_token"));
  return (dispatch) => {
    dispatch(actOrderApiRequest());
    Axios({
      url: urlApi + "orders/views/",
      headers: {
        Authorization: "Bearer " + access_token,
      },
      method: "GET",
    })
      .then((result) => {
        if (result.data) dispatch(actOrderApiSuccess(result.data));
      })
      .catch((err) => {
        dispatch(actOrderApiFailed(err));
      });
  };
};

const actOrderApiRequest = () => {
  return {
    type: ActionType.LIST_ORDER_REQUEST,
  };
};

const actOrderApiSuccess = (data) => {
  return {
    type: ActionType.LIST_ORDER_SUCCESS,
    payload: data,
  };
};

const actOrderApiFailed = (err) => {
  return {
    type: ActionType.LIST_ORDER_FAILED,
    payload: err,
  };
};
