import {
  USER_CHANGE_REQUEST,
  USER_CHANGE_SUCCESS,
  USER_CHANGE_FAILED,
} from "./constant";
import Axios from "axios";
import { urlImagApi } from "../../../../config/api";
import { Redirect } from "react-router";

export const fetchPutApi = (user, id) => {
  let access_token = JSON.parse(localStorage.getItem("access_token"));
  return (dispatch) => {
    actPutRequest();
    Axios({
      url: urlImagApi + "/updateusers/" + id + "/",
      method: "PUT",
      headers: {
        Authorization: "Bearer " + access_token,
      },
      data: user,
    })
      .then((result) => {
        dispatch(actPutSuccess(result.data));
        <Redirect
          to={{
            pathname: "/login",
          }}
        />;
      })
      .catch((err) => {
        dispatch(actPutFailed(err));
      });
  };
};

const actPutRequest = () => {
  return {
    type: USER_CHANGE_REQUEST,
  };
};

const actPutSuccess = (data) => {
  return {
    type: USER_CHANGE_SUCCESS,
    payload: data,
  };
};

const actPutFailed = (err) => {
  return {
    type: USER_CHANGE_FAILED,
    payload: err,
  };
};
