const sateDefault = {
  dangSachCardDangDat: [],
};
const datHangReducer = (state = sateDefault, action) => {
  switch (action.type) {
    case "DAT_HANG": {
      let dangSachHangUpDate = [...state.dangSachCardDangDat];
      let index = dangSachHangUpDate.findIndex(
        (card) => card.id === action.card.id
      );
      if (index !== -1) {
        state.dangSachCardDangDat[index].soLuong++;
      } else {
        dangSachHangUpDate.push(action.card);
      }
      //cập nhật lại state
      state.dangSachCardDangDat = dangSachHangUpDate;
      return { ...state };
    }
    case "GIAM_VAN": {
      let dangSachHangUpDate = [...state.dangSachCardDangDat];
      let index = dangSachHangUpDate.findIndex(
        (card) => card.id === action.card.id
      );
      if (index !== -1) {
        state.dangSachCardDangDat[index].soLuong--;
        if (state.dangSachCardDangDat[index].soLuong == 0)
          dangSachHangUpDate.splice(index, 1);
      }
      //cập nhật lại state
      state.dangSachCardDangDat = dangSachHangUpDate;
      return { ...state };
    }
    case "HUY_HANG": {
      let dangSachHangUpDate = [...state.dangSachCardDangDat];
      let index = dangSachHangUpDate.findIndex(
        (card) => card.id === action.card.id
      );
      if (index !== -1) {
        dangSachHangUpDate.splice(index, 1);
      }
      //cập nhật lại state
      state.dangSachCardDangDat = dangSachHangUpDate;
      return { ...state };
    }
    default: {
      return { ...state };
    }
  }
};
export default datHangReducer;
