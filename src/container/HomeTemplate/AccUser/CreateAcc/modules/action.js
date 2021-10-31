import { USER_CREATE_REQUEST, USER_CREATE_FAILED } from "./constant";
import Axios from "axios";
import { urlApi } from "../../../../../config/api";

export const fetchCreateApi = (user, history) => {
  return (dispatch) => {
    dispatch(actCreateRequest());
    Axios({
      url: urlApi + "users/",
      method: "POST",
      data: user,
    })
      .then((result) => {
        if (result) {
          history.push("/");
        }
      })
      .catch((err) => {
        dispatch(actCreateFailed(err));
      });
  };
};

const actCreateRequest = () => {
  return {
    type: USER_CREATE_REQUEST,
  };
};

const actCreateFailed = (err) => {
  return {
    type: USER_CREATE_FAILED,
    payload: err,
  };
};
