import * as ActionType from "./constant";
import Axios from "axios";
import { urlApi } from "../../../../../config/api";

export const actCommentDetailCardApi = (id) => {
  return (dispatch) => {
    dispatch(actCommentDetailCardRequest());
    Axios({
      url: urlApi + "cards/" + id + "/comment/",
      method: "GET",
    })
      .then((result) => {
        if (result === []) dispatch(actCommentDetailCardSuccess(result));
        else dispatch(actCommentDetailCardSuccess(result.data));
      })
      .catch((err) => {
        dispatch(actCommentDetailCardFailed(err));
      });
  };
};
export const actDeleteCommentApi = (id) => {
  let access_token = JSON.parse(localStorage.getItem("access_token"));
  return () => {
    Axios({
      url: urlApi + "comments/" + id + "/",
      headers: {
        Authorization: "Bearer " + access_token,
      },
      method: "DELETE",
    })
      .then((result) => {})
      .catch((err) => {});
  };
};
export const actPacthCommentApi = (data, id) => {
  let access_token = JSON.parse(localStorage.getItem("access_token"));
  return () => {
    Axios({
      url: urlApi + "comments/" + id + "/",
      headers: {
        Authorization: "Bearer " + access_token,
      },
      data: data,
      method: "PATCH",
    })
      .then((result) => {})
      .catch((err) => {});
  };
};

const actCommentDetailCardRequest = () => {
  return {
    type: ActionType.VIEW_COMMENT_REQUEST,
  };
};

const actCommentDetailCardSuccess = (data) => {
  return {
    type: ActionType.VIEW_COMMENT_SUCCESS,
    payload: data,
  };
};

const actCommentDetailCardFailed = (err) => {
  return {
    type: ActionType.VIEW_COMMENT_FAILED,
    payload: err,
  };
};
