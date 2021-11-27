const sateDefault = {
  dangSachLogoCreateCard: [],
};
const listLogoCreateCardReducer = (state = sateDefault, action) => {
  switch (action.type) {
    case "ADD_LOGO": {
      //cập nhật lại state
      state.dangSachLogoCreateCard = action.object;
      return { ...state };
    }
    case "REMOVE_LOGO": {
      return { ...state };
    }

    default: {
      return { ...state };
    }
  }
};

export default listLogoCreateCardReducer;
