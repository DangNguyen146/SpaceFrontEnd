import * as ActionType from "./constant";

let initialState = {
  loading: false,
  data: null,
  err: null,
};

const userPublicReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CREATE_USER_PUBLIC_REQUEST:
      state.loading = true;
      state.data = null;
      state.err = null;
      return { ...state };
    case ActionType.CREATE_USER_PUBLIC_SUCCESS:
      state.loading = false;
      state.data = action.payload;
      state.err = null;
      return { ...state };
    case ActionType.CREATE_USER_PUBLIC_FAILED:
      state.loading = false;
      state.data = null;
      state.err = action.payload;
      return { ...state };

    default:
      return { ...state };
  }
};

export default userPublicReducer;
