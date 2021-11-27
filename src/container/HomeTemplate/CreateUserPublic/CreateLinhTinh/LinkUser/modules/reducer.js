const sateDefault = {
  dangSachLink: [],
};
const listLinkReducer = (state = sateDefault, action) => {
  switch (action.type) {
    case "ADD_LINK": {
      let dangLinkUpDate = [...state.dangSachLink];
      dangLinkUpDate.push(action.links);
      //cập nhật lại state
      state.dangSachLink = dangLinkUpDate;
      return { ...state };
    }
    case "REMOVE_LINK": {
      let dangLinkUpDate = [...state.dangSachLink];
      let index = dangLinkUpDate.findIndex(
        (links) => links.tittle === action.links.tittle
      );
      if (index !== -1) {
        dangLinkUpDate.splice(index, 1);
      }
      //cập nhật lại state
      state.dangSachLink = dangLinkUpDate;
      return { ...state };
    }
    case "REPLACE_LINK": {
      let dangLinkUpDate = [];
      dangLinkUpDate = action.obj;
      //cập nhật lại state
      state.dangSachLink = dangLinkUpDate;
      return { ...state };
    }

    default: {
      return { ...state };
    }
  }
};

export default listLinkReducer;
