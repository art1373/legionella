import { createSelector } from "reselect";
import { Picture } from "./constants";
import sortBy from "lodash/sortBy";

export const getPictures = createSelector(
  (state: any) => state.pictures.pictures,
  (pictures: Picture[]) => pictures
);

export const getOffset = createSelector(
  (state: any) => state.pictures.offset,
  (offset: number) => offset
);

export const getPicturesWithSelectedId = (id: string) =>
  createSelector(getPictures, (pictures: Picture[]) => {
    return sortBy(pictures, (pic) => (pic.id === id ? 0 : 1));
  });
