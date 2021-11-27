import { ADD_BACKGROUND, REMOVE_BACKGROUND } from "./constant";

export const AddBackground = (backgrounds) => {
  return {
    type: ADD_BACKGROUND,
    backgrounds,
  };
};
export const RemoveBackground = (backgrounds) => {
  return {
    type: REMOVE_BACKGROUND,
    backgrounds,
  };
};
