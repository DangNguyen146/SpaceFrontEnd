import * as ActionType from "./constant";
import Axios from "axios";
import { urlImagApi } from "../../../../../config/api";

export const actDetailOrderApi = (id) => {
  let access_token = JSON.parse(localStorage.getItem("access_token"));
  return (dispatch) => {
    dispatch(actDetailOrderApiRequest());
    Axios({
      url: urlImagApi + "/orders/detail_pages/?order_id=" + id,
      headers: {
        Authorization: "Bearer " + access_token,
      },
      method: "GET",
    })
      .then((result) => {
        if (result.data) dispatch(actDetailOrderApiSuccess(result.data[0]));
      })
      .catch((err) => {
        dispatch(actDetailOrderApiFailed(err));
      });
  };
};

const actDetailOrderApiRequest = () => {
  return {
    type: ActionType.DETAIL_ORDER_REQUEST,
  };
};

const actDetailOrderApiSuccess = (data) => {
  return {
    type: ActionType.DETAIL_ORDER_SUCCESS,
    payload: data,
  };
};

const actDetailOrderApiFailed = (err) => {
  return {
    type: ActionType.DETAIL_ORDER_FAILED,
    payload: err,
  };
};
