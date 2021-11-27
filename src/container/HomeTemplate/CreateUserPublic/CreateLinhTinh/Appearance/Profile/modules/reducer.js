const sateDefault = {
  listProfile: [],
};
const profileReducer = (state = sateDefault, action) => {
  switch (action.type) {
    case "ADD_PROFILE": {
      //cập nhật lại state
      state.listProfile = action.profiles;
      return { ...state };
    }
    case "REMOVE_PROFILE": {
      return { ...state };
    }

    default: {
      return { ...state };
    }
  }
};

export default profileReducer;
