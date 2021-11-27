import { ADD_TEXT, REMOVE_TEXT } from "./constant";

export const TangText = (object) => {
  return {
    type: ADD_TEXT,
    object,
  };
};
export const HuyText = (object) => {
  return {
    type: REMOVE_TEXT,
    object,
  };
};
