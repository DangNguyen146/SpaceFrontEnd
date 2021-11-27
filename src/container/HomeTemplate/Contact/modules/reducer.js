import {
  USER_CONTACT_REQUEST,
  USER_CONTACT_SUCCESS,
  USER_CONTACT_FAILED,
} from "./constant";

let initialState = {
  loading: false,
  data: null,
  err: null,
};

const userContactReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_CONTACT_REQUEST:
      state.loading = true;
      state.data = null;
      state.err = null;
      return { ...state };

    case USER_CONTACT_SUCCESS:
      state.loading = false;
      state.data = action.payload;
      state.err = null;
      return { ...state };

    case USER_CONTACT_FAILED:
      state.loading = false;
      state.data = null;
      state.err = action.payload;
      return { ...state };

    default:
      return { ...state };
  }
};

export default userContactReducer;
