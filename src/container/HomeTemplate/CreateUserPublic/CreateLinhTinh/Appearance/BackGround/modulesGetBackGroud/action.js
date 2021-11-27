import * as ActionType from "./constant";
import Axios from "axios";
import { urlApi } from "../../../../../../../config/api";

export const actLisBackgroundApi = (page) => {
  return (dispatch) => {
    dispatch(actLisBackgroundApiRequest());
    Axios({
      url: urlApi + "backgrounds/?page=1",
      method: "GET",
    })
      .then((result) => {
        const data = result.data;
        if (data) dispatch(actLisBackgroundApiSuccess(data.results));
      })
      .catch((err) => {
        dispatch(actLisBackgroundApiFailed(err));
      });
  };
};

const actLisBackgroundApiRequest = () => {
  return {
    type: ActionType.LIST_BACKGROUND_REQUEST,
  };
};

const actLisBackgroundApiSuccess = (data) => {
  return {
    type: ActionType.LIST_BACKGROUND_SUCCESS,
    payload: data,
  };
};

const actLisBackgroundApiFailed = (err) => {
  return {
    type: ActionType.LIST_BACKGROUND_FAILED,
    payload: err,
  };
};
