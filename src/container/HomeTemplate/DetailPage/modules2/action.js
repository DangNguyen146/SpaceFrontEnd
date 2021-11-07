import { DAT_HANG } from "./constants";

export const DatHangAction = (card) => {
  return {
    type: DAT_HANG,
    card,
  };
};
