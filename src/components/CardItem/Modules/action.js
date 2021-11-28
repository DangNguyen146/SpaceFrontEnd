import { DAT_HANG, REMOVE_LIST } from "./constants";

export const DatHangAction = (card) => {
  return {
    type: DAT_HANG,
    card,
  };
};

export const RemoveHangAction = () => {
  return {
    type: REMOVE_LIST,
  };
};
