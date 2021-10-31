import * as ActionType from "./constant";

let initialState = {
  loading: false,
  data: null,
  err: null,
};

const listCardReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LIST_CARD_REQUEST:
      state.loading = true;
      state.data = null;
      state.err = null;
      return { ...state };
    case ActionType.LIST_CARD_SUCCESS:
      state.loading = false;
      state.data = action.payload;
      state.err = null;
      return { ...state };
    case ActionType.LIST_CARD_FAILED:
      state.loading = false;
      state.data = null;
      state.err = action.payload;
      return { ...state };

    default:
      return { ...state };
  }
};

export default listCardReducer;
