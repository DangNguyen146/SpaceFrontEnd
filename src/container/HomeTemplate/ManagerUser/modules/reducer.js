import {
  USER_CHANGE_REQUEST,
  USER_CHANGE_SUCCESS,
  USER_CHANGE_FAILED,
} from "./constant";

let initialState = {
  loading: false,
  data: null,
  err: null,
};

const userChangeReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_CHANGE_REQUEST:
      state.loading = true;
      state.data = null;
      state.err = null;
      return { ...state };

    case USER_CHANGE_SUCCESS:
      state.loading = false;
      state.data = action.payload;
      state.err = null;
      return { ...state };

    case USER_CHANGE_FAILED:
      state.loading = false;
      state.data = null;
      state.err = action.payload;
      return { ...state };

    default:
      return { ...state };
  }
};

export default userChangeReducer;
