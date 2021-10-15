import {initialState, LOGIN} from './constants';
import update from 'immutability-helper';

export const authReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case LOGIN:
      return update(state, {
        email: {
          $set: action.email,
        },
      });
  }
  return state;
};
