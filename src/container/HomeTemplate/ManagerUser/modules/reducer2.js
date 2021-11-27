import {
  USER_CHANGEPASSWORD_REQUEST,
  USER_CHANGEPASSWORD_SUCCESS,
  USER_CHANGEPASSWORD_FAILED,
} from "./constant";

let initialState = {
  loading: false,
  data: null,
  err: null,
};

const userChangePasswordReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_CHANGEPASSWORD_REQUEST:
      state.loading = true;
      state.data = null;
      state.err = null;
      return { ...state };

    case USER_CHANGEPASSWORD_SUCCESS:
      state.loading = false;
      state.data = action.payload;
      state.err = null;
      return { ...state };

    case USER_CHANGEPASSWORD_FAILED:
      state.loading = false;
      state.data = null;
      state.err = action.payload;
      return { ...state };

    default:
      return { ...state };
  }
};

export default userChangePasswordReducer;
