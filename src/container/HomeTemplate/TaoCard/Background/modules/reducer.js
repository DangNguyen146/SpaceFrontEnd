const sateDefault = {
  dangSachBackGroundCreateCard: [],
};
const listBackGroundCreateCardReducer = (state = sateDefault, action) => {
  switch (action.type) {
    case "ADD_BACKGROUND": {
      //cập nhật lại state
      state.dangSachBackGroundCreateCard = action.object;
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

export default listBackGroundCreateCardReducer;
