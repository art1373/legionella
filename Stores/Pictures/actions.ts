import { FETCH_PICTURES, Picture, SET_PICTURES, SET_OFFSET } from "./constants";

export const fetchPictureWithPagination = (
  onSucces?: Function,
  onFailure?: Function
) => {
  return {
    type: FETCH_PICTURES,
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

export const setOffset = (offset: number) => {
  return {
    type: SET_OFFSET,
    offset,
  };
};
