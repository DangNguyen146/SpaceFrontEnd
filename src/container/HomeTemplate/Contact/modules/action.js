import {
  USER_CONTACT_REQUEST,
  USER_CONTACT_SUCCESS,
  USER_CONTACT_FAILED,
} from "./constant";
import Axios from "axios";
import { urlImagApi } from "../../../../config/api";

export const fetchContactApi = (datas) => {
  return (dispatch) => {
    dispatch(actCreateRequest());
    Axios({
      url: urlImagApi + "/contacts/add_contact/",
      method: "POST",
      data: datas,
    })
      .then((result) => {
        dispatch(actCreateSuccess(result.data));
      })
      .catch((err) => {
        dispatch(actCreateFailed(err));
      });
  };
};

const actCreateRequest = () => {
  return {
    type: USER_CONTACT_REQUEST,
  };
};
const actCreateSuccess = (data) => {
  return {
    type: USER_CONTACT_SUCCESS,
    payload: data,
  };
};
const actCreateFailed = (err) => {
  return {
    type: USER_CONTACT_FAILED,
    payload: err,
  };
};
