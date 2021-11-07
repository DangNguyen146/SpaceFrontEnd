import { DAT_HANG, GIAM_VAN, HUY_HANG } from "./constants";

export const DatHangAction = (card) => {
  return {
    type: DAT_HANG,
    card,
  };
};
export const GiamSoLuong = (card) => {
  return {
    type: GIAM_VAN,
    card,
  };
};
export const TangSoLuong = (card) => {
  return {
    type: DAT_HANG,
    card,
  };
};
export const HuySanPham = (card) => {
  return {
    type: HUY_HANG,
    card,
  };
};
