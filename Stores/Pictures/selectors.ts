import {createSelector} from 'reselect';
import {Picture} from './constants';

export const getPictures = createSelector(
  (state: any) => state.pictures.pictures,
  (pictures: Picture[]) => pictures,
);
