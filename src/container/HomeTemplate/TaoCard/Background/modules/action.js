import { ADD_BACKGROUND, REMOVE_BACKGROUND } from "./constant";

export const TangBackGround = (object) => {
  return {
    type: ADD_BACKGROUND,
    object,
  };
};
export const HuyBackGround = (object) => {
  return {
    type: REMOVE_BACKGROUND,
    object,
  };
};
