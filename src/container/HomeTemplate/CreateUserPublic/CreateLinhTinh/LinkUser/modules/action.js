import { ADD_LINK, REMOVE_LINK, REPLACE_LINK } from "./constant";

export const TangLinks = (links) => {
  return {
    type: ADD_LINK,
    links,
  };
};
export const HuyLinks = (links) => {
  return {
    type: REMOVE_LINK,
    links,
  };
};
export const ThayDoiThuTu = (obj) => {
  return {
    type: REPLACE_LINK,
    obj,
  };
};