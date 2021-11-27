import { ADD_PROFILE, REMOVE_PROFILE } from "./constant";

export const AddProfile = (profiles) => {
  return {
    type: ADD_PROFILE,
    profiles,
  };
};
export const RemoveProfile = (profiles) => {
  return {
    type: REMOVE_PROFILE,
    profiles,
  };
};
