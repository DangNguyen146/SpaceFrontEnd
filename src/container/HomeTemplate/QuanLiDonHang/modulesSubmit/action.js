import * as ActionType from "../../DonHangDaDat/modules/constant";
import Axios from "axios";
import { urlImagApi } from "../../../../config/api";

export const actOrderApi = (data, histoty) => {
  let access_token = JSON.parse(localStorage.getItem("access_token"));
  return (dispatch) => {
    dispatch(actOrderApiRequest());
    Axios({
      url: urlImagApi + "/orders/add_order/",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + access_token,
      },
      method: "POST",
      data,
    })
      .then((result) => {
        if (result.data) dispatch(actOrderApiSuccess(result.data));
        histoty.push("/donhangdadat");
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
