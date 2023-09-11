import {
  USER_CHANGEPASSWORD_REQUEST,
  USER_CHANGEPASSWORD_SUCCESS,
  USER_CHANGEPASSWORD_FAILED,
} from "./constant";
import Axios from "axios";
import { urlImagApi } from "../../../../config/api";
import { Redirect } from "react-router";

export const fetchPutPasswordApi = (user, id) => {
  let access_token = JSON.parse(localStorage.getItem("access_token"));
  return (dispatch) => {
    actPutPasswordRequest();
    Axios({
      url: urlImagApi + "/changepasswords/" + id + "/",
      method: "PUT",
      headers: {
        Authorization: "Bearer " + access_token,
      },
      data: user,
    })
      .then((result) => {
        dispatch(actPutPasswordSuccess(result.data));
        <Redirect
          to={{
            pathname: "/login",
          }}
        />;
      })
      .catch((err) => {
        dispatch(actPutPasswordFailed(err));
      });
  };
};

const actPutPasswordRequest = () => {
  return {
    type: USER_CHANGEPASSWORD_REQUEST,
  };
};

const actPutPasswordSuccess = (data) => {
  return {
    type: USER_CHANGEPASSWORD_SUCCESS,
    payload: data,
  };
};

const actPutPasswordFailed = (err) => {
  return {
    type: USER_CHANGEPASSWORD_FAILED,
    payload: err,
  };
};
