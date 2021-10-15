import {initialState, SET_PICTURES} from './constants';
import update from 'immutability-helper';

export const picturesReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SET_PICTURES:
      return update(state, {
        pictures: {$push: action.pictures},
      });
  }
  return state;
};
