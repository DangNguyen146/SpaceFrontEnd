const sateDefault = {
  dangSachTextCreateCard: [],
};
const listTextCreateCardReducer = (state = sateDefault, action) => {
  switch (action.type) {
    case "ADD_TEXT": {
      //cập nhật lại state
      state.dangSachTextCreateCard = action.object;
      return { ...state };
    }
    case "REMOVE_TEXT": {
      return { ...state };
    }

    default: {
      return { ...state };
    }
  }
};

export default listTextCreateCardReducer;
