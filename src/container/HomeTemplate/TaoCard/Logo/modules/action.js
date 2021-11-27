import { ADD_LOGO, REMOVE_LOGO } from "./constant";

export const TangLogo = (object) => {
  return {
    type: ADD_LOGO,
    object,
  };
};
export const HuyLogo = (object) => {
  return {
    type: REMOVE_LOGO,
    object,
  };
};
