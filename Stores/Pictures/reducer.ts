import { initialState, SET_OFFSET, SET_PICTURES } from "./constants";
import update from "immutability-helper";

export const picturesReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SET_OFFSET:
      return update(state, {
        offset: { $set: action.offset },
      });

    case SET_PICTURES:
      return update(state, {
        pictures: { $push: action.pictures },
      });

    default:
      return state;
  }
};
