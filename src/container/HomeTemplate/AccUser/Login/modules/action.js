import {
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAILED,
} from "./constant";
import Axios from "axios";
import { urlApi } from "../../../../../config/api";

export const fetchLoginApi = (user, history) => {
  return (dispatch) => {
    actLoginRequest();
    Axios({
      url: urlApi + "o/token/",
      method: "POST",
      data: user,
    })
      .then((result) => {
        const data = result.data;
        if (data) {
          localStorage.setItem(
            "access_token",
            JSON.stringify(data.access_token)
          );
          Axios.get(urlApi + "users/current-user/", {
            headers: {
              Authorization: "Bearer " + data.access_token,
            },
          })
            .then((res) => {
              localStorage.setItem("userKH", JSON.stringify(res.data));
              dispatch(actLoginSuccess(res.data));
              history.push("/");
            })
            .catch((error) => console.log(error));
        } else {
          return Promise.reject({
            response: { data: "Lỗi" },
          });
        }
      })
      .catch((err) => {
        dispatch(actLoginFailed(err));
      });
  };
};

const actLoginRequest = () => {
  return {
    type: USER_LOGIN_REQUEST,
  };
};

const actLoginSuccess = (data) => {
  return {
    type: USER_LOGIN_SUCCESS,
    payload: data,
  };
};

const actLoginFailed = (err) => {
  return {
    type: USER_LOGIN_FAILED,
    payload: err,
  };
};
