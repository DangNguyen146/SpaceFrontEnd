import * as ActionType from "./constant";
import Axios from "axios";
import { urlApi } from "../../../../config/api";

export const fetchPostCommentApi = (data, id_card) => {
  let access_token = JSON.parse(localStorage.getItem("access_token"));
  return (dispatch) => {
    actCommentRequest();
    Axios({
      url: urlApi + "cards/" + id_card + "/add-comment/",
      method: "POST",
      headers: {
        Authorization: "Bearer " + access_token,
      },
      data: data,
    })
      .then((result) => {
        const data = result.data;
        if (data) {
          console.log(data);
          dispatch(actCommentSuccess(data));
        }
      })
      .catch((err) => {
        dispatch(actCommentFailed(err));
      });
  };
};

const actCommentRequest = () => {
  return {
    type: ActionType.USER_POST_COMMENT_REQUEST,
  };
};

const actCommentSuccess = (data) => {
  return {
    type: ActionType.USER_POST_COMMENT_SUCCESS,
    payload: data,
  };
};

const actCommentFailed = (err) => {
  return {
    type: ActionType.USER_POST_COMMENT_FAILED,
    payload: err,
  };
};
