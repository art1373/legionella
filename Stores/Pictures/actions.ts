import { FETCH_PICTURES, Picture, SET_PICTURES } from "./constants";

export const fetchPictureWithPagination = (
  offset: number | string,
  onSucces?: Function,
  onFailure?: Function
) => {
  return {
    type: FETCH_PICTURES,
    offset,
    onSucces,
    onFailure,
  };
};
export const setPictures = (pictures: Picture[]) => {
  return {
    type: SET_PICTURES,
    pictures,
  };
};
