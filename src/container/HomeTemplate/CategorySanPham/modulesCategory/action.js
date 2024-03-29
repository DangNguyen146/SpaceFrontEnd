import * as ActionType from "./constant";
import Axios from "axios";
import { urlImagApi } from "../../../../config/api";

export const actLisCategoryApi = (category_id) => {
  return (dispatch) => {
    dispatch(actLisCategoryApiRequest());
    Axios({
      url: urlImagApi + "/categories/",
      method: "GET",
    })
      .then((result) => {
        const data = result;
        if (data) dispatch(actLisCategoryApiSuccess(result.data));
      })
      .catch((err) => {
        dispatch(actLisCategoryApiFailed(err));
      });
  };
};

const actLisCategoryApiRequest = () => {
  return {
    type: ActionType.LIST_CATEGORY_REQUEST,
  };
};

const actLisCategoryApiSuccess = (data) => {
  return {
    type: ActionType.LIST_CATEGORY_SUCCESS,
    payload: data,
  };
};

const actLisCategoryApiFailed = (err) => {
  return {
    type: ActionType.LIST_CATEGORY_FAILED,
    payload: err,
  };
};
