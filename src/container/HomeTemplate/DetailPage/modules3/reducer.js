import * as ActionType from "./constant";

let initialState = {
  loading: false,
  data: null,
  err: null,
};

const userPostCommentReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.USER_POST_COMMENT_REQUEST:
      state.loading = true;
      state.data = null;
      state.err = null;
      return { ...state };

    case ActionType.USER_POST_COMMENT_SUCCESS:
      state.loading = false;
      state.data = action.payload;
      state.err = null;
      return { ...state };

    case ActionType.USER_POST_COMMENT_FAILED:
      state.loading = false;
      state.data = null;
      state.err = action.payload;
      return { ...state };

    default:
      return { ...state };
  }
};

export default userPostCommentReducer;
