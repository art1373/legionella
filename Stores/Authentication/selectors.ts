import {createSelector} from 'reselect';

export const userIdSelector = createSelector(
  state => state.user.email,
  email => email,
);
