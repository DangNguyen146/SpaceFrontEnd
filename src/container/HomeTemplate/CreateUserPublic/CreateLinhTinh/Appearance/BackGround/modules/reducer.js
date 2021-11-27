const sateDefault = {
  listBackGround: [],
};
const backgroundReducer = (state = sateDefault, action) => {
  switch (action.type) {
    case "ADD_BACKGROUND": {
      state.listBackGround = action.backgrounds;
      return { ...state };
    }
    case "REMOVE_BACKGROUND": {
      return { ...state };
    }

    default: {
      return { ...state };
    }
  }
};

export default backgroundReducer;
