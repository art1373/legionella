import {LOGIN} from './constants';

export const login = (email: string, password: string) => {
  return {
    type: LOGIN,
    email,
    password,
  };
};
